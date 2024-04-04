<template>
    <StyledPageHeading>
        <h1>{{ title }}</h1>
        <span>{{ subTitle }}</span>
    </StyledPageHeading>
</template>
<script>
import StyledPageHeading from './StyledComponents/StyledPageHeading'
    export default {
        props:{
            title:String,
            subTitle:String
        },
        components:{
            StyledPageHeading
        }
    }
</script>