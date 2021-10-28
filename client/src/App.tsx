import { useEffect, useState } from 'react'
import { Product } from './product'

function App() {
  //#region Sample of hooks
  // const [products, setProducts] = useState([
  //   { name: 'product1', price: 100.0 },
  //   { name: 'product2', price: 200.0 },
  // ])

  // // calling API use useEffect hook
  // // adding [] is dependency.
  // // It is ver important because if don't, it will call api every rendering of this component
  // useEffect(() => {
  //   fetch('http://localhost:5000/api/products')
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data))
  // }, [])

  // //#region using useState hook
  // // after product2, 200.0 and plus 1 and 100.
  // // automatic increase
  // // so it will be product3, 300.0
  // function addProductaddup() {
  //   setProducts((prevState) => [
  //     ...prevState,
  //     {
  //       name: 'product' + (prevState.length + 1),
  //       price: prevState.length * 100 + 100,
  //     },
  //   ])
  // }

  // // basic useState
  // // if button clicks, it just add product3, 300.0
  // function addProduct() {
  //   setProducts([
  //     ...products,
  //     {
  //       name: 'product3',
  //       price: 300.0,
  //     },
  //   ])
  // }
  //#endregion

  // return (
  //   <div className='app'>
  //     <h1>Re-Store</h1>
  //     <ul>
  //       {products.map((item, index) => (
  //         <li key={index}>
  //           {item.name} - {item.price}
  //         </li>
  //       ))}
  //     </ul>
  //     <button onClick={addProductaddup}>Add product</button>
  //   </div>
  // )
  //#endregion

  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])

  function addProduct() {
    setProducts((prevState) => [
      ...prevState,
      {
        id: prevState.length + 101,
        name: 'product' + (prevState.length + 1),
        price: prevState.length * 100 + 100,
        brand: 'some brand',
        description: 'some description',
        pictureUrl: 'http://picsum.photos/200',
      },
    ])
  }

  return (
    <div>
      <h1>Re-Store</h1>
      <ul>
        {products.map((products) => (
          <li key={products.id}>
            {products.name} - {products.price}
          </li>
        ))}
      </ul>
      <button onClick={addProduct}>Add product</button>
    </div>
  )
}

export default App
