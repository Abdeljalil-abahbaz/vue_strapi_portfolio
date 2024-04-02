<template>
    <StyledExperience id="experiences">
        <h1>My experience</h1>
        <TimeLine :items="experiences" />
    </StyledExperience> 
</template>
<script>
import StyledExperience from '../components/StyledComponents/StyledExperience'
import TimeLine from '../components/TimeLine.vue'
export default {
    data(){
        return {
            experiences:[]
        }
    },
    watch: {
        '$store.getters.getExperiences': {
            handler(newVal) {
                this.experiences = newVal;
            },
            immediate: true 
        }
    },
    components:{
        StyledExperience,
        TimeLine
    }
}
</script>