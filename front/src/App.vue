<template>
    <StyledApp class='page_container' id='page_container'>
      <NavMenu/>
      <div class="content"> 
        <Home/>
        <About/>
        <Skills/>
        <Experiences/>
        <Formations/>
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
}
</style>