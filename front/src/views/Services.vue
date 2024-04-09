<template>
    <div class="bloc" id="services" v-if="services">
        <StyledServices >
            <PageHeading title="Services" subTitle="Adapted services to meet your needs"/>
            <div class="services_content">
                <div v-for="service in services" :key="service.id" class="service" data-animate="fadeInUp" data-delay="100">
                    <span class="icon"><i :class="service.attributes.icon" aria-hidden="true"></i></span>
                    <div>
                        <h4 class="title">{{service.attributes.title}}</h4>
                        <p>{{service.attributes.description}}.</p>
                    </div>
                    
                </div>
            </div>    
        </StyledServices>
    </div>
</template>
   
   <script>
   import StyledServices from '../components/StyledComponents/StyledServices'
   import AnimatedTitle from '../components/AnimatedTitle.vue'
   import PageHeading from '../components/pageHeading.vue'
   export default {
    
        name: 'Services',
        data() {
            return {
                services : []
            };
        },
        watch: {
            '$store.getters.getServices': {
                handler(newVal) {
                    this.services = newVal;
                },
                immediate: true 
            }
        },
        components:{
            StyledServices,
            AnimatedTitle,
            PageHeading,
        }
        
    }
   </script>
  ./views/Services