import styles from '../styles/Hero.module.css';
import Circle from '../components/Circle';
import Circle2 from '../components/Circle2';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Circle backgroundColor="#FFAD00" top="-40vh" left="-40vh" />
      <Circle2 backgroundColor="#FFAD00" bottom="-40vh" right="-40vh" />
       <div className={styles.heroContent}>
       <div className={styles.brandTitle}>
      <h1><span>abound</span> consult training program</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque,
        ipsa?
      </p>
    </div>
       </div>
    <div className={styles.heroContent}>
     <div></div>
    </div>
    </div>
  )
}

export default Hero