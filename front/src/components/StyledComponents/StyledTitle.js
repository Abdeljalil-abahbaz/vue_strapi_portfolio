import styled from 'vue3-styled-components'

const StyledTitle = styled.div`
.letter:not(.space){
    &:hover{
        color:#F62A00;
        cursor:pointer;
        display:inline-block;
        animation-duration: 1s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        -webkit-animation-name: rubberBand;
        animation-name: rubberBand
        transition: all 0.3s ease-out;
    }
}
@keyframes rubberBand {
    0% { transform: scale3d(1, 1, 1)}

    30% {transform: scale3d(1.25, 0.75, 1)}

    40% {transform: scale3d(0.75, 1.25, 1)}

    50% {transform: scale3d(1.15, 0.85, 1)}

    65% { transform: scale3d(0.95, 1.05, 1)}

    75% {transform: scale3d(1.05, 0.95, 1)}

    100% {transform: scale3d(1, 1, 1)}
}
`;
export default StyledTitle