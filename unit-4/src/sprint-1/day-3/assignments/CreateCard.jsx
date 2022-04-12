import styles from "./GiftCard.module.css"


const Card_create=(props)=>{
    console.log(props)
    const {date,study,gift_of,pay,divices,arrow,logo,background} = props;
    
    return (
        <div className={styles.main_div} style={{backgroundColor:`${background}`}}>
            <div className={styles.first_div}>
                <p>{date}</p>
                <h3>{study}</h3>
                <h1>{gift_of}</h1>
                <h1>{pay}</h1>
                <p>{divices}</p>
            </div>
            <div className={styles.last_div}>
                <div><img src={logo} /></div>
                <div><img src={arrow}/></div>
            </div>
        </div>
    )
}

export default Card_create;