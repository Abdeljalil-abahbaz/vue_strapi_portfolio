import styled from 'vue3-styled-components'
const StyledChart = styled.div`
    display: flex;
    flex-direction:column;
    align-item:center;
    padding:0;
    row-gap: 8px;
    
    .chart{
        width:100%;
        h3{
            text-transform:capitalize;
            margin: 7px 0;
            color:#F1F3CE;
        }
        div{
            width:100%;
            background:gray;
            height:2px;
            div{
                height:100%;
            }
        }       
    }
    @media only screen and (max-width: 913px) {
        width:100%!important;
    }
`;
export default StyledChart
