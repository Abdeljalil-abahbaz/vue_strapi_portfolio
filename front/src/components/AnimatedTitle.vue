<template>
    <styled-title>
        <span v-html="letter" v-for="(letter, index) in title" :key="index" :class="{ letter: true, space: letter === ' ', first_letter: index === 0 }" >
        </span>
    </styled-title>
  </template>
  
  <script>
  import StyledTitle from './StyledComponents/StyledTitle'

  export default {
    props: {
      title: String
    },
    components:{
      'styled-title' : StyledTitle
    }
  };
  </script>
  