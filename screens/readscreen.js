import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';

export default class ReadScreen extends React.Component{
  render(){
    return(
      <View>
        <Header
          centerComponent={{
            text: 'BedTime Stories', style: {color: '#fff', fontSize: 20}
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Text: {
    flex: 1,
    alignSelf: "center",
    marginTop: 100
  },
});