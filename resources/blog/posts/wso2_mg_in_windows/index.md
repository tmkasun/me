---
excerpt: "How to run WSO2 API Manager Micro-Gateway in Windows environment"
title: "WSO2 API-M Micro Gateway in Windows"
date: "2019-01-11"
draft: true
---

<h3>Introduction</h3>
This post will guide you through how to setup, build and finally run a WSO2 API Manager Micro-Gateway instance in Windows environment. The steps will be more or less same in a Unix-Like environment, except for running the Micro-Gateway as a windows service.

Let begin with the question <em>what is WSO2 API Manager Micro-Gateway</em>?

<h5>What is WSO2 API Manager Micro-Gateway</h5>
A typical API gateway is a component which governs the  API traffic,  enforcing the policies and authentication/authorization of the users. A micro gateway in the other hand contains all the capabilities of the regular gateway component, in addition, it is lightweight in size and can operate in more isolated fashion than its predecessor. A micro gateway can be started in just a few seconds and start serving API requests, it can work independently fully utilizing the available resources to cater the API traffic. With the WSO2 API Manager, The Microgateway can be used to deploy single API per micro-gateway, Where a dedicated gateway for serving API request(Private Jet mode), or you can label set of APIs and serve those API through a separate micro gateway instance. Further, you can setup K8S cluster to deploy a pod per micro gateway instance and scale your API ecosystem automatically with the increasing number of APIs or traffic. You can find more information about WSO2 API-Microgateway and some reference solution architectures from their <a href="https://wso2.com/api-management/api-microgateway/">documentation</a>.
<h3>Pre-requisites</h3>
To run initialize a micro-gateway instance,
<ul>
 	<li><a href="http://www.oracle.com/technetwork/java/javase/overview/index.html">Oracle Java 1.8</a></li>
 	<li>Need to have <a href="https://wso2.com/api-management/">WSO2 API Manager</a> 2.5 or above.
<ul>
 	<li>This is required to bootstrap the micro-gateway.</li>
</ul>
</li>
 	<li>WSO2 <a href="https://github.com/wso2/product-microgateway/releases">Microgateway CLI tool</a></li>
 	<li><a href="http://nssm.cc/download">NSSM</a> (the Non-Sucking Service Manager)
<ul>
 	<li>If you need to run the micro-gateway as a windows service</li>
</ul>
</li>
</ul>
<h3>Setup a Micro-Gateway project</h3>
<h5>Step 1</h5>
First, install the Oracle Java 1.8 or higher version and set the <em>JAVA_HOME </em>environment variable from the edit system properties UI,
<a href="http://me.knnect.com/blog/wp-content/uploads/2018/07/java_home.png"><img class="aligncenter size-full wp-image-532" src="http://me.knnect.com/blog/wp-content/uploads/2018/07/java_home.png" alt="" width="1014" height="768" /></a>

and then start the WSO2 API Manager server. Once the server is started, <a href="https://docs.wso2.com/display/AM250/Getting+Started">create a new API</a> from Publisher and publish it as well.

<a href="http://me.knnect.com/blog/wp-content/uploads/2018/07/starting_server.gif"><img class="aligncenter size-full wp-image-533" src="http://me.knnect.com/blog/wp-content/uploads/2018/07/starting_server.gif" alt="" width="1025" height="774" /></a>

In the next 2 steps, we will create a  label from Admin application and assigned it to the above API. This is to demonstrate how to deploy a micro-gateway for a particular gateway label. But it is not required to assign a label to an API in order to deploy it in a micro-gateway.

<h5>Step 2</h5>
Then login to the admin application and goto manager labels section and create a new label. You will be asked to provide a name and a URL. This URL will be shown in the API Store as the gateway URL, if you select this label for an API.

<a href="http://me.knnect.com/blog/wp-content/uploads/2018/07/create_label.gif"><img class="aligncenter size-full wp-image-535" src="http://me.knnect.com/blog/wp-content/uploads/2018/07/create_label.gif" alt="" width="1025" height="774" /></a>

<h5>Step 3</h5>
Select the previously created label for the API in the 3rd step of the API edit wizard

<a href="http://me.knnect.com/blog/wp-content/uploads/2018/07/add_label_to_api.gif"><img class="aligncenter size-full wp-image-536" src="http://me.knnect.com/blog/wp-content/uploads/2018/07/add_label_to_api.gif" alt="" width="1025" height="774" /></a>

Now we can set up a micro-gateway project for the above-created gateway label. Note that, When you assign the new gateway label to the API, The gateway URL shown in the store will be changed to the URL which you have given when creating the gateway label.

<h5>Step 4</h5>
Unzip the downloaded  wso2am-micro-gw-toolkit-2.5.0.zip to a convenient location (i:e C:\Program Files\wso2\micro gateway cli\). Then copy the <strong>&lt;Path-To-wso2am-micro-gw-toolkit&gt;\bin </strong>path and append it to the <strong>path</strong> windows system variable as shown below.

<a href="http://me.knnect.com/blog/wp-content/uploads/2018/07/add_mg_tool_path.gif"><img class="aligncenter size-full wp-image-538" src="http://me.knnect.com/blog/wp-content/uploads/2018/07/add_mg_tool_path.gif" alt="" width="1025" height="774" /></a>

Once you append the Micro-gateway toolkit \bin directory path to path system variable, You can invoke the <strong><em>micro-gw </em></strong>command from any directory in the system via the command line. So let's initialize a project.

<h5>Step 5</h5>
Open the Microsoft command line (cmd.exe) and change the location (<em>cd &lt;directory location&gt;</em>) where you want to setup the Micro-Gateway project. Then run the following command to bootstrap a Microgateway project for <em>sample_label</em> gateway label.

You can give any project name as you prefer, but you have to give a valid gateway label which is available in the API Manager server in which you want to fetch the API metadata.

<span class="lang:zsh decode:true crayon-inline">micro-gw setup &lt;project_name&gt; -l &lt;LABEL_NAME&gt;</span>

In here, If you want to set up a microgateway project for single API, You can do so by giving its name and version information as below.

<span class="lang:zsh decode:true crayon-inline">micro-gw setup &lt;project_name&gt; -a &lt;API_NAME&gt; -v &lt;API_VERSION&gt;</span>

This will create a project for that particular API name-version, Hereafter the rest of the process will be the same for both label based project or private jet API project.

Let's see what is happening behind the scene when you run the <em>setup </em>command:

<a href="http://me.knnect.com/blog/wp-content/uploads/2018/07/setup_mg.gif"><img class="aligncenter size-full wp-image-539" src="http://me.knnect.com/blog/wp-content/uploads/2018/07/setup_mg.gif" alt="" width="1025" height="773" /></a>

First, you will be asked for a username which CLI tool will be used to authenticate the user in API Manager server.

Next, of course, the password for the above user, and the following is API Manager server URL. In this step, you have to give the API Manager server running location and this URL will be used to make the DCR call and generate CS/CK for product REST APIs and fetch API metadata.

Next, you will be asked for certificate trust store location and its password for initializing the SSL connection with API Manager server, You can leave them blank if you do not want to change the default parameter. (default parameters are shown in brackets)

All the above-given information will be preserved (except for password) for later use. If you want to reset the project you can use the --reset argument as below.

<span class="lang:zsh decode:true crayon-inline">micro-gw reset -c <em>&lt;path_to_project&gt;</em>\conf\deployment-config.toml</span>

During the setup phase, Micro-gateway CLI tool will fetch the API Metadata such as API JSON itself and throttling policies from the Publisher and Admin REST APIs. Then those data will be used to generate the Ballerina code using pre-packaged mustache templates by filling up the data.

