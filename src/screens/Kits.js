//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'


const COLORS = {
    white: '#FFF',
    dark: '#000',
    primary: '#F9813A',
    secondary: '#fedac5',
    light: '#E5E5E5',
    grey: '#908e8c',
  };
// create a component
const Categories = ({navigation}) => {
    return (
    <ScrollView style={{flex: 1}}>
        

        <View
            style={styles.item}
        >
                <Feather name="headphones" size={30} />

                <Text style={{ paddingLeft: 20,fontSize: 20, fontWeight: 'bold'}}>AirsPods Pro</Text>

                <Text style={{fontSize: 16, paddingLeft: 155}}>3</Text>
                <MaterialIcons onPress={() => navigation.navigate('AirsPod')} name="chevron-right" size={30} />

        </View>   

        <View
            style={styles.item}
        >
                <Feather name="briefcase" size={30} />

                <Text style={{ paddingLeft: 20,fontSize: 20, fontWeight: 'bold'}}>Phone Case</Text>

                <Text style={{fontSize: 16, paddingLeft: 145}}>100</Text>
                <MaterialIcons  name="chevron-right" size={30} />

        </View>   

        <View
            style={styles.item}
        >
                <Feather name="speaker" size={30} />

                <Text style={{ paddingLeft: 20,fontSize: 20, fontWeight: 'bold'}}>HomePod </Text>

                <Text style={{fontSize: 16, paddingLeft: 180}}>2</Text>
                <MaterialIcons  name="chevron-right" size={30} />

        </View>   

    </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    item:{
        height: 70,
        elevation: 15,
        borderRadius: 10,
        backgroundColor: '#ffff',
        marginVertical: 10,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center'
    }
});

//make this component available to the app
export default Categories;
