import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import icedCoffeeImage from '@/assets/images/iced-coffee.png';
import {Link} from 'expo-router'

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
      source={icedCoffeeImage}
      resizeMode='cover'
      style={styles.image}
      >
        <Text style={styles.title}>Coffee Shop</Text>

        <Link href="/explore" style={{marginHorizontal: 'auto'}} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Explore</Text>
          </Pressable>
        </Link>

      </ImageBackground>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 42,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginBottom: 120,
  },
  link: {
    color: 'white',
    textAlign: 'center',
    fontSize: 42,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    padding: 4,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  button: {
   height: 60, 
   borderRadius: 20,
   justifyContent: 'center',
   backgroundColor: 'rgba(0,0,0,0.75)',
   padding: 6
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 4,
  },
});