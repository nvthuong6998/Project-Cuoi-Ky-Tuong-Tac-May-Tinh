//import liraries
import React, { Component ,useState} from 'react';
import { View, Text, StyleSheet, Picker } from 'react-native';
import {CheckBox} from 'react-native-elements'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import Fontisto from 'react-native-vector-icons/Fontisto'
import RNPickerSelect from 'react-native-picker-select';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';


// create a component
const Checkout = ({navigation}) => {

    const [isSelectedCashOn, setSelectedCashOn] = useState(false);
    const [isSelectedApplePay, setSelectedApplePay] = useState(false);
    const [isSelectedDebit, setSelectedDebit] = useState(false);


    return (



        <View style={{flex:1,}}> 
            <View style={styles.header}>
                <Entypo name="chevron-left" size={32} color="black" onPress={() => navigation.goBack()} />
                <Text style={{ fontSize: 25, paddingLeft: 20, fontWeight: 'bold' }}>Checkout</Text>
                
                <View style={{ paddingLeft: 20, paddingTop: 20}}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>Payment Method</Text>
                    <View style={{width: 370, }}>
                        <CheckBox 
                            tintColor="#aaaaaa"
                            title="Cash on Delivery"
                            checkedIcon="check"
                            uncheckedIcon="circle"
                            checkedColor="green"
                            uncheckedColor="#aaaa"
                            checked={isSelectedCashOn}
                            onPress={() => setSelectedCashOn(!isSelectedCashOn)}
                            size={40}
                            iconRight={true}
                            textStyle={{fontSize: 20}}
                            containerStyle={{justifyContent: 'center', alignItems: 'center'}}
                        />
                    </View>

                    <View style={{width: 370, paddingTop: 10}}>
                        <CheckBox 
                            tintColor="#aaaaaa"
                            title="Apple Pay"
                            checkedIcon="check"
                            uncheckedIcon="circle"
                            checkedColor="green"
                            uncheckedColor="#aaaa"
                            checked={isSelectedApplePay}
                            onPress={() => setSelectedApplePay(!isSelectedApplePay)}
                            size={40}
                            iconRight={true}
                            textStyle={{fontSize: 20}}
                            containerStyle={{justifyContent: 'center', alignItems: 'center'}}

                        />
                    </View>

                    <View style={{width: 370, paddingTop: 10}}>
                        <CheckBox 
                            tintColor="#aaaaaa"
                            title="Debit/ Credit Card"
                            checkedIcon="check"
                            uncheckedIcon="circle"
                            checkedColor="green"
                            uncheckedColor="#aaaa"
                            checked={isSelectedDebit}
                            onPress={() => setSelectedDebit(!isSelectedDebit)}
                            size={40}
                            iconRight={true}
                            textStyle={{fontSize: 20}}
                            containerStyle={{justifyContent: 'center', alignItems: 'center'}}
                        />
                    </View>

                    <View style={{width: 360 ,flexDirection: 'row',  justifyContent: 'center', alignItems: 'center'}}>
                        <Text
                            style={{paddingTop: 20,alignItems: 'center' ,fontSize: 20, paddingLeft: 15, fontWeight: 'bold'}}
                        >Shipping Address:      </Text>

                        
                        <RNPickerSelect

                            textInputProps={{fontSize: 20, maxFontSizeMultiplier: 1.1,  color: 'black', paddingTop: 20}}
                            onValueChange={(value) => console.log(value)}
                            items={[
                                { label: 'Primary Address', value: 'primary' },
                                { label: 'Baseball', value: 'baseball' },
                                { label: 'Hockey', value: 'hockey' },
                            ]}
                            
                        />

                    </View>

                    <Text style={{fontSize:20, paddingTop: 40, paddingLeft: 15, fontWeight: 'bold'}}>Coupon</Text>

                    <View style={{paddingTop:10,flexDirection: 'row',color:'black' ,justifyContent: 'center', alignItems: 'center'}} >
                        <TextInput 
                            placeholder="Enter Code"
                            style={{
                                fontSize: 25, 
                                color: 'black', 
                                backgroundColor: 'white',
                                fontWeight: 'bold',
                                height: 50,
                                width: 340
                                }}
                            autoCapitalize="none"
                        />
                        <Fontisto name="player-settings" size={32} color="black" />
                    </View>


        
                    
                </View>
            </View>
            <View style={styles.footer}>
                <View style={{flexDirection: 'row', paddingLeft: 25, paddingTop: 20, }}>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Delivery Fee</Text>

                        <Text style={{paddingHorizontal: 170,fontSize: 18, fontWeight: 'bold'}}>Free</Text>

                </View>

                <View style={{flexDirection: 'row', paddingLeft: 25, paddingTop: 20, }}>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Total</Text>

                        <Text style={{fontSize: 18, fontWeight: 'bold',  paddingLeft: 230}}>$690</Text>

                </View>

                            <View style={{alignItems: 'center'}}>
                                <TouchableOpacity 
                                        style={{
                                            paddingBottom: 10,
                                            paddingHorizontal: 20,
                                            width: 300,
                                            height: 50,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderRadius: 10,
                                            borderColor: 'black',
                                            borderWidth: 1,
                                            marginTop: 15,
                                            backgroundColor: 'black'
                                        }}
                                        onPress={() => alert('DONE')}
                                    >
                                    <Text style={{
                                            fontSize:18,
                                            fontWeight: 'bold',
                                            color:'white'
                                    }}>Checkout</Text>
                                    </TouchableOpacity>
                            </View>

            </View>
        </View>

    );
};

// define your styles
const styles = StyleSheet.create({
   header:{
       flex: 0.8,
       paddingTop: 30,
       backgroundColor: '#E5E5E5',
       justifyContent: 'flex-start',
   },
   footer:{
       flex: 0.2,
       backgroundColor: 'white'
   },
   container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },

});

//make this component available to the app
export default Checkout;
