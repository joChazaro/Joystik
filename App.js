import * as React from 'react';  
import { View, Text, Button } from 'react-native';  
import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SignUp from './src/screens/SignUp.js'
import userProfile from './src/screens/userProfile.js'
  
class HomeScreen extends React.Component {  
    render() {  
        return (  
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
                <Text>Home Screen</Text>  
                <Button  
                    title="Go to Profile"  
                    onPress={() => this.props.navigation.navigate('userProfile')}  
                />  

                <Text>Sign Up</Text>  
                <Button  
                    title="Go to Sign Up"  
                    onPress={() => this.props.navigation.navigate('SignUp')}
                />  
            </View>  
        );  
    }  
}  

class ProfileScreen extends React.Component {  
    render() {  
        return (  
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>  
                <Text>Profile Screen</Text>  
            </View>  
    );  
    }  
} 
  
const AppNavigator = createStackNavigator(  
    {  
        Home: HomeScreen,  
        Profile: ProfileScreen,
        SignUp: SignUp,
        userProfile: userProfile 
    },  
    
    {  
        initialRouteName: "Home"  
    }  
);  
  
const AppContainer = createAppContainer(AppNavigator);  
export default class App extends React.Component {  
    render() {  
        return <AppContainer />;  
    }  
}  