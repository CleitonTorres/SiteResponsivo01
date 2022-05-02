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

    function toggleMenu(type){
        var altura = window.screen.height;
        var largura = window.screen.width;
        if (largura <= 991){
            toggleClass !== 'active' ? setToggleClass('active')
            : setToggleClass('menuToggle')
    
            navigateActiveClass !== 'activeNavigateToggle' ? setnavigateActiveClass('activeNavigateToggle')
            : setnavigateActiveClass ('navigation')
        }
    }

    return(
        <header>
            <nav className={`${styles.nav} ${styles[stickyClass]}`}>
                <a href="#" className={styles.logo}>Logo<span>.</span></a>
                <div className={styles[toggleClass]} onClick={()=> toggleMenu('toggle')}></div>
                <ul className={styles[navigateActiveClass]}>
                    <li><a href="#banner" onClick={()=> toggleMenu('nav')}>Home</a></li>
                    <li><a href="#about" onClick={()=> toggleMenu('nav')}>Sobre nós</a></li>
                    <li><a href="#section01" onClick={()=> toggleMenu('nav')}>Sessão 01</a></li>
                    <li><a href="#section02" onClick={()=> toggleMenu('nav')}>Sessão 02</a></li>
                    <li><a href="#section03" onClick={()=> toggleMenu('nav')}>Sessão 03</a></li>
                    <li><a href="#contact" onClick={()=> toggleMenu('nav')}>Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar;