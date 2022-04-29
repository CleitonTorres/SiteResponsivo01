import styles from '../CSS/App.module.css';
import box01 from '../imgs/box01.jpg';

function About(){
    return(
        <section className={styles.about} id="about"> 
            <div className={styles.row}>
                <div className={styles.col50}>
                    <h2 className={styles.titleText}><span>S</span>obre Nós</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat 
                        suscipit quam facere placeat minima expedita voluptates eos rem. Ipsa quisquam 
                        totam facilis quod eligendi odit est, officia pariatur cupiditate!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat 
                        suscipit quam facere placeat minima expedita voluptates eos rem. Ipsa quisquam 
                        totam facilis quod eligendi odit est, officia pariatur cupiditate!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat 
                        suscipit quam facere placeat minima expedita voluptates eos rem. Ipsa quisquam 
                        totam facilis quod eligendi odit est, officia pariatur cupiditate!
                    </p>
                </div>
                <div className={styles.col50}>
                    <div className={styles.imgBox}>
                        <img src={box01} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;