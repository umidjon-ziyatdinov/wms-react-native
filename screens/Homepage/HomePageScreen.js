import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MenuItem from '../../components/MenuItem/MenuItem'
import { menuConfig } from '../../utils/const'

const HomePageScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        {menuConfig.map(item =>  {
            return (<MenuItem item={item} navigation= {navigation}  />)
        })}
    <Button title='update title'  onPress={() => navigation.setOptions({title: 'updated!!!!'})}/>
    </View>
  )
}

export default HomePageScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 8,
        paddingTop: 20,
        paddingHorizontal: 20
    }
})