import * as React from 'react';  
import { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';  

export default class userProfile extends Component {
    render() {
    return (
        <View>
            <View style ={styles.container}>
            <Image source = {require ('../image/Userpro.jpg')}
            style = {{width: 130, height: 150}}/>
                <Text style= {styles.textPrimary}>{'\n'}{'\n'}Following:</Text>
            </View>

            <View style ={styles.container}>
                <Text style= {styles.textPrimary}>Followers:</Text>
            </View>

            <View style ={styles.container}>
                <Text style= {styles.textPrimary}>Comments:</Text>
            </View>

            <View style ={styles.container}>
                    <Text style= {styles.textPrimary}>Liked:</Text>
            </View>

            <View style ={styles.container}>
                    <Text style= {styles.textPrimary}>Swiped:</Text>
            </View>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
       backgroundColor:'gray',
       alignItems:'center',
       fontSize: 32, 
       paddingTop: 60
    },

    photo: {
        height: 100,
        borderRadius: 20,
    },
 })