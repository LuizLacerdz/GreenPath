import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';

export default function cancelarColeta ({navigation}){
  return (
    <View style={styles.container}>
      {/* Header */}

      {/* Main Content */}
      <Text style={styles.title}>Tem certeza que deseja cancelar este agendamento?</Text>
      
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>Associação dos Catadores de Material Reciclável . ASCAS</Text>
        <Text style={styles.dateText}>01/04 - <Text style={styles.materialText}>Vidro</Text></Text>
      </View>

      {/* Buttons */}
      <TouchableOpacity style={styles.cancelButton}>
        <Text style={styles.cancelButtonText}>Cancelar coleta</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.rescheduleButton}>
        <Text style={styles.rescheduleButtonText}>Reagendar</Text>
      </TouchableOpacity>

      {/* Footer */}
      <View style={styles.footer}>
        {/* Footer icons would go here */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    paddingTop: 40,
    paddingHorizontal: 10,
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
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  infoBox: {
    width: '80%',
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    textAlign: 'center',
  },
  dateText: {
    fontSize: 16,
    textAlign: 'center',
  },
  materialText: {
    color: 'orange',
  },
  cancelButton: {
    backgroundColor: 'red',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginVertical: 10,
  },
  cancelButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  rescheduleButton: {
    borderColor: 'limegreen',
    borderWidth: 2,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginVertical: 10,
  },
  rescheduleButtonText: {
    color: 'limegreen',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    paddingVertical: 20,
  },
});
