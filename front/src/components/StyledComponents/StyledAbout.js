import styled from 'vue3-styled-components'
const AboutStyled = styled.div`
    color :#F1F3CE;
    padding:20px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between
    align-items: center;
    width:1100px;
    margin:auto;
    h3{
        font-size: 23px;
        color:#F1F3CE;
        margin:0;
        .letter.first_letter{
            font-size:3rem;
        }
        
    }
    .text-about{
        display: flex;
        flex-direction: row;
        p{
            font-size: 19px;
            line-height: 1.6;
            padding:20px;
        }
        img{
            height: 300px;
        }
    }
    
    @media only screen and (max-width: 913px) {
        width:100%!important;
    }
`;
export default AboutStyled