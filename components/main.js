import React, {Component} from 'react';
import {View, StyleSheet, Text, TextInput, TouchableHighlight, ImageBackground} from 'react-native';

class Main extends Component{
  state = {name: ''};
  /*
  onPress = () => {
      this.props.navigation.navigate('home', {name: this.state.name});
  }
  */
  onChangeText = question => this.setState({question}); /** aqui creo tienes que tomar el valor del text input */
  render(){
      return (
          <View style={styles.container}>
               <ImageBackground style={styles.background} source={require('../img/fondo.jpg')}>
               <Text style={styles.title}>Chat en vivo</Text>
                  <View style={styles.secondContainer}>
                      <TextInput
                          onChangeText={this.onChangeText}
                          style={styles.textInput}
                          placeholder="Ingrese su pregunta aquí..."
                          placeholderTextColor="#ffffff"
                          value={this.state.question}
                      />
                      <TouchableHighlight style={styles.sendButton}>
                          <Text style={styles.sendButtonText}>Preguntar...</Text>
                      </TouchableHighlight>
                  </View>
               </ImageBackground>
          </View>
      );
  }
}

const offset = 24;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    secondContainer: {
        flex: 1,
        paddingTop: offset*4
    },
    background: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },  
    textInput: {
        height: offset*2,
        margin: offset,
        paddingHorizontal: offset,
        color: '#ffffff',
        borderColor: '#ffffff',
        borderStyle: 'solid',
        borderWidth: 1,
        paddingTop: offset
    },
    title: {
        marginTop: offset*2,
        fontSize: offset*2,
        color: '#ffffff',
        borderColor: '#ffffff',
        borderStyle: 'solid',
        alignContent: 'center'
    },
    sendButtonText: {
        fontFamily: 'Avenir',
        textAlign: 'center',
        fontSize: 17,
        color: 'white'
    },
    sendButton: {
        width: 325,
        height: 55,
        paddingTop: 15,
        borderRadius: 27,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#ffffff',
        marginTop: 80
    },
  buttonText: {
    marginLeft: offset,
    fontSize: offset,
  },
});

 export default Main;