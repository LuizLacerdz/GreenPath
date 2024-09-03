import React from 'react';
import { View, Text} from 'react-native';
import { Button } from '@rneui/themed';
import Pagina1 from './Pagina1';
import Pagina2 from './Pagina2';
import styles from './Styles';

export default function Home({ navigation }) {
    return (
        <View style={styles.home}>
            <View>
                <Button color={'#000'} containerStyle={styles.btn} title={'Página 1'} onPress={() => navigation.navigate(Pagina1)} />
                <Button color={'#f10b32'} containerStyle={styles.btn} title={'Página 2'} onPress={() => navigation.navigate(Pagina2)} />
            </View>

        </View>
    );
}