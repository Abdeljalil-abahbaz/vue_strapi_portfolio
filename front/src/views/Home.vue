<template>
  <div class='bloc' id="home" v-if="homeData" :style="{backgroundImage:`url('${homeCover}')`}">
    <StyledHome>
      <div class="intro">  
          <StyledIntroText class="head_name">
            <span class="hello_text"><AnimatedTitle title="Hello," /></span>
            <span class="my_name"><AnimatedTitle :title="'I\'m '+homeData.first_name" /></span>
            <span class="profession_text"><AnimatedTitle :title="homeData.function" /></span>
            <a class='hire_me' @click="scrollToSection('#contact',$event)" href="#contact" >
                <span class='animated_bg'></span>
                <span class='contactme'>Contact me</span>
            </a>
        </StyledIntroText>
        <AnimatedImg :urlImg="host + homeData.photo.data.attributes.url" />
      </div>
      <div class="home-hero__mouse-scroll-cont">
        <div class="mouse"></div>
      </div>
      <div class="sun"></div>
    </StyledHome>
  </div>
 </template>
 
 <script>
 import AnimatedTitle from '../components/AnimatedTitle.vue'
 import AnimatedImg from '../components/AnimatedImg.vue'
 import StyledIntroText from '../components/StyledComponents/StyledIntroText'
 import StyledHeroPhoto from '../components/StyledComponents/StyledHeroPhoto'
 import StyledHome from '../components/StyledComponents/StyledHome'
 import homeCover from '@/assets/home-cover.jpg'
 import {scrollToSection} from '../globalFunctions'
 export default {
   name: 'Home',
   data() {
        return {
            homeData: null,
            host : process.env.VUE_APP_HOST,
            scrollToSection:scrollToSection,
            homeCover
        };
    },
    watch: {
        '$store.getters.getHero.attributes': {
            handler(newVal) {
                this.homeData = newVal;
            },
            immediate: true 
        }
    },
    mounted() {
    
    window.addEventListener('mousemove', function(event) {
      const box = document.getElementById('home');
      const movementFactor = 10; // Adjust this value to control the movement speed
      
      window.addEventListener('mousemove', function(event) {
        // Calculate the position of the mouse relative to the box
        const x = (event.clientX - box.offsetLeft) / movementFactor;
        const y = (event.clientY - box.offsetTop) / movementFactor;
        
        // Set the background position based on the position of the mouse
        box.style.backgroundPosition = `${x}px ${y}px`;
      });
    });
  },
   components: {
     AnimatedTitle,
     AnimatedImg,
     StyledIntroText,
     StyledHeroPhoto,
     StyledHome,
   }
 }
 </script>
 
 <!-- Add "scoped" attribute to limit CSS to this component only -->
 <style scoped>
 #home{
  transition: background-position 0.3s ease;
 }
 </style>
 
./views/Home