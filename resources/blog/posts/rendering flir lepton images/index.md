---
title: "Visualizing FLIR Lepton Thermal data for statistical analysis"
date: "2021-04-19"
draft: true
---

<h2>Introduction</h2>
This post would be a continuation of my previous post on <a href="http://me.knnect.com/blog/getting-started-with-nvidia-jetson-tk1/">getting started with NVIDIA Jetson TK1</a> for machine learning and image analysis works and <a href="http://me.knnect.com/blog/how-to-connect-flir-lepton-module-to-nvidia-jetson-tk1/">connecting FLIR Lepton camera to Jetson</a> TK1.In this post, I will discuss analyzing and visualizing the thermal data which is fetched from FLIR Lepton IR camera. In my last post, about connecting lepton camera to NVIDIA Jetson board, I have concluded the discussion by providing some sample camera data frames and images generated from Lepton module.In this post, I will discuss the tools and technics which I have used for analyzing and visualizing the data.This post will mostly cover the areas of preprocessing the data before applying any statistical learning methods on the sample data.Since we need to have a good understanding of the data and its behaviors before we jump into machine learning or playing with the data.Unless we don't have a good understanding of the data which we are dealing with in all dimensions, It would be unfair to expect something magic done by machine on behalf of us.So all this is about understanding our data.

It's great to see that technology is improving in great pace in both areas of GPU computing and thermal imaging. By the time I have published my last post and now, NVIDIA has `<a href="http://nvidianews.nvidia.com/news/nvidia-jetson-tx2-enables-ai-at-the-edge">`released`</a>` its next generation Jetson development board Jetson TX2(on Tuesday, March 7, 2017)

`<a href="http://me.knnect.com/blog/wp-content/uploads/2017/04/Jetson-TX2-Fig-3.jpg"><img className="aligncenter wp-image-470 size-full" src="http://me.knnect.com/blog/wp-content/uploads/2017/04/Jetson-TX2-Fig-3.jpg" alt="NVIDIA Jetson TX2" width="617" height="615" />``</a>`

<p><em>NVIDIA Jetson TX2</em></p>
 

and also FLIR has announced the Lepton 3.0 `<a href="http://www.flir.com/home/news/details/?ID=83959">`release`</a>`(On April 12, 2017) to the OEM market. So all these improvements in thermal imaging and high-performance single board computing contribute to opening new possibilities in thermal image analysis and application of thermal image processing in machine learning.

&nbsp;

`<a href="http://me.knnect.com/blog/wp-content/uploads/2017/04/flir-lepton-3.jpg"><img className="aligncenter wp-image-478" src="http://me.knnect.com/blog/wp-content/uploads/2017/04/flir-lepton-3.jpg" alt="flir lepton 3" width="530" height="264" />``</a>`

#FLIR Lepton camera



<h2>Lepton Thermal Data Capturing and Processing</h2>
As I discussed in my previous <a href="http://me.knnect.com/blog/how-to-connect-flir-lepton-module-to-nvidia-jetson-tk1/">post</a> I'm using <a href="https://github.com/groupgets/pylepton">PyLepton</a> library to capture data frames from lepton camera.To start exploring the data captured from Lepton camera, Since at this stage, we don't use any learning task or CPU/GPU intensive task, I wrote a data service client using python to simply transfer the lepton data frames from Jetson TK1 to the desktop computer.

https://gist.github.com/f041a531cb6f99ffd46dd8b15d46c3de

