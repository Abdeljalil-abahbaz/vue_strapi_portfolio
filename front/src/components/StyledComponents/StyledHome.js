import styled from 'vue3-styled-components'
const StyledHome = styled.div`
   
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content: center;
    line-height:3rem;
    overflow: hidden;
    
    .intro{
      display:flex;
      flex-direction:row;
      width: 100%;
      justify-content: space-around;
      z-index:1;
    }
    a{
      text-decoration: none;
    }
    @media screen and (max-width: 914px){
      .intro{
        flex-direction: column;
        align-items: flex-start;
      }
    }
`;
export default StyledHome