import React, { useState } from 'react';
import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View, Alert, SafeAreaView,ScrollView, Image } from 'react-native';
import axios from 'axios';
import styles from './Styles';

export default function Cadastro({ navigation }) {
  const [mensagem, setMensagem]= useState('');
    const [formData, setFormData]= useState({
        id:'',
        nome:'',
        email:'',
        senha:'',
    });

    const handleInputChange = (name, value) =>{
        setFormData({...formData,[name]:value});
    };



    //Validar que os campos não são vazios
    const handleCadastrar = async()=>{
        if(!formData.nome || !formData.email || !formData.senha){
            setMensagem('Todos os campos são obrigatorios')
        }

        
        //envio informações para API Cadastrar nobanco de dados
        try{
            await axios.post('http://10.0.2.2:8085/api/cadastroprojeto', formData)
            Alert.alert('Cadastro realizado com sucesso');
            navigation.navigate('Login');
        }
        catch(error){
            if (error.response.status === 401) {
                Alert.alert('O email '+formData.email+' Já existe na base de dados')
            }
            else{
                console.log(error)
                Alert.alert('Ocorreu um erro ao Cadastrar o usuário, tente novamente')
            }
        }

    };
  

  return (
    <>
 <KeyboardAvoidingView style={styles.container}>


        <TextInput
            style={styles.input}
            placeholder="Nome"
            onChangeText={(text) => handleInputChange ('nome', text)}
            leftIcon={{ type: 'font-awesome', name: 'envelope', color: 'white' }}
          />

          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(text) => handleInputChange ('email', text.toLowerCase())}
            leftIcon={{ type: 'font-awesome', name: 'envelope', color: 'white' }}
            keyboardType="email-address"
          />

          <TextInput
            style={styles.input}
            placeholder="Senha"
            onChangeText={(text) => handleInputChange ('senha', text)}
            leftIcon={{ type: 'font-awesome', name: 'lock', color: 'white' }}
            secureTextEntry
          />


          <TouchableOpacity style={styles.buttonSubmit} onPress={handleCadastrar}>
          <Text style={styles.submitText}>Cadastre-se</Text>
          </TouchableOpacity>
            {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text>:null}


          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.ButtonCreate}>
              <Text style={styles.color}>Você já tem uma conta?</Text> Login{' '}
            </Text>
          </TouchableOpacity>

                    
            </KeyboardAvoidingView>
      
    </>
  );
}
