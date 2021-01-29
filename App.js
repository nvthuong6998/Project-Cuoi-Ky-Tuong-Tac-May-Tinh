import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect } from 'react';
import {   
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  ActivityIndicator, } from 'react-native';
import CheckLogin from './src/components/CheckLogin'
import AppIntroSlider from 'react-native-app-intro-slider'
import {slides} from './slideData'

const App = () =>{
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };

  const onSkip = () => {
    setShowRealApp(true);
  };

  const RenderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
        <Image style={{
          height: 500,width: 450
        }} source={item.image} />
        <Text style={{fontSize:30, fontWeight: 'bold'}} >{item.title}</Text>
        <Text style={{fontSize: 18, }}>{item.text}</Text>
        <Text style={{fontSize: 18, }}>{item.text2}</Text>
      </View>
    );
  };

  return(
    <>
      {showRealApp ? (
      
            <CheckLogin />
            
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={true}
          onSkip={onSkip}
        />
      )}
    </>
  );
}

export  default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
