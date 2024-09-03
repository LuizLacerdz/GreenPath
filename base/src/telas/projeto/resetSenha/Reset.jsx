import React, { useState } from 'react';
import { View, Button, TextInput, Alert, Image, StyleSheet, ScrollView, KeyboardAvoidingView, Text } from 'react-native';
import axios from 'axios';
import { placeholder } from '../../../node_modules - Copia/@babel/types/lib/index-legacy';


const ResetSenha = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [novaSenha, setNovaSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');
    const [mostrarFormulario, setMostrarFormula] = useState('');

    const handleResetSenha = async () => {
        try {
            //verificar se o email está preenchido
            if (!email) {
                Alert.alert("Por favor, insira seu email")
            }

            const data = {
                email: email
            }

            //verificar se o email existe no banco de dados
            const response = await axios.post('http://10.0.2.2:8085/api/resetprojeto', data);

            if (response.status === 200) {
                //Exibir o formulario para trocar a senha
                setMostrarFormula(true);
            }
            else if (response.status === 404) {
                Alert.alert('Email não encontrado. Verifique o email digitado');
            }
        }
        catch (error) {
            if (error.response && error.response.status === 401) {
                Alert.alert('Email não encontrado. Verifique o email digitado');
            }
            else {
                Alert.alert('Erro ao resetar a senha:', error);
            }
        }
    };

    const handleTrocarSenha = async () => {
        try {
            //Verificar se as senhas coincidem
            if (novaSenha !== confirmaSenha) {
                Alert.alert('As senhas não coincidem');
                return;
            }

            const data = {
                email: email,
                senha: novaSenha
            }

            //fazer a solicidação paea trocar a senha
            const response = await axios.post('http://10.0.2.2:8085/api/resetsenhaprojeto', data);

            if (response.status === 200) {
                navigation.navigate('Login');
                Alert.alert("Senha trocada com sucesso");
            }
            else {
                Alert.alert('Erro ao trocar a senha');
            }
        }
        catch (error) {
            Alert.alert('Erro ao trocar a senha', error);
        }
    };

    return (
        <View style={styles.container}>
                <Text style={styles.title}>Esqueceu a senha?</Text>
                <TextInput
                    style={styles.input}
                    placeholder = 'Digite seu email'
                    placeholderTextColor={"#30ADA2"} 
                    value={email}
                    onChangeText={setEmail}
                  
                />
                {!mostrarFormulario && (
                    <Button title='Resetar senha' color={'#30ADA2'} onPress={handleResetSenha} />
                )}
                {mostrarFormulario && (
                    <>
                        <TextInput
                            style={styles.input}
                            placeholder='Nova Senha'
                            value={novaSenha}
                            placeholderTextColor={"#30ADA2"}
                            onChangeText={setNovaSenha}
                            secureTextEntry
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Confimar Senha'
                            value={confirmaSenha}
                            placeholderTextColor={"#30ADA2"} 
                            onChangeText={setConfirmaSenha}
                            secureTextEntry
                        />
                        <Button title='Trocar Senha' onPress={handleTrocarSenha} color={"#52D1C6"}/>
                    </>
                )}

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        color: '#000'
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#30ADA2',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        color: '#30ADA2',
        backgroundColor:'#E4F6F2',
    },
    placeholder:{
        color:'white',
    },
});

export default ResetSenha;