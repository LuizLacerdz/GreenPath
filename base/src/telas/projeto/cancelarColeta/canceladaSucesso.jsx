import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function ({navigation}) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('./path/to/logo.png')} style={styles.logo} />
        <Image source={require('./path/to/profile.png')} style={styles.profile} />
      </View>

      {/* Main Content */}
      <Text style={styles.title}>Agendamento cancelado com sucesso!</Text>

      <TouchableOpacity style={styles.homeButton}>
        <Text style={styles.homeButtonText}>Ir para a home</Text>
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
    position: 'absolute',
    top: 0,
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
  homeButton: {
    borderColor: 'orange',
    borderWidth: 2,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginVertical: 10,
  },
  homeButtonText: {
    color: 'orange',
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
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
});
