import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Fajar Umbara</h1>
        <a href="mailto:fajar@umbara.me">fajar@umbara.me</a>
      </div>
      <div className={styles.content}>
        software engineer at <a href="https://cermati.com" target="_blank" rel="noreferrer">cermati.com</a> (2021 - now)<br /><br />
        fullstack typescript/javascript experience, a little bit of java paired with some random python/bash scripting, used to work in linux/unix environment
        <br /><br />
        2022: <br />
        - join <a href="https://digitalent.kominfo.go.id" target="_blank" rel="noreferrer">dts kominfo (proa)</a> as facilitator in associate cloud engineer path<br />
        - join <a href="https://digitalent.kominfo.go.id" target="_blank" rel="noreferrer">dts kominfo (proa)</a> as participant in associate cloud engineer path<br /><br />
        2021: <br />
        - graduated from <a href="https://telkomuniversity.ac.id" target="_blank" rel="noreferrer">telkom university</a> with computer engineering major.<br />
        - join <a href="https://bangkit.academy" target="_blank" rel="noreferrer">bangkit academy</a> as participant in cloud engineer path<br />
        <br />
        <br />
        links:<br />
        - <a href="https://github.com/gfjaru" target="_blank" rel="noreferrer">github</a><br />
      </div>
    </div>
  )
}
