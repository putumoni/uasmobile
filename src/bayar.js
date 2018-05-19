import React from 'react';
import { StyleSheet, Image, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

class Bayar extends React.Component {

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
                  <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>Bayar</Text>
                </View>
                <View style={styles.headerRight}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')} >
                  <Text style={{color: '#fff', fontSize:20, fontWeight: 'bold'}}> Add </Text>
                  </TouchableOpacity>
                </View>
        </View>
              <View style={{marginTop: 20 }}>
                <View>
                <TextInput style={styles.box}placeholder="tahun akademik"/>
                </View>
                <View>
                <TextInput style={styles.box}placeholder="tanggal bayar"/>
                </View>

                <View>
                <TextInput style={styles.box}placeholder="semester"/>
                </View>
                <View>
                <TextInput style={styles.box}placeholder="jumlah pembayaran"/>
                </View>
                <View>
                <TextInput style={styles.boxfoto}placeholder="foto struck"/>
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
    borderRadius: 5,
    backgroundColor: 'white',
    alignItems:'center',
    textAlign: 'center',

  },
  boxfoto: {
    width: 310,
    height: 150,
    marginTop: 5,
    borderRadius: 5,
    backgroundColor: 'white',
    alignItems:'center',
    textAlign: 'center',

  },
  button: {
    width: 120,
    height: 40,
    marginTop: 25,
    backgroundColor: 'blue',
    alignItems:'center',
    justifyContent: 'center',
    borderRadius: 5,

  },
  text: {
    textAlign: 'center', color: '#212121', fontWeight: 'bold', fontSize: 20

  },
  header:{
  flex: 0.70,
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

export default Bayar;
