
<h1>Confetti React Hooks </h1>

![](confetti.gif)

<h2>Implementation </h2>
step1
Values passed into the use confetti function
The function useConfetti receives an object with four properties: bestTime, setBestTime, bestDiceRoll, and setBestDiceRoll. 
These properties represent the best time and best dice roll values, along with their corresponding setter functions for updating the values. 
The useConfetti function deals with handling confetti animations when a new best time or best dice roll is achieved.

step2
The useRef hook
The useRef hook is a built-in React hook that allows you to create and manage a reference to a value or an element. 
It helps you preserve a value across renders without causing a re-render, unlike state variables managed by the useState hook.
useRef is especially useful when you need to interact with DOM elements, access previous values, or store a mutable variable that persists throughout the component's lifecycle.

//In this project, the useRef hook is used to create a reference to the JSConfetti library's instance. 
//This reference allows the addConfetti function to be called across different renders of the component.
// By using useRef, the reference is maintained throughout the component's lifecycle, ensuring that the confetti effect works consistently whenever it's triggered.

//step3
//Return confetti logic
//To return the desired confetti based on the outcome of the game, we write three functions:

//newBestGame
//newBestTime
//newBestDiceRoll
//The new best time function returns time ⏱ confetti, the new best dice roll function returns dice 🎲 confetti, and the new best game function returns trophy 🏆 confetti.

step4
The new best time function
The newBestTime function sets the bestTime state to true and the bestDiceRoll state to false.


step-5
The confetti function
The confetti function creates a confetti animation with different emojis based on the conditions: if both bestTime and bestDiceRoll are true, it shows a trophy emoji 🏆; if only bestTime is true, it shows a timer emoji ⏱; and if only bestDiceRoll is true, it shows a dice emoji 🎲.

The confetti function uses an if-else statement to check the conditions. Based on the conditions, it calls the jsConfetti.current.addConfetti method twice, once for confetti colors and once for emojis. The commonOptions object contains shared properties for both confetti animations. The spread operator ... is used to include the commonOptions properties in each confetti animation.

step-6
The useEffect hook
The useEffect hook sets up a side effect in the component, which runs after the component renders. In this case, it initializes the JSConfetti instance and assigns it to jsConfetti.current. The empty array [], as the second argument, ensures that the effect runs only once on the component mount and does not re-run on updates.

Side effects are actions or operations that occur outside the scope of the component's render cycle, such as API calls, timers, event listeners, or DOM manipulations.

stp-7
The return statement
The return statement returns an object containing four functions:

confetti
newBestTime
newBestDiceRoll
newBestGame
These functions can be used by the component that calls this custom hook to trigger confetti animations and update the best time and best dice roll values.

step-8
Export the custom hook
The export default exports the useConfetti function as the default export from the module.

step-9
The App JSX file
At the top of the App.jsx file, we will import the necessary hook, library, and CSS file:

step-10
Inside the App function, we initially set up the variables.
The following code creates two state variables along with their setter functions:

bestTime: initially set to false
bestDiceRoll: initially set to false

step-11
The next code block calls the useConfetti custom hook with an object containing state variables bestTime and bestDiceRoll, along with their setter functions.

The custom hook returns an object containing the four functions we defined in the useConfetti JSX file:

confetti
newBestTime
newBestDiceRoll
newBestGame
These functions are then destructured and assigned to their respective variables for future use within the component.

step-12
The return statement
Note: This whole return statement is for temporary control of the React confetti custom hook. When you incorporate it into your React project, the state variables newBestTime and newBestDiceRoll will trigger the confetti when they change.

This return statement renders a section with the className "confetti," and inside this section, various conditional renderings occur:

If both bestTime and bestDiceRoll are false, it shows a message "Choose a React state, and click celebrate!".
If both bestTime and bestDiceRoll are true, it displays "🏆New Best Game!🏆".
If only bestDiceRoll is true, it displays "🎲New Best Dice Roll!🎲".
If only bestTime is true, it displays "⏱New Best Time!⏱".
It also renders four buttons that trigger the functions newBestTime, newBestDiceRoll, newBestGame, and confetti when clicked.

step-13
styles added in App.css













# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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
