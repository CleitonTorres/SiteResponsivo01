import styles from '../CSS/App.module.css';
import pessoa01 from '../imgs/pessoa01.jpg';
import pessoa02 from '../imgs/pessoa02.jpg';
import pessoa03 from '../imgs/pessoa03.jpg';
import pessoa04 from '../imgs/pessoa04.jpg';

function Section02() {
    return(
        <section className={styles.section02} id='section02'>
           <div className={styles.title}>
                <h2 className={styles.titleText}><span>S</span>essão 02</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate autem cum 
                </p>
            </div>
            <div className={styles.content}>
                <div className={styles.box}>
                    <div className={styles.imgBox}>
                        <img src={pessoa01} alt="" />
                    </div>
                    <div className={styles.text}>
                        <h3>Nome pessoa</h3>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.imgBox}>
                        <img src={pessoa02} alt="" />
                    </div>
                    <div className={styles.text}>
                        <h3>Nome pessoa</h3>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.imgBox}>
                        <img src={pessoa03} alt="" />
                    </div>
                    <div className={styles.text}>
                        <h3>Nome pessoa</h3>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.imgBox}>
                        <img src={pessoa04} alt="" />
                    </div>
                    <div className={styles.text}>
                        <h3>Nome pessoa</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Section02;