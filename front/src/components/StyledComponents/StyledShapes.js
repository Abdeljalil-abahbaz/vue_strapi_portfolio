import styled from 'vue3-styled-components'

const StyledShapes = styled.div`
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
          color: #1e656d;
          padding: 20px;
          font-size:12px;
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
          
          div, div::before, div::after, div span{
            height:100%;
            width : 50%;
            display: block;
            background:#1E656D;
            position: relative;
            top: 0;
            left: 0;
            border-radius: 12%;
          }
          div::before{
            transform: rotate(45deg);
            content:"";
            position: absolute;
            width: 100%;
          }
          div span{
            transform: rotate(90deg);
            content:"";
            position: absolute;
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            z-index: 1;
            font-size: 44px;
            color: #F1F3CE;
            i{
              transform:rotate(-90deg);
            }
          }
          div::after{
            transform: rotate(135deg);
            content:"";
            position: absolute;
            width: 100%;
          }
          
          
      } 
    }
`;
export default StyledShapes