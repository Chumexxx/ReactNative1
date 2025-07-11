import {View, Text, StyleSheet} from 'react-native'

const explore = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Coffee Shop</Text>
    </View>
  )
}

export default explore

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
})

