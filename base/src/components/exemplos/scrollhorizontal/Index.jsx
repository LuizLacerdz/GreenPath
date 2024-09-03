import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import styles from './Styles'

export default function ScrollHorizontal() {
  return (
    <SafeAreaView>
      <ScrollView horizontal>
        <View style={styles.container}>
          <View style={styles.itens}>

          </View>
          <View style={styles.itens2}>

          </View>
          <View style={styles.itens3}>

          </View>
          <View style={styles.itens4}>

          </View>
          <View style={styles.itens5}>

          </View>
        </View>
      </ScrollView>

        <ScrollView>
          <View style={styles.container2}>
              <View style={styles.itens6}>

              </View>
          </View>
        </ScrollView>

    </SafeAreaView>
  )
}