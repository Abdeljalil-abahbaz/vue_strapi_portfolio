<template>
  <div class='bloc' id="home" v-if="homeData">
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
        <StyledHeroPhoto class="my_image">
          <img :src="host + homeData.photo.data.attributes.url" alt='' />
        </StyledHeroPhoto>
      </div>
    </StyledHome>
  </div>
 </template>
 
 <script>
 import AnimatedTitle from '../components/AnimatedTitle.vue'
 import StyledIntroText from '../components/StyledComponents/StyledIntroText'
 import StyledHeroPhoto from '../components/StyledComponents/StyledHeroPhoto'
 import StyledHome from '../components/StyledComponents/StyledHome'
 import {scrollToSection} from '../globalFunctions'
 export default {
   name: 'Home',
   data() {
        return {
            homeData: null,
            host : process.env.VUE_APP_HOST,
            scrollToSection:scrollToSection
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
   components: {
     AnimatedTitle,
     StyledIntroText,
     StyledHeroPhoto,
     StyledHome
   }
 }
 </script>
 
 <!-- Add "scoped" attribute to limit CSS to this component only -->
 <style scoped>
 </style>
 
./views/Home