---
title: "WSO2 APIM: Dynamic endpoint URLs"
date: "2020-05-24"
excerpt: "This is a personal note on useful links and document on tweaking/configuring Nvidia Jetson TK1 board"
draft: true
---

<h2>Introduction</h2>
In this post, I will be discussing, how to change the API endpoint URL dynamically when you are moving an API through different environments in <a href="http://wso2.com/api-management/">WSO2 API Manager</a>. A good use case on, when we need to change the endpoint URL dynamically has been explained in this <a href="http://nuwanzone.blogspot.com/2015/03/api-gateways-with-dedicated-back-ends.html">post</a> by Nuwan. In a scenario where you have different unique endpoint per each environment and you need to change the endpoint URL in the API in all the time, you transfer an API from one environment to the other. This would be a painstaking task if you are transferring multiple APIs at once. As a solution for this, in the above article, it has suggested a method using a custom class mediator and an addition of new sequence to APIM deployment.I had followed it when I'm looking for a way to change the endpoint URL dynamically. It is still working perfectly, but it seems out of date now. In this post, I will be discussing a new method to change the endpoint URL dynamically. The new method would be slightly different from the method described in above post so I would suggest you go through the previous <a href="http://nuwanzone.blogspot.com/2015/03/api-gateways-with-dedicated-back-ends.html">post</a> before trying out the new method.
<h2>How Its Works</h2>
Because with the introduction of system scope[<a href="http://mytecheye.blogspot.com/2013/10/synapse-get-property-function.html">2</a>] in Synapse get-property function, now you can directly get the system property values to synapse context by using <span class="lang:default decode:true crayon-inline ">get-property('system','property_name')</span>  method.So it is much easier that writing class mediator and put it into <span class="lang:default decode:true crayon-inline ">repository/components/lib/</span>  directory. In this method, I will be using the <strong>get-property</strong> synapse function instead of adding custom class mediator to the sequence (<span class="lang:xhtml decode:true crayon-inline ">&lt;class name="org.wso2.carbon.env.EnvironmentResolver"/&gt;</span> ). What this synapse function does is, It calls the underline Java <span class="lang:java decode:true crayon-inline ">System.getProperty(key);</span> <a href="https://github.com/wso2/wso2-synapse/blob/release-2.1.7-wso2v10/modules/core/src/main/java/org/apache/synapse/mediators/GetPropertyFunction.java#L342">method</a>[3] when we use the get property function with 'system' scope. So that we can get the environment variables which we have defined in the shell.We can define an environment variable to hold any value which we need to fill with the placeholders defined in the Endpoint URLs. During the runtime, we get those values in environment variables and update the endpoint URLs before sending the API request to its endpoints.

&nbsp;

<h2>Setting up</h2>
We can define the environment variable as follows using the command arguments
<pre class="lang:sh decode:true" title="Wso2 Server Start Script">./bin/wso2server.sh -Denvironment.host=qa_env -Denvironment.port=8080</pre>
In the above example, names of the environment variables are <strong>host</strong> and <strong>port</strong> which are coming after <strong>-Denvironment. </strong>segment. You can define any number of a variable like this and refer them inside the sequence as below.Below is a sample synapse sequence, which assigns values to synapse properties by getting them from get-property function. This is the only file you need to add to the APIM setup in order to get the dynamic endpoint URL function to work.You have to add this <strong>in_sequence.xml </strong>file into <span class="lang:default decode:true crayon-inline ">repository/deployment/server/synapse-configs/default/sequences/</span> directory.

https://gist.github.com/822f310f395bd10f30e89f0f11eeb239

How the synapse property and placeholder values in the endpoint URL mapped?. It works like this. You can define an HTTP/REST Endpoint URL as <strong>http://{uri.var.sub_domain1}.knnect.com:{uri.var.port}/apis/ </strong>in this example I have use two placeholder values which are  <strong>{uri.var.sub_domain1} </strong>and <strong>{uri.var.port} </strong>you don't need to match these names with the environment variables defined in the previous step(<strong>-Denvironment.host=qa_env</strong>). The name should follow the pattern of <strong>{uri.var.<span style="color: #000080;"><em>any_variable_name</em></span>}</strong>. We have referred the name inside the curly brackets(<strong>uri.var.<span style="color: #000080;"><em>any_variable_name</em></span></strong>) in our sequence file before. <strong>uri.var. </strong>segment identifies the string as part of HTTP endpoint URL.

<a href="http://me.knnect.com/blog/wp-content/uploads/2017/05/apim-pub-dynamic-endpoints-1.png"><img class="aligncenter size-full wp-image-509" src="http://me.knnect.com/blog/wp-content/uploads/2017/05/apim-pub-dynamic-endpoints-1.png" alt="apim pub dynamic endpoints" width="1179" height="407" /></a>

Here is an example which I have setup in sample API definition through WSO2 APIM publisher application. Once you have defined the endpoint URL as mentioned above and put that synapse sequence file into all your deployments. You can start the server in each environment with the relevant subdomain value for each environment. So that when you transfer you API from one environment to another, You don't need to change the endpoint your all the time.

For an example, you can start your DEV, QA, PROD deployments as follows,

<pre class="lang:sh decode:true" title="Wso2 Server Start Script">./bin/wso2server.sh -Denvironment.host=dev_env -Denvironment.port=8080
</pre>
<pre class="lang:sh decode:true" title="Wso2 Server Start Script">./bin/wso2server.sh -Denvironment.host=qa_env -Denvironment.port=8081</pre>
<pre class="lang:sh decode:true" title="Wso2 Server Start Script">./bin/wso2server.sh -Denvironment.host=prod_env -Denvironment.port=80</pre>

the respective endpoint URLs would be

http://dev_env.knnect.com:8080/apis/

http://qa_env.knnect.com:8081/apis/

http://prod_env.knnect.com:80/apis/

These endpoint URLs will be resolved in the runtime, at the time APIM receive an API call to its endpoint.

[1] : http://nuwanzone.blogspot.com/2015/03/api-gateways-with-dedicated-back-ends.html

[2] : http://mytecheye.blogspot.com/2013/10/synapse-get-property-function.html

[3] : https://github.com/wso2/wso2-synapse/blob/release-2.1.7-wso2v10/modules/core/src/main/java/org/apache/synapse/mediators/GetPropertyFunction.java#L342
