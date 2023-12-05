import styles from './page.module.css'

export const runtime = 'edge'

export default function Home() {
  return (
    <main className={styles.main}>
        <p>These are my env variables</p>
        <ul>
          <li>
            MY_ENV_VAR_A = {process.env.MY_ENV_VAR_A}
          </li>
          <li>
            MY_ENV_VAR_B = {process.env.MY_ENV_VAR_B}
          </li>
          <li>
            MY_ENV_VAR_C = {process.env.MY_ENV_VAR_C}
          </li>
        </ul>
    </main>
  )
}
