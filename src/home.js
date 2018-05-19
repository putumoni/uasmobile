import React from 'react';
import { StyleSheet, Image, Text, View, TextInput, Button, TouchableOpacity,FlatList, ActivityIndicator, Alert, RefreshControl } from 'react-native';
import { StackNavigator } from 'react-navigation';

class Home extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: [],
            error: null,
            refreshing: false,
            ActivityIndicator_Loading: false,
        };
    }

    componentDidMount() {
        this.setState({ ActivityIndicator_Loading: true }, () => {
            this.setState({ refreshing: true });
            const url = "http://iuranhmj.000webhostapp.com/api/get_info.php";
            //this.setState({ loading: true });
            fetch(url)
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log("comp");
                    console.log(responseJson);
                    this.setState({
                        data: responseJson,
                        error: responseJson.error || null,
                        loading: false,
                        refreshing: false,
                        ActivityIndicator_Loading: false,

                    });
                }
                );
        });
    }
    _keyExtractor = (item, index) => item.id;

    GetIDFunction = (id_info,judul,isi) => {

        this.props.navigation.navigate('Details', {


            id_info : id_info,
            judul : judul,
            isi : isi,

        });
    }

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
              <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>Home</Text>
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
          <FlatList
              data={this.state.data}
              keyExtractor={this._keyExtractor}
              renderItem={({ item }) =>

                  <View style={styles.row}>
                      <View style={styles.info}>
                          <Text style={styles.Title}> {item.judul}</Text>
                      </View>
                      <View style={styles.info2}>
                        <TouchableOpacity activeOpacity={0.1} style={{width: '80%', height: '70%', backgroundColor: 'blue', borderRadius: 50}}
                        onPress={this.GetIDFunction.bind(this, item.id_info, item.judul, item.isi  )} >
                          <Text style={{color: 'white', fontWeight: 'bold', textAlign: 'center'}}>Details</Text>
                        </TouchableOpacity>
                      </View>
                  </View>

              }
              refreshControl={
                  <RefreshControl
                      refreshing={this.state.refreshing}
                      onRefresh={this.componentDidMount.bind(this)}
                  />
              }
          />

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

  },
  text: {
    textAlign: 'center', color: '#212121', fontWeight: 'bold', fontSize: 20
  },
  header:{
  flex: 0.1,
  backgroundColor: 'blue',
    flexDirection: 'row',
},
headerleft: {
  flex: 0.15,
  alignItems: 'center',
  justifyContent: 'center',
},
title: {
  flex: 0.70,
  alignItems: 'center',
  justifyContent: 'center',
},
headerRight: {
  flex: 0.15,
  alignItems: 'center',
  justifyContent: 'center',
},
info: {
    flex: 0.8,
    marginTop: 10,

},
info2: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center'
},
Title: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 5,
    color: '#000'
},
row: {
    backgroundColor: 'rgba(255,255,255, .5)',
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,

},

});

export default Home;
