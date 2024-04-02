<template>
    <StyledNav >
        
        <div class="mobile-menu-icon" :class="{hide : !menuOpen}" @click="setMenuOpen(!menuOpen)">
            <font-awesome-icon icon="menu" />
        </div>
        
        <ul class="nav-menu" :class="{hide : !menuOpen}">
            <div class="mobile-menu-icon" @click="setMenuOpen(!menuOpen)">
                <font-awesome-icon icon="xmark" />
            </div>
            <li class="logo" :class={hide:!menuOpen}>
                <h3>AB</h3>
            </li>
            <li class='nav-items'>
                <nav>
                    <ul>
                        <li><a href="#home" @click="scrollToSection('#home',$event)">Home</a></li>
                        <li><a href="#about" @click="scrollToSection('#about',$event)">About</a></li>
                        <li><a href="#skills" @click="scrollToSection('#skills',$event)">Skills</a></li>
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
import { scrollTo, scrollToElement } from 'vue-scrollto';
export default {
    data(){
        return {
            menuOpen: true
        }
    },
    mounted() {
        window.addEventListener('popstate', this.handlePopstate);
    },
    beforeUnmount() {
        window.removeEventListener('popstate', this.handlePopstate);
    },
    methods:{
        setMenuOpen(isOpen){
            this.menuOpen = isOpen
        },
        scrollToSection(selector, event) {
            event.preventDefault(); // Prevent default anchor link behavior
            const element = document.querySelector(selector);
            
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                history.pushState({}, '', selector);
            }
        },
        handlePopstate() {
            const sectionId = window.location.hash;
            const element = document.querySelector(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    },
    components:{
        StyledNav
    }
}
</script>