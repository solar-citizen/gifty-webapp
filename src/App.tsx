import { FC } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from './components'
import { Home, Administration } from './pages'
import styles from './App.module.scss'

const App: FC = () => {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path='/' element={<Layout.WithNav />}>
          <Route path='/' element={<Home />} />
          <Route path='/admin' element={<Administration />} />
        </Route>
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </div>
  )
}

export default App
