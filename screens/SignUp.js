import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from 'react-native-popup-menu';

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
               placeholderTextColor = 'black'
               //onFocus="this.placeholder = ' '"
               //onBlur = "'First Name'"
               autoCapitalize = "Words"
               onChangeText = {this.handleFirstName}/>
               
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = " Last Name"
               placeholderTextColor = 'black'
               autoCapitalize = "Words"
               onChangeText = {this.handleLastName}/>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = " Date of Birth"
               placeholderTextColor = 'black'
               autoCapitalize = "none"
               onChangeText = {this.DateofBirth}/>  
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = " Username"
               placeholderTextColor = 'black'
               autoCapitalize = "none"
               onChangeText = {this.handleUsername}/>  
        
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = " Email"
               placeholderTextColor = 'black'
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = " Password"
               placeholderTextColor = 'black'
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
            
            <MenuProvider>
               <Menu>
                  <MenuTrigger>
                     <Text style={styles.input}>Gender</Text>
                  </MenuTrigger>

               <MenuOptions>
                  <MenuOption value={"Male"}>
                     <Text style={styles.menuContent}>Male</Text>
                  </MenuOption>
                  <MenuOption value={"Female"}>
                     <Text style={styles.menuContent}>Female</Text>
                  </MenuOption>
               </MenuOptions>
               </Menu>
            </MenuProvider>
            
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
      backgroundColor:'turquoise',
      alignItems:'center',
      paddingTop: 23,
      fontSize: 32 
   },
   input: {
     paddingTop: 10,
      margin: 15,
      height: 40,
      borderColor: 'black',
      borderWidth: 2,
      
   },
   submitButton: {
      backgroundColor: 'gray',
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
const menuProviderStyles = {
  menuProviderWrapper: styles.container,
  backdrop: styles.backdrop,
};