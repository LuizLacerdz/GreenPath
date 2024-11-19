import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function ResetSenha ({navigation}){
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          {/* Back button icon */}
        <Text style={styles.backButtonText}>{'<'}</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Esqueceu sua senha?</Text>
      <Text style={styles.subtitle}>
        Por favor, insira o email vinculado à sua conta
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        keyboardType="email-address"
      />
      <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Trocar Senha</Text>
      </TouchableOpacity>

      
      
        <Text style={styles.rememberText}>Lembrou da senha?{' '}</Text>
        <TouchableOpacity style={styles.footerText} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Faça seu login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  backButton: {
    fontSize: 24,
    color: '#018A23',
    position: 'absolute',
    top: 40,
    left: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    height: 50,
    backgroundColor: '#018A23',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerText: {
    textAlign: 'center',
    color: '#666',
  },
  loginText: {
    color: '#018A23',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  rememberText:{
    textAlign: 'center',
  }
});