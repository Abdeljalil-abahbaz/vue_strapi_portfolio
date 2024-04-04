import styled from 'vue3-styled-components'
const StyleSkills = styled.div`
  width:1100px;
  min-height:100vh;
  margin:auto;
  .skills_content{
    display:flex;
    justify-content: space-around;
    flex-direction:row;
    .skills_para,.skills_chart{
      width:45%
    }
    .skills_para{
      h3{
        font-size: 20px;
        padding-block: 20px;
        color:#F1F3CE;
        margin:0;
        .letter.first_letter{
            font-size:3rem;
        }
      }
      h4{
        color:#F1F3CE;
        span{
          color:red;
        }
      }
      p{
        font-size: 13px;
        line-height: 1.6;
        padding: 20px;
        color:#F1F3CE;
      }
    }
    .skills_chart{
      color:#FFFFFF;
      display:flex;
      flex-direction:column;
      column-gap:40px;
      
      @media only screen and (max-width: 913px) {
          flex-wrap: wrap!important;
      }
    }
  }
  
`;
export default StyleSkills