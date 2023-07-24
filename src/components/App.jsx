import { Fragment } from 'react';
import About from './About/About';
import Exp from './Exp/Exp';

import styles from './App.module.css';

const App = () => {
  return (
    <Fragment>
      <div className={styles.mainWrapper}>
        <About />
        <Exp />
      </div>
    </Fragment>
  );
};

export default App;
