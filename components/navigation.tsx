import styles from '../styles/navigation.module.css'
import React from 'react'
import { useRouter } from 'next/router'

const rows = [
  [
    { name: 'Desert', slug: 'desert' },
    { name: 'Jungle', slug: 'jungle' },
  ],
  [
    { name: 'City', slug: 'city' },
    { name: 'More like this', slug: 'city' },
    { name: 'Ocean', slug: 'ocean' },
  ],
  [
    { name: 'Snow', slug: 'snow' },
    { name: 'Mountains', slug: 'mountains' },
  ],
]

const Navigation: React.FC = () => {
  const router = useRouter()

  return (
    <nav className={styles.wrapper}>
      {rows.map((row) => (
        <div key={row[0].name} className={styles.row}>
          {row.map((category) => (
            <div key={category.name} className={styles.hexagon}>
              <span className={styles.title}>{category.name}</span>
            </div>
          ))}
        </div>
      ))}
    </nav>
  )
}

export default Navigation
