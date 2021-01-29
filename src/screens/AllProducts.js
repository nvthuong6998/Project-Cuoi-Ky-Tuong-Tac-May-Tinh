//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Button } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { DrawerActions } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import Categories from './Categories'
import Kits from './Kits'

const Tab = createMaterialTopTabNavigator();



const COLORS = {
    white: '#FFF',
    dark: '#000',
    primary: '#F9813A',
    secondary: '#fedac5',
    light: '#E5E5E5',
    grey: '#908e8c',
  };
// create a component
const AllProducts = ({navigation}) => {
    return (
        <>
        <SafeAreaView style={{flex:1, backgroundColor: COLORS.white}}>
            <View style={styles.header}>
                <Entypo 
                    onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                    name="menu" 
                    size={30}
                />
                <View>
                    
                    <View style={{flexDirection: 'row'}}>
                        
                        <Text style={{fontSize: 28, fontWeight: 'bold', marginLeft:10}}>BT-Store</Text>
                    </View>

                </View>

                    <Entypo  onPress={() => navigation.navigate('Cart')} name="shopping-cart" size={30} />
                
            </View>

            <View style={{
                marginTop: 40,
                flexDirection: 'row',
                paddingHorizontal:20,
            }}>

                <View style={styles.inputContainer}>
                    <MaterialIcons name="search" size={28} />
                    <TextInput  
                        style={{flex:1, fontSize:18}}
                        placeholder="Search..."
                    />
                </View>    

            </View>
            <Tab.Navigator>
                <Tab.Screen name="Categories" component={Categories} />
                <Tab.Screen name="Kits" component={Kits} />
            </Tab.Navigator>

        </SafeAreaView>



        </>
    );
};

// define your styles
const styles = StyleSheet.create({
    header: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    inputContainer: {
        flex:1,
        height: 40,
        borderRadius:10,
        flexDirection:'row',
        backgroundColor:COLORS.light,
        alignItems:'center',
        paddingHorizontal:20
    },
});

//make this component available to the app
export default AllProducts;
