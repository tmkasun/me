---
summary: "WSO2 API Manager , How to add new claim to JWT token from request headers"
title: "WSO2 API Manager: Adding new claims on the fly"
date: "2019-01-11"
draft: true
---

<h3>Why would you need to send a JWT token to your backend
Let's take an example for this...</h3>
<img src="https://user-images.githubusercontent.com/3313885/45546561-4a10db00-b83b-11e8-9dba-638de4cf6e0d.png" alt="Bob" width="300" />

This is Bob. He is a loyal customer of XBank. and XBank has a mobile app which can be used to send various banking requests to the bank, for example, Request a new credit card, request a new Cheque book, Request a printed bank statement by post etc..., All Bob has to do is, login to his mobile app, and goto Requests section and select the request type and send the request(Yes some request types need additional inputs but let's keep them away for the simplicity).
![jwt senario_1](https://user-images.githubusercontent.com/3313885/45545321-935f2b80-b837-11e8-9ff8-a3476a86c676.png)

So Bob's request triggers an API call which flows through WSO2 API Manager to the XBanks backend servers. Now how do XBank services know who is making the request?

![jwt senario](https://user-images.githubusercontent.com/3313885/45545916-4aa87200-b839-11e8-9315-5757fc36265d.png)

That is where the JWT Tokens comes into play, When Bob making the Request, the API call initiated from his phone send the API request along with the Bob's OAuth Access token in the request's Authorization header, While this token is used to authenticate the user, The user information associated with the access token (To whom it belongs to) can be collected at the Key Manager component. If you have enabled JWT Generation in the key manager component this user and application information will be sent via a JWT token to the backend. In the XBank case, They have enabled it in their WSO2 API Manager deployment. So when the API request is pass to XBank's banking service endpoints, they get the requested users information stored in a JWT token.
In summary, the JWT token can be used for:

- Additional authorization
- To send user details in a secure way
  <h3>The default behavior of JWT generation in WSO2 API Manager</h3>
  In vanilla WSO2 API Manager 2.5 server, Users can enable the JWT token generation by setting the `EnableJWTGeneration` configurations to `true` in `/repository/conf/api-manager.xml` file (Documentation: [Passing Enduser Attributes to the Backend Using JWT](https://docs.wso2.com/display/AM250/Passing+Enduser+Attributes+to+the+Backend+Using+JWT)). When it is enabled, WSO2 API Manager gateway will send a JWT Token in the request header with the name `X-JWT-Assertion` (the name given in the above configuration) which contains user claims associated with the user who is invoking the API (user is lookup by the access token). Following is a sample JWT Token which is sent via the request from the gateway to the actual API backend endpoint.

```javascript
{
'exp': 1536829819,
'http://wso2.org/claims/apicontext': '/sample/1.1.1',
'http://wso2.org/claims/applicationid': '1',
'http://wso2.org/claims/applicationname': 'DefaultApplication',
'http://wso2.org/claims/applicationtier': 'Unlimited',
'http://wso2.org/claims/enduser': 'admin@carbon.super',
'http://wso2.org/claims/enduserTenantId': '-1234',
'http://wso2.org/claims/keytype': 'PRODUCTION',
'http://wso2.org/claims/subscriber': 'admin',
'http://wso2.org/claims/tier': 'Unlimited',
'http://wso2.org/claims/usertype': 'APPLICATION',
'http://wso2.org/claims/version': '1.1.1',
'iss': 'wso2.org/products/am',
}
```

The API Manager gateway receive this JWT token in response to the key validation request made for the API request access token validation process, if the `EnableJWTGeneration` configuration is enabled in the api-manager.xml file in the key manager node(If API Manager running in a distributed setup or configured WSO2 Identity Server as the Key Manager).
The JWT Token is generated by the key manager and signed by its private key and sends it to the gateway to add it to the HTTP request header if the access token is valid and forwarding the API request to the backend. The only work done by the Gateway adds the JWT token received from the key-validation response to the `X-JWT-Assertion` HTTP header. And of course, there are multiple levels of caches to reduce the latency in key manager and gateway nodes.

<h3>Why would you need to change the default JWT token to be sent to your endpoint</h3>
1. To include a custom claim which is not added in the default implementation
2. To include an external attribute to the JWT token. i.e:
* A value which comes with the API invocation
* A value which needs to be obtained from an external service
<p>1. Extendability of the default behavior which is generating the JWT at the Key Manager</h3>
The above default behavior of sending the JWT token can be extended to add additional attributed to the generated JWT token in the key manager, by extending the abstract implementation of [AbstractJWTGenerator](https://github.com/wso2/carbon-apimgt/blob/v6.3.95/components/apimgt/org.wso2.carbon.apimgt.keymgt/src/main/java/org/wso2/carbon/apimgt/keymgt/token/AbstractJWTGenerator.java) class, This ([JWTGenerator](https://github.com/wso2/carbon-apimgt/blob/v6.3.95/components/apimgt/org.wso2.carbon.apimgt.keymgt/src/main/java/org/wso2/carbon/apimgt/keymgt/token/JWTGenerator.java)) is the default JWT generator class comes with the API Manager 2.5 server, More on customizing the JWT generator and adding new claims(attributes) to the JWT generated by the key manager component can be found in the following documentation [Customizing the JWT generation](https://docs.wso2.com/display/AM250/Passing+Enduser+Attributes+to+the+Backend+Using+JWT#PassingEnduserAttributestotheBackendUsingJWT-CustomizingtheJWTgeneration)
<h3>Limitation in the default method</h3>
The above documented JWT extension method is for extending the JWT generation process inside the key manager component, in other words, you can give custom claims at the time of JWT token generation (By overriding `populateCustomClaims` &amp; `populateStandardClaims` methods), But once the JWT is generated and signed by the key manager's private key, It is not possible to modify the claims in the generated JWT token.

Another limitation is, From the gateway component, you can't pass a custom/dynamic value to the JWT generation process to include it as an attribute in the JWT token return back to the gateway. (From gateway to key manager component key validation request is a SOAP request, hence you would need to modify the stub to accommodate custom values to be passed through, that is a PITA :tired_face: )

So comes the handler method...

<h3>2. Generating the JWT at the Gateway</h3>
<h3>What are WSO2 API Manager gateway Handlers?</h3>
![Message Flow in the API Manager Gateway](https://docs.wso2.com/download/attachments/92519845/APIM%20Flow%20-%20Page%201%20%281%29.png?version=1&amp;modificationDate=1513076659000&amp;api=v2)

Handlers (Documentation [The Handlers](https://docs.wso2.com/display/AM250/Message+Flow+in+the+API+Manager+Gateway#MessageFlowintheAPIManagerGateway-Thehandlers)) can intercept the request and response going through the API Gateway, By default, every API created in the API manager deploys with a set of defaults handlers (APIAuthenticationHandler, CORSRequestHandler etc ...). Each handler is executed in the order they are applied in the API synapse file (Located in /repository/deployment/server/synapse-configs/default/api folder), The above discussed JWT token header (`X-JWT-Assertion`) also added to the outgoing request by a gateway handler , more specifically by the **APIAuthenticationHandler**, So if you add a handler after below handler element

```xml

```

you could get the (`X-JWT-Assertion`) HTTP header from the messageContext parameter passed to the handler class `handleRequest` method. So that is what we are doing in [org.wso2.carbon.custom.jwt.handler.AlterJWTHandler](https://github.com/tmkasun/wso2_APIM_JWT_Injector) handler.

<h3>Sample</h3>
[![Sample Scenario Request Flow](https://user-images.githubusercontent.com/3313885/45542340-365f7780-b82f-11e8-8c2e-08a8842e3869.png)](https://user-images.githubusercontent.com/3313885/45542340-365f7780-b82f-11e8-8c2e-08a8842e3869.png)
API Request flow of the sample discussed below
***

In this sample, We will send a custom HTTP header in the API request and include that header name:value pair in the JWT token as claim attribute and value, which is sent out to the API backend endpoint.

<h3>Adding dynamic claims to JWT based on incoming API request headers</h3>
In the [AlterJWTHandler.java](https://github.com/tmkasun/wso2_APIM_JWT_Injector/blob/master/org.wso2.carbon.custom.jwt.handler/src/main/java/org/wso2/carbon/custom/jwt/handler/AlterJWTHandler.java) custom API gateway handler implementation , we are take the JWT token issued by the key manager(As discussed above, you have to enable `EnableJWTGeneration` in api-manager.xml to get this JWT token into custom handler) and read it's claims and add the value coming from the API request header then finally re-sign the JWT token using the gateway's private key. Then the `X-JWT-Assertion` header is overridden by the newly signed JWT from the gateway. and send to the API backend.
<h3>How to try out the handler</h3>
Note: [This custom handler](https://github.com/tmkasun/wso2_APIM_JWT_Injector/tree/master/org.wso2.carbon.custom.jwt.handler) is built to work with WSO2 API Manager 2.5.0,

1. Build `org.wso2.carbon.custom.jwt.handler` maven project.
2. [Download](https://wso2.com/api-management/install/) the WSO2 API Manager 2.5.0

- If you are new to the APIM product you may follow the [Installation Guide](https://docs.wso2.com/display/AM250/Installation+Guide)

2. Put the jar file into extracted/installed `/repository/components/dropins/`
   x. Run the sample echo microservice available in [this repository](https://github.com/tmkasun/wso2_APIM_JWT_Injector/tree/master/microService)

- Start the `microService` by running `./echo_microservice.py`
- note: You need to have Python 3.5+ to run the service
- Echo service will startup in port 8008
- This service will simply return the incoming request parameters (Headers, Body) and dump the JWT claims if there is any in `X-JWT-Assertion` header

3. Start the WSO2 API Manager 2.5 and create an API , Put the production endpoint URL as `http://localhost:8008/api` assume that `microService` is running in the localhost
4. Goto API Manager 2.5 Store, Subscribe the newly created API to an application and generate keys
5. Add the following handler element to API synapse file in
   &gt; /repository/deployment/server/synapse-configs/default/api/

```xml

```

add the above line just after the

```xml

```

line

6. Start the WSO2 API Manager 2.5 server
7. Try out the following `http` or `curl` command

```bash
http --verify=no "https://localhost:8243/sample/1.1.1/allep" "accept: application/json" "Authorization: Bearer 7bf6fe85-b61f-30f2-85d7-de535785b96b" "x-myKey: gFqxSTuvRdIuhMr8pO57Vcz0OMAa"
```

```bash
curl -vk "https://localhost:8243/sample/1.1.1/allep" -H "accept: application/json" -H "Authorization: Bearer 7bf6fe85-b61f-30f2-85d7-de535785b96b" -H "x-myKey: gFqxSTuvRdIuhMr8pO57Vcz0OMAa"
```

9. `x-myKey` is the custom header given in the API request and this header and its value will be available in the JWT token receive to the Echo MicroService
10. Look for the JWT payload dump in the terminal
    <h2>Console log from Echo Micro Service</h2>
    ![echo_out](https://user-images.githubusercontent.com/3313885/45425477-1c9b2480-b6b7-11e8-90b6-ec186989634e.png)
    <h2>Response from Echo Micro Service</h2>
    ![echo_response](https://user-images.githubusercontent.com/3313885/45425478-1c9b2480-b6b7-11e8-8131-5b6047e018e6.png)
    <h2>WSO2 APIM Console log from AlterJWTHandler</h2>
    ![mediator_out](https://user-images.githubusercontent.com/3313885/45425479-1c9b2480-b6b7-11e8-907d-5496c621280a.png)
    <h3>Things to be aware of</h3>
    <h2>Why put header value to JWT claims set?</h2>
    Manipulating the JWT token issued by the key manager, in the gateway component is not a good practice since the original claims were retrieved by the key manager. But because we can't send any custom value to be included in the JWT, we add the customs value from the gateway. This invalidates the original signature signed by the key manager and we have to re-sign the JWT Payload + Header in the gateway node.
    If you are having a distributed setup, where a separate key manager and gateway nodes are running, If you engaged this handler for an API, thereafter you have to validate the JWT token using gateway's public key.
    <h2>Performance degradation</h2>
    As we have discussed earlier, This handler will re-sign the JWT token for every request passing through the gateway (For the APIs which have added this handler) and it causes a slight performance impact on the gateway. Roughly latency will be increased by 0.006s. You can monitor the time taken to execute the handler and for the signing part by enabling the debug logs.To enable the debug logs append the `log4j.logger.org.wso2.carbon.custom.jwt.handler.AlterJWTHandler=DEBUG` line to `/repository/conf/log4j.properties` file

![timing](https://user-images.githubusercontent.com/3313885/45530564-eff72200-b808-11e8-9c9b-176cee578409.png)
![new_dump](https://user-images.githubusercontent.com/3313885/45530566-f08fb880-b808-11e8-9041-42560e85ff35.png)