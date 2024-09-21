import styles from './Skills.module.css'
import Slists from './Slist'
import html from '../../assets/skill_icon/html.png'
import css from '../../assets/skill_icon/css.png'
import js from '../../assets/skill_icon/js.png'
import bootstrap from '../../assets/skill_icon/bootstrap.png'
import react from '../../assets/skill_icon/react.png'
import tailwind from '../../assets/skill_icon/tailwind.png'

const Skills = () =>{

    return(
        <div className={styles.box}>
            <button className={styles.heading}>Skills</button>
            <div className={styles.container}>
                < Slists src={html} skill='HTML'/>
                < Slists src={css} skill='CSS'/>
                < Slists src={js} skill='JAVA SCRIPT'/>
                <hr />
                < Slists src={tailwind} skill='TAILWIND CSS'/>
                < Slists src={bootstrap} skill='BOOTSTRAP'/>
                < Slists src={react} skill='REACTJS'/>
                <hr />
            </div>
        </div>
    )

}

export default Skills