import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function PaginaIncial ({navigation}) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../res/img/jogandoLixo.png')} // Replace with your image URL
        style={styles.topImage}
      />
      <Text style={styles.title}>Recicle.me</Text>
      <TouchableOpacity style={styles.buttonPrimary} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonTextPrimary}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonSecondary} onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.buttonTextSecondary}>Quero me cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  topImage: {
    width: 200, // Adjust width
    height: 100, // Adjust height
    resizeMode: 'contain',
    marginBottom: 20,
  },
  logo: {
    width: 300, // Adjust width
    height: 300, // Adjust height
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 40,
  },
  buttonPrimary: {
    backgroundColor: '#FF7F00',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonTextPrimary: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonSecondary: {
    borderColor: '#A3D900',
    borderWidth: 2,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonTextSecondary: {
    color: '#A3D900',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
