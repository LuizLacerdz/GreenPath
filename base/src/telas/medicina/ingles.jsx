import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';


export default function InglesPage(navigation) {
  return (
    
    <ScrollView style={styles.container}>
    <SafeAreaView>
        <Image source={require('../../../res/img/medicina/ingles.png')} style={styles.mainImage} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Importância do Ingês para a medicina: </Text>
        <Text style={styles.contentText}>
          • Acesso à informação: A maior parte das pesquisas e publicações médicas está em ingês, o que facilita o acesso a informação atuaizadas e relevantes. 
        </Text>
        <Text style={styles.contentText}>
          • Comunicação Internacional: O inglês é a língua universal em eventos e colaborações médicas, permitindo a troca de conhecimentos entre profissionais de diferentes países.
        </Text>
        <Text style={styles.contentText}>
          • Educação: Muitos cursos e programas de especialização em medicina são ministrados em ingês, sendo essencial para a formação de médicos qualificados.
        </Text>
        <Text style={styles.contentText}>
          • Tecnologia: As novas tecnologias e inovações médicas são, em sua maioria, desenvolvidas em países de çíngua inglesa, exigindo o domínio do idioma para acompanhar as novidades.
        </Text>
        <Text style={styles.contentText}>
          • Recursos: Materiais didáticos, guias clínicos e protocolos estão frequentemente disponíveis em inglês, sendo indispensáveis para a prática médica e o aprendizado contínuo.
        </Text>
        <Text style={styles.contentText}>
          • Networking: O domínio do inglês facílita a criação de redes de contatos com outros profissionais da área, expandino as oportunidades de colaboração e desenvolvimento.
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
    height: 200,
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