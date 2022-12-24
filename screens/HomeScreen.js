import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { auth } from '../firebase'

const HomeScreen = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Image style={styles.logo} source={require('../assets/olympus_logo.png')} />
        <TouchableOpacity style={styles.searchButton}>
          <Image source={require('../assets/search.png')}></Image>
        </TouchableOpacity>
      </View>

      <View style={styles.content_container}>
        <Text>Follow athletes to see their workouts here</Text>
        <TouchableOpacity
          style={[styles.sync_contacts]}>
          <Text style={styles.contacts_button}>Sync Contacts</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
          <Image style={styles.pic} source={require('../assets/home.png')}></Image>
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Image style={styles.pic} source={require('../assets/new_workout.png')}></Image>
          <Text style={styles.footerText}>Workout Builder</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Image style={styles.pic} source={require('../assets/profile.png')}></Image>
          <Text style={styles.footerText}>Profile</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
  button: {
    height: 50
  },  

})