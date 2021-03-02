import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class SignUp extends Component {
   state = {
      email: '',
      password: ''
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   login = (email, pass) => {
      alert('email: ' + email + ' password: ' + pass)
   }
   render() {
      return (
         <View style = {styles.container}>

           <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = " First Name"
               placeholderTextColor = "#9a73ef"
               onFocus="this.placeholder = ''"
               onBlur = "'First Name'"
               autoCapitalize = "Words"
               onChangeText = {this.handleFirstName}/>
               
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = " Last Name"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "Words"
               onChangeText = {this.handleLastName}/>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = " Date of Birth"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.DateofBirth}/>  

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = " Gender"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleGender}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = " Username"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleUsername}/>   
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = " Email"
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
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
         </View>
      )
   }
}
export default SignUp

const styles = StyleSheet.create({
   container: {
      paddingTop: 60
   },
   input: {
     paddingTop: 10,
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 2
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
      alignContent: 'center',
      alignSelf:'center',
   },
   submitButtonText:{
      color: 'white'
   }
})