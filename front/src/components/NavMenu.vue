<template>
    <StyledNav >
        
        <div class="mobile-menu-icon" :class="{hide : !menuOpen}" @click="setMenuOpen(!menuOpen)">
            <i class="fa-solid fa-bars"></i>
        </div>
        
        <ul class="nav-menu" :class="{hide : !menuOpen}">
            <div class="mobile-menu-icon" @click="setMenuOpen(!menuOpen)">
                <i class="fa-solid fa-xmark"></i>
            </div>
            <li class="logo" :class={hide:!menuOpen}>
                <h3>AB</h3>
            </li>
            <li class='nav-items'>
                <nav>
                    <ul>
                        <li><a href="#home" :class="{active : (activeMenuItem==='#home')}" @click="handleClick('#home',$event)"><i class="fa-solid fa-house"></i> Home</a></li>
                        <li><a href="#about" :class="{active : (activeMenuItem==='#about')}" @click="handleClick('#about',$event)"><i class="fa-solid fa-address-card"></i> About</a></li>
                        <li><a href="#services" :class="{active : (activeMenuItem==='#services')}" @click="handleClick('#services',$event)"><i class="fa-solid fa-wrench"></i> Services</a></li>
                        <li><a href="#skills" :class="{active : (activeMenuItem==='#skills')}" @click="handleClick('#skills',$event)"><i class="fa-solid fa-lightbulb"></i> Skills</a></li>
                        <li><a href="#experiences" :class="{active : (activeMenuItem==='#experiences')}" @click="handleClick('#experiences',$event)"><i class="fa-solid fa-laptop-code"></i> Experiences</a></li>
                        <li><a href="#formations" :class="{active : (activeMenuItem==='#formations')}" @click="handleClick('#formations',$event)"><i class="fa-solid fa-book"></i> Formations</a></li>
                        <li><a href="#contact" :class="{active : (activeMenuItem==='#contact')}" @click="handleClick('#contact',$event)"><i class="fa-solid fa-envelope"></i> Contact</a></li>
                    </ul>
                </nav>
            </li>
           
            <li class='social'>
                <a href='https://www.linkedin.com/in/abdeljalil-abahbaz/' target='_blanc'>
                    <font-awesome-icon :icon="['fab', 'linkedin']" />
                </a>
                <a href='https://www.facebook.com/abdeljalil.abahbaz.1' target='_blanc'>
                    <font-awesome-icon :icon="['fab', 'facebook']" />
                </a>
            </li>
        </ul>
    </StyledNav>
</template>
<script>
import StyledNav from './StyledComponents/StyledNav'
import {scrollToSection, handlePopstate} from '../globalFunctions'
export default {
    data(){
        return {
            menuOpen: true,
            activeMenuItem:'#home',
            scrollTimeOut:null,
            scrollToSection:scrollToSection,
            handlePopstate:handlePopstate
        }
    },
    mounted() {
        window.addEventListener('popstate', this.handlePopstate());
        document.querySelector('.container').addEventListener('scroll', ()=>{this.handleTimeout('scrollTimeOut', this.handleScroll, 50)});
    },
    beforeUnmount() {
        window.removeEventListener('popstate', this.handlePopstate());
        document.querySelector('.container').removeEventListener('scroll', ()=>{this.handleTimeout('scrollTimeOut', this.handleScroll, 50)});
    },
    methods:{
        setMenuOpen(isOpen){
            this.menuOpen = isOpen
        },
        handleClick(section, event){
            this.activeMenuItem = section
            this.scrollToSection(section,event)
        },
        handleTimeout(timeout, func, duration){
            if(this[timeout])
                clearTimeout(this[timeout])
                this[timeout] = setTimeout(()=>{
                    func()
                },duration)
        },
        handleScroll() {
            const home = document.querySelector('#home').offsetTop;
            const about = document.querySelector('#about').offsetTop;
            const services = document.querySelector('#services').offsetTop;
            const skills = document.querySelector('#skills').offsetTop;
            const experiences = document.querySelector('#experiences').offsetTop;
            const formations = document.querySelector('#formations').offsetTop;
            const contact = document.querySelector('#contact').offsetTop;
            const scrollPosition = document.querySelector('.container').scrollTop;
            
            const sections = [
                { id: '#home', offsetTop: home },
                { id: '#about', offsetTop: about },
                { id: '#services', offsetTop: services },
                { id: '#skills', offsetTop: skills },
                { id: '#experiences', offsetTop: experiences },
                { id: '#formations', offsetTop: formations },
                { id: '#contact', offsetTop: contact }
            ];

            let activeSectionId = '#home';

            for (let i = 0; i < sections.length; i++) {
                const section = sections[i];
                const nextSection = sections[i + 1];

                if (scrollPosition >= section.offsetTop && (scrollPosition < nextSection?.offsetTop || !nextSection)) {
                    activeSectionId = section.id;
                    break;
                }
            }

            this.activeMenuItem = activeSectionId;
        }
        
    },
    components:{
        StyledNav
    }
}
</script>