//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, Button , Animated} from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {LinearGradient} from 'expo-linear-gradient';
import Swipeable from 'react-native-gesture-handler/Swipeable'

// create a component
const Cart = ({navigation}) => {

    const handleDelete = (index) => {
        const arr = [...dataTrend];
        arr.splice(index, 1);
        setDataTrend(arr);
    }

    const [dataTrend, setDataTrend] = useState([
        {
            id: '1',
            name: 'iPhone 12 Pro',
            price: '$999',
            content: 'Get up to $370 off with Apple Trade In*',
            images: require('../../assets/iphone12-pro.jpg'),
        },
        {
            id: '2',
            name: 'iPhone 12',
            price: '$699 ',
            content: 'Get up to $250 off with Apple Trade In*',
            images: require('../../assets/iphone12-pro-2.jpg'),
        },
        {
            id: '3',
            name: 'iPhone 11 - Red',
            price: '$599 ',
            content: 'Get up to $210 off with Apple Trade In*',
            images: require('../../assets/iphone11-red.png'),
        },
        {
            id: '4',
            name: 'iPhone 11 - Red',
            price: '$599 ',
            content: 'Get up to $210 off with Apple Trade In*',
            images: require('../../assets/iphone11-red.png'),
        },
        {
            id: '5',
            name: 'iPhone 11 - Yellow',
            price: '$599 ',
            content: 'Get up to $210 off with Apple Trade In*',
            images: require('../../assets/iphone11-yellow.png'),
        },
        {
            id: '6',
            name: 'iPhone 11 - Black',
            price: '$599 ',
            content: 'Get up to $210 off with Apple Trade In*',
            images: require('../../assets/iphone11-black.png'),
        },
        {
            id: '7',
            name: 'iPhone 11 - White',
            price: '$599 ',
            content: 'Get up to $210 off with Apple Trade In*',
            images: require('../../assets/iphone11-white.png'),
        },
        {
            id: '8',
            name: 'iPhone 11 - Green',
            price: '$599 ',
            content: 'Get up to $210 off with Apple Trade In*',
            images: require('../../assets/iphone11-green.png'),
        },
        {
            id: '9',
            name: 'iPhone 11 - Purple',
            price: '$599 ',
            content: 'Get up to $210 off with Apple Trade In*',
            images: require('../../assets/iphone11-purple.png'),
        },
    ]);

    const lefSwipe = (progress, dragX) => {

        const scale = dragX.interpolate({
            inputRange: [-100, 0],
            outputRange: [-1, 0],
        });

        return(
            <TouchableOpacity style={{paddingTop: 20}} onPress={() => handleDelete()}>
                <View style={{backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', width: 100, height:80,}}>
                    <Animated.Text style={{transform: [{scale: scale}]}} ><MaterialIcons name="delete" size={40} /> </Animated.Text>
                </View>
            </TouchableOpacity>
        )
    }

    

    return (
        <View style={{flex: 1, backgroundColor: '#E5E5E5'}}>
        <View style={{paddingLeft: 360}}>
            <MaterialIcons onPress={() => navigation.goBack()} style={{justifyContent: 'center' ,paddingTop: 30}} name="cancel" size={35} />
        </View>

        <SafeAreaView style={{backgroundColor: '#E5E5E5', flex: 1}}>
            <View style={styles.header}>
                <FlatList 
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{paddingBottom: 80}}
                    data={dataTrend}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                            <Swipeable renderLeftActions={lefSwipe}>
                                <View
                                    style={styles.item}
                                >
                                    <Image style={{height:80, width:80}} source={item.images} />

                                    <View style={{
                                        height: 100,
                                        marginLeft: 10,
                                        paddingVertical:20,
                                        flex: 1,
                                    }}>

                                    <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.name}</Text>
                                    <Text style={{fontSize: 17, fontWeight: 'bold', color:'red'}}>{item.price}</Text>
                                    </View>


                                </View>                                
                            </Swipeable>
                    )}
                    ItemSeparatorComponent= {() => {
                        return <View ></View>
                    }}
                />
            </View>
            <View style={{backgroundColor: '#E5E5E5'}}>
                    <View
                        style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginVertical: 15,
                                
                        }}>
                            <Text style={{fontSize: 18, fontWeight: 'bold', paddingLeft: 30}}>
                                Total Price
                            </Text>
                            <Text style={{fontSize: 18, fontWeight: 'bold', paddingRight: 30}}>$50</Text>
                            </View>
                            
                            <View style={{marginHorizontal: 30}}>
                                <TouchableOpacity
                                    style={{
                                        width: '100%',
                                        height: 50,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: 10,
                                        borderColor: 'black',
                                        borderWidth: 1,
                                        marginTop: 15,
                                        backgroundColor: 'black'
                                    }}
                                    onPress={() => navigation.navigate('Checkout')}
                                >
                                <Text style={{
                                          fontSize:18,
                                          fontWeight: 'bold',
                                          color:'white'
                                }}>Checkout</Text>
                                </TouchableOpacity>
                            </View>
                    </View>
        </SafeAreaView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    header:{
        flex: 1,
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        backgroundColor: '#E5E5E5'
    },
    item:{
        height:100,
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
export default Cart;
