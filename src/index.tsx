import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
