import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navigation } from '../index'
import styles from './Layout.module.scss'

const WithoutNav = () => <Outlet />

const WithNav = () => (
  <>
    <Navigation />
    <div className={styles.Layout}>
      <Outlet />
    </div>
  </>
)

const Layout = { WithoutNav, WithNav }

export default Layout
