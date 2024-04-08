<template>
    <div id="formations" class="bloc" v-if="formations">
        <StyledFormation>
            <PageHeading title="My education" subTitle="School and diplomes" />
            <TimeLine :items="formations" />
        </StyledFormation>
    </div> 
</template>
<script>
import StyledFormation from '../components/StyledComponents/StyledFormation'
import TimeLine from '../components/TimeLine.vue'
import PageHeading from '../components/pageHeading.vue'
export default {
    data(){
        return {
            formations:[]
        }
    },
    watch: {
        '$store.getters.getFormations': {
            handler(newVal) {
                this.formations = newVal;
            },
            immediate: true 
        }
    },
    components:{
        StyledFormation,
        TimeLine,
        PageHeading
    }
}
</script>