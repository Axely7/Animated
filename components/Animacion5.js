import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback, Animated } from 'react-native';

const Animacion5 = () =>{
    return (
        <View style={styles.contenedor}>
            <TouchableWithoutFeedback>
                <View style={styles.btn}>
                    <Text>Iniciar Sesión</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor:{
        alignItems: 'center'
    },
    btn:{
        backgroundColor: 'cornflowerblue',
        width: 280,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    texto:{
        color: '#FFF',
        fontWeight: 'bold',
        
    }
})

export default Animacion5