In addition to code generation, CLI tool will keep JSON mapping of the hashed dynamic data file to detect the API changes and notify the callee of the <em>micro-gw</em> command using an exit code (34). Users of <em>micro-gw </em>can check for the exit code and decide whether they will continue with re-deploying the micro-gateway instance or not.

This hashing method will be very useful Since Micro-Gateways are operated in an immutable way, Where a change to micro-gateway would require to go through the <em>setup -&gt; build -&gt; deploy</em> cycle again.

<h5>Step 6</h5>
By now, There should be a directory created with the given project name ( first parameter for setup command) and the structure of the project should be as below.

<img class="aligncenter size-full wp-image-540" src="http://me.knnect.com/blog/wp-content/uploads/2018/07/project_structure.png" alt="" width="344" height="650" />

So now we have set up the micro-gateway project, with all the generated codes in place, Next step is to build the micro-gateway using the generated Ballerina source code.

<h3>Build</h3>
<h5>Step 7</h5>
Go to the Micro-Gateway project root directory (If you have not change the directory after <strong>step 6 </strong>it's the same directory where you ran the setup command) and run the following command to build the project. Use the same project name which you have given when setting up the project.

<span class="lang:zsh decode:true crayon-inline">micro-gw build &lt;project_name&gt;</span>

During the build process, CLI tool will execute the Ballerina run command on the \src

<span class="lang:zsh decode:true crayon-inline">ballerina build src -o %project_name%.balx"</span>

using the Ballerina distribution packed with the CLI tool.

This will output a compiled <em>.balx </em>file in the <em>&lt;project_name&gt;\target</em> directory. (But you won't able to see the compiled .balx after build success, This file will be deleted once the micro-gateway distribution created)

Then all the artifacts(ballerina bytecode, config files ect...) will put in order to make the micro-gateway distribution .zip file. This is done through the micro-gateway CLI tool.

So after running the above build command, You can find the micro-gateway distribution (<em>micro-gw-&lt;project_name&gt;.zip</em>) specifically designed to the given gateway label or API name-version.

<a href="http://me.knnect.com/blog/wp-content/uploads/2018/07/build_project.gif"><img class="aligncenter size-full wp-image-543" src="http://me.knnect.com/blog/wp-content/uploads/2018/07/build_project.gif" alt="" width="1025" height="773" /></a>

<h3>Run</h3>
<h5>Step 8</h5>
Take the <em>micro-gw-&lt;project_name&gt;.zip</em> file from <em>&lt;project_name&gt;\target</em> directory and extract the files to where you want to run the micro-gateway. If you are running the micro-gateway in windows environment use the <strong>gateway.bat </strong>script in the extracted <em>micro-gw-&lt;project_name&gt;/bin</em> directory. Simply run the

<span class="lang:zsh decode:true crayon-inline">.\gateway.bat</span>

file to start the micro-gateway instance in the foreground.

<h5><a href="http://me.knnect.com/blog/wp-content/uploads/2018/07/run_foreground.gif"><img class="aligncenter size-full wp-image-545" src="http://me.knnect.com/blog/wp-content/uploads/2018/07/run_foreground.gif" alt="" width="1025" height="773" /></a></h5>
<h5>Step 8 (Optional)</h5>
If you want to start the micro-gateway server as Windows Service, use the <a href="http://nssm.cc/usage">NSSM</a> tool to install the <em>gateway.bat </em>script as a windows service. Make sure you have set the <em>JAVA_HOME </em>variable as a system variable

![](./2018/07/java_system_home.png)


or use the current user as the user who starts the windows service.

![](./2018/07/run_as_service.gif)

&nbsp;

To test the micro-gateway server, You can invoke the API through microgateway using CURL, By default, microgateway is serving HTTPS/WSS request in 9095 port. So the sample CURL would be

<span class="lang:go decode:true crayon-inline">curl -v -k https://mg.knnect.com:9095/wolaa/1.1.1/getmeall -H "Authorization: Bearer 104cd62f-a8ab-3089-bc12-f7cc36e73e77"</span>
