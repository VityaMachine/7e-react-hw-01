import styles from './App.module.css'

import Zodiac from './Zodiac'

import data from '../data/zodiac.json'

function App() {
  return (
    <div className={styles.app}>
      <Zodiac zodiacArray={data}/>
    </div>
  );
}

export default App;
