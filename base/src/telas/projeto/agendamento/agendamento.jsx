import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, Switch, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import  { Calendar ,  LocaleConfig }  from  'react-native-calendars' ;


LocaleConfig.locales['fr'] = {
  monthNames: [
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
  monthNamesShort: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  dayNames: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
  dayNamesShort: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
  today: "Hoje"
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
    
  // Specify the current date
  current={'2012-03-01'}
  // Callback that gets called when the user selects a day
  onDayPress={day => {
    console.log('selected day', day);
  }}
  // Mark specific dates as marked
  markedDates={{
    '2012-03-01': {selected: true, marked: true, selectedColor: 'blue'},
    '2012-03-02': {marked: true},
    '2012-03-03': {selected: true, marked: true, selectedColor: 'blue'}
  }}
/>

const Agendamento = ({navigation}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedWeight, setSelectedWeight] = useState('');
  const [useRegisteredAddress, setUseRegisteredAddress] = useState(false);
  const [observation, setObservation] = useState('');
  const [selected, setSelected] = useState('');

  return (
    <SafeAreaView>
    <ScrollView>
    <View style={styles.container}>

      <View style={styles.card}>
        <Text style={styles.title}>Associação dos Catadores de Material Reciclável . ASCAS</Text>
        <Text style={styles.subTitle}>Quando será sua coleta?</Text>
        
        {/* Calendar would be implemented with a library like react-native-calendars */}
        <Calendar
      onDayPress={day => {
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
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

        <View style={styles.switchContainer}>
          <Text style={styles.switchText}>Utilizar endereço e contatos do cadastro</Text>
          <Switch
            value={useRegisteredAddress}
            onValueChange={setUseRegisteredAddress}
          />
        </View>

        <Text style={styles.subTitle}>Tem alguma observação?</Text>
        <TextInput
          style={styles.input}
          placeholder="Comente sobre seus itens, horários para recebimento, etc.."
          value={observation}
          onChangeText={setObservation}
        />

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeScreen')}>
          <Text style={styles.buttonText}>Agendar coleta</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        {/* Icons would be added here for navigation, using a library like react-native-vector-icons */}
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
  logo: {
    width: 70,
    height: 70,
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 25,
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