<div>It uses the Tornado <strong>WebSocketHandler</strong> to send the data over web socket protocol.You can find the complete code <a href="https://github.com/tmkasun/PyLepton_With_Jetson">here</a>.</div>
<div>Once you get the raw frames from the camera, you will notice that it is not withing the range of normal(RGB or Grayscale) image pixel values(0-255), but it has a largely spread pixel depth with it. That is because in lepton camera it has a large pixel depth(14bit) so that it carries a large variation in the intensity of LWIR. Since it is hard to map such depth to visible image pixel depth which is 255 per pixel, Once you transform intensity values to image pixel range(Even with histogram equalization etc), You will be loosing lots of small variations in intensity levels and even will go blackout the regions which are far away from most frequent pixel density values. So I thought of plotting the raw intensity values on a 3D graph so that we can get an idea about the variations and distribution of the IR intensities throughout the frame.</div>
<div>When the data is plotted using plotly in 3D surface graph, It is much more clear to understand how the intensity levels are distributed over pixels.</div>
<div></div>
<h3 style={{textAlign: "center"}}>(<span style={{color: "#3366ff"}}>Click on the graph to load the Plotly module</span>)</h3>
<div>

`<a title="IR Intensity 3D graph" href="https://plot.ly/~tmkasun/22/?share_key=8qDkv9v7ypNEcjNhokkKHu" target="_blank" rel="noopener noreferrer"><img className="" src="https://plot.ly/~tmkasun/22.png?share_key=8qDkv9v7ypNEcjNhokkKHu" alt="IR Intensity 3D graph" width="1300" />``</a>`

<h2><script src="https://plot.ly/embed.js" async="" data-plotly="tmkasun:22"></script></h2>
</div>
<div>
We can use the Matplotlib library to plot the 3D and 2D graph from the lepton data frame, But <a href="https://github.com/plotly/plotly.py">Plotly</a> has a more interactive feature than <a href="https://github.com/matplotlib/matplotlib">Matplotlib</a> when it comes to plotting 3D graphs.Below is the output from Matplotlib 2D and 3D plot, here I have used the
<pre className="">cm.nipy_spectral</pre>
</div>
<div>Color map for mapping colors to different intensity levels in thermal data.In this way, we can clearly see the variations in the IR intensity far more better that the grayscale scale.And also 3D add another dimension to our view of thermal data.</div>
<h2><a href="http://me.knnect.com/blog/wp-content/uploads/2017/04/flir_matplotlib.png"><img className="aligncenter size-full wp-image-488" src="http://me.knnect.com/blog/wp-content/uploads/2017/04/flir_matplotlib.png" alt="flir_matplotlib" width="1470" height="818" /></a>Conclusion</h2>
In this post, I simply want to discuss about the tools and techniques which we can use to see the data in different angle and get more in-depth idea of the thermal data which we getting from lepton camera, And also after looking at the data in this way, it seems that even though Lepton having very fewer pixel count(60x80) compared to sophisticated visible range cameras we have today, It have a very large pixel depth giving even slightest changes in temperature variation in its field of view.So we could use this highly detailed information to identify the objects around us.In an upcoming blog post, I will be discussing such methods of identifying heat emitting objects such as movements of humans from the data captured from lepton camera.

## [![flir_matplotlib](http://me.knnect.com/blog/wp-content/uploads/2017/04/flir_matplotlib.png)](http://me.knnect.com/blog/wp-content/uploads/2017/04/flir_matplotlib.png)Conclusion

In this post, I simply want to discuss about the tools and techniques which we can use to see the data in different angle and get more in-depth idea of the thermal data which we getting from lepton camera, And also after looking at the data in this way, it seems that even though Lepton having very fewer pixel count(60x80) compared to sophisticated visible range cameras we have today, It have a very large pixel depth giving even slightest changes in temperature variation in its field of view.So we could use this highly detailed information to identify the objects around us.In an upcoming blog post, I will be discussing such methods of identifying heat emitting objects such as movements of humans from the data captured from lepton camera.You can find the source codes from all the above plotting algorithms in this `<a href="https://github.com/tmkasun/PyLepton_With_Jetson">`GitHub repo`</a>`.

[1] : http://me.knnect.com/blog/getting-started-with-nvidia-jetson-tk1/

[2] : http://me.knnect.com/blog/how-to-connect-flir-lepton-module-to-nvidia-jetson-tk1/

[3] : http://nvidianews.nvidia.com/news/nvidia-jetson-tx2-enables-ai-at-the-edge

[4] : https://github.com/tmkasun/PyLepton_With_Jetson
