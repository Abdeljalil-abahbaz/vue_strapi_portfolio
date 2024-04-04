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
                        <li><a href="#home" @click="scrollToSection('#home',$event)"><i class="fa-solid fa-house"></i> Home</a></li>
                        <li><a href="#about" @click="scrollToSection('#about',$event)"><i class="fa-solid fa-address-card"></i> About</a></li>
                        <li><a href="#skills" @click="scrollToSection('#skills',$event)"><i class="fa-solid fa-lightbulb"></i> Skills</a></li>
                        <li><a href="#experiences" @click="scrollToSection('#experiences',$event)"><i class="fa-solid fa-laptop-code"></i> Experiences</a></li>
                        <li><a href="#formations" @click="scrollToSection('#formations',$event)"><i class="fa-solid fa-book"></i> Formations</a></li>
                        <li><a href="#contact" @click="scrollToSection('#contact',$event)"><i class="fa-solid fa-envelope"></i> Contact</a></li>
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
            scrollToSection:scrollToSection,
            handlePopstate:handlePopstate
        }
    },
    mounted() {
        window.addEventListener('popstate', this.handlePopstate());
    },
    beforeUnmount() {
        window.removeEventListener('popstate', this.handlePopstate());
    },
    methods:{
        setMenuOpen(isOpen){
            this.menuOpen = isOpen
        }
        
    },
    components:{
        StyledNav
    }
}
</script>