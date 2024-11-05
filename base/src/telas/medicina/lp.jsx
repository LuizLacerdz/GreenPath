import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';


export default function LpPage(navigation) {
  return (
    
    <ScrollView style={styles.container}>
    <SafeAreaView>
        <Image source={require('../../../res/img/medicina/lp.png')} style={styles.mainImage} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Vocabulário Técnico: </Text>
        <Text style={styles.contentText}>
          • Anatomia: Estuda a estrutura física do corpo humano, como órgãos. sistemas e suas relações.
        </Text>
        <Text style={styles.contentText}>
          • Fisiologia: Analisa as funções e processos vitais do corpo, como a respiração, digestão e circulação.
        </Text>
        <Text style={styles.contentText}>
          • Patologia: Estuda as doenças, suas causas, desenvolvimento e efeitos no organismo.
        </Text>
        <Text style={styles.contentText}>
          • Diagnóstico: É o processo de identificar uma doença ou condição de saúde através de exames e avaliação clínica.
        </Text>
        <Text style={styles.contentText}>
          • Prognóstico: É a previsão sobre o curso de uma doença, incluindo a possibilidade de cura e complicações.
        </Text>
        <Text style={styles.contentText}>
          • Terapia: Refere-se ao tratamento de doenças ou condições, podendo incluir medicamentos, cirurgia ou outras técnicas.
        </Text>
        <Text style={styles.contentText}>
          • Farmacologia: Estuda os medicamentos, suas ações no organismo e suas interações.
        </Text>
        <Text style={styles.contentText}>
          • Sintoma: É uma manifestação da doença percebida pelo paciente, como dor, febre ou tosse.
        </Text>
        <Text style={styles.contentText}>
          • Síndrome: É um conjunto de sinais e sintomas que ocorrem juntos e caracterizam uma determinada doença ou condição.
        </Text>
        <Text style={styles.contentText}>
          • Procedimento: É uma ação médica realizada para diagnosticar ou tratar uma condição, como uma biópsia ou cirurgia.
        </Text>
      </View>
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
    height: 180,
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