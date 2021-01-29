//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
Ionicons

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
                <AntDesign name="apple-o" size={30} />

                <Text style={{ paddingLeft: 20,fontSize: 22, fontWeight: 'bold'}}>All</Text>

                <Text style={{fontSize: 16, paddingLeft: 200}}>113.643</Text>
                <MaterialIcons onPress={() => navigation.navigate('All')}  name="chevron-right" size={30} />

        </View>   

        <View
            style={styles.item}
        >
                <MaterialIcons name="laptop-mac" size={30} />

                <Text style={{ paddingLeft: 20,fontSize: 20, fontWeight: 'bold'}}>Mac</Text>

                <Text style={{fontSize: 16, paddingLeft: 205}}>3.687</Text>
                <MaterialIcons onPress={() => navigation.navigate('Macbook')} name="chevron-right" size={30} />

        </View>   

        <View
            style={styles.item}
        >
                <MaterialCommunityIcons name="tablet-ipad" size={30} />

                <Text style={{ paddingLeft: 20,fontSize: 20, fontWeight: 'bold'}}>iPad</Text>

                <Text style={{fontSize: 16, paddingLeft: 205}}>2.365</Text>
                <MaterialIcons  name="chevron-right" size={30} />

        </View>   

        <View
            style={styles.item}
        >
                <MaterialIcons  name="phone-iphone" size={30} />

                <Text style={{ paddingLeft: 20,fontSize: 20, fontWeight: 'bold'}}>iPhone</Text>

                <Text style={{fontSize: 16, paddingLeft: 180}}>2.256</Text>
                <MaterialIcons onPress={() => navigation.navigate('IphoneProducts')}  name="chevron-right" size={30} />

        </View>   

        <View
            style={styles.item}
        >
                <Ionicons name="ios-watch-outline" size={30} />

                <Text style={{ paddingLeft: 20,fontSize: 20, fontWeight: 'bold'}}>Watch</Text>

                <Text style={{fontSize: 16, paddingLeft: 185}}>1.934</Text>
                <MaterialIcons  name="chevron-right" size={30} />

        </View>   

        <View
            style={styles.item}
        >
                <MaterialIcons name="desktop-mac" size={30} />

                <Text style={{ paddingLeft: 20,fontSize: 20, fontWeight: 'bold'}}>TV</Text>

                <Text style={{fontSize: 16, paddingLeft: 220}}>1.090</Text>
                <MaterialIcons  name="chevron-right" size={30} />

        </View>   

        <View
            style={styles.item}
        >
                <MaterialIcons name="music-video" size={30} />

                <Text style={{ paddingLeft: 20,fontSize: 20, fontWeight: 'bold'}}>Music</Text>

                <Text style={{fontSize: 16, paddingLeft: 200}}>978</Text>
                <MaterialIcons  name="chevron-right" size={30} />

        </View>   

        
        <View
            style={styles.item}
        >
                <MaterialIcons name="contact-support" size={30} />

                <Text style={{ paddingLeft: 20,fontSize: 20, fontWeight: 'bold'}}>Support</Text>

                <Text style={{fontSize: 16, paddingLeft: 180}}>978</Text>
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
