import styles from './features.module.css';

function Features(props) {
    return (
        <div className={(props.boxType == "0")? styles.bigBoxType1 : styles.bigBoxType2}>
            <div className={(props.boxType == "0")? styles.smallBoxType1 : styles.smallBoxType2}>
                <h2> {props.title} </h2>
                <p> {props.body} </p>
            </div>
            <div className={styles.smallBox}>
                <img className={(props.boxType == "0")? styles.profileImgType1 : styles.profileImgType2}
                    src={props.imgSrc} alt="task_img" />
            </div>
        </div>
    )
}

export default Features;