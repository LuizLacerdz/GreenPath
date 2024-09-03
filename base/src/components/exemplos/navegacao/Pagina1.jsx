import React from 'react';
import { View, Text } from 'react-native';
import styles from './Styles';

export default function Pagina1({ navigation }) {
    return (
        <View style={styles.container}>
                <Text style={styles.textoLink} onPress={() => navigation.push('Pagina2')}>Pagina2</Text>
                <Text style={styles.textoLink} onPress={() => navigation.push('Home')}>Home</Text>
        </View>
    );
}