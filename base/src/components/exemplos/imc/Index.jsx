import React, { useState } from "react";
import { Alert, ImageBackground, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, View,} from "react-native";
import styles from './Styles';
import { Input, Button, Icon, Text } from '@rneui/themed';
import { TextInputMask } from 'react-native-masked-text';
import ImagemFundo  from "../../../../res/img/Imagem_academia.jpg";

export default function InputMaskIMC() {
    // const sobrepeso= newImc < '29,9' && newImc > '25';
    // const obesidade= newImc < '29,9' && newImc > '25';
    // const obesidade_grave= newImc >'40';
    
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");

    const Calcular = () =>{
        let Imc = '';    
        Imc  = (peso / (altura*altura) ).toFixed(2);
        if (Imc <= "18.5") {
            Alert.alert('Avisa','Situação: Magreza \nSeu IMC é: '+Imc.toString())
        }
        else if (Imc > '18.5' && Imc < '24.9') {
            Alert.alert('Aviso','Situação: Normal \nSeu IMC é: '+Imc.toString())
        }
        else if (Imc > '25' && Imc < '29.9') {
            Alert.alert('Aviso','Situação: Sobrepeso \nSeu IMC é: '+Imc.toString())
        }
        else if (Imc > '30' && Imc < '39.9') {
            Alert.alert('Aviso','Situação:Obesidade \nSeu IMC é: '+Imc.toString())
        }
        else if (Imc >= 40) {
            Alert.alert('Aviso','Situação: Obesidade Grave\nSeu IMC é: '+Imc.toString())
        }
       
    }
    
    return (
        <KeyboardAvoidingView 
        behavior={Platform.OS == 'ios' ? "padding" : "height"}
        keyboardVerticalOffset={50} 
        style={styles.container}>
            <ImageBackground source={ImagemFundo} style={{height: '100%'}}>
            <ScrollView>
            
                <View style={styles.divTitulo}>
                    <Text h1 style={styles.titulo}>Calcule o seu IMC</Text>
                    <Icon type='font-awesome' name="user" color="#000" size={100} />
                </View>
                <View style={styles.formContato}>
                <Input
                        style={[styles.inputContainerMask, styles.inputStyle]}
                        placeholder='Digite o seu peso' 
                        value={peso}
                        onChangeText={text => setPeso(text)}
                        keyboardType="numeric"
                    />
                    <Input
                        style={[styles.inputContainerMask, styles.inputStyle]}
                        placeholder='Digite a sua altura'
                        value={altura}
                        onChangeText={text => setAltura(text)}
                        keyboardType="numeric"
                    />
                    <Button onPress={Calcular} radius={"sm"} type="solid">
                        Enviar
                        <Icon style={{ padding: 5 }} name="save" color="white" />
                    </Button>
                </View>
            </ScrollView>
            </ImageBackground>
        </KeyboardAvoidingView>
    );


}