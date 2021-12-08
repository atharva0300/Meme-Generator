# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`
Run `npm install` to install all the dependencies ( except the devdependencies ) mentioned in package.json .

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


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


## Things Completed

- [ ] Navbar for UI

   
   
## Communication Channel
   ##### Join Discord - <a href = "https://discord.gg/8qAemrkF">Meme-Generator (KWoC 2021)</a>
## Liscence - Apache License 2.0
  link - <a href = "https://github.com/atharva0300/Meme-Generator/blob/main/LICENSE">license</a>

