import { FC } from 'react'
import { Categories, Discounts, Maintenance, Tab } from '../index'
import styles from './Tabs.module.scss'

const Tabs: FC = () => {
  const tabContent = [
    {
      title: 'Categories',
      content: <Categories />,
    },
    {
      title: 'Discounts',
      content: <Discounts />,
    },
    {
      title: 'Maintenance',
      content: <Maintenance />,
    },
  ]

  return (
    <div className={styles.Tabs}>
      <Tab active={0}>
        {tabContent.map((tab, i) => (
          <Tab.TabPane key={i} tab={tab?.title}>
            {tab?.content}
          </Tab.TabPane>
        ))}
      </Tab>
    </div>
  )
}

export default Tabs
