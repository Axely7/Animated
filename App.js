import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
//import Animacion1 from './components/Animacion';
//import Animacion2  from './components/Animacion2';
//import Animacion3 from './components/Animacion3';
//import Animacion4 from './components/Animacion4';
import Animacion5 from './components/Animacion5';

const App = () => {

  return (
    <>
      <View style={styles.contenido}>
        <Animacion5></Animacion5>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contenido:{
    marginTop: 100
  }
});

export default App;
