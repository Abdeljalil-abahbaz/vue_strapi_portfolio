<template>
    <div class="parallax" :style="generateStyle(urlPhoto)" ref="parallax">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      urlPhoto: String,
      title: String,
      description: String
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
          height: '200px',
          overflow: 'auto',
          background: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 1)), url(${urlPhoto})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        };
      }
    }
  };
  </script>
  
  <style scoped>
  .parallax {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: Arial, sans-serif;
    color: #ffffff;
    text-align: center;
    padding: 50px 0;
    /* Additional styles can be added here */
  }
  .parallax h1{
        font-size: 4em;
        font-weight: 100;
        color: #00293c;
      }
      .parallax p{
        color: #1E656D;
        font-size: 17px;
      }
  </style>
  