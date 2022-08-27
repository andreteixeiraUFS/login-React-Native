import { StyleSheet, View} from 'react-native';
import React, { useState } from "react"
import Logo from './components/Logo'
import Perfil from './components/perfil'
import Form from './components/formulario'

export default function App() {
  return (
    <View style={styles.container}>
      <Logo/>
      <Perfil/>
      <Form/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
