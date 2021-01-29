import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../screens/Home'
import DetailsProductHome from '../screens/DetailsProductHome'
import Cart from '../screens/Cart'
import Checkout from '../screens/Checkout'
import IphoneProducts from '../screens/IphoneProducts'




const Stack = createStackNavigator();

function StackNavigator(){
    return(
        <Stack.Navigator
            headerMode="none"
        >
            <Stack.Screen name="Home"  component={Home} />
            <Stack.Screen name="DetailsProductHome"  component={DetailsProductHome} />
            <Stack.Screen name="IphoneProducts"  component={IphoneProducts} />
            <Stack.Screen name="Cart"  component={Cart} />
            <Stack.Screen name="Checkout"  component={Checkout} />

        </Stack.Navigator>
    );
}

export {StackNavigator};