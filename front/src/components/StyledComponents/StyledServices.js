import styled from 'vue3-styled-components'
const StyleServices= styled.div`
.services_content {
    color: #f1f3ce;
    display: flex;
    flex-wrap: wrap;
    span.icon{
        padding: 20px;
        border: 1px solid red;
        border-radius: 50%;
        color: red;
    }
    .title {
        text-transform: uppercase;
        font-size: 20px;
        color: #1e656d;
        margin-bottom: 5px;
        font-weight: lighter;
    }
    p{
        font-size: 16px;
        font-weight: lighter;
        letter-spacing: 0.5px;
    }
}

.service {
    flex: 0 0 calc(50% - 20px); 
    margin: 0 10px 20px 0; 
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    justify-content: flex-start;
    align-items: center;
    column-gap: 18px;
    div{
        align-self: baseline;
    }
}
}



@media (max-width: 768px) {
    .service {
        flex-basis: calc(100% - 20px);
        margin-right: 0;
    }
}

`;
export default StyleServices