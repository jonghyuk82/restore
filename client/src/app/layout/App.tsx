import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from '@mui/material'
import { useState } from 'react'
import Catalog from '../../features/catalog/Catalog'
import Header from './Header'

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

  const [darkMode, setDarkMode] = useState(false)
  const [themeLabel, setThemeLabel] = useState('Default')
  const paletteType = darkMode ? 'dark' : 'light'
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea' : '#121212',
      },
    },
  })

  function handleThemeChange() {
    setDarkMode(!darkMode)
    setThemeLabel(darkMode ? 'Default' : 'Dark')
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>
      <Header
        darkMode={darkMode}
        handleThemeChange={handleThemeChange}
        themeLabel={themeLabel}
      ></Header>
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  )
}

export default App
