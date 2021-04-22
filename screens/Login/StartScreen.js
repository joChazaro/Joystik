import React from 'react'
import Background from './Background.js';
import Paragraph from './Paragraph.js';
import Logo from './Logo.js';
import Header from './Header.js';
import Button from './Button.js';


export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Header>Welcome to</Header>
      <Logo />
      
      <Paragraph>
        To discover new games please login or sign up.
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button>
    </Background>
  )
}
