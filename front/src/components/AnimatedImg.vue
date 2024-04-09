<template>
      <StyledAnimatedImg>
        <section class="wrapper">
            <div :style="{'background-image':`url('${urlImg}')`}" class="one"></div>
            <div :style="{'background-image':`url('${urlImg}')`}" class="one2"></div>
            <div :style="{'background-image':`url('${urlImg}')`}" class="one3"></div>
            <div :style="{'background-image':`url('${urlImg}')`}" class="one4"></div>
            <div :style="{'background-image':`url('${urlImg}')`}" class="one5"></div>
            <div :style="{'background-image':`url('${urlImg}')`}" class="one6"></div>
            <div :style="{'background-image':`url('${urlImg}')`}" class="one7"></div>
            <div :style="{'background-image':`url('${urlImg}')`}" class="one8"></div>
            <div :style="{'background-image':`url('${urlImg}')`}" class="one9"></div>
            <div :style="{'background-image':`url('${urlImg}')`}" class="one10"></div>
            <div :style="{'background-image':`url('${urlImg}')`}" class="one11"></div>
            <div :style="{'background-image':`url('${urlImg}')`}" class="one12"></div>
            <div :style="{'background-image':`url('${urlImg}')`}" class="one13"></div>
            <div :style="{'background-image':`url('${urlImg}')`}" class="one14"></div>
            <div :style="{'background-image':`url('${urlImg}')`}" class="one15"></div>
            <div :style="{'background-image':`url('${urlImg}')`}" class="one16"></div>
            <div :style="{'background-image':`url('${urlImg}')`}" class="one17"></div>
            <div :style="{'background-image':`url('${urlImg}')`}" class="one18"></div>
            <div :style="{'background-image':`url('${urlImg}')`}" class="one19"></div>
            <div :style="{'background-image':`url('${urlImg}')`}" class="one20"></div>
            <div :style="{'background-image':`url('${urlImg}')`}" class="one21"></div>
            <div :style="{'background-image':`url('${urlImg}')`}" class="one22"></div>
            <div :style="{'background-image':`url('${urlImg}')`}" class="one23"></div>
            <div :style="{'background-image':`url('${urlImg}')`}" class="one24"></div>
            <div :style="{'background-image':`url('${urlImg}')`}" class="one25"></div>
            <div :style="{'background-image':`url('${urlImg}')`}" class="one26"></div> 
            <div :style="{'background-image':`url('${urlImg}')`}" class="one28"></div>
            <div :style="{'background-image':`url('${urlImg}')`}" class="one29"></div>
            <div :style="{'background-image':`url('${urlImg}')`}" class="one30"></div>
            <div :style="{'background-image':`url('${urlImg}')`}" class="one31"></div>
            <div :style="{'background-image':`url('${urlImg}')`}" class="one32"></div>
            <div :style="{'background-image':`url('${urlImg}')`}" class="one33"></div>
            
        </section>
      </StyledAnimatedImg>
  </template>
   
   <script>
   import StyledAnimatedImg from '../components/StyledComponents/StyledAnimatedImg'
   export default {
     name: 'animated-image',
     props: {
        urlImg: String
      },
     components: {
        StyledAnimatedImg
     }
   }
   </script>
   
   <!-- Add "scoped" attribute to limit CSS to this component only -->
   <style scoped>
   
   </style>