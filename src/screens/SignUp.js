import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Platform , Dimensions, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import {LinearGradient} from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable'


const email = 'abc';
const password = '123';


export default function SignIn({navigation}) {

  const [data, setData] = React.useState({
    email: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const handleOnClickLogin = () => {
      if(email == data.email && password == data.password){
          navigation.navigate('Home', {data: email});
      }else{
        alert('Error');
      }
  }

  const textInputEmail = (valEmail) => {
      if(valEmail.length != 0){
        setData({
          ...data,
          email: valEmail,
          check_textInputChange: true
        });
      } else{
        setData({
          ...data,
          email: valEmail,
          check_textInputChange: false
        });
      }
  }

  const textInputPassword = (valPassword) => {
    setData({
      ...data,
      password: valPassword,
    });
  }

  const textInputConfirmPassword = (valConfirmPassword) => {
    setData({
      ...data,
      confirm_password: valConfirmPassword,
    });
  }

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    });
  }

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry
    });
  }

    return (

      <View style={styles.container}>
          <StatusBar backgroundColor="#009387" barStyle="light-content" />
          <View style={styles.header}>
              <Text style={styles.text_header}>Welcome!</Text>
          </View>
          
          <Animatable.View style={styles.footer} animation="fadeInUpBig">
              <Text style={styles.text_footer}>Email</Text>
              <View style={styles.action}> 
                  <FontAwesome name="user-o" color="#05375a" size={20} />
                  <TextInput 
                      style={styles.textInput}
                      placeholder="Your Email" 
                      autoCapitalize="none"
                      onChangeText={(valEmail) => textInputEmail(valEmail)}
                  />

                  {data.check_textInputChange ?
                      <Animatable.View
                          animation="bounceIn"
                      >
                          <Feather 
                              name="check-circle"
                              color="green"
                              size={20}
                          />
                      </Animatable.View>

                      : null
                  }
              </View>

              <Text style={[styles.text_footer], {
                        marginTop: 35
              }}>Password</Text>

              <View style={styles.action}> 
                  <FontAwesome name="lock" color="#05375a" size={20} />
                  <TextInput 
                      style={styles.textInput}
                      placeholder="Your Password" 
                      autoCapitalize="none"
                      secureTextEntry={data.secureTextEntry ? true : false}
                      onChangeText={(valPassword) => textInputPassword(valPassword)}
                  />
                  <TouchableOpacity
                    onPress={updateSecureTextEntry}
                  >
                    {data.secureTextEntry ?
                      <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                      <Feather 
                          name="eye"
                          color="grey"
                          size={20}
                      />
                    }

                  </TouchableOpacity>
              </View>

              <Text style={[styles.text_footer], {
                        marginTop: 35
              }}>Confirm Password</Text>

              <View style={styles.action}> 
                  <FontAwesome name="lock" color="#05375a" size={20} />
                  <TextInput 
                      style={styles.textInput}
                      placeholder="Confirm Your Password" 
                      autoCapitalize="none"
                      secureTextEntry={data.confirm_secureTextEntry ? true : false}
                      onChangeText={(valConfirmPassword) => textInputConfirmPassword(valConfirmPassword)}
                  />
                  <TouchableOpacity
                    onPress={updateConfirmSecureTextEntry}
                  >
                    {data.secureTextEntry ?
                      <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                      <Feather 
                          name="eye"
                          color="grey"
                          size={20}
                      />
                    }

                  </TouchableOpacity>
              </View>

              <View style={styles.button}>
                    <LinearGradient
                        colors={['#08d4c4', '#01ab9d']}
                        style={styles.signIn}
                    >
                        <Text style={[styles.textSign,{
                              color:'#fff'
                        }]}>Sign Up</Text>
                    </LinearGradient>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignIn') }
                        style={[styles.signIn, {
                            borderColor: '#009387',
                            borderWidth: 1,
                            marginTop: 15
                        }]}
                    >
                        <Text style={[styles.textSign, {
                            color:'#009387'
                        }]}>Go back Sign In</Text>
                    </TouchableOpacity>      

              </View>


          </Animatable.View>
      </View>



    );

}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#009387',
    },
    header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50
    },

    footer:{
      flex: 3,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30,
    },
    text_header:{
      color: '#fff',
      fontWeight: 'bold',
      fontSize:30
    },
    text_footer:{
      color: '#05375a',
      fontSize:18
    },
    action:{
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom:5,
    },
    textInput:{
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a'
    },
    button:{
      alignItems: 'center',
      marginTop: 50,

    },
    signIn:{
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
    },
    textSign:{
      fontSize:18,
      fontWeight: 'bold',
    }

})

