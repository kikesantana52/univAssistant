import React, {Component} from 'react';
import {View, StyleSheet, ImageBackground, Text, TouchableHighlight} from 'react-native';

class Home extends Component{

    goToMainScreen(){
        this.props.navigation.navigate('Main');
    }

    render(){
        return(
            <View style={styles.container}>
                <ImageBackground style={styles.backgroundImage} source={require('../img/fondo.jpg')}>
                    <View style={styles.secContainer}>
                        <Text style={styles.mainText}>Univ-A-ssistant</Text>
                            <TouchableHighlight style={styles.homeButton} onPress={this.goToMainScreen.bind(this)}>
                                <Text style={styles.homeButtonText}>Iniciar</Text>
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
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    secContainer: {
        flex: 1,
        paddingTop: offset*6
    },  
    backgroundImage: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    mainText: {
        color: '#ffffff',
        borderColor: '#ffffff',
        borderStyle: 'solid',
        paddingTop: 50,
        fontSize: 50
    },
    homeButton: {
        width: 325,
        height: 55,
        paddingTop: 15,
        borderRadius: 27,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#ffffff',
        marginTop: 80
    },
    homeButtonText: {
        fontFamily: 'Avenir',
        textAlign: 'center',
        fontSize: 17,
        color: 'white'
    }
});

export default Home;