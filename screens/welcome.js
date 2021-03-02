import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

class welcome extends Component{
  state = {
    hello:'',
  }
  newbie = () => {
      alert('Welcome to the darkside!')
   }
  pro = () => {
      alert("Welcome. We've been expecting your return.")
   }
    render() {
        return (
           <View style = {styles.container}>
                <TouchableOpacity
                style = {styles.HelloButton}
                onPress = {
                () => this.newbie(this.state.email, this.state.password)
                }>
                <Text style = {styles.HelloButtonText}> Newbie </Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                style = {styles.HelloButton}
                onPress = {
                () => this.pro()
                }>
                <Text style = {styles.HelloButtonText}> Pro </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default welcome

const styles = StyleSheet.create({
  container: {
  flexDirection: 'column',
  paddingTop: '50%',
  
   },

   HelloButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 40,
      height: 90,
      alignContent: 'center',

   },
   HelloButtonText:{
      color: 'white',
      alignSelf: 'center',
      textAlignVertical: 'center',
      fontSize: 30,
      margin:5,

   }
})