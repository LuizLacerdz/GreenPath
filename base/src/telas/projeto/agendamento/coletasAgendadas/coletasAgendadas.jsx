import React from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function ColetasAgendadas ({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          {/* Back button icon */}
        <Text style={styles.backButtonText}>{'<'}</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Você possui <Text style={styles.destaque}>1</Text> coleta agendada</Text>
      
      <View style={styles.card}>
        <Text style={styles.cardText}>Associação dos Catadores de Material Reciclável . ASCAS</Text>
        <Text style={styles.cardDate}>01/04 - Vidro</Text>
      </View>
      
      <Text style={styles.note}>*Deixe seus resíduos recicláveis prontos para retirada e fique atento ao seu telefone.</Text>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.navigate('Cancelar Coleta')}>
          <Text style={styles.buttonText}>Cancelar coleta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rescheduleButton} onPress={() => navigation.navigate('Agendamento')}>
          <Text style={styles.buttonText2}>Reagendar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#faffe4',
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 20,
  },
  backButtonText: {
    fontSize: 24,
    color: '#018A23',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  destaque: {
    color: 'orange',
  },
  card: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
  },
  cardDate: {
    fontSize: 16,
    color: 'orange',
    marginTop: 5,
  },
  note: {
    fontSize: 12,
    color: 'grey',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  cancelButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 8,
  },
  rescheduleButton: {
    borderColor: '#B1CC33',
    borderWidth: 2,
    padding: 13,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonText2: {
    color: '#B1CC33',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  Text: {
    fontSize: 16,
    marginBottom: 10,
  },
  Button: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 8,
  },
  ButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

