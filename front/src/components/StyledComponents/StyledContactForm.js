import styled from 'vue3-styled-components'
const StyleContactForm = styled.div`
    flex:1;
    padding:20px;
    display:flex;
    align-items:center;
    justify-content:center;
    form{
      display:flex;
      align-items:center;
      flex-direction:row;
      flex-wrap:wrap;
      column-gap:2%;
      row-gap:44px;
      width:min(95%,800px);
      div.app-form-group{
        display: flex;
        flex-direction:row;
        width: 100%;
        .label{
          color:red;
        }
        input,textarea{
          padding:25px;
          border:unset;
          width:100%;
          outline:none;
          background-color: #03344a;
          color: #f1f3ce;
        }
        .send{
          font-size: 1.5rem;
        text-transform: uppercase;
        font-family: "Raleway-semibold";
        border: 2px solid #1e656d;
        margin-bottom: 50px;
        background-color: #1e656d;
        color: #f1f3ce;
        width:400px;
        height:70px;
        cursor: pointer;
        position: relative;
        .animated_bg{
            background-color:#F62A00;
            display:block;
            height:100%;
            position:absolute;
            width:0px;
            top: 0;
            transition:width 0.5s ;
        }
        .contactme{
            padding:10px;
            position:relative;
            z-index:1;
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
        &:first-child, &:nth-child(2){
          width:49%;
        }
        
      }
      
    }
    .field:focus + .label::after{
      content:" ";
      height:2px;
      width:100%;
      border-bottom:solid 2px #f1f3ce;
      transition : border-bottom 0.5s;
    }
`;
export default StyleContactForm