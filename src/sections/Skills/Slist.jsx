import styles from './Slist.module.css';

const Skilllist = ({src, skill}) => {
    return (
        <div className={styles.list}>
            <img src={src} alt="img" />
            <p>{skill}</p>
        </div>
    );
};

export default Skilllist;
