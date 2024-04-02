import styled from 'vue3-styled-components'
const StyleSkills = styled.div`
  display:grid;
  min-height: 100vh;
  h1{
    width:100%;
    color:#f1f3ce;
    font-size:60px;
    text-transform: uppercase;
    text-align: center;
    font-family: "Raleway";
  }
  .topSkills{
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    column-gap: 30px;
    flex-wrap: wrap;
    row-gap: 30px;
    padding:50px;
    
    div{  
        display:flex;
        flex-direction:column;
        flex-wrap:nowrap;
        align-items: center;
        div.text{
          color:#FFFFFF;
          font-size:12px;
          font-family: "Raleway";
          max-width: 236px;
          display:flex;
          flex-direction:column;
          align-items:center;
          text-align:center;
          h1{
            font-size:14px;
            margin:0;
            font-size: 24px;
            font-weight: 300;
            text-transform:uppercase;
          }
          p{
            line-height: 27px;
            margin:0;
            font-size:12px;
          }
        }
        div.shape{
          height: 150px;
          width: 150px;
          display: flex;
          justify-content: center;
          position:relative;
          
          span, span::before, span::after, span i{
            height:100%;
            width : 50%;
            display: block;
            background:#1E656D;
            position: relative;
            top: 0;
            left: 0;
            border-radius: 12%;
          }
          span::before{
            transform: rotate(45deg);
            content:"";
            position: absolute;
            width: 100%;
          }
          span i{
            transform: rotate(90deg);
            content:"";
            position: absolute;
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            z-index: 1;
            font-size: 88px;
            color: #F1F3CE;
            svg{
              transform:rotate(-90deg);
            }
          }
          span::after{
            transform: rotate(135deg);
            content:"";
            position: absolute;
            width: 100%;
          }
          
          
      } 
    }
  }
  .about_chart{
    padding:20px;
    color:#FFFFFF;
    font-family: "Raleway";
    display:flex;
    flex-direction:row;
    column-gap:40px;
    .text,.chart_container{
      width: min(50%,800px);
    }
    @media only screen and (max-width: 913px) {
        flex-wrap: wrap!important;
    }
  }
`;
export default StyleSkills