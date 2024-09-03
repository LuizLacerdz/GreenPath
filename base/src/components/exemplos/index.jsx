import { SafeAreaView, View } from "react-native";
import { Text } from '@rneui/themed';
import styles from './styles'
export default function Exemplos() {

  return (
    <SafeAreaView style={styles.container}>
      <Text h1>Olá mundo!!</Text>
      <View style={styles.item1}>
      </View>
      <View style={styles.item2}>
      </View>
      <View style={styles.item3}>
      </View>
    </SafeAreaView>
  );
}
