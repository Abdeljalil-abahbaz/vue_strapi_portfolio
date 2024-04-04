import styled from 'vue3-styled-components'
const StyledChart = styled.div`
    display: flex;
    flex-direction: column;
    align-item:center;
    padding:0;
    row-gap: 8px;
    width:100%;
    .technos,.lang{
        width : 40%;
    }
    .chart-title{
        padding-block: 20px;
        font-size: 23px;
        color:#F1F3CE;
        margin:0;
        .letter.first_letter{
            font-size:3rem;
        }
    }
    .chart{
        width:100%;
        margin-bottom: 3px;
        div{
            width:100%;
            background:gray;
            height:30px;
            position:relative;

            h3{
                text-transform:capitalize;
                color:#F1F3CE;
                position: absolute;
                top: 0;
                margin: 0;
                line-height: 2.5;
                padding-inline: 12px;
                font-size: 12px;
                letter-spacing: 1px;
                text-transform: uppercase;
            }
            .bg{
                height:100%;
                transition: width 1s ease;
            }
        }       
    }
    @media only screen and (max-width: 913px) {
        width:100%!important;
    }
`;
export default StyledChart
