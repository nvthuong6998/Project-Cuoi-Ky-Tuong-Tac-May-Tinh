//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, SafeAreaView, Image } from 'react-native';
import {
    Avatar, Title, Text, TouchableRipple, Caption
} from 'react-native-paper'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { ScrollView } from 'react-native-gesture-handler';

// create a component
const AccountSettings = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>

                {/* <View style={{flexDirection: '20', backgroundColor: 'red'}}>
                    <MaterialCommunityIcons size={30} name="menu" onPress={() => navigation.openDrawer() } />
                </View> */}
        
                <View style={styles.userContainer}>

                    <View style={{flexDirection: 'row', marginTop: 15}}>
                        <Avatar.Image 
                            source={{
                                uri: 'https://scontent.fsgn2-1.fna.fbcdn.net/v/t31.0-8/26678623_2046389712264828_3783574204918386633_o.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=_CiEmbpF6ZMAX-FPRmU&_nc_ht=scontent.fsgn2-1.fna&oh=502cb9e81019d9bc719c94f3823efd10&oe=6010B2C7',
                            }}
                            size={80}
                        />
                        
                        <View style={{marginLeft: 20}}>
                            <Title style={styles.title}>
                                    Nguyễn Văn Thương                            
                            </Title>
                            <Caption style={styles.caption}>Nhân viên</Caption>
                        </View>

                    </View>

                </View>

                <View style={styles.userInfoSection}>
                
                        <View style={styles.row}>
                        <MaterialCommunityIcons name="map-marker-radius"  color="#777777" size={20}/>
                            <Text style={{color: '#777777', marginLeft: 20}}>Viet Nam, Binh Dinh</Text>
                        </View>

                        <View style={styles.row}>
                        <MaterialCommunityIcons name="email"  color="#777777" size={20}/>
                            <Text style={{color: '#777777', marginLeft: 20}}>nvthuong.17it@vku.udn.vn</Text>
                        </View>

                        <View style={styles.row}>
                        <MaterialCommunityIcons name="phone"  color="#777777" size={20}/>
                            <Text style={{color: '#777777', marginLeft: 20}}>0868.821.267</Text>
                        </View>

                        <View style={styles.row}>
                        <Fontisto name="date"  color="#777777" size={20}/>
                            <Text style={{color: '#777777', marginLeft: 20}}>06/09/1998</Text>
                        </View>

                </View>

                <View style={styles.infoBoxWrapper}>
                            <View style={styles.infoBox}>
                                <Title>$1500</Title>
                                <Caption>Wallet</Caption>
                            </View>
                            <View style={styles.infoBox}>
                                <Title>12</Title>
                                <Caption>Orders</Caption>
                            </View>
                </View>

                <ScrollView>
                <View style={styles.menuWrapper}>
                            <TouchableRipple style={{borderColor: 'red'}} onPress={() => {}}>
                                <View style={styles.menuItem}>
                                    <MaterialCommunityIcons style={{paddingTop: 40}} name="heart-outline" color="#FF6347" size={25}/>                                   
                                    <Image style={{height: 100, width:80}} source={require('../../assets/iphone12-pro.jpg')} />
                                    <Text style={{paddingTop: 40, fontSize:24}}>Iphone 12 Pro max</Text>
                                </View>
                            </TouchableRipple>


                            <TouchableRipple onPress={() => {}}>
                                <View style={styles.menuItem}>
                                    <MaterialCommunityIcons style={{paddingTop: 40}} name="heart-outline" color="#FF6347" size={25}/>                                   
                                    <Image style={{height: 100, width:80}} source={require('../../assets/iphoneSE-red.png')} />
                                    <Text style={{paddingTop: 40, fontSize:24}}>Iphone 12 Pro max</Text>
                                </View>
                            </TouchableRipple>

                            <TouchableRipple onPress={() => {}}>
                                <View style={styles.menuItem}>
                                    <MaterialCommunityIcons style={{paddingTop: 40}} name="heart-outline" color="#FF6347" size={25}/>                                   
                                    <Image style={{height: 100, width:80}} source={require('../../assets/watch-nike.jpg')} />
                                    <Text style={{paddingTop: 40, fontSize:24}}>Apple Watch Nike</Text>
                                </View>
                            </TouchableRipple>
                </View>
                </ScrollView>


        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 5
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: 'bold',
    },
    row:{
        flexDirection: 'row',
        marginBottom:10,
        marginTop: 10
    },
    infoBoxWrapper:{
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
    },
    infoBox:{
        width: '50%',
        alignItems:'center',
        justifyContent: 'center',
        borderRightColor: '#ffffff',
        borderRightWidth: 1
    },
    menuWrapper:{
        marginTop: 10,
    },
    menuItem:{
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuItemText:{
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26
    }
});

//make this component available to the app
export default AccountSettings;
