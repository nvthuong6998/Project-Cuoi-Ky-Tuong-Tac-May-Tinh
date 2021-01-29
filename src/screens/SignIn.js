import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Platform , Dimensions, StatusBar, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import {LinearGradient} from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable'

import {AuthContext} from '../components/context'
import Users from '../../users'


export default function SignIn({navigation}) {

  const [data, setData] = React.useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidEmail: true,
    isValidPassword: true,
  });

  const {signIn} = React.useContext(AuthContext);


  const textInputEmail = (valEmail) => {
      if(valEmail.trim().length >= 4){
        setData({
          ...data,
          email: valEmail,
          check_textInputChange: true,
          isValidEmail: true
        });
      } else{
        setData({
          ...data,
          email: valEmail,
          check_textInputChange: false,
          isValidEmail: false
        });
      }
  }

  const textInputPassword = (valPassword) => {
    if(valPassword.trim().length >= 8){
      setData({
        ...data,
        password: valPassword,
        isValidPassword: true
      });
    }else{
        setData({
            ...data,
            password: valPassword,
            isValidPassword: false
        });
    }
   
  }

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    });
  }

  const handleValidEmail = (val) =>{
      if(val.trim().length >= 4) {
          setData({
              ...data,
              isValidEmail: true
          });
      } else {
          setData({
            ...data,
            isValidEmail: false
          })
      }
  }

  const loginHandle = (email, password) => {

    const foundUser = Users.filter( item => {
        return email == item.email && password == item.password;
    } );

    if ( data.email.length == 0 || data.password.length == 0 ) {
        Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
            {text: 'Okay'}
        ]);
        return;
    }

    if ( foundUser.length == 0 ) {
        Alert.alert('Invalid User!', 'Username or password is incorrect.', [
            {text: 'Okay'}
        ]);
        return;
    }
    signIn(foundUser);
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
                      onEndEditing={(e) => handleValidEmail(e.nativeEvent.text)}
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

              {data.isValidEmail ? null :

              <Animatable.View animation="fadeInLeft" duration={500}>
                  <Text style={styles.errorMsg}>Username must be 4 characters long</Text>
              </Animatable.View>

              }

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
                  
              {data.isValidPassword ? null : 

              <Animatable.View animation="fadeInLeft" duration={500}>
                  <Text style={styles.errorMsg}>Passwrod must be 8 characters long</Text>
              </Animatable.View>

              }

              <View style={styles.button}>
                  <TouchableOpacity
                          onPress={() => {loginHandle(data.email, data.password)}}
                          style={styles.signIn}
                      >
                    <LinearGradient
                        colors={['#08d4c4', '#01ab9d']}
                        style={styles.signIn}
                    >
                     
                          <Text style={[styles.textSign,{
                                color:'#fff'
                          }]}>Sign In</Text>
                      
                    </LinearGradient>
                  </TouchableOpacity>



                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignUp') }
                        style={[styles.signIn, {
                            borderColor: '#009387',
                            borderWidth: 1,
                            marginTop: 15
                        }]}
                    >
                        <Text style={[styles.textSign, {
                            color:'#009387'
                        }]}>Sign Up</Text>
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
    },
    errorMsg: {
      color: '#FF0000',
      fontSize: 14,
    },

})

