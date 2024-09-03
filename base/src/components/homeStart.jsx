//Bibliotecas
// Pagina para nevegar na internet clicando no botão
// import React from "react";
// import { View, Text, StyleSheet, Linking, Button } from "react-native";

// const Home = () => {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>SENAI</Text>
//             <Button title="senai marília" onPress={()=>{Linking.openURL('https://baenapersonalizados.com.br')}}>Baena Personalizados</Button>
//         </View>
//     )
// };
// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         backgroundColor:'black',
//         justifyContent:'center',
//         alignItems:'center'
//     },
//     title:{
//         fontSize:24,
//         fontWeight:'bold',
//         color:'white',
//     },
// });

// export default Home;

//-------------------------------------------------------------
//Botões de nevegação
import React from "react";
import { View, Text, Button, StyleSheet,} from "react-native";

const Home = ({navigation}) => {
    return (
        <View  style={styles.container}> 
            <Text style={styles.title}>SENAI</Text>

            <View style={styles.buttonContainer}>
                <Button
                    title="Cadastrar"
                    onPress={() => navigation.navigate('Cadastrar')}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Listar"
                    onPress={() => navigation.navigate('Listar')}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Deletar"
                    onPress={() => navigation.navigate('Deletar')}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Atualizar"
                    onPress={() => navigation.navigate('Atualizar')}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        color:'white',
        marginBottom: 20,
    },
    buttonContainer:{
        marginBottom: 10,
        width:'50%',
    },
});

export default Home;