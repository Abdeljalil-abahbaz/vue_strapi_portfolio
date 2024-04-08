import styled from 'vue3-styled-components'
const StyledTimeLine = styled.div`
    
  .time_line_container{
    width :100%;
    position:relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .time_line{
      width:5px;
      left: auto;
      display:block;
      position:absolute;
      height:90%;
      background:#f1f3ce;
    }
    ul{
      width:100%;
      padding: 47px;
      display:flex;
      flex-direction:column;
      row-gap: 20px;
      position:relative;
      list-style:none;
      li {
        min-width:50%;
        max-width: 50%;
        position:relative;
        display: flex;
        div{
          position:relative;
          min-height:40px;
          border-radius:5px;
          background: #1e656d;
          color: #f1f3ce;
          padding:10px;
          width :90%;
          z-index: 1;
          h5{
            font-size: 20px;
            letter-spacing: 1px;
            padding-bottom: 10px;
          }
          em{
            padding-bottom: 5px;
            margin-right: 10px;
            color: gold;
            font-size: 12px;
          }
          mark{
            background: none;
            font-size: 12px;
            color: #8f9ca8;
            font-weight: bolder;
          }
          p{
            padding-top: 10px;
            font-size: 14px;
            line-height: 1.5;
          }
        }
        
      }
        
      li:nth-child(odd){

        div{
          justify-content: flex-start;
          &:after{
            content: " ";
            height: 0;
            position: absolute;
            top: 6px;
            width: 0;
            border: medium solid white;
            right: -9px;
            border-width: 10px 0 10px 10px;
            border-color: transparent transparent transparent #1e656d;
          }
        }
        &:before{
          content: " ";
          height: 20px;
          position: absolute;
          top: 6px;
          width: 20px;
          background-color:#f1f3ce;
          border:2px solid #F62A00;
          z-index: 0;
          right: -12px;
          border-radius:50%;
        }
        
      }
      li:nth-child(even) {
        align-self: flex-end;
        justify-content: flex-end;
        div{
          &:before{
            content: " ";
            height: 0;
            position: absolute;
            top: 6px;
            width: 0;
            border: medium solid white;
            left: -9px;
            border-width: 10px 10px 10px 0;
            border-color: transparent #1e656d  transparent transparent ;
          }
        }
          
        &:after{
          content: " ";
          height: 20px;
          width:20px;
          position: absolute;
          top: 6px;
          background-color:#f1f3ce;
          border:2px solid #F62A00;
          z-index: 0;
          left: -12px;
          border-radius:50%;
        }
          
      }
      

    }
  }
  
  @media only screen and (max-width: 913px) {
    
    .time_line_container{
      justify-content: start;
      
      ul{
        padding:0;
        li {
          min-width:100%!important;
          max-width: 100%!important;
          
        }
        li:nth-child(even){
          &:after{
            height: 20px;
            width:20px;
            left: -10px!important;
          }
        }
        li:nth-child(odd){
            align-self: flex-end;
            justify-content: flex-end;
            div{
              &:before{
                content: " ";
                height: 0;
                position: absolute;
                top: 6px;
                width: 0;
                border: medium solid white;
                left: -9px;
                border-width: 10px 10px 10px 0;
                border-color: transparent #1e656d  transparent transparent ;
              }
              &:after{
                border:unset!important;
              } 
            }
            &:before{
              height: 20px;
              width:20px;
              left: -10px!important;
            }
            
        }
      }
    }
    
  }
`;

export default StyledTimeLine