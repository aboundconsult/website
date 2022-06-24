import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const Paths = () => {
  return (
    <div className={styles.path}>
      <Head>
        <title>Paths</title>
        <meta name="description" content="abound consult paths" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <header className={styles.header}>what are you looking for?</header>
      <main className={styles.content}>
        <section className={styles.card}>
          <div className={styles.cards}>
            <Image
              src="/img/win.jpg"
              alt="frontend"
              width="65%"
              height="50%"
              layout="responsive"
            />
          </div>
          <div className={styles.cards}>
            <h3>UI/UX</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aut
              molestiae, nam deserunt quaerat excepturi asperiores reprehenderit
              tempore iste atque ratione, autem id! Consequuntur fuga optio
              alias error distinctio perferendis?
            </p>
            <div className={styles.btn}>
              <Link href="/Form">Apply</Link>
            </div>
          </div>
        </section>

        <section className={styles.card}>
          <div className={styles.cards}>
            <h3>Frontend</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aut
              molestiae, nam deserunt quaerat excepturi asperiores reprehenderit
              tempore iste atque ratione, autem id! Consequuntur fuga optio
              alias error distinctio perferendis?
            </p>
            <div className={styles.btn}>
              <Link href="/Form">Apply</Link>
            </div>
          </div>
          <div className={styles.cards}>
            <Image
              src="/img/black.jpg"
              alt="frontend"
              width="65%"
              height="50%"
              layout="responsive"
            />
          </div>
        </section>

        <section className={styles.card}>
          <div className={styles.cards}>
            <Image
              src="/img/code.jpg"
              alt="frontend"
              width="65%"
              height="50%"
              layout="responsive"
            />
          </div>
          <div className={styles.cards}>
            <h3>Backend</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aut
              molestiae, nam deserunt quaerat excepturi asperiores reprehenderit
              tempore iste atque ratione, autem id! Consequuntur fuga optio
              alias error distinctio perferendis?
            </p>
            <div className={styles.btn}>
              <Link href="/Form">Apply</Link>
            </div>
          </div>
        </section>

        <section className={styles.card}>
          <div className={styles.cards}>
            <h3>Mobile</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aut
              molestiae, nam deserunt quaerat excepturi asperiores reprehenderit
              tempore iste atque ratione, autem id! Consequuntur fuga optio
              alias error distinctio perferendis?
            </p>
            <div className={styles.btn}>
              <Link href="/Form">Apply</Link>
            </div>
          </div>
          <div className={styles.cards}>
            <Image
              src="/img/black.jpg"
              alt="frontend"
              width="65%"
              height="50%"
              layout="responsive"
            />
          </div>
        </section>

        <section className={styles.card}>
          <div className={styles.cards}>
            <Image
              src="/img/hp.jpg"
              alt="frontend"
              width="65%"
              height="50%"
              layout="responsive"
            />
          </div>
          <div className={styles.cards}>
            <h3>Blockchain</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aut
              molestiae, nam deserunt quaerat excepturi asperiores reprehenderit
              tempore iste atque ratione, autem id! Consequuntur fuga optio
              alias error distinctio perferendis?
            </p>
            <div className={styles.btn}>
              <Link href="/Form">Apply</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Paths;
