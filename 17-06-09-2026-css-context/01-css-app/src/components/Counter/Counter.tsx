import { useState } from 'react';
import styles from './Counter.module.css';

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className={styles.box}>
      <h1 className="{styles.title}">Counter</h1>
      <p key={count} className={styles.count}>
        {count}
      </p>
      <button className={styles.button} onClick={handleClick}>
        Increment
      </button>
    </div>
  );
}
