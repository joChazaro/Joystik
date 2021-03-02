// import {createStackNavigator,} from 'react-navigation'
// import React, { Component } from 'react'
// import SignUp from '.app/screens/SignUp'
// import {StyleSheet, Text, View} from 'react-native';

// // const App = createStackNavigator({
// //    Login: {screen: Signup },
// //    Home: {screen: HomeScreen}
// // });

// const styles = StyleSheet.create({
//    container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//    },
// });

// export default SignUp
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import SignUp from './screens/SignUp.js'
import new_page from './screens/new_page.js'


// const App = StackNavigator () => {
//    return (
//       <SignUp />
//    )
// }
// export default App
const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
   },
 });

const AppNavigator = createStackNavigator({
   Signup: {
      screen: SignUp
   },
   Home: {
      screen: new_page
   }
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
   render() {
     return <NavigationContainer> {AppContainer}</NavigationContainer>;
   }
 }

//export default function App() {
//   return (
//     <NavigationContainer>{
//       <SignUp />
//    }</NavigationContainer>
//   );
// }