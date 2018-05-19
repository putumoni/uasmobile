import React from 'react';
import { StyleSheet, Image, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

class Home extends React.Component {
  
    render() {
      return (
      <View style={styles.containerMain}>

        <View style={{ alignItems:'center', justifyContent: 'center' }}>
        <Image
            source={require('./img/1.png')}//image
            style={{width: 150, height: 150, marginTop: 80 }}
          />
        </View>

      <View style={styles.box}>
          <Text style={{ fontSize: 20, margin: 10, color: 'black', textAlign: 'center' }}>
          Nama</Text>

          <View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Ubahprofile')} style={styles.button}>
          <Text style={{ fontSize: 15, color: 'white', textAlign: 'center' }} >ubah</Text>
          </TouchableOpacity>
          </View>

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

  },
  box: {
    width: 310,
    height: 250,
    margin: 30,
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems:'center',

  },
  button: {
    width: 120,
    height: 40,
    marginTop: 150,
    backgroundColor: 'blue',
    alignItems:'center',
    justifyContent: 'center',
    borderRadius: 10,

  },
  text: {
    textAlign: 'center', color: '#212121', fontWeight: 'bold', fontSize: 20

  }
});

export default Home;
