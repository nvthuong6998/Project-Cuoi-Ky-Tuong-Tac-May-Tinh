//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions, TouchableOpacity, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo'
import RNPickerSelect from 'react-native-picker-select';

const height = Dimensions.get('screen').height;
// create a component
const DetailsProductHome = ({route, navigation}) => {
const {name, price, images, content} = route.params;
    console.log(name);
    return (
        <View style={styles.container}>
            
            <ImageBackground 
                source={images}
                style={styles.backgroundImage}
            >
            <TouchableOpacity
                style={styles.backIcon}
                onPress={() => navigation.goBack()}
            >
            <Entypo name="chevron-left" size={32} color="black" />
            
            </TouchableOpacity>
            

            </ImageBackground>

            

            <View
                style={styles.descriptionWrapper}
            >
            <View style={styles.heartWrapper}>
                <Entypo onPress={() => alert("OK")} name="heart" size={35} color="red" />
            </View>
            

            <View style={styles.desciptionTextWrapper}>
                <Text style={{fontSize: 20, color: 'red'}}> {price} </Text>
                <Text style={{paddingTop: 10,fontSize: 20, color: 'black', fontWeight:'bold'}}> {name} </Text>
                <Text style={{paddingTop: 10 }}>{content}</Text>
            </View>

            
            {/* <View style={{flexDirection: 'row',}}>

                <View style={{
                    backgroundColor: 'orange', 
                    alignItems: 'center',
                    justifyContent: 'center' ,
                    height: 100, 
                    marginHorizontal: 30,
                    paddingLeft: 40,
                    width: 170
                    }}>
                    <TouchableOpacity
                        style={{justifyContent:'center', alignItems: 'center'}}
                    >
                        <Text>64*GB</Text>
                    </TouchableOpacity>
                </View>


                <View style={{backgroundColor: 'blue',alignItems: 'center', justifyContent: 'center', paddingRight: '50%'}}>
                    <Button title="Add To Bag" />
                </View>
            </View> */}

            <View style={{paddingLeft: 40,paddingRight: 40,flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }}>
                
                <RNPickerSelect
                    textInputProps={{fontSize: 25, maxFontSizeMultiplier: 1.1,  color: 'black', paddingTop: 20, paddingLeft: 20}}
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: '32Gb', value: '32Gb' },
                        { label: '64Gb', value: '64Gb' },
                        { label: '128Gb', value: '128Gb' },
                        { label: '256Gb', value: '256Gb' },
                    ]}

                />


                <View style={{backgroundColor: 'black', justifyContent: 'center', alignItems: 'center', width: 150, height: 68}}>
                    <Button onPress={() => navigation.navigate('Cart')} color="white"  title="Add to Bag" />
                </View>

            </View>


            </View>

            

            
                
            
            
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor : '#ffffff',
    },
    backgroundImage:{
        flex: 2,
        height: height * 0.65,
        backgroundColor: '#E5E5E5',
        
    },
    descriptionWrapper: {
        flex:1,
        backgroundColor: 'white',
        marginTop:-20
    },
    backIcon:{
        marginLeft:20,
        marginTop:40
    },
    heartWrapper:{
        position:'absolute',
        right: 40,
        top: -30,
        width: 64,
        height: 64,
        backgroundColor: '#ffff',
        borderRadius: 64,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset:{
            width:0,
            height: 2
        },
        shadowOpacity:0.25,
        shadowRadius:3.84,
        elevation:5
    },
    desciptionTextWrapper:{
        marginTop: 30,
        marginHorizontal:30,
        color: 'red',
    },
    descriptionTitle:{
        fontSize: 20,
        color: 'red',
    },
    descriptionText:{
        margin: 20,
        
        fontSize:16,
        color: 'black',
    }
});

//make this component available to the app
export default DetailsProductHome;
