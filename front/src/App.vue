<template>
    <StyledApp class='page_container' id='page_container'>
      <NavMenu/>
      <div class="container" @scroll="animateChart"> 
        <div class="content">
          <Home/>
          <ParalaxFrame _class="home_parallax" title=" Responsive Web Development" description="Compatible with Mobile, Tablets & PCs" urlPhoto="https://static.vecteezy.com/system/resources/previews/023/056/314/non_2x/programmer-using-laptop-with-code-html-and-programming-on-screen-laptop-programmer-development-computer-code-web-design-coding-technology-in-software-digital-software-technology-development-iot-photo.jpg"/>
          <About/>
          <ParalaxFrame _class="about_parallax" title="The only way to do great work is to love what you do." description="- Steve Jobs" urlPhoto="https://www.mathieu-crevoulin.com/img/bg_01.jpg"/>
          <Skills/>
          <ParalaxFrame _class="skills_parallax" title=" Responsive Web Development" description="Compatible with Mobile, Tablets & PCs" urlPhoto="https://images.spiceworks.com/wp-content/uploads/2023/08/07071207/Devops-Computer-Book.jpg"/>
          <Experiences />
          <ParalaxFrame _class="exp_parallax" title=" Responsive Web Development" description="Compatible with Mobile, Tablets & PCs" urlPhoto="https://as2.ftcdn.net/v2/jpg/03/38/11/75/1000_F_338117533_ALdJfcQOEECyx0laPSKJRUcq7Yu5KorK.jpg"/>
          <Formations/>
          <ParalaxFrame _class="form_parallax" title=" Responsive Web Development" description="Compatible with Mobile, Tablets & PCs" urlPhoto="https://i.pinimg.com/736x/b6/88/45/b68845a212688ba060337267ba240746.jpg" />
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
import ParalaxFrame from './components/ParalaxFrame.vue'
  export default {
    name: 'App',
    data(){
      return {
        animateChartDone : false
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
              this.$store.dispatch('fetchData' , {params : 'formations?populate=*', action : 'formations'})
            ])
        }catch(error){
          console.error('Error fetching about data:', error);
        }
      },
      animateChart(){
            if(this.animateChartDone)return false;
            var windowHeight = window.innerHeight;
            const chart = document.querySelector('.skills_chart');
            const rect = chart.getBoundingClientRect();
            const isVisible = (rect.top >= 0 && rect.bottom <= windowHeight);
            if (isVisible) {
                chart.querySelectorAll('.chart').forEach(element => {
                  const el = element.querySelector('.bg');
                  console.log(el.getAttribute('data-percent'))
                  el.style.width = el.getAttribute('data-percent') + '%';
                });
                this.animateChartDone = true
                
            }
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
      ParalaxFrame
    }
  }
</script>
<style>
*{
  margin: 0;
  padding: 0;
  top:0;
  left:0;
  font-family:"Helvetica Neue",Helvetica,Arial,sans-serif
}
.bloc{
  min-height:100vh;
  width:100%;
  background: #00293c;
}
.bloc:not(#home) > div{
  width:1100px;
  margin:auto;
  overflow: hidden;
}
</style>