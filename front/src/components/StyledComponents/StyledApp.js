import styled from 'vue3-styled-components'
const StyleApp= styled.div`
  background-color: #00293C;
  width: 100%;
  height:100vh;
  display:grid;
  grid-template-columns: 140px calc(100vw - 140px);
  
  margin: auto;
  font-family: Georgia, serif;
  .container{
    height:100vh;
    max-height:100vh;
    overflow:auto;
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns:100%;
  }
  
`;
export default StyleApp