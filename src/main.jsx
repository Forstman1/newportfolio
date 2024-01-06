import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    // Override default styles for the global body
    global: {
      body: {
        bg: '#0F0F0F', // Set background color to white or your desired color
        // color: 'black', // Set text color to black or your desired color
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>

      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
