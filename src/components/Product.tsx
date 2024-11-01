import { StyleSheet,View, Text,Image } from 'react-native'
import React from 'react'
import { Producttypes } from '../types';

const types = {
    
}
const Product = ({ product }: {product: Producttypes}) => {
  return (
      <View style={styles.container}>
          <Image style={styles.image} source={{uri: product.image }} /> 
          <Text style ={styles.name}>{product.name}</Text>
          <Text style={styles.price}>{product.price}</Text>
    </View>
  )
}

export default Product

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        borderColor: 'lightgray',
        borderRadius: 10,
        margin:5
    },
    image: {
        width: '100%',
        aspectRatio:1
    },
    name: {
        fontSize: 10,
        fontWeight:'bold'
    },
    price: {
        fontSize: 8,
        fontWeight:'normal'
    }



})