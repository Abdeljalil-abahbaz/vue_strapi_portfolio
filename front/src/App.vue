<template>
    <StyledApp class='page_container' id='page_container'>
      <NavMenu/>
      <div class="container" @scroll="animateChart"> 
        <div class="content">
          <Home/>
          <ParalaxFrame _class="home_parallax" :image="responsive" title="Responsive Web Development" description="Compatible with Mobile, Tablets & PCs" :urlPhoto="image1"/>
          <About/>
          <ParalaxFrame _class="about_parallax" :image="grpmeeting" title="Companies, associations, or individuals" description="Your needs are a priority" :urlPhoto="image2"/>
          <Services/>
          <Skills/>
          <ParalaxFrame _class="skills_parallax" :image="customizedExperience" title="Customized solutions" description="Customized solutions to fit your industry needs!" :urlPhoto="image3"/>
          <Experiences />
          <ParalaxFrame _class="exp_parallax" :image="topixel" title="Vision to reality" description="Transforming visions into pixels" :urlPhoto="image4"/>
          <Formations/>
          <ParalaxFrame _class="form_parallax" :image="idearealize" title=" Precision in execution" description="Bringing ideas to life with precision" :urlPhoto="image5" />
          <Contact/>
        </div>
        
      </div> 
    </StyledApp>  
</template>
<script>
import StyledApp from './components/StyledComponents/StyledApp'
import NavMenu from './components/NavMenu.vue'
import Home from './views/Home.vue';
import About from './views/About.vue';
import Skills from './views/Skills.vue';
import Experiences from './views/Experiences.vue';
import Formations from './views/Formations.vue';
import Contact from './views/Contact.vue'
import Services from './views/Services.vue'
import ParalaxFrame from './components/ParalaxFrame.vue'
import image1 from '@/assets/bg_01.jpg'
import image2 from '@/assets/bg_02.jpg'
import image3 from '@/assets/bg_03.jpg'
import image4 from '@/assets/bg_04.jpg'
import image5 from '@/assets/bg_05.jpg'
import responsive from '@/assets/responsive.png'
import grpmeeting from '@/assets/client-meeting.png'
import customizedExperience from '@/assets/custom-service.png'
import topixel from '@/assets/topixel.png'
import idearealize from '@/assets/idea-realization.webp'


  export default {
    name: 'App',
    data(){
      return {
        animateChartDone : false,
        image1,
        image2,
        image3,
        image4,
        image5,
        responsive,
        grpmeeting,
        customizedExperience,
        topixel,
        idearealize
      }
    },
    mounted(){
      this.getContent()
    },
    methods:{
      async getContent () {
        try{
          await Promise.all([
              this.$store.dispatch('fetchData' , {params : 'technos?populate=*&sort=percent:asc', action : 'skills'}),
              this.$store.dispatch('fetchData' , {params : 'hero?populate=*', action : 'hero'}),
              this.$store.dispatch('fetchData' , {params : 'experiences?populate=*', action : 'experiences'}),
              this.$store.dispatch('fetchData' , {params : 'formations?populate=*', action : 'formations'}),
              this.$store.dispatch('fetchData' , {params : 'services?populate=*', action : 'services'})
            ])
        }catch(error){
          console.error('Error fetching about data:', error);
        }
      },
      animateChart(){
          var windowHeight = window.innerHeight;
          const chart = document.querySelector('.skills_chart');
              chart.querySelectorAll('.chart').forEach(element => {
                const el = element.querySelector('.bg');
                const rect = el.getBoundingClientRect();
                const isVisible = (rect.top >= 0 && rect.bottom <= windowHeight);
                if (isVisible) {
                  el.style.width = el.getAttribute('data-percent') + '%';
                }
              });
              
        
      }
    },
    components:{
      StyledApp,
      NavMenu,
      Home,
      About,
      Skills,
      Experiences,
      Formations,
      Contact,
      ParalaxFrame,
      Services
    }
  }
</script>
<style>
*{
  margin: 0;
  padding: 0;
  left:0;
  font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;
  letter-spacing: 0.5px;
}
.bloc{
  width:100%;
  background: #00293c;
}
.bloc:not(#home){
  padding-block: 50px;
  margin-bottom: 50px;
}
  
.bloc:not(#home) > div{
  width:1100px;
  margin:auto;
  overflow: hidden;
}
::selection {
  background-color: red; /* Choose your desired color */
  color: #00293c; /* Text color when highlighted */
}
</style>