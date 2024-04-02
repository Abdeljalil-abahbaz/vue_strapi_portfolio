import styled from 'vue3-styled-components'
const StyledIntroText = styled.h1`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    line-height:5rem;
    justify-content: center;
    letter-spacing: 2px;
    
    .hello_text{
        color:#F1F3CE;
        .first_letter{
            font-size:6rem;
        }
    }
    .hire_me{
        font-size: 1.5rem;
        text-transform: uppercase;
        font-family: "Raleway-semibold";
        border: 2px solid #1e656d;
        margin-top: 3rem;
        background-color: #1e656d;
        color: #f1f3ce;
        cursor: pointer;
        position: relative;
        .animated_bg{
            background-color:#F62A00;
            display:block;
            height:100%;
            position:absolute;
            z-index:-1;
            width:0px;
            transition:width 0.5s ;
        }
        .contactme{
            padding:10px;
        }
        &:hover{
            color:#f1f3ce;
            background-color:transparent;
            border-color:#F62A00;
        }
        &:hover .animated_bg{
            width:100%;
        }

        
    
    }
    .my_name{
        color: #F1F3CE;
        font-weight: bold;
        font-size: 4vw;
        b{
            font-family: "Raleway-semibold", sans-serif;
        }
    }
    .profession_text{
        font-size:4rem;
        color:#F1F3CE;
    }
   
    
    @media screen and (max-width: 1920px){
        .my_name,.profession_text {
            font-size: 4rem!important;
        }
    }
    @media screen and (max-width: 1560px){
        .my_name,.profession_text {
            font-size: 3rem!important;
        }
    
    }
    @media screen and (max-width: 1235px){
        .my_name,.profession_text {
          font-size: 3vw!important;
        }
        line-height:4rem;
    }
    @media screen and (max-width: 1001px){
        .my_name,.profession_text {
          font-size: 2.5vw!important;
        }
        line-height:3rem;
        
    }
    @media screen and (max-width: 914px){
        
        line-height: 4rem;
        width:90%;

        .my_name,.profession_text {
            font-size: 5vw!important;
        }
        .hire_me{
            width:100%;
            margin:auto;
            margin-top:3rem;
        }
        
    }
    
    
    
    
`;

export default StyledIntroText