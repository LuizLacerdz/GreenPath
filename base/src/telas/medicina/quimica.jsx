import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';


export default function QuimicaPage(navigation) {
  return (
    
    <ScrollView style={styles.container}>
    <SafeAreaView>
        <Image source={require('../../../res/img/medicina/quimica.png')} style={styles.mainImage} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>A Química está presente em todos os aspectos da medicina: </Text>
        <Text style={styles.contentText}>
          • Desenvolvimento de Medicamentos: A Química medicinal busca sintetizar e modificar moléculas para criar fármacos eficazes contra diversas doenças.
        </Text>
        <Text style={styles.contentText}>
          • Diagnósticos: A Química clínica analisa amostras biológicas (sangie, urina, etc) para identificar alterações que possam indicar a presença de doenças.
        </Text>
        <Text style={styles.contentText}>
          • Materiais para equipamentos médicos: A Química desenvolve materiais biocompatíveis para implantes, prótese e outros dispositivos médicos.
        </Text>
        <Text style={styles.contentText}>
          • Análise de alimentos e medicamentos: A Química garante a qualidade e a seguramça dos alimentos e medicamentos.
        </Text>
        <Text style={styles.contentText}>
          • Compreensão de processos biológicos: A Bioquímica, uma subárea da química, estuda as reações químicas que ocorrem nos seres vivos, como o metabolismo e a síntese de proteínas.
        </Text>
      </View>
        <Image source={require('../../../res/img/medicina/quimica1.png')} style={styles.dnaImage} />
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