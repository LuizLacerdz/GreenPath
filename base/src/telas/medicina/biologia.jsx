import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';


export default function BiologiaPage(navigation) {
  return (
    
    <ScrollView style={styles.container}>
    <SafeAreaView>
        <Image source={require('../../../res/img/medicina/biologia.png')} style={styles.mainImage} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Por que a biologia é tão importante para a medicina?</Text>
        <Text style={styles.contentText}>
          • Compreensão do corpo humano: A biologia nos ensina como o corpo funciona em nível celular, de órgãos e de sistemas, permitindo diagnosticar e tratar doenças de forma mais precisa.
        </Text>
        <Text style={styles.contentText}>
          • Desenvolvimento de medicamentos: O conhecimento sobre os processos biológicos é fundamental para criar novas drogas e terapias.
        </Text>
        <Text style={styles.contentText}>
          • Prevenção de doenças: Ao entender os fatores que causam doenças, podemos desenvolver estratégias para preveni-las.
        </Text>
        <Text style={styles.contentText}>
          • Biotecnologia e engenharia genética: A biologia está na vanguarda de tecnologias como a terapia gênica e a engenharia de tecidos, que prometem revolucionar o tratamento de diversas doenças.
        </Text>
      </View>
        <Image source={require('../../../res/img/medicina/biologia1.png')} style={styles.dnaImage} />
        </SafeAreaView>
    </ScrollView>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 10,
    backgroundColor: '#900',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  mainImage: {
    width: '100%',
    height: 200,
  },
  contentContainer: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    margin: 10,
    borderRadius: 8,
    borderWidth:  1,
    borderColor: '#000',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
 contentText: {
    fontSize: 16,
    marginBottom: 5,
    padding: 5,
    
  },
  dnaImage: {
    width: 400,
    height: 200,
    borderRadius: 8,
    marginLeft: 6
  },

    mainImage: {
    width: '100%',
    height: 190,
  },
});