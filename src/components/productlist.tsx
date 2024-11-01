import {  Text, View } from 'react-native'
import React from 'react'
import Product from './Product'
import { Producttypes } from '../types'



const Productlist = ({ products }: { products:Producttypes[]}) => {
  return (
    <View>
      {products.map((product) => (<Product key={ product.id} product={product} />))}
    </View>
  )
}

export default Productlist

