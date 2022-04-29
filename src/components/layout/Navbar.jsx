import { useState } from 'react';
import styles from '../CSS/App.module.css';

function Navbar(){
    const [stickyClass, setStyckClass] = useState('');
    const [toggleClass, setToggleClass] = useState('menuToggle');
    const [navigateActiveClass, setnavigateActiveClass] = useState('navigation');

    window.addEventListener('scroll', function(){
        if(window.scrollY > 0){
            const header = document.querySelector('nav');
            header.classList.toggle('sticky');
            setStyckClass('sticky')
        }else{
            setStyckClass('nav')
        }
        
    })

    function toggleMenu(){
        //const menuToggle = document.querySelector('.menuToggle');
        //menuToggle.classList.toggle('active');
        toggleClass !== 'active' ? setToggleClass('active')
        : setToggleClass('menuToggle')

        navigateActiveClass !== 'activeNavigateToggle' ? setnavigateActiveClass('activeNavigateToggle')
        : setnavigateActiveClass ('navigation')
    }

    return(
        <header>
            <nav className={`${styles.nav} ${styles[stickyClass]}`}>
                <a href="#" className={styles.logo}>Logo<span>.</span></a>
                <div className={styles[toggleClass]} onClick={()=> toggleMenu()}></div>
                <ul className={styles[navigateActiveClass]}>
                    <li><a href="#banner">Home</a></li>
                    <li><a href="#about">Sobre nós</a></li>
                    <li><a href="#section01">Sessão 01</a></li>
                    <li><a href="#section02">Sessão 02</a></li>
                    <li><a href="#section03">Sessão 03</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar;