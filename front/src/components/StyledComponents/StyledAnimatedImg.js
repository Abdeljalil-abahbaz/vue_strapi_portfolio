import styled from 'vue3-styled-components'
const StyledAnimatedImg = styled.div`
position: relative;
height: 100vh;
width: 450px;
display: flex;
align-items: center;
*{transition:.5s}

@keyframes turner{
  0%   { transform:rotateY(0deg); }
  10%   { transform:rotateY(0deg); }
  50% { transform:rotateY(360deg);}
  60% { transform:rotateY(360deg);}
  100% { transform:rotateY(0deg);}
  100% { transform:rotateY(0deg);}
}

.wrapper {
    width: 100%;
  transform-style: preserve-3d;
  transition: transform 4s;
}

div { 
  width:100%;
  height:20px;
  background-size: cover;
  backface-visibility: visible;
  animation: turner 20s infinite;
}
.one {
  background-position:0 0;
}
.one2 {
  background-position:0 -100%;
  animation-delay: .1s;
}
.one3 {
  background-position:0 -200%;
  animation-delay: .2s;
}
.one4 {
  background-position:0 -300%;
  animation-delay: .3s;
}
.one5 {
  background-position:0 -400%;
  animation-delay: .4s;
}
.one6 {
  background-position:0 -500%;
  animation-delay: .5s;
}
.one7 {
  background-position:0 -600%;
  animation-delay: .6s;
}
.one8 {
  background-position:0 -700%;
  animation-delay: .7s;
}
.one9 {
  background-position:0 -800%;
  animation-delay: .8s;
}
.one10 {
  background-position:0 -900%;
  animation-delay: .9s;
}
.one11 {
  background-position:0 -1000%;
  animation-delay: 1s;
}
.one12 {
  background-position:0 -1100%;
  animation-delay: 1.1s;
}
.one13 {
  background-position:0 -1200%;
  animation-delay: 1.2s;
}
.one14 {
  background-position:0 -1300%;
  animation-delay: 1.3s;
}
.one15{
  background-position:0 -1400%;
  animation-delay: 1.4s;
}
.one16{
  background-position:0 -1500%;
  animation-delay: 1.5s;
}
.one17{
  background-position:0 -1600%;
  animation-delay: 1.6s;
}
.one18{
  background-position:0 -1700%;
  animation-delay: 1.7s;
}
.one19{
  background-position:0 -1800%;
  animation-delay: 1.8s;
}
.one20{
  background-position:0 -1900%;
  animation-delay: 1.9s;
}
.one21{
  background-position:0 -2000%;
  animation-delay: 2s;
}
.one22{
  background-position:0 -2100%;
  animation-delay: 2.1s;
}
.one23{
  background-position:0 -2200%;
  animation-delay: 2.2s;
}
.one24{
  background-position:0 -2300%;
  animation-delay: 2.3s;
}
.one25{
  background-position:0 -2400%;
  animation-delay: 2.4s;
}
.one26{
  background-position:0 -2500%;
  animation-delay: 2.5s;
}
.one27{
  background-position:0 -2600%;
  animation-delay: 2.6s;
}
.one28{
  background-position:0 -2700%;
  animation-delay: 2.7s;
}
.one29{
  background-position:0 -2800%;
  animation-delay: 2.8s;
}
.one30{
  background-position:0 -2900%;
  animation-delay: 2.9s;
}
.one31{
  background-position:0 -3000%;
  animation-delay: 3s;
}
.one32{
  background-position:0 -3100%;
  animation-delay: 3.1s;
}
.one32{
  background-position:0 -3100%;
  animation-delay: 3.1s;
}
.one33{
  background-position:0 -3200%;
  animation-delay: 3.2s;
}
.one34{
  background-position:0 -3300%;
  animation-delay: 3.3s;
}
.one35{
  background-position:0 -3400%;
  animation-delay: 3.4s;
}
.one36{
  background-position:0 -3500%;
  animation-delay: 3.5s;
}
.one37{
  background-position:0 -3600%;
  animation-delay: 3.6s;
}
.one38{
  background-position:0 -3700%;
  animation-delay: 3.7s;
}

`;
export default StyledAnimatedImg