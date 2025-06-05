## 🍽️ Simple Meals App

A simple React Native app demonstrating navigation patterns such as Stack, Drawer, and Bottom Tabs, along with state management using Context API and Redux Toolkit.

---

## 🚀 Features

* ✅ Demonstrates navigation using [React Navigation](https://reactnavigation.org/docs/getting-started)
* ✅ Stack Navigator ([docs](https://reactnavigation.org/docs/stack-navigator))
  `npm install @react-navigation/stack`
* ✅ Drawer Navigator ([docs](https://reactnavigation.org/docs/drawer-navigator))
  `npm install @react-navigation/drawer`
  `npx expo install react-native-gesture-handler react-native-reanimated`
* ✅ Bottom Tabs Navigation (cross-platform)
  `npm install @react-navigation/bottom-tabs`
* ✅ Header buttons and `useLayoutEffect` for screen options (like title, header buttons)
* ✅ Nested navigation structure:

  ```
  Drawer
  └── Tabs
      ├── Categories (Stack)
      └── Favorites (Stack)
          └── MealDetail (Stack)
  ```
* ✅ App-wide favorites state using Context API
* ✅ Redux-based state management using [Redux Toolkit](https://redux-toolkit.js.org/)
  `npm install @reduxjs/toolkit`

---

---

## 🛠️ Tech Stack

* React Native
* Expo
* React Navigation
* Redux Toolkit
* Context API

---

## 📦 Installation

```bash
git clone <repo-url>
cd simple-meals-app
npm install
npm start
```

> 📱 **Note**: You’ll need [Node.js](https://nodejs.org/), [Expo CLI](https://docs.expo.dev/get-started/installation/), and a mobile simulator or the [Expo Go app](https://expo.dev/client).

---

## 📁 Project Structure

```
/components     # Reusable UI components
/screens        # Screens like Categories, Meals, Favorites
/data           # Static data
/store          # Redux store and slices
/models         # Data models (Meal, Category)
/App.js         # App entry point
```
