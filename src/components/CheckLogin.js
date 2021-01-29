import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {LoginStack} from '../navigations/LoginStack'
import {MyDrawer} from '../navigations/DrawerNavigator'

import {AuthContext} from '../components/context'
import AsyncStorage from '@react-native-community/async-storage'


export default function CheckLogin() {

  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  const initialLoginState = {
      isLoading: true,
      userName: null,
      userToken: null,
  };

  const loginReducer = (prevState, action) => {
      switch (action.type) {
          case 'RETRIEVE_TOKEN':
            return{
              ...prevState,
              userToken: action.token,
              isLoading: false,
            };

          case 'LOGIN':
            return{
              ...prevState,
              userName: action.id,
              userToken: action.token,
              isLoading: false,
            };
          
          case 'LOGOUT':
            return{
              ...prevState,
              userName: null,
              userToken: null,
              isLoading: false,
            };
          
          case 'REGISTER':
            return{
              ...prevState,
              userName: action.id,
              userToken: action.token,
              isLoading: false,
            };
      }
  }

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);


  const authContext = React.useMemo(() => ({
      signIn: async(foundUser) => {
          // setUserToken('abc');
          // setIsLoading(false);

          const userToken = String(foundUser[0].userToken);
          const userName = foundUser[0].userName;
         
            try{
              await AsyncStorage.setItem('userToken', userToken);
            }catch(e){
              console.log(e);
            }

          dispatch({type: 'LOGIN', id: userName, token: userToken});
      },

      signOut: async() => {
          // setUserToken(null);
          // setIsLoading(false);
          try {
              await AsyncStorage.removeItem('userToken');
          } catch (e) {
            console.log(e);
          }
          dispatch({type: 'LOGOUT'})
      },
      signUp: () => {
          // setUserToken('abc');
          // setIsLoading(false);
      },
  }));

  useEffect( () => {
      setTimeout( async() => {
          let userToken;
          userToken = null;
          try {
            userToken = await AsyncStorage.getItem('userToken');
          } catch (e) {
              console.log(e);
          }
          dispatch({type: 'REGISTER', token: userToken});
      }, 1000);
  }, []);

  if(loginState.isLoading){
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large" />
        </View>
    );
  }

  return (
	    <AuthContext.Provider value={authContext} >
          <NavigationContainer style={styles.container}>
          {loginState.userToken != null ? (
            <MyDrawer />

          ):
          <LoginStack />
          }
          </NavigationContainer>
      </AuthContext.Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
