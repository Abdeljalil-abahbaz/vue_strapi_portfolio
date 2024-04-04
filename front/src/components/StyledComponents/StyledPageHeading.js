import styled from 'vue3-styled-components'
const StyledPageHeading = styled.div`
    margin-bottom:50px;
    text-align: center;
    h1{
        width:100%;
        color:#f1f3ce;
        font-size:60px;
        text-transform: uppercase;
        
    }
    span{
        font-size:14px;
        margin-block:5px;
        line-height:2;
        color: #8f9ca8;
    }
    &::after{
      content:'';
      display:block;
      height:3px;
      width:50px;
      background-color:red;
      margin: auto;
    }
`;
export default StyledPageHeading