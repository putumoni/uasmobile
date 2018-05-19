import React from 'react';
import { StyleSheet, Image, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

class Home extends React.Component {

    render() {
      return (
      <View style={styles.containerMain}>
      <View style={{marginTop: 60}}>
          <View>
          <TextInput style={styles.box}placeholder="email"/>
          </View>
          <View>
          <TextInput style={styles.box}placeholder="no hp"/>
          </View>

      </View>
          <View style={{ alignItems: 'center' }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={styles.button}>
          <Text style={{ fontSize: 15, color: 'white', textAlign: 'center' }} >simpan</Text>
          </TouchableOpacity>
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
    marginTop:25,
    alignItems: 'center',

  },
  box: {
    width: 310,
    height: 50,
    marginTop: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems:'center',
    textAlign:'center',
    borderColor:'blue',

  },
  button: {
    width: 120,
    height: 40,
    marginTop: 100,
    backgroundColor: 'blue',
    alignItems:'center',
    justifyContent: 'center',
    borderRadius: 5,

  },
  text: {
    textAlign: 'center', color: '#212121', fontWeight: 'bold', fontSize: 20

  }
});

export default Home;
