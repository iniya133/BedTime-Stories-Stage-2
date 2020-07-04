import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';

export default class WriteScreen extends React.Component{
  render(){
    return(
      <View>
        <Header
          centerComponent={{
            text: 'BedTime Stories', style: {color: '#fff', fontSize: 20}
          }}
        />

        <TextInput
            style={styles.inputBox}
            multiline = {true}
            numberOfLines = {23}
            maxLength = {40}
            defaultValue = {'Write your story here!'}
        />

        <TouchableOpacity style = {styles.submitButton}>
          <Text style = {styles.buttonText}> Submit Your Story! </Text>
        </TouchableOpacity>
      </View>  
    );
  }
}

const styles = StyleSheet.create({
  inputBox: {
    marginTop: '20%',
    width: '80%',
    alignSelf: 'center',
    textAlign: 'left',
    textAlignVertical: 'top',
    borderWidth: 4,
    borderColor: '#00CCFF'
  },
  submitButton: {
    backgroundColor: '#2277AA',
    marginTop: '5%',
    width: '50%',
    alignSelf: 'center',
    height: '10%',
    borderRadius: 20
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    marginTop: '10%'
  }
});