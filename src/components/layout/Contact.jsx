import styles from '../CSS/App.module.css';

function Contact() {
    return(
        <section className={styles.contact} id='contact'>
             <div className={`${styles.title}`}>
                <h2 className={styles.titleText}><span>C</span>ontato</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate autem cum 
                </p>
            </div>
            <div className={styles.contactForm}>
                <h3>Nos envie uma mensagem</h3>
                <div className={styles.inputBox}>
                    <input type="text" name="name" placeholder='digite seu nome'/>
                </div>
                <div className={styles.inputBox}>
                    <input type="text" name="email" placeholder='e-mail'/>
                </div>
                <div className={styles.inputBox}>
                    <textarea name="msg" placeholder='digite sea mensagem'/>
                </div>
                <div className={styles.inputBox}>
                    <input type="submit" name="submit" value="Enviar"/>
                </div>
            </div>
        </section>
    )
}
export default Contact;