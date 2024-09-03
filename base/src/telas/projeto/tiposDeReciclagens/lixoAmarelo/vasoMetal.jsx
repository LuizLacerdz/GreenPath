import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';

const vasoMetal = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
          <Text style={styles.header}>Vasos para plantas feitos de latas</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
          <Image source={require('../../../../../res/img/vaso_lata.png')} style={styles.image} />
          <Text style={styles.text}
          numberOfLines={30}
          >
            {'\t'} A produção é bem simples, apenas limpe bem uma lata de qualquer tamanho,
		          depois, preencha com alguma planta ou terra para o plantio de alguma planta da sua escolha, não se esqueça
		          de fazer furos para que água escorra de forma adequada.
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
  
  export default vasoMetal;