# Meme-Generator
Meme-Generator for Kharagpur Winter of Code ( KWoC  2021)

## Project Overview 
Do you like memes? Most people do, so if yes, the idea of developing a meme generator would surely get you going. Being new to React, you can build a simple meme generator that instantly allows users to create memes.

The idea here is to use an API to fetch random meme images and then allow users to place custom text at the top and bottom of the image.

You need to add two different input fields in your meme generator, i.e.:

1st one for the text at the top and the
2nd one for the text at the bottom of the image.
You can also create a database of your own to store meme images and fetch images from the database.

Also, you can enhance the functionality of the meme generator by allowing users to create and log in to their accounts, save memes, and share them on different social media 
platforms.

## Example 

![final_2](https://user-images.githubusercontent.com/76089814/144738313-fe94d817-e30e-41e3-94ca-c9a198a9242f.png)

## Available Formats
Users can request .jpg instead of .png for smaller files :

#### Format	Example
1. PNG : <a href = "https://api.memegen.link/images/ds/small_file/high_quality.png">PNG sample</a>
2. JPEG : <a href= "https://api.memegen.link/images/ds/high_quality/small_file.jpg">JPEG sample</a>

## Custom Dimensions
Images can be scaled to a specific width or height using the width=<int> and height=<int> query parameters. If both are provided (width=<int>&height=<int>), the image will be padded to the exact dimensions.

## Templates
The list of predefined meme templates is available here: https://api.memegen.link/templates/

## Custom Backgrounds
You can also use your own image URL as the background.
#### Example - url : <a href= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRnsmOMR58hEuwTE0Sn52ovGgiCMwS2BKlZg&usqp=CAU">https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRnsmOMR58hEuwTE0Sn52ovGgiCMwS2BKlZg&usqp=CAU</a>
   will result in the below image <br/>
  <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRnsmOMR58hEuwTE0Sn52ovGgiCMwS2BKlZg&usqp=CAU">
  
You can also use your own image from your computer.
#### Example - 
  ![mybackground](https://user-images.githubusercontent.com/76089814/144738952-f127ede4-1acc-4c9c-83bd-2c4453205f11.jpg)


## Technologies used 
1. Html 
2. CSS 
3. Javascript
4. React
5. Fabricjs
6. Node.js
7. Express

## Liscence - Apache License 2.0
  link - <a href = "https://github.com/atharva0300/Meme-Generator/blob/main/LICENSE">license</a>

