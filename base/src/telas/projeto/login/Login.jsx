import React, { useState } from 'react';
import { KeyboardAvoidingView, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Axios from 'axios';
import styles from './Styles';

export default function Login({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    try {
      //Verificar  se os campos foram preenchidos
      if (!email || !senha) {
        Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      }

      //Objeto para enviar para a API
      const data = {
        nome: nome,
        email: email,
        senha: senha,
      };

      // Enviar os dados para a API
      const response = await Axios.post('http://10.0.2.2:8085/api/validateprojeto', data);

      //Verificar se o Login afetuado com Sucesso
      if (response.status === 200) {
        setNome('');
        setEmail('');
        setSenha('');

        navigation.navigate('Home');
      } else {
        Alert.alert('Erro', 'Email ou Senha incorretos, Por favor, tente novamente');
      }
    } catch {
      if (error.response && error.response.status === 401) {
        Alert.alert('Erro', 'Email ou senha incorretos, por favor, tente novamente');
      } else {
        Alert.alert('Erro', 'Ocorreu um erro ao fazer o Login, Por favor, tente novamente');
      }
    }
  };

  return (
    <>
      <KeyboardAvoidingView style={styles.container}>
        <Image style={styles.containerLogo} source={require('../../../../res/img/logo.png')} />

        <TextInput
          style={styles.input}
          placeholder="Nome"
          leftIcon={{ type: 'font-awesome', name: 'envelope', color: 'white' }}
          onChangeText={setNome}
          value={nome}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          onChangeText={setSenha}
          value={senha}
          secureTextEntry
        />

        <TouchableOpacity onPress={() => navigation.navigate('ResetSenha')}>
          <Text style={styles.ButtonCreate}>Esqueceu a Senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonSubmit} onPress={handleLogin}>
          <Text style={styles.submitText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.ButtonCreate}>
            <Text style={styles.color}>Você ainda não tem uma conta?</Text> Cadastre-se
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </>
  );
}
