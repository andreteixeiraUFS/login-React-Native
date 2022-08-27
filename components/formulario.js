import { StyleSheet, Text, TextInput, Linking, View, Button, Modal, Pressable, Alert, TouchableOpacity } from 'react-native';
import React, { useState } from "react"


export default function Form() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View >
      <TextInput
        style={styles.entradas}
        placeholder="Matrícula ou SIAPE"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.entradas}
        placeholder="Senha"
        secureTextEntry={true}
      />

     
        <Text style={styles.links}
          onPress={() => Linking.openURL('http://google.com')}>
          esqueci minha senha
        </Text>

        <Text style={styles.links}
          onPress={() => Linking.openURL('http://google.com')}>
          quero me cadastrar
        </Text>
     


      <Button
        title="Login com Alert"
        onPress={() => Alert.alert('login será feito')} />

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View >
          <View >
            <Text>Eu sou modal textual, eu poderia exibir qualquer componente aqui</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text >Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Button style={styles.botao}
        title="Login com modal"
        onPress={() => setModalVisible(true)} />

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botao}>Press Here</Text>
      </TouchableOpacity>
    </View>);
}

const styles = StyleSheet.create({
  botao: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  entradas: {
    borderRadius: 50,
    borderColor: "#ffffff",
    backgroundColor: "#f6f6f6",
    margin: 10,
    height: 40,
    textAlign: 'center'
  },
  links: {
    color: 'grey',
    textDecorationLine: 'underline',
    alignSelf: 'flex-end'
  },
});