import styled from 'vue3-styled-components'

const StyledContactInfos = styled.div`
color: #8f8f8f;
overflow: hidden;
font-size: 14px;
line-height: 24px;
.contact-info {
    overflow: hidden;
    padding: 7px 0 0 30px;
}
 h3 {
    color: #8f9ca8;
    margin: 0 0 6px;
    position: relative;
    letter-spacing: 2px;
    text-transform: uppercase;
    font: 600 12px "Poppins", "Helvetica Neue", Helvetica, Arial, sans-serif;
    i{
        color: red;
    }
}
hr {
    margin: 18px 0;
    height: 0;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    border: none;
    border-bottom: 1px solid;
}
address {
    display: block;
    margin: 0 0 21px;
    line-height: 24px;
    color: #8f9ca8;
}
a{
    color: #8f9ca8;
    text-decoration:none;
}
`;
export default StyledContactInfos