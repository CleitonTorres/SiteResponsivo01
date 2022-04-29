import styles from '../CSS/App.module.css';

function Banner(){
    return(
        <section className={styles.banner} id="banner">
            <div className={styles.content}>
                <h2>Escolha seu Título</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin iaculis metus sed placerat 
                venenatis. Donec blandit faucibus sapien id fringilla. Ut in feugiat velit. Donec id lorem 
                suscipit purus posuere dapibus. Nulla vehicula eleifend orci pharetra ultrices. Fusce placerat 
                tincidunt semper. Aliquam ac convallis quam. 
                </p>
                <a href='#' className={styles.btn}>Pág. Destaque</a>
            </div>
        </section>
    )
}
export default Banner;