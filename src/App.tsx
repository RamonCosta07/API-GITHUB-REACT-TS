import { Outlet } from 'react-router-dom';
import styles from './App.module.css';

function App() {

  return (
    <div className={styles.app}>
      <h1>Encontrar GitHub</h1>
      <Outlet />
    </div>
  )
}

export default App
