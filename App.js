import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import ReadScreen from './screens/readscreen';
import WriteScreen from './screens/writescreen';

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  'Read a Story': {screen: ReadScreen},
  'Write a Story': {screen: WriteScreen},
},
{defaultNavigationOptions: ({navigation}) =>( {
  tabBarIcon: ({}) => {
    const routeName = navigation.state.routeName;
    if(routeName === "Read a Story"){
      return(
        <Image
          source = {require('./assets/book.png')}
          style={{
            width: 40,
            height: 40
          }}
        />
      )
    }
    else if(routeName === "Write a Story"){
      return(
        <Image
          source = {require('./assets/searchingbook.png')}
          style={{
            width: 40,
            height: 40
          }}
        />
      )
    }
  }
})}
);

const AppContainer = createAppContainer(TabNavigator);