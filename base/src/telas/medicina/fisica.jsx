import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';


export default function FisicaPage(navigation) {
  return (
    
    <ScrollView style={styles.container}>
    <SafeAreaView>
        <Image source={require('../../../res/img/medicina/fisica.png')} style={styles.mainImage} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>A Física é a de diversas tecnologias médicas:</Text>
        <Text style={styles.contentText}>
          • Imagem diagnóstica: Raio X, tomografias computadorizadas, ressonância magnética e ultrassonografia são exemplos de tecnologias médicas que se baseiam em príncipios físicos como a radiação eletromagnéticas e as ondas sonoras.  
        </Text>
        <Text style={styles.contentText}>
          • Terapias: A radioterapia, utilizada no tratamento do câncer, e a laserterapia são exemplos de terapias que utilizam príncipios da física para tratar doenças.
        </Text>
        <Text style={styles.contentText}>
          • Equipamentos Médicos: A física está presente em diversos equipamentos médicos, como  eletrocardiogramas, eletroencefalogramas e aparelhos de ventilação mecãnica.
        </Text>
        <Text style={styles.contentText}>
          • Biomecânica: A biomecânica, que estuda o movimento do corpo humano, utiliza principios da física para analisar o movimento de articulação, a força muscular e o equilíbrio, sendo fundamnetal para a reabilitação e o desenvolvimento de próteses e órteses.
        </Text>
      </View>
        <Image source={require('../../../res/img/medicina/fisica1.png')} style={styles.dnaImage} />
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
    height: 190,
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
});