<template>
    <StyledSkills id="skills">
        <h1>
        Skills
      </h1>
      
      <div class="topSkills">
        
        <div v-for="(skill, index) in skills"  >
          <div class="shape">
            <span>
              <i>
                <font-awesome-icon :icon="['fab', skill.attributes.icon]" v-if="skill.attributes.icon !== 'check'" />
                <font-awesome-icon :icon="['fas', skill.attributes.icon]" v-else />
            </i>
            </span>
          </div>
          <div class="text">
          <h1>{{ skill.attributes.title }}</h1>
          <p>Fast load times and lag free interaction, my highest priority.</p>
          </div>
        </div>

      </div>
     
    
        <div class='about_chart'>
            <SkillsChart/>
        </div>
    </StyledSkills> 
    
</template>
<script>
import StyledSkills from '../components/StyledComponents/StyledSkills'
import About from './About.vue';
import SkillsChart from '../components/SkillsChart.vue';
export default {
    data(){
        return {
            skills:[]
        }
    },
    watch: {
        '$store.getters.getSkills': {
            handler(newVal) {
                this.skills = newVal.slice(0,5);
            },
            immediate: true 
        }
    },
    components:{
        StyledSkills,
        About,
        SkillsChart
    }
}
</script>