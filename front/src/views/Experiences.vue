<template>
    <div id="experiences" class="bloc" v-if="experiences">
        <StyledExperience>
            <PageHeading title="My experience" subTitle="Time line of my career" />
            <TimeLine :items="experiences" />
        </StyledExperience> 
    </div>
</template>
<script>
import StyledExperience from '../components/StyledComponents/StyledExperience'
import TimeLine from '../components/TimeLine.vue'
import PageHeading from '../components/pageHeading.vue'
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
        TimeLine,
        PageHeading
    }
}
</script>