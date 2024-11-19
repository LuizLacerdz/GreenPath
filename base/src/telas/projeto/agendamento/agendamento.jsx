import React, {useState} from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet,ScrollView, SafeAreaView } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {ptBR} from './localeCalendarConfig';

LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

export default function Agendamento({navigation}) {
  const [observation, setObservation] = useState('');
  const [selectWeight, setselectWeight] = useState();
  const [selectMaterial, setSelectMaterial] = useState();
  const [day, setDay] = useState();

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          {/* Back button icon */}
        <Text style={styles.backButtonText}>{'<'}</Text>
      </TouchableOpacity>
          <View style={styles.content}>
            <Text style={styles.title}>Associação de Reciclagem</Text>
            {/* CALENDARIO */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Quando será sua coleta?</Text>
              <Calendar
                style={styles.Calendar}
                headerStyle={{
                  borderBottomWidth: 0.5,
                  borderBottomColor: 'white',
                  paddingBottom: 10,
                  marginBottom: 10,
                }}
                theme={{
                  textMonthFontSize: 18,
                  monthTextColor: '#0A9D3C',
                  todayTextColor: '#0A9D3C',
                  selectedDayBackgroundColor: '#0A9D3C',
                  selectedDayTextColor: 'white',
                  arrowColor: '#0A9D3C',
                  textDayStyle: {color: 'black'},
                  textDisabledColor: '#ADADAD',
                }}
                //DATA MINIMA
                minDate={new Date().toDateString()}
                //SUMIR COM AS DATAS ANTERIORES
                hideExtraDays={true}
                onDayPress={setDay}
                //MARCAR AS DATAS SELECIONADAS
                markedDates={
                  day && {
                    [day.dateString]: {selected: true},
                  }
                }
              />
              <Text style={styles.selected}>
                Data selecionada: {day?.dateString}
              </Text>
            </View>

            {/* MATERIAIS */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>
                Quais materiais serão coletados?
              </Text>

              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={selectMaterial}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectMaterial(itemValue)
                  }>
                  <Picker.Item label="Vidro" value="Vidro" />
                  <Picker.Item label="Metal" value="Metal" />
                  <Picker.Item label="Papel" value="Papel" />
                  <Picker.Item label="Plástico" value="Plástico" />
                  <Picker.Item label="Orgânico" value="Orgânico" />
                  <Picker.Item label="Pilhas" value="Pilhas" />
                </Picker>
              </View>
            </View>

            {/* PESO */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>
                Qual o peso aproximado da sua separação?
              </Text>
            </View>

            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={selectWeight}
                onValueChange={(itemValue, itemIndex) =>
                  setselectWeight(itemValue)
                }>
                <Picker.Item label="10kg" value="10kg" />
                <Picker.Item label="20kg" value="20kg" />
                <Picker.Item label="30kg" value="30kg" />
                <Picker.Item label="40kg" value="40kg" />
                <Picker.Item label="50kg" value="50kg" />
              </Picker>
            </View>

            {/* OBSERVAÇÃO */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Tem alguma observação?</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Comente sobre seus itens, horários para recebimento, etc."
                value={observation}
                onChangeText={setObservation}
              />
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Home')}>
              <Text style={styles.buttonText}>Agendar coleta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  backButtonText: {
    fontSize: 24,
    color: '#018A23',
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
  content: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 16,
    textAlign: 'center',
    padding: 10,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 19,
    marginBottom: 8,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#0A9D3C',
    color: 'white',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  pickerContainer: {
    borderColor: 'lightBlue',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 2,
  },
});
