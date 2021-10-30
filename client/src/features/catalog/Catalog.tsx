import { useState, useEffect } from 'react'
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
    fetch('http://localhost:5000/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])

  return (
    <>
      <ProductList products={products}></ProductList>
    </>
  )
}
