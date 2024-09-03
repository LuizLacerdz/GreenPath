import React, { useEffect, useState } from "react";
import { FlatList, ImageBackground, SafeAreaView, Text, TouchableOpacity, View } from "react-native";




export default function ListaAlunos() {

    const [aluno, setAluno] = useState([]);
    {/*Lista de dados externos*/ }
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setAluno(json))

    }, []);

    console.log(aluno)

    {/*Lista de dados locais*/ }
    const alunos = [
        { id: '1', nome: 'Vampira', ra: '147852', idade: '25' },
        { id: '2', nome: 'Jubileu', ra: '123456', idade: '20' },
        { id: '3', nome: 'Gambit', ra: '258963', idade: '21' },
        { id: '4', nome: 'Xavier', ra: '258741', idade: '30' },
        { id: '5', nome: 'Logan', ra: '2569874', idade: '29' },
        { id: '6', nome: 'Fera', ra: '258654', idade: '30' },
    ];
    const ExibirAlunos = ({ item }) => (
        <View style={{backgroundColor:'#ffffff72', padding:10}}>
            <TouchableOpacity>
            <Text style={{color:'red'}}>{item.nome}</Text>
            </TouchableOpacity>
        </View>
    );
    return (
        <SafeAreaView >
            <ImageBackground style={{ height: '100%' }} source={imagemFundo}>
                <FlatList
                    data={alunos}
                    keyExtractor={item => item.id}
                    renderItem={ExibirAlunos}
                />
            </ImageBackground>
        </SafeAreaView>

    )
}