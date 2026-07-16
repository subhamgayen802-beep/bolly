
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {store} from './store/store.js'
import { Provider } from 'react-redux'
import { CartProvider } from './context/cartContext.jsx';

createRoot(document.getElementById('root')).render(
  
   <Provider store={store}>
    <CartProvider>
  <App/>
  </CartProvider>
  </Provider>
)
