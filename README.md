## Simple Meals App App<br/>
A simple React Native app to demonstrate use of Navigation for a Meals App<br/>


## Features<br/>
<ul>
    <li>Demonstrates use of navigation <a href="https://reactnavigation.org/docs/getting-started">React navigation</a></li>
    <li>Installed Navigation package with <br/>
    npm install @react-navigation/native<br/>
    npx expo install react-native-screens react-native-safe-area-context<br/>
</li>
    <li>Demonstrates use of Stack navigators listed under <a href="https://reactnavigation.org/docs/stack-navigator">Navigators</a> using 
    npm install @react-navigation/stack</li>
    <li>Demonstrates use of Drawer navigators listed under <a href="https://reactnavigation.org/docs/drawer-navigator">Navigators</a> using 
    npm install @react-navigation/drawer<br/>
    npx expo install react-native-gesture-handler react-native-reanimated</li>
    <li>Demonstartes use of button on the Header on a screen</li>
    <li>Demonstrates usage of useEffectLayout for updates to options of the screen for example title , button etc. </li>
    <li>Demonstrates use of Bottom Tabs Navigation used for both Android and IOS versus Materials Tabs and install <br/>
    npm install @react-navigation/bottom-tabs<br/></li>
    <li>Demonstrates use of nested Navigation with combination of Navigators <br/>
            Navigation Flow
        Drawer
        └── Tabs
            ├── Categories (Stack)
            └── Favorites (Stack)
                └── MealDetail (Stack)
     </li>
    <li>Demonstrates manage app wide state for managing Favorites using Context API</li>
    <li>Demonstrates using Redux for state management with <a href="https://redux-toolkit.js.org/">Redux</a> <br/>
    npm install @reduxjs/toolkit <br/>
    </li>
</ul>


## ScreenShots<br/>
Meal Categories Screen Landing <br/> 
<p align="left"> <img src="./assets/screenshots/MealCategoriesScreen.jpg" /> </p> 

Meals Ovewview Screen <br/>
<p align="left"> <img src="./assets/screenshots/MealsOverviewScreen.jpg" /> </p> 

Meals Detail Screen <br/>
<p align="left"> <img src="./assets/screenshots/MealDetailsScreen.jpg" /> </p> 

Navigation Screen <br/>
<p align="left"> <img src="./assets/screenshots/DrawerNavigationScreen.jpg" /> </p> 

Favorites Screen <br/>
<p align="left"> <img src="./assets/screenshots/FavoritesScreen.jpg" /> </p> 

## Tech Stack<br/>
React Native<br/>

## Installation<br/>
git clone this repo<br/>
cd authenticator-appr<br/>
npm install<br/>
npm start<br/>
Note: You’ll need Node.js, Expo CLI, and a mobile simulator or Expo Go app.<br/>

## Project Structure <br/>

/components      # Reusable UI components <br/>
 
/App.js          # Entry point  <br/>

/screens         # Screen layouts for Meals Overview <br/>

/data            # Static data points <br/>

/store           # For State Management <br/>

/models          # Models for Meal and Category <br/>

