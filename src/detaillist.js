import React from 'react';
import { StyleSheet, Image, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

class Detaillist extends React.Component {
    render() {
      return (
      <View style={styles.containerMain}>
      <View style={styles.header}>
          <View style={styles.headerleft}>
            <Image
                source={require('./img/1.png')}//image
                style={{width: 35, height: 35 }}
              />
            </View>
            <View style={styles.title}>
              <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>Detail Pembayaran</Text>
            </View>
            <View style={styles.headerRight}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')} >
              <Image
                  source={require('./img/1.png')}//image
                  style={{width: 35, height: 35 }}
                />
              </TouchableOpacity>
            </View>

      </View>
      <View style={styles.box}>

      <Text style={{ fontSize: 20, margin: 10, color: 'black', textAlign: 'center' }}>
      detail Pembayaran Iuran</Text>

      </View>

          <Text style={{ fontSize: 10, margin: 10, color: 'black', textAlign: 'center' }}>
          </Text>

        </View>
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#E0F2F1',
    flex: 1,
    flexDirection: 'column',
    marginTop: 25,
    alignItems: 'center',

  },
  box: {
    width: 310,
    height: 250,
    marginTop: 25,
    borderRadius: 5,
    backgroundColor: 'white',
    alignItems:'center',

  },
  text: {
    textAlign: 'center', color: '#212121', fontWeight: 'bold', fontSize: 20
  },
  header:{
  flex: 0.20,
  backgroundColor: 'blue',
    flexDirection: 'row',
},
headerleft: {
  flex: 0.15,
  alignItems: 'center',
  justifyContent: 'center',
},
title: {
  flex: 0.7,
  alignItems: 'center',
  justifyContent: 'center',
},
headerRight: {
  flex: 0.15,
  alignItems: 'center',
  justifyContent: 'center',
}
});

export default Detaillist;
