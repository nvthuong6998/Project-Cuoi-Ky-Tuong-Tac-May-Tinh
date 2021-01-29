import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'

const Stack = createStackNavigator();

function LoginStack(){
    return(
        <Stack.Navigator
            headerMode="none"
        >
            <Stack.Screen name="SignIn" component={SignIn} /> 
            <Stack.Screen name="SignUp" component={SignUp} /> 
        </Stack.Navigator>
    );
}

export {LoginStack};