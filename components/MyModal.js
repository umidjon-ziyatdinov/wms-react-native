import { Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MyModal = (props) => {
  return (
    <Modal style={styles.container} visible={props.open}>
    <View>
      <Text style={styles.title}>MyModal</Text>
    </View>
    </Modal>
 
  )
}

export default MyModal

const styles = StyleSheet.create({
    container: {
        width: '60%',
        height: '100px',
        padding: 30,
        backgroundColor: 'black'
    },
    title:{
        padding: 10,
        color: 'white'
    },
    
})