import React from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigator,TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json

import Login from './src/login';
import Home from './src/home';
import Profile from './src/profile';
import Ubahprofile from './src/ubahprofile';
import ListBayar from './src/listbayar';
import Bayar from './src/bayar';
import Details from './src/detaillist';

export default class App extends React.Component {
  render(){
    return(
      <AppRouter />
    );
  }
}

const LoginStack = StackNavigator({
  Login: {screen: Login},
},{
  navigationOptions:{
  header: null,
}
});

const HomeStack = StackNavigator ({
  Home : {screen: Home},
  Profile: {screen: Profile},
  Ubahprofile: {screen: Ubahprofile},
},{
  navigationOptions:{
  header: null,
}
});
const BayarStack = StackNavigator({
  Bayar: {screen: Bayar},
},{
  navigationOptions:{
    header:null,
  }
});

const ListBayarStack = StackNavigator({
  ListBayar: {screen: ListBayar},
  Details: {screen: Details},
},{
  navigationOptions:{
    header:null,
  }
});

const ScreenTab = TabNavigator(
  {
    Home: {screen: HomeStack},
    Bayar: {screen: BayarStack},
    ListBayar: {screen: ListBayarStack},
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition : 'bottom',
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'grey',
      style:{
        backgroundColor: 'white',
      }
    },
    animationEnable: true,
    swipeEnable: true,
  }
);

export const AppRouter = StackNavigator(
  {
    //Login : {screen: LoginStack},
    Tabs : {screen: ScreenTab},
  },
  {
    navigationOptions:{
      header: null,
      gestureEnable: false,
    }
  }
);
