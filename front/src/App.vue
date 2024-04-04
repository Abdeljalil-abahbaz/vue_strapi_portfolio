<template>
    <StyledApp class='page_container' id='page_container'>
      <NavMenu/>
      <div class="container" @scroll="animateChart"> 
        <div class="content">
          <Home/>
          <About/>
          <Skills/>
          <Experiences/>
          <Formations/>
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
            // Check if the content is currently in the viewport
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
      Formations
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
</style>