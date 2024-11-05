import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, Switch, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import  { Calendar ,  LocaleConfig }  from  'react-native-calendars' ;


LocaleConfig.locales['fr'] = {
  NomeDosMeses: [
    'Janeiro',
    'Feveiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ],
  AbreviaçãoMeses: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  NomeDia: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
  AbreviaçãoDia: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
  Hoje: "Hoje"
};

LocaleConfig.defaultLocale = 'fr';

 <Calendar
  // Customize the appearance of the calendar
  style={{
    borderWidth: 1,
    borderColor: 'gray',
    height: 350,
  }}
  theme={{
        backgroundColor: '#ffffff',
        calendarBackground: '#ffffff',
        textSectionTitleColor: '#b6c1cd',
        selectedDayBackgroundColor: '#00adf5',
        selectedDayTextColor: '#ffffff',
        todayTextColor: '#00adf5',
        dayTextColor: '#2d4150',
        textDisabledColor: '#dd99ee'
      }}
    
  // Especifique a data atual
  current={'2012-03-01'}
  // Retorno de chamada que é chamado quando o usuário seleciona um dia
  onDayPress={day => {
    console.log('selected day', day);
  }}
  // Marcar datas específicas como marcadas
  markedDates={{
    '2012-03-01': {selected: true, marked: true, selectedColor: 'blue'},
    '2012-03-02': {marked: true},
    '2012-03-03': {selected: true, marked: true, selectedColor: 'blue'}
  }}
/>

const Agendamento = ({navigation}) => {
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedWeight, setSelectedWeight] = useState('');
  const [observation, setObservation] = useState('');
  const [selected, setSelected] = useState('');

  return (
    <SafeAreaView>
    <ScrollView>
    <View style={styles.container}>

      <View style={styles.card}>
        <Text style={styles.title}>Associação dos Catadores de Material Reciclável . ASCAS</Text>
        <Text style={styles.subTitle}>Quando será sua coleta?</Text>
        
        {/* O calendário seria implementado com uma biblioteca como react-native-calendars */}
        <Calendar
      onDayPress={day => {
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'green'}
      }}
    />

        <Text style={styles.subTitle}>Quais materiais serão coletados?</Text>
        <Picker
          selectedValue={selectedMaterials}
          onValueChange={(itemValue) => setSelectedMaterials(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Metal" value="metal" />
          <Picker.Item label="Vidro" value="vidro" />
          <Picker.Item label="Plástico" value="plastico" />
          <Picker.Item label="Orgânico" value="organico" />
          <Picker.Item label="Papel" value="papel" />
          <Picker.Item label="Laranja" value="laranja" />
        </Picker>

        <Text style={styles.subTitle}>Qual o peso aproximado da sua separação?</Text>
        <Picker
          selectedValue={selectedWeight}
          onValueChange={(itemValue) => setSelectedWeight(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="10kg" value="10kg" />
          <Picker.Item label="20kg" value="20kg" />
          <Picker.Item label="30kg" value="30kg" />
          <Picker.Item label="40kg" value="40kg" />
          <Picker.Item label="50kg" value="50kg" />
          <Picker.Item label="60kg" value="60kg" />
          <Picker.Item label="70kg" value="70kg" />
          <Picker.Item label="80kg" value="80kg" />
          <Picker.Item label="90kg" value="90kg" />
          <Picker.Item label="100kg" value="100kg" />
        </Picker>

        <Text style={styles.subTitle}>Tem alguma observação?</Text>
        <TextInput
          style={styles.input}
          placeholder="Comente sobre seus itens"
          value={observation}
          onChangeText={setObservation}
        />

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Agendar coleta</Text>
        </TouchableOpacity>

      </View>
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
    marginBottom: 20,
  },
  card: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 16,
    marginVertical: 10,
  },
  calendarText: {
    fontSize: 14,
    marginBottom: 20,
  },
  picker: {
    height: 50,
    marginBottom: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  switchText: {
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    marginBottom: 10,
    backgroundColor: '#0A9D3C',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },


 
});

export default Agendamento;