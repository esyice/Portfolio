import styles from './Pagestyle.module.css';
import profileImg from '../../assets/profile.png';
import twittericon from '../../assets/twitter.png';
import githubicon from '../../assets/github50.png';
import linkdinicon from '../../assets/linkdin.png';
import resume from '../../assets/resume/Resume.pdf';
import TypingComponent from '../../typeingcompo/TypingComponent';


function Firstpage() {


  return (
    <>
      <section id='fpage'>

        <div className={styles.imagecontainer}>
          <img className={styles.profileImg} src={profileImg} alt="profile" />
        </div>
        <div className={styles.info}> 
          <h1>Hi, I'm Ansh </h1>
          <TypingComponent/>
          <p>The image at the top is not my real image.</p>
          <span>
              <a href="https://x.com/" target='_blank'>
                <img src={twittericon} alt="X" />
              </a>
              <a href="https://in.linkedin.com/" target='_blank'>
                <img src={linkdinicon} alt="github" />
              </a>
              <a href="https://github.com/" target='_blank'>
                <img src={githubicon} alt="linkdin" />
              </a>

          </span>
          <div className={styles.download}>
            <a href={resume} download className={styles.resumebtm}>
              RESUME
            </a>
          </div>

        </div>
      </section>
    </>
  )
}

export default Firstpage