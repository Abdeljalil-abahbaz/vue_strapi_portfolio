<template>
    <StyledAbout class="text" id="about">
        <h3><AnimatedTitle title="Get to know me!" /></h3>
        <p className='text' v-if="aboutData">
            {{ aboutData }}
        </p>
    </StyledAbout>
</template>
   
   <script>
   import StyledAbout from '../components/StyledComponents/StyledAbout'
   import AnimatedTitle from '../components/AnimatedTitle.vue'
   export default {
    
        name: 'AboutMe',
        data() {
            return {
                aboutData: null
            };
        },
        watch: {
            '$store.getters.getHero.attributes.about': {
                handler(newVal) {
                    this.aboutData = newVal;
                },
                immediate: true 
            }
        },
        components:{
            StyledAbout,
            AnimatedTitle
        }
        
    }
   </script>
  ./views/About