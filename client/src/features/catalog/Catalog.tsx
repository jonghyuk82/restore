import { useState, useEffect } from 'react'
import agent from '../../app/api/agent'
import { Product } from '../../app/models/product'
import ProductList from './ProductList'

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([])

  //#region fetch data basic
  // useEffect(() => {
  //   fetch('http://localhost:5000/api/products')
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data))
  // }, [])
  //#endregion

  useEffect(() => {
    agent.Catalog.list().then((products) => setProducts(products))
  }, [])

  return (
    <>
      <ProductList products={products}></ProductList>
    </>
  )
}
