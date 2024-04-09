import styled from 'vue3-styled-components'
const StyledHome = styled.div`
   
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content: center;
    line-height:3rem;
    overflow: hidden;
    position: relative;

    
    .intro{
      display:flex;
      flex-direction:row;
      width: 100%;
      justify-content: space-around;
      z-index:1;
      height: 100vh;
      align-items: center;
    }
    
  .home-hero__mouse-scroll-cont {
    position: absolute;
    bottom: 3%;
    left: 50%;
    transform: translateX(-50%);
    .mouse {
      width: 25px;
      height: 40px;
      border: 2px solid #f1f3ce;
      border-radius: 60px;
      position: relative;
      overflow: hidden;
      &::before {
        content: '';
        width: 5px;
        height: 5px;
        position: absolute;
        top: 7px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #f1f3ce;
        border-radius: 50%;
        opacity: 1;
        animation: wheel 1.3s infinite;
        -webkit-animation: wheel 1.3s infinite;
      }
    }
    

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
    @keyframes wheel {
      to {
          opacity: 0;
          top: 27px
      }
  }
`;
export default StyledHome