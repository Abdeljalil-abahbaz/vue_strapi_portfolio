<template>
    <div class="bloc" id="about" v-if="aboutData">
        <StyledAbout >
        
            <PageHeading title="About" subTitle="I am a web developer, and I love it!" />
            <div class="text-about">
                <div class="description-left">
                    <h3><AnimatedTitle title="Passionate web developer" /></h3>
                    <p className='text' v-if="aboutData">
                        {{ aboutData }}
                    </p>
                </div>
                <img src="../assets/about-middle4.png"/>
                <div class="description-right">
                    <h3><AnimatedTitle title="Experienced developer" /></h3>
                    <p className='text'>
                        The experience I have gained through various projects and positions enables me to better understand client expectations and respond precisely to the requested needs within the specific domain of activity.
                        From simple showcase websites to more complex projects, I offer expertise and web development that aligns with your expectations and requirements.
                    </p>
                </div>
            </div>
            <Shapes :data="ShapesData"/>
    
        
    </StyledAbout>
    </div>
</template>
   
   <script>
   import StyledAbout from '../components/StyledComponents/StyledAbout'
   import AnimatedTitle from '../components/AnimatedTitle.vue'
   import PageHeading from '../components/pageHeading.vue'
   import Shapes from '../components/Shapes.vue'
   export default {
    
        name: 'AboutMe',
        data() {
            return {
                aboutData: null,
                ShapesData:[
                    {title:"ANALYSIS",icon:"fa-solid fa-magnifying-glass-chart"},
                    {title:"DESIGN",icon:"fa-solid fa-pen-fancy"},
                    {title:"CODE",icon:"fa-solid fa-code"},
                    {title:"TESTS",icon:"fa-solid fa-vial-circle-check"},
                    {title:"DELIVERY",icon:"fa-solid fa-paper-plane"}
                ]
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
            AnimatedTitle,
            PageHeading,
            Shapes
        }
        
    }
   </script>
  ./views/About