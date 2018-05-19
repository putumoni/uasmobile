import React from 'react';
import { StyleSheet, Image, Text, View, TextInput, Button, TouchableOpacity,ActivityIndicator, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';

class Login extends React.Component {
  static navigationOptions = {
    header: null
  };
      constructor(){
          super();
          this.state={
              usename: '',
              password: '',
              ActivityIndicator_Loading: false,
          }
      }
      UserLoginFunction = () => {
          this.setState({ ActivityIndicator_Loading: true }, () => {
              fetch('http://iuranhmj.000webhostapp.com/api/login.php',
                  {
                      method: 'POST',
                      headers: {
                          'Accept': 'application/json',
                          'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                          username: this.state.username,
                          password: this.state.password,
                      })

                  }).then((response) => response.json())
                  .then((responseJson) => {
                      this.setState({ ActivityIndicator_Loading: false });

                      if (responseJson === 'Login berhasil!') {
                          this.props.navigation.navigate('Tabs');
                      }
                      else {
                          Alert.alert(responseJson);
                      }

                  }).catch((error) => {
                      console.error(error);
                      this.setState({ ActivityIndicator_Loading: false });
                  });

          });
      }
    render() {
      return (
      <View style={styles.containerMain}>

          <View style={{ alignItems:'center', justifyContent: 'center' }}>
          <Image
              source={require('./img/1.png')}//image
              style={{width: 150, height: 150, marginTop: 30 }}
            />
          </View>

          <Text style={{ fontSize: 10, margin: 10, color: 'black', textAlign: 'center' }}>
          </Text>
            <View>
            <TextInput style={styles.containerInput}placeholder="username"
            autoCorrect={false}
            onSubmitEditing={() => this.passInput.focus()}
            onChangeText={(TextInputText) => this.setState({ username: TextInputText })}/>
            </View>

            <View>
            <TextInput style={styles.containerInput} placeholder="password"
            ref={(input) => this.passInput = input}
            onChangeText={(TextInputText) => this.setState({ password: TextInputText })}
            underlineColorAndroid = "transparent"
            autoCapitalize={'none'}
            autoCorrect={false}/>
            </View>

          <View>
          <TouchableOpacity onPress={this.UserLoginFunction} style={styles.button}>
          <Text style={{ fontSize: 15, color: 'white', textAlign: 'center' }} >login</Text>
          </TouchableOpacity>
          </View>


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
    alignItems:'center',

  },

  input: {

      backgroundColor: 'white', //merah agak muda
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 10,
      marginRight: 10,
    //  bordeRadius: 100
    },

  containerInput: {
    borderColor:'blue',
    backgroundColor: 'white', //merah muda
    marginBottom: 10,
    height: 50,
    width: 300,
    textAlign: 'center'
  },
  button: {
    width: 180,
    height: 50,
    marginTop: 50,
    backgroundColor: 'blue',
    alignItems:'center',
    justifyContent: 'center',
    borderRadius: 10,

  },
  text: {
    textAlign: 'center', color: '#212121', fontWeight: 'bold', fontSize: 20

  }
});

export default Login;
