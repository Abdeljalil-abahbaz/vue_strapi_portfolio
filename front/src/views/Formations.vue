<template>
    <StyledFormation id="formations">
        <h1>My education</h1>
        <TimeLine :items="formations" />
    </StyledFormation> 
</template>
<script>
import StyledFormation from '../components/StyledComponents/StyledFormation'
import TimeLine from '../components/TimeLine.vue'
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
        TimeLine
    }
}
</script>