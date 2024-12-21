import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.selection}>
          <h1>Plajta Corp.</h1>
          <h2>Team of creazy people</h2>
        </div>
        <div className={styles.selection}>
          <div className={styles.cards_row}>
            <div className={styles.card}>
              <h2>Who we Are?</h2>
              <h3>
                We are a group of high school students passionate about creating
                innovative projects, from autonomous drones to assistive
                technologies, and excelling in hackathons. Through teamwork and
                creativity, we aim to solve real-world problems and make a
                positive impact.
              </h3>
            </div>
            <div className={styles.card}>
              <h2>Why we are doing that?</h2>
              <h3>
                We are doing this to push the boundaries of our creativity and
                technical skills, turning our ideas into meaningful innovations.
                Our goal is to create solutions that address real-world
                challenges while learning and growing through collaboration and
                competition.
              </h3>
            </div>
            <div className={styles.card}>
              <h2>Want more about us?</h2>
              <h3>
                You can find us on our <a>github</a> or see more about each
                member on <a>Members Page</a>, Also you can email to us{" "}
                <a>plajta@plajta.eu</a>
              </h3>
            </div>
          </div>
        </div>
      </main>
      {/* <footer className={styles.footer}></footer> */}
    </div>
  );
}
