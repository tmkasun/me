---
title: "OAuth Playground"
date: "2016-10-12"
draft: false
---
In this article, I will demonstrate how to use WSO2 API Manager REST APIs for create new client application and generate an access token and access secured API using the generated access token.

This article is to be completed If you are interested in playing with the code, <a href="https://github.com/tmkasun/wso2-apim-oauth">Here</a> you can find the code on GitHub.

<h2>What is OAuth:</h2>
Since there are a lot of good articles and post on this topic I'm not going to repeat the work, But will be mentioned about some topics in OAuth when it seems a jargon otherwise.In short, OAuth allows the application to access users resource without requesting user's password; Instead application can request for specific permission only what it needs to do get the work done using the user's resource.The word resource here can be, email address, photos etc.
<h2>How to use:</h2>
First: There is a live <a href="https://oauth.test.knnect.com">demo</a> of this application, You can play with it if you want.

Before explaining how to use the app, let me go through the structure of the app and how it was build.OAuth Playground is build using DJango python framework and it uses requests and requests-oauthlib libraries to make the OAuth calls.

&nbsp;

<a href="http://me.knnect.com/blog/wp-content/uploads/2016/10/OAuth-Playground_auth_code.png"><img class="aligncenter size-full wp-image-350" src="http://me.knnect.com/blog/wp-content/uploads/2016/10/OAuth-Playground_auth_code.png" alt="OAuth Playground_auth_code" width="637" height="491" /></a> <a href="http://me.knnect.com/blog/wp-content/uploads/2016/10/OAuth-Playground_resource.png"><img class="aligncenter size-large wp-image-351" src="http://me.knnect.com/blog/wp-content/uploads/2016/10/OAuth-Playground_resource.png" alt="OAuth Playground_resource" width="633" height="613" /></a> <a href="http://me.knnect.com/blog/wp-content/uploads/2016/10/OAuth-Playground_access_token.png"><img class="aligncenter size-large wp-image-352" src="http://me.knnect.com/blog/wp-content/uploads/2016/10/OAuth-Playground_access_token.png" alt="OAuth Playground_access_token" width="634" height="490" /></a>

<h2>Try this:</h2>
Reference:

https://docs.wso2.com/display/AM200/apidocs/store/index.html

https://docs.wso2.com/display/AM200/apidocs/publisher/index.html

https://github.com/tmkasun/wso2-apim-oauth
