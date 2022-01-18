import React from 'react'
import styles from './someExampleComponent.module.scss'

type SomeExampleComponentProps = {

}

const SomeExampleComponent: React.FC<SomeExampleComponentProps> = () => {
  return (
    <div className={styles.container}>
    <h1>Saif</h1>
    <p>My supercool component</p>
    </div>
  )
}

export default SomeExampleComponent