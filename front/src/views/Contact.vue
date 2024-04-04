<template>
    <StyledContact id='contact'>
        <PageHeading title="Address & contact" subTitle="Have an idea? let's make it real!" />
        <div class="content">
            <ContactForm/>
            <ContactInfos/>
            <ContactMap/>
            
        </div>
    </StyledContact>
</template>
<script>
    import StyledContact from '../components/StyledComponents/StyledContact'
    import PageHeading from '../components/pageHeading.vue'
    import ContactForm from '../components/ContactForm.vue'
    import ContactMap from '../components/ContactMap.vue'
    import ContactInfos from '../components/ContactInfos.vue'
    export default {
        components:{
            StyledContact,
            PageHeading,
            ContactForm,
            ContactMap,
            ContactInfos
        }
    }
</script>