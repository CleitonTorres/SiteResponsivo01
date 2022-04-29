import styles from '../CSS/App.module.css';
import pessoa01 from '../imgs/pessoa01.jpg';
import pessoa02 from '../imgs/pessoa02.jpg';
import pessoa03 from '../imgs/pessoa03.jpg';
import pessoa04 from '../imgs/pessoa04.jpg';

function Section03() {
    return(
        <section className={styles.section03} id='section03'>
           <div className={`${styles.title} ${styles.white}`}>
                <h2 className={styles.titleText}><span>S</span>essão 03</h2>
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
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit mollitia maiores 
                            unde voluptate quia maxime perspiciatis sunt, magni vero quam dolor, aperiam 
                            quibusdam nostrum magnam! Fugiat enim maxime perferendis vitae!
                        </p>
                        <h3>Nome da pessoa</h3>
                    </div>                    
                </div>
                <div className={styles.box}>
                    <div className={styles.imgBox}>
                        <img src={pessoa02} alt="" />
                    </div>
                    <div className={styles.text}>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit mollitia maiores 
                            unde voluptate quia maxime perspiciatis sunt, magni vero quam dolor, aperiam 
                            quibusdam nostrum magnam! Fugiat enim maxime perferendis vitae!
                        </p>
                        <h3>Nome da pessoa</h3>
                    </div>                    
                </div>
                <div className={styles.box}>
                    <div className={styles.imgBox}>
                        <img src={pessoa03} alt="" />
                    </div>
                    <div className={styles.text}>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit mollitia maiores 
                            unde voluptate quia maxime perspiciatis sunt, magni vero quam dolor, aperiam 
                            quibusdam nostrum magnam! Fugiat enim maxime perferendis vitae!
                        </p>
                        <h3>Nome da pessoa</h3>
                    </div>                    
                </div>
                <div className={styles.box}>
                    <div className={styles.imgBox}>
                        <img src={pessoa04} alt="" />
                    </div>
                    <div className={styles.text}>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit mollitia maiores 
                            unde voluptate quia maxime perspiciatis sunt, magni vero quam dolor, aperiam 
                            quibusdam nostrum magnam! Fugiat enim maxime perferendis vitae!
                        </p>
                        <h3>Nome da pessoa</h3>
                    </div>                    
                </div>
            </div>
        </section>
    )
}
export default Section03;