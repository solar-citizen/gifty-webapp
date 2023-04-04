import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import styles from './Tab.module.scss'

type TabProps = {
  children: React.ReactNode
  active: number
}

type TabDataProps = {
  tab: string
  children: React.ReactNode
}

const Tab = ({ children, active }: TabProps) => {
  const [activeTab, setActiveTab] = useState(active)
  const [tabsData, setTabsData] = useState<TabDataProps[]>([])

  useEffect(() => {
    let data: TabDataProps[] = []

    React.Children.forEach(children, (element: React.ReactNode) => {
      if (!React.isValidElement(element)) return

      const {
        props: { tab, children },
      } = element

      data.push({ tab, children })
    })

    setTabsData(data)
  }, [children])

  const renderTabs = () => {
    return tabsData.map(({ tab }: TabDataProps, i: number) => (
      <li key={i}>
        <Button active={i === activeTab ? true : false} type='button' variant='primary' onClick={() => setActiveTab(i)}>
          {tab}
        </Button>
      </li>
    ))
  }

  return (
    <div className={styles.Tab}>
      <ul>{renderTabs()}</ul>
      <div className={styles.TabContent}>{tabsData[activeTab]?.children}</div>
    </div>
  )
}

const TabPane = ({ children }: TabDataProps) => <>{children}</>

Tab.TabPane = TabPane

export default Tab
