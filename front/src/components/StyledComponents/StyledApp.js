import styled from 'vue3-styled-components'
const StyleApp= styled.div`
  background-color: #00293C;
  width: 100%;
  height:100vh;
  display:grid;
  grid-template-columns: 250px calc(100vw - 250px);
  margin: auto;
  font-family: Georgia, serif;
  z-index:-2;
  .container{
    height: 100vh;
    max-height: 100vh;
    overflow: auto;
    background-position: 100% 50%;
    width: 100%;
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