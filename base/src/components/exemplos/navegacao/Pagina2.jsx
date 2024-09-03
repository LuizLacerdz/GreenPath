import React from 'react';
import { View, Text } from 'react-native';
import styles from './Styles';

export default function Pagina2({ navigation }) {
    return (
        <View style={styles.container}>
                <Text style={styles.textoLink} onPress={() => navigation.push('Pagina1')}>Pagina1</Text>
                <Text style={styles.textoLink} onPress={() => navigation.push('Home')}>Home</Text>
        </View>
    );
}
