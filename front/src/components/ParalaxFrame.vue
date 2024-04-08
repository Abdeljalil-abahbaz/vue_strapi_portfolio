<template>
  <div class="parallax-container">
    <div class="parallax-content">
      <h1 v-html="title"></h1>
      <p v-html="description"></p>
      <img  v-if="image" :src="image"/>
    </div>
      <div class="parallax"  :style="generateStyle(urlPhoto)" ref="parallax"></div>
  </div>
  </template>
  
  <script>
  export default {
    props: {
      urlPhoto: String,
      title: String,
      description: String,
      image: String
    },
    mounted() {
      window.addEventListener('scroll', this.parallaxEffect);
    },
    beforeUnmount() {
      window.removeEventListener('scroll', this.parallaxEffect);
    },
    methods: {
      parallaxEffect() {
        const scrolled = window.scrollY;
        const parallaxElement = this.$refs.parallax;
        if (parallaxElement) {
          parallaxElement.style.backgroundPositionY = `${50 - scrolled * 0.1}%`;
        }
      },
      generateStyle(urlPhoto) {
        return {
          width: '100%',
          overflow: 'hidden',
          background: `linear-gradient(rgba(241, 243, 206, 0.2), rgba(241, 243, 206, 1)), url(${urlPhoto})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          position: 'absolute',
          inset: '0 0 0 0',
          zIndex:'0',
          height: (this.image)? 'calc(100% - 185px)' : '100%'
        };
      }
    }
  };
  </script>
  
  <style scoped>
  .parallax-container{
    position: relative;
    height: fit-content;
  }
  .parallax-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: Arial, sans-serif;
    color: #ffffff;
    text-align: center;
    position:relative;
    height: fit-content;
    padding: 50px;
    top:0;
    left:0;
    width:-webkit-fill-available;
    z-index:1;
  }
  .parallax-content h1{
        font-size: 4em;
        font-weight: 100;
        color: #00293c;
      }
      .parallax-content p{
        color: #1E656D;
        font-size: 17px;
      }
      .parallax-content img{
        height:377px;

      }
  </style>
  