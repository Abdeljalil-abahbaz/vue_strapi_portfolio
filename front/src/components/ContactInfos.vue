<template>
    <StyledContactInfos class="contact-address" v-if="hero">
        <div class="contact-info">
            <h3><i class="fa fa-road" aria-hidden="true"></i> Address </h3>
            <address>{{ hero.location }}</address>
            <hr>
            <h3><i class="fa fa-phone" aria-hidden="true"></i> Phone </h3>
            <div class="tel-box">
                <span class="tel">
                    <a :href="`tel:${ hero.contact.phone }`" class="tel">{{ hero.contact.phone }}</a>
                </span>
            </div>
            <hr>
            <h3><i class="fa fa-envelope" aria-hidden="true"></i> Mail </h3>
            <a :href="`mailto:${ hero.contact.email }`"> {{ hero.contact.email }} </a>
            <hr>
            <h3><i class="fa-brands fa-linkedin"></i> LinkedIn </h3>
            <a :href="hero.links.linkedin" target="_blank"> Abdeljalil-Abahbaz </a>
        </div>
    </StyledContactInfos>
</template>
<script>
import StyledContactInfos from '../components/StyledComponents/StyledContactInfos'
export default {
    data(){
        return{
            hero:null
        }
    },
    watch: {
        '$store.getters.getHero.attributes': {
            handler(newVal) {
                this.hero = newVal;
            },
            immediate: true 
        }
    },
    components:{
        StyledContactInfos
    }
}
</script>