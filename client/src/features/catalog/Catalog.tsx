import { useState, useEffect } from 'react'
import agent from '../../app/api/agent'
import LoadingComponent from '../../app/layout/LoadingComponent'
import { Product } from '../../app/models/product'
import ProductList from './ProductList'

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  //#region fetch data basic
  // useEffect(() => {
  //   fetch('http://localhost:5000/api/products')
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data))
  // }, [])
  //#endregion

  useEffect(() => {
    agent.Catalog.list()
      .then((products) => setProducts(products))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <LoadingComponent message='Loading products' />
  return (
    <>
      <ProductList products={products}></ProductList>
    </>
  )
}
