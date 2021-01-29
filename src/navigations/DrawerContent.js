import React from 'react'
import {View, StyleSheet, Text, } from 'react-native'
import {Avatar, Title, Caption,  Drawer, } from 'react-native-paper'
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'

import {AuthContext} from '../components/context'

function DrawerContent(props) {

    const {signOut} = React.useContext(AuthContext);

    return(
        <View style={{flex:1}}>
            
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection: 'row', marginTop: 15}}>
                            <Avatar.Image 
                                source={{
                                    uri: 'https://scontent.fsgn2-1.fna.fbcdn.net/v/t31.0-8/26678623_2046389712264828_3783574204918386633_o.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=_CiEmbpF6ZMAX-FPRmU&_nc_ht=scontent.fsgn2-1.fna&oh=502cb9e81019d9bc719c94f3823efd10&oe=6010B2C7'
                                }}
                                size={40}
                                
                            />
                                <View style={{marginLeft: 15, flexDirection: 'column'}}>
                                    <Title style={styles.title}>Nguyễn Văn Thương</Title>   
                                    <Caption style={styles.caption}>nvthuong.17it2t@vku.udn.vn</Caption>
                                </View>
                        </View>              
                             
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <MaterialCommunityIcons
                                    name="home"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Home"
                            onPress={ () => props.navigation.navigate('Home') }
                        />

                        <DrawerItem 
                            
                            icon={({color, size}) => (
                                <AntDesign
                                    name="apple-o"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="ALL"
                            onPress={ () => props.navigation.navigate('AllProducts') }
                        />   

                        

                        <DrawerItem 
                            
                            icon={({color, size}) => (
                                <MaterialCommunityIcons
                                    name="account"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Account Settings"
                            onPress={ () => props.navigation.navigate('AccountSettings') }
                        />          



                        <DrawerItem 
                            
                            icon={({color, size}) => (
                                <MaterialCommunityIcons
                                    name="heart"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="My Wishlist"
                            onPress={ () => alert('OK') }
                        />

                        <DrawerItem 
                            icon={({color, size}) => (
                                <MaterialCommunityIcons
                                    name="message-text-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Support"
                            onPress={ () => alert('OK') }
                        />

                    </Drawer.Section>
                    
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <MaterialCommunityIcons
                            name="exit-to-app"
                            color={color}
                            size={size}
                            
                        />
                    )}
                    label="Log out"
                    onPress={() => {signOut()}}
                />
                
            </Drawer.Section>
            
        </View>   
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title:{
        fontSize:16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize:14,
        lineHeight: 14,
    },
    row:{
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section:{
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection:{
        marginTop: 15,
    },
    bottomDrawerSection:{
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal:16,
    }
});

export { DrawerContent};