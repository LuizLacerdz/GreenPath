import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet,ScrollView,SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Example icon library

const Reciclagem = ({navigation}) => {
  return (
    <SafeAreaView>
    <ScrollView>
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../../../../res/img/logo.png')} style={styles.logo} />
        <Image source={require('../../../../res/img/fotoDePerfil.png')} style={styles.profilePic} />
      </View>

      {/* Title */}
      <Text style={styles.title}>Resíduos que você pode separar para coleta:</Text>

      {/* Categories */}
      <View style={styles.categories}>
        <View style={styles.categoryCard}>
          <Image source={require('../../../../res/img/placa_papel.png')} style={styles.icones} />
          <Text style={styles.categoryTitle}>Papel</Text>
          <Text style={styles.categoryDescription}>
            Caixas ou pedaços de Papelão, Jornais, Revistas, Folhas, etc
          </Text>
        </View>
        <View style={styles.categoryCard}>
          <Image source={require('../../../../res/img/placa_plástico.png')} style={styles.icones} />
          <Text style={styles.categoryTitle}>Plástico</Text>
          <Text style={styles.categoryDescription}>
            Embalagens, garrafas PET, potes, canudos, tampinhas, etc
          </Text>
        </View>
        <View style={styles.categoryCard}>
          <Image source={require('../../../../res/img/placa_vidro.png')} style={styles.icones} />
          <Text style={styles.categoryTitle}>Vidro</Text>
          <Text style={styles.categoryDescription}>
            Garrafas, frascos e recipientes no geral
          </Text>
        </View>
        <View style={styles.categoryCard}>
          <Image source={require('../../../../res/img/placa_orgânico.png')} style={styles.icones} />
          <Text style={styles.categoryTitle}>Orgânico</Text>
          <Text style={styles.categoryDescription}>
            Sobras de Alimentos
          </Text>
        </View>
        <View style={styles.categoryCard}>
          <Image source={require('../../../../res/img/placa_pilhas.png')} style={styles.icones} />
          <Text style={styles.categoryTitle}>Pilhas</Text>
          <Text style={styles.categoryDescription}>
            Pilhas, Baterias
          </Text>
        </View>
        <View style={styles.categoryCard}>
          <Image source={require('../../../../res/img/placa_metal.png')} style={styles.icones} />
          <Text style={styles.categoryTitle}>Metal</Text>
          <Text style={styles.categoryDescription}>
            Latas, arames, ferramentas e utensílios de cozinha
          </Text>
        </View>
      </View>

      {/* Back Button */}
      <TouchableOpacity style={styles.ReturnButton} onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={styles.ReturnButtonText}>Voltar</Text>
      </TouchableOpacity>

    </View>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E2F3E8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '48%',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  categoryDescription: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
    fontWeight: 'bold'
  },
  backButton: {
    borderWidth: 1,
    borderColor: '#8CC63F',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#8CC63F',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  icones: {
    padding: 10,
    alignItems: 'center',
    width: 70,
    height: 70,
  },
    ReturnButton: {
    borderWidth: 1,
    backgroundColor: '#0A9D3C',
    padding: 10,
    borderRadius: 5,
  },
  ReturnButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: "bold"
  },
});

export default Reciclagem;