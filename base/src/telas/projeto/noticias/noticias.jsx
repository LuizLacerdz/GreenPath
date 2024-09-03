import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';

const noticias = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
          <Text style={styles.header}>Notícias</Text>
        </View>
        <View style={styles.box}>
          <Image source={require('../../../../res/img/pic1.png')} style={styles.image} />
          <Text style={styles.subHeader}>
            Cidades de São Paulo lideram ranking de poluição do ar no Brasil, aponta estudo
          </Text>
          <Text style={styles.text}>
            {'\t'} todos os 645 municípios paulistas apresentam níveis de poluição acima do recomendado pela Organização Mundial da Saúde (OMS).
De acordo com o monitoramento, a média anual de material particulado fino (MP2,5) em São Paulo em 2023 foi de 14,59 microgramas por metro cúbico (µg/m³), quase três vezes o limite de 5 µg/m³ estabelecido pela OMS.
O MP2,5 refere-se a partículas muito pequenas no ar, menores que 2,5 micrômetros, originadas principalmente de veículos, indústrias e queimadas.
Devido ao tamanho reduzido, essas partículas podem ser inaladas profundamente nos pulmões, entrar na corrente sanguínea e causar doenças respiratórias, cardíacas e até câncer.
          </Text>
        </View>
        <View style={styles.box2}>
          <Image source={require('../../../../res/img/pic2.png')} style={styles.image} />
          <Text style={styles.subHeader}>
            Fumaça cobre os céus de Nova Délhi, capital mais poluída do mundo
          </Text>
          <Text style={styles.text}>
            {'\t'}A cidade de mais de 30 milhões de habitantes — considerada a capital mais poluída do mundo — registrou um índice de qualidade do ar (AQI) em 302, na categoria “perigosa”.
            Dentre as medidas tomadas pelas autoridades, estão proibir obras de construção e demolição não essenciais e borrifar água junto com supressores de poeira nas vias da cidade.
          </Text>
        </View>
        <View style={styles.box3}>
          <Image source={require('../../../../res/img/pic3.png')} style={styles.image} />
          <Text style={styles.subHeader}>
            Moradores reclamam de lixo descartado em comunidade no interior de Passo Fundo
          </Text>
          <Text style={styles.text}>
            {'\t'}Quem vai à comunidade de São Pedrinho, no interior de Passo Fundo, a partir do acesso do Parque da Roselândia, não demora muito para se deparar com lixo jogado na vegetação que fica na beira da estrada e até dentro de um rio. Segundo moradores, há anos veículos saem da cidade para despejar cargas de lixo quase que diariamente nas estradas da região. 
          </Text>
          <Text style={styles.text}>
            {'\t'}Sacos plásticos, embalagens e outros resíduos ficam evidentes conforme se vai em direção ao interior. No caminho, é possível encontrar desde móveis como sofás, pia e vaso sanitário de porcelana e jogos de cadeiras até sacolas de lixo orgânico e animais mortos. 
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf7f7',
  },

  header: {
    flex: 1,
    fontSize: 40,
    fontWeight: 'bold',
    padding: 5,
  },

  image: {
    width: '95%',
    height: undefined,
    alignSelf: 'center',
    aspectRatio: 2,
    margin: 10,
    marginBottom: 5,
    borderRadius: 10,
  },

  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },

  text: {
    fontSize: 15,
    marginLeft: 8,
    marginRight: 5,
  },

  box: {
    flex: 1,
    borderStyle: 'solid',
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
  },

  box2: {
    flex: 1,
    borderStyle: 'solid',
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
  },

  box3: {
    flex: 1,
    borderStyle: 'solid',
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
  },

  scrollView: {
    marginHorizontal: 2,
  },
});

export default noticias;