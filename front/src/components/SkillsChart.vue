<template>
    <StyledChart class="chart_container">
        <div v-for="(skill) in skills" :key="skill.id" class='chart'>
            <h3>{{ skill.attributes.title }}</h3>
            <div>
                <div :style="{width: skill.attributes.percent +'%', backgroundColor : skill.attributes.color}"></div>
            </div>
        </div>
    </StyledChart>
</template>
<script>
import StyledChart from './StyledComponents/StyledChart'
export default{
    data(){
        return{
            skills:[]
        }
    },
    watch:{
        '$store.getters.getSkills':{
            handler(newVal){
                this.skills = newVal
            },
            immediate : true
        }
    },
    components:{
        StyledChart
    }
}
</script>