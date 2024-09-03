import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button} from 'galio-framework';
import {Text, Header} from '@rneui/themed';

export default function Home({navigation}) {
  const Sidebar = ({isOpen, onClose}) => {
    const navigation = useNavigation();
    const navigateToScreen = screenName => {
      navigation.navigate(screenName);
      onClose();
    };

    return (
      <View
        style={[
          styles.sidebarContainer,
          {transform: [{translateX: isOpen ? 0 : -300}]},
        ]}>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>Fechar</Text>
        </TouchableOpacity>

        <View style={styles.sidebarContent}>
          <Text style={styles.sidebarTitle}>Login</Text>
          <TouchableOpacity
            style={styles.sidebarItem}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.sidebarItemText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sidebarItem}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.sidebarItemText}>Registrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <SafeAreaView style={styles.scrollview}>
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      <ScrollView>
        <View style={styles.title}>
          <Text style={styles.titleText}>
            Seja bem vindo (a){'\n'}ao Green Path!
          </Text>
        </View>

        <View style={styles.containerLearn}>
          <View style={styles.textocontainer}>
            <Text style={styles.texto}>
              Proteja nosso mundo{'\n'} da Poluição!
            </Text>
            <View style={styles.buttoncontainer}>
              <Button
                onPress={() => navigation.navigate('noticias')}
                style={styles.botao}>
                Saber Mais..
              </Button>
            </View>
          </View>
          <Image
            source={require('../../../../res/img/download-removebg-preview.png')}
            style={styles.imagem}
          />
        </View>

        <View style={styles.titleS}>
          <Text style={styles.mainCardTitle}>Tipos de Descartes:</Text>
        </View>

        {/*CARDS*/}

        <View style={styles.containerCards}>
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            <Button
              style={styles.card}
              onPress={() => navigation.navigate('Lixo Marrom')}>
              <View style={styles.card}>
                <Image
                  source={require('../../../../res/img/bote-de-basura2.png')}
                  style={styles.image}
                />
                <View style={styles.content}>
                  <Text style={styles.titleCard}>Lixo Marrom</Text>
                  <Text style={styles.description}>Descarte de Orgânicos</Text>
                </View>
              </View>
            </Button>

            <View style={styles.containerCards}>
              <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                <Button
                  style={styles.card}
                  onPress={() => navigation.navigate('Lixo Vermelho')}>
                  <View style={styles.card}>
                    <Image
                      source={require('../../../../res/img/bote-de-basura2.png')}
                      style={styles.image2}
                    />
                    <View style={styles.content}>
                      <Text style={styles.titleCard}>Lixo Vermelho</Text>
                      <Text style={styles.description}>
                        Descarte de Plástico
                      </Text>
                    </View>
                  </View>
                </Button>

                <View style={styles.containerCards}>
                  <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    <Button
                      style={styles.card}
                      onPress={() => navigation.navigate('Lixo Azul')}>
                      <View style={styles.card}>
                        <Image
                          source={require('../../../../res/img/bote-de-basura2.png')}
                          style={styles.image3}
                        />
                        <View style={styles.content}>
                          <Text style={styles.titleCard}>Lixo{'\n'}Azul</Text>
                          <Text style={styles.description}>
                            Descarte de Papéis
                          </Text>
                        </View>
                      </View>
                    </Button>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.containerCards}>
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            <Button
              style={styles.card}
              onPress={() => navigation.navigate('Lixo Amarelo')}>
              <View style={styles.card}>
                <Image
                  source={require('../../../../res/img/bote-de-basura2.png')}
                  style={styles.image4}
                />
                <View style={styles.content}>
                  <Text style={styles.titleCard}>Lixo Amarelo</Text>
                  <Text style={styles.description}>Descarte de Metáis</Text>
                </View>
              </View>
            </Button>

            <View style={styles.containerCards}>
              <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                <Button
                  style={styles.card}
                  onPress={() => navigation.navigate('Lixo Verde')}>
                  <View style={styles.card}>
                    <Image
                      source={require('../../../../res/img/bote-de-basura2.png')}
                      style={styles.image5}
                    />
                    <View style={styles.content}>
                      <Text style={styles.titleCard}>Lixo Verde</Text>
                      <Text style={styles.description}>Descarte de Vidros</Text>
                    </View>
                  </View>
                </Button>

                <View style={styles.containerCards}>
                  <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    <Button
                      style={styles.card}
                      onPress={() => navigation.navigate('Lixo Laranja')}>
                      <View style={styles.card}>
                        <Image
                          source={require('../../../../res/img/bote-de-basura2.png')}
                          style={styles.image6}
                        />
                        <View style={styles.content}>
                          <Text style={styles.titleCard}>Lixo Laranja</Text>
                          <Text style={styles.description}>
                            Descarte de Pilhas e Baterias
                          </Text>
                        </View>
                      </View>
                    </Button>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
    backgroundColor: '#fff',
  },

  sidebarContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'black',
        height: '100%',
        width: 250,
        zIndex: 100,
        elevation: 5,
        paddingTop: 50,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
  },
  notificationIcon: {
    marginLeft: 10,
  },
  searchBar: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderRadius: 50,
    height: 60,
  },
  icon: {
    width: '8%',
    maxHeight: 110,
    resizeMode: 'contain',
    marginLeft: 90, // Ajustado a margem esquerda para a imagem
  },
  containerLearn: {
    flex: 1,
    flexDirection: 'row', // Alinha os elementos na horizontal
    alignItems: 'center',
    justifyContent: 'space-around', // Distribui o espaço entre os elementos
    padding: 20, // Adiciona padding ao container
    backgroundColor: '#E4F6F2',
    borderRadius: 20,
    margin: 10,
  },
  imagem: {
    width: '40%',
    height: 130,
    resizeMode: 'contain',
  },
  texto: {
    fontSize: 25,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'left',
    margin: 10,
  },
  botao: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#199A8E',
    color: 'white',
    borderRadius: 30,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  titleSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  titleCard: {
    fontSize: 17,
    fontWeight: 'bold',
    borderTopWidth: 1,
    marginTop: 1,
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: 10,
    borderRadius: 5,
  },
  containerCards: {
    alignItems: 'center',
    marginBottom: 20,
  },

  mainCardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  subtitulo: {
    marginLeft: 220,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#199A8E',
    marginTop: 12,
  },
  card: {
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 4,
    width: 115,
    height: 200,
    borderWidth: 1,
  },
  image: {
    backgroundColor: '#5D2828',
    height: 100,
    width: '100%',
    resizeMode: 'contain',
  },
  image2: {
    backgroundColor: '#FF0000',
    height: 100,
    width: '100%',
    resizeMode: 'contain',
  },
  image3: {
    backgroundColor: '#0047B1',
    height: 100,
    width: '100%',
    resizeMode: 'contain',
  },
  image4: {
    backgroundColor: '#EBFF00',
    height: 100,
    width: '100%',
    resizeMode: 'contain',
  },
  image5: {
    backgroundColor: '#05FF00',
    height: 100,
    width: '100%',
    resizeMode: 'contain',
  },
  image6: {
    backgroundColor: '#FF8A00',
    height: 100,
    width: '100%',
    resizeMode: 'contain',
  },
  content: {
    margin: 16,
    borderTopWidth: 1,
  },
  titleCard: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: 'gray',
  },
  titleS: {
    flexDirection: 'row',
  },
});

