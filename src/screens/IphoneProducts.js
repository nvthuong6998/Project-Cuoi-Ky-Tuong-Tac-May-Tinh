//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, FlatList, Dimensions, ScrollView} from 'react-native';
import {  TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import {tabs, ORANGE, popularPhone} from '../../data'
import { DrawerActions } from '@react-navigation/native';

const COLORS = {
    white: '#FFF',
    dark: '#000',
    primary: '#F9813A',
    secondary: '#fedac5',
    light: '#E5E5E5',
    grey: '#908e8c',
  };

// create a component
const IphoneProducts = ({navigation}) => {

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

    const [newReleases, setNewReleases] = useState([
        {
            id: '1',
            name: 'Iphone XR Red ',
            price: '$500',
            content: 'This is Iphone 6S plus',
            images: require('../../assets/iphoneXR-red.png'),
        },
        {
            id: '2',
            name: 'iPhone 12 Pro',
            price: '$999',
            content: 'Get up to $370 off with Apple Trade In*',
            images: require('../../assets/iphone12-pro.jpg'),
        },
        {
            id: '3',
            name: 'Iphone XR Black',
            price: '$500',
            content: 'This is Iphone 6S plus',
            images: require('../../assets/iphoneXR-black.png'),
        },
        {
            id: '4',
            name: 'iPhone 12',
            price: '$699 ',
            content: 'Get up to $250 off with Apple Trade In*',
            images: require('../../assets/iphone12-pro-2.jpg'),
        },
        {
            id: '5',
            name: 'Iphone XR Yellow',
            price: '$500',
            content: 'This is Iphone 6S plus',
            images: require('../../assets/iphoneXR-yellow.png'),
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
            name: 'Iphone XR White',
            price: '$500',
            content: 'This is Iphone 6S plus',
            images: require('../../assets/iphoneXR-white.png'),
        },
        {
            id: '8',
            name: 'iPhone 11 - Red',
            price: '$599 ',
            content: 'Get up to $210 off with Apple Trade In*',
            images: require('../../assets/iphone11-red.png'),
        },
        {
            id: '9',
            name: 'Iphone XR Coral',
            price: '$500',
            content: 'Iphone XR Coral',
            images: require('../../assets/iphoneXR-coral.png'),
        },
        {
            id: '10',
            name: 'iPhone 11 - Yellow',
            price: '$599 ',
            content: 'Get up to $210 off with Apple Trade In*',
            images: require('../../assets/iphone11-yellow.png'),
        },
        {
            id: '11',
            name: 'Iphone XR Blue',
            price: '$500',
            content: 'This is Iphone 6S plus',
            images: require('../../assets/iphoneXR-blue.png'),
        },
        {
            id: '12',
            name: 'HomePod Mini',
            price: '$399',
            content: 'HomePod Mini',
            images: require('../../assets/homepod-mini.jpg'),
        },
        {
            id: '13',
            name: 'Iphone 6S plus',
            price: '$500',
            content: 'This is Iphone 6S plus',
            images: require('../../assets/iphone12.png'),
        },
        {
            id: '14',
            name: 'Iphone 6S plus',
            price: '$500',
            content: 'This is Iphone 6S plus',
            images: require('../../assets/iphone12.png'),
        },
        {
            id: '15',
            name: 'Iphone 6S plus',
            price: '$500',
            content: 'This is Iphone 6S plus',
            images: require('../../assets/iphone12.png'),
        },
        {
            id: '16',
            name: 'Iphone 6S plus',
            price: '$500',
            content: 'This is Iphone 6S plus',
            images: require('../../assets/iphone12.png'),
        },
    ]);



    return (

        // <SafeAreaView style={{flex: 1}}>
        //         <FlatList 
        //             data={tabs}
        //             keyExtractor={(item,index) => `${item} - ${index}`}
        //             horizontal
        //             showsHorizontalScrollIndicator={false}
        //             renderItem={({item: tab}) =>{
        //                 return(
        //                     <TouchableOpacity onPress={() => setSelectedTab(tab)}>
        //                         <View style={styles.pill, 
        //                             {backgroundColor: selectedTab === tab ? ORANGE : 'transparent'}}>
        //                             <Text style={[styles.pillText], {color: selectedTab === tab ?'white':'#000'}}>{tab}</Text>
        //                         </View>
        //                     </TouchableOpacity>
        //                 );
        //             }}
        //         />
        // </SafeAreaView>

        <SafeAreaView style={{flex: 1, backgroundColor:COLORS.white}}>
            <View style={styles.header}>
                <Entypo 
                    onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                    name="menu" 
                    size={30}
                />
                <View>
                    
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 28, fontWeight: 'bold', marginLeft:10}}>iPhone</Text>
                    </View>

                </View>

                    <Entypo  onPress={() => navigation.navigate('Cart')} name="shopping-cart" size={30} />
                
                   {/* <Image                    
                    style={{height:50, width:50, borderRadius:25}}    
                    source={{uri: 'https://scontent.fsgn2-1.fna.fbcdn.net/v/t31.0-8/26678623_2046389712264828_3783574204918386633_o.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=_CiEmbpF6ZMAX-FPRmU&_nc_ht=scontent.fsgn2-1.fna&oh=502cb9e81019d9bc719c94f3823efd10&oe=6010B2C7'
                    }} /> */}
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

                <View style={styles.sortBtn}>
                    <MaterialIcons name="tune" size={28} color={COLORS.white} />
                </View>

            </View>

            <View>
                <Text style={{fontSize: 24, fontWeight: 'bold', marginLeft:20, paddingTop: 10}}>New Release</Text>
                <Text style={{fontSize: 16,  marginLeft:20, paddingTop: 5}}>2020/2021</Text>
            </View>

            <ScrollView>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <FlatList 
                    numColumns={2}
                    showsHorizontalScrollIndicator={false}
                    data={newReleases}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('DetailsProductHome', item)}
                        >
                            <Image 
                                style={{
                                    width: 160,
                                    height: 190,
                                    borderWidth:2,
                                    borderColor: '#E5E5E5',
                                    resizeMode: 'contain',
                                    backgroundColor: 'white',
                                    margin:5,
                                    paddingLeft:15,
                                    borderRadius: 20
                                }}
                                source={item.images}
                                key={item.id}
                            />
                            <Text>{item.name}</Text>
                            <Text  style={{color: 'red'}}>{item.price}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
            </ScrollView>

         

        </SafeAreaView>
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
    sortBtn:{
        width: 40,
        height: 40,
        marginLeft:10,
        backgroundColor: COLORS.dark,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems:'center',
    },
    categoriesListContainer: {
        paddingVertical:30,
        alignItems: 'center',
        paddingHorizontal:20,
    },
    categoryBtn:{
        height:45,
        width:120,
        marginRight:7,
        borderRadius:30,
        alignItems: 'center',
        paddingHorizontal: 5,
        flexDirection: 'row'
    },

});

//make this component available to the app
export default IphoneProducts;
