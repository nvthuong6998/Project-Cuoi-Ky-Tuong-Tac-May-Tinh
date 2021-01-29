import React from 'react'
import {Text} from 'react-native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {DrawerContent} from './DrawerContent'
import Home from '../screens/Home'
import {StackNavigator} from '../navigations/StackNavigator'
import AllProducts from '../screens/AllProducts'
import All from '../screens/All'
import Macbook from '../screens/Macbook'
import AirsPod from '../screens/AirsPod'
import AccountSettings from '../screens/AccountSettings'

const Drawer = createDrawerNavigator();

function MyDrawer({navigation}){
    return(
        <Drawer.Navigator
            drawerContent={props => <DrawerContent {...props} /> }
        >
            
            <Drawer.Screen name="StackNavigator" component={StackNavigator} />
            <Drawer.Screen name="AllProducts" component={AllProducts} />
            <Drawer.Screen name="All" component={All} />
            <Drawer.Screen name="Macbook" component={Macbook} />
            <Drawer.Screen name="AirsPod" component={AirsPod} />
            <Drawer.Screen name="AccountSettings" component={AccountSettings} />

        </Drawer.Navigator>
    );
}

export {MyDrawer};