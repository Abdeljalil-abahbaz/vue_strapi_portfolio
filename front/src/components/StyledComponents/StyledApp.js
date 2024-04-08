import styled from 'vue3-styled-components'
const StyleApp= styled.div`
  background-color: #00293C;
  width: 100%;
  height:100vh;
  display:grid;
  grid-template-columns: 250px calc(100vw - 250px);
  
  margin: auto;
  font-family: Georgia, serif;
  .container{
    height: 100vh;
    max-height: 100vh;
    overflow: auto;
    background-image: url(https://www.creativefabrica.com/wp-content/uploads/2022/05/17/Luxury-Gold-and-Black-Background-Design-Graphics-30685945-1.jpg);
    background-position: 100% 50%;
    width: 100%;
    opacity: 1;
    visibility: inherit;
    background-size: 125.963% 141.078%;
    animation: parallaxZoom 100s linear infinite;
    @keyframes parallaxZoom {
      0% {
        background-size: 100% 100%;
      }
      100% {
        background-size: 200% 200%;
      }
    }
    > .content{
      background: transparent;
      display:flex;
      flex-direction: column;
    }
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns:100%;
  }
  
`;
export default StyleApp