import styles from './UserCard.module.css';
export default function UserCard() {
    return (
      <div className={styles.container}>
        <h2>Dana</h2>
        <p>Age: 24</p>
        <p>Job: Full Stack Developer</p>
  
        <button>
          Show Profile
        </button>
      </div>
    )
}