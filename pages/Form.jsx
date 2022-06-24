import Head from 'next/head'
import styles from '../styles/Form.module.css';


const Form = () => {
  return (
    <div className={styles.form}>
        <Head>
        <title>Form</title>
        <meta name="description" content="Form page" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
        <div className={styles.forms}>

    <div className={styles.heading}>Registration</div>

    <form action="#">

      <div className={styles.cardDetails}>

        <div className={styles.cardBox}>
          <span className={styles.details}>First Name</span>
          <input type="text" placeholder="First Name"/>
        </div>

        <div className={styles.cardBox}>
          <span className={styles.details}>Last Name</span>
          <input type="text" placeholder="Last Name"/>
        </div>

        <div className={styles.cardBox}>
          <span className={styles.details}>Phone Number</span>
          <input type="phone" placeholder="Phone Number"/>
        </div>

        <div className={styles.cardBox}>
          <span className={styles.details}>Email</span>
          <input type="email" placeholder="Email Address"/>
        </div>

        <div className={styles.cardBox}>
          <span className={styles.details}>State</span>
          <input type="text" placeholder="State of Origin"/>
        </div>

        <div className={styles.cardBox}>
          <span className={styles.details}>Level of Education</span>
          <input type="text" placeholder="Level of Education"/>
        </div>

        <div className={styles.cardBox}>
          <span className={styles.details}>How did you hear about us?</span>
          <input type="text" placeholder="How did you heaar about us"/>
        </div>

        <div className={styles.cardBox}>
          <span className={styles.details}>Path</span>
          <input type="text" placeholder="Path"/>
        </div>

        <div className={styles.cardBox}>
          <span className={styles.details}>Age Group</span>
          <input type="text" placeholder="Age Group"/>
        </div>

        <div className={styles.cardBox}>
          <span className={styles.details}>Gender</span>
          <input type="text" placeholder="Gender"/>
        </div>

      </div>

      <div className={styles.button}>
        <input type="submit" value="Register"/>
      </div>

    </form>

    </div>

    </div>
  )
}

export default Form
