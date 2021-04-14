import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TopBar from '../../components/TopBar';
import axios from 'axios';
import Constants from 'expo-constants';
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { Thumbnail, List, ListItem, Separator, Row } from 'native-base';

export default function LibraryScreen({ navigation }) {
  return (
    <View style={{backgroundColor:""}}>
      <View style={styles.container} >
        <TopBar handleProfilePress={handleProfilePress} handleHomePress={handleHomePress} />
        <Text style={styles.title}>Library</Text>
      </View>
      <View>


      </View>
      <View >
        <Collapse>
          <CollapseHeader>
          <Text style={styles.tab}>Liked Games</Text>
          </CollapseHeader>
          <CollapseBody >
            <ListItem style={styles.gametile}>
              <Text>Game 1</Text>
            </ListItem>
            <ListItem style={styles.gametile}>
              <Text>Game 2</Text>
            </ListItem>
            <ListItem  style={styles.gametile}>
              <Text>Game 3</Text>
            </ListItem>
          </CollapseBody>
        </Collapse>
      </View>

      <View>
        <Collapse>
        
          <CollapseHeader>
          <Text style={styles.tab}>Disliked Games</Text>
          </CollapseHeader>
          <CollapseBody >
            <ListItem style={styles.gametile}>
              <Text>Game 1</Text>
            </ListItem>
            <ListItem style={styles.gametile}>
              <Text>Game 2</Text>
            </ListItem>
            <ListItem  style={styles.gametile}>
              <Text>Game 3</Text>
            </ListItem>
          </CollapseBody>
        </Collapse>
      </View>
    </View>

  )

  function handleProfilePress() {
    navigation.navigate('Profile');
  }

  function handleHomePress() {
    navigation.navigate('Home');
  }


}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  title: {
    backgroundColor:'#F06795',
    marginTop: Constants.statusBarHeight,
    fontSize: 20,
    color: "azure",
    width: "auto",
  },

  tab: {
    marginTop: Constants.statusBarHeight,
    height:"auto",
    width:"auto",
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#F06795',
    fontSize: 25,
    color: "azure",
    textAlign:'center',

  },
  gametile:{height:200, 
    width:"auto", 
    backgroundColor: 'aliceblue',
    alignItems:'center',
    borderColor: "darkslateblue"
  }
})