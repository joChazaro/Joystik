// at this moment, this page will "alert" user that they have logged in by an alert
// TO DO: redirect user to HOME PAGE or "new_page" for prototype page
import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class LoginScreen extends Component {
  state = {
    email:'',
    password:'',
  }
  handleEmail = (text) => {
    this.setState({ email: text })
   }
  handlePassword = (text) => {
    this.setState({ password: text })
   }
  login = (email, pass) => {
    alert('Enter at your own risk')
  }
  static navigationOptions = {
        title: 'Login',
    };
    render() {
        return (
          <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = " Email or Username"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = " Password"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/> 
            <TouchableOpacity
               style = {styles.loginButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.loginButtonText}> Login </Text>
            </TouchableOpacity>
         </View>
        );
    }

    // checkLogin = () => {
    //     const { navigate } = this.props.navigation;
    //     if(email == "user" && password == "pass"){
    //         navigate('new_page')
    //     }
    // }
}

export default LoginScreen

const styles = StyleSheet.create({
   container: {
      paddingTop: 60
      // fontSize:'20',
   },
   input: {
     paddingTop: 10,
      margin: 15,
      height: 60,
      borderColor: '#7a42f4',
      borderWidth: 2
      // fontSize:'20',
   },

   loginButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 20,
      height: 75,
      alignContent: 'center',

   },
   loginButtonText:{
      color: 'white',
      alignSelf: 'center',
      textAlignVertical: 'center',
      fontSize: 35,
      margin:10,

   }
})