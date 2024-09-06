import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';

const ReciclarLaranja = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
          <Text style={styles.header}>Como reciclar Lixos Pláticos </Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
          <Image
            source={require('../../../../../res/img/placa_plástico.png')}
            style={styles.image}
          />
          <Text style={styles.text} numberOfLines={30}>
            {'\t'} Coleta Especializada: Esses resíduos devem ser coletados e
            tratados por empresas especializadas em manejo de resíduos de saúde.
            Não devem ser descartados no lixo comum.{'\n'}
            {'\n'} Recipientes Adequados: Use recipientes específicos para
            resíduos contaminados, como sacos vermelhos ou caixas rígidas com
            sinalização adequada.{'\n'}
            {'\n'}
            Coleta Seletiva: Verifique se há pontos de coleta especializados
            para resíduos eletrônicos em sua área. {'\n'}
            Reparos e Reciclagem: Alguns itens podem ser reparados ou reciclados
            em centros especializados para recuperar materiais valiosos e
            reduzir o impacto ambiental.
          </Text>

          <Text style={styles.text} numberOfLines={30}>
            {'\t'}
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
    width: '55%',
    height: '50%',
    marginLeft: 83,
    aspectRatio: 1,
    margin: 10,
    marginBottom: 20,
    borderRadius: 10,
  },

  subHeader: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 8,
    padding: 5,
  },

  text: {
    fontSize: 20,
    marginLeft: 8,
    marginRight: 5,
  },

  scrollView: {
    marginHorizontal: 10,
  },
});

export default ReciclarLaranja;
