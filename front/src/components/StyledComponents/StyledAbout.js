import styled from 'vue3-styled-components'
const AboutStyled = styled.div`
    color :#F1F3CE;
    padding:20px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3{
        font-size: 4.3rem;
        color:#F1F3CE;
        margin:0;
        .letter.first_letter{
            font-size:5rem;
        }
        
    }
    p{
        text-align: justify;
        font-size: 25px;
        line-height: 1.6;
        width: 53%;
    }
    @media only screen and (max-width: 913px) {
        width:100%!important;
    }
`;
export default AboutStyled