import styles from '../CSS/App.module.css';
import item01 from '../imgs/item01.jpg';
import item02 from '../imgs/item02.jpg';

function Section01() {
    return(
        <section className={styles.section01} id='section01'>
            <div className={styles.title}>
                <h2 className={styles.titleText}><span>S</span>essão 01</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate autem cum 
                </p>
            </div>
            <div className={styles.content}>
                <div className={styles.box}>
                    <div className={styles.imgBox}>
                        <img src={item01} alt="" />
                    </div>
                    <div className={styles.text}>
                        <h3>Item 01 do portifólio</h3>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.imgBox}>
                        <img src={item02} alt="" />
                    </div>
                    <div className={styles.text}>
                        <h3>Item 02 do portifólio</h3>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.imgBox}>
                        <img src={item01} alt="" />
                    </div>
                    <div className={styles.text}>
                        <h3>Item 03 do portifólio</h3>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.imgBox}>
                        <img src={item02} alt="" />
                    </div>
                    <div className={styles.text}>
                        <h3>Item 03 do portifólio</h3>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.imgBox}>
                        <img src={item01} alt="" />
                    </div>
                    <div className={styles.text}>
                        <h3>Item 04 do portifólio</h3>
                    </div>
                </div>
            </div>
            <div className={styles.title}>
                <a href="#" className={styles.btn}>Veja todos os nossos serviços</a>
            </div>
        </section>
    )
}
export default Section01;