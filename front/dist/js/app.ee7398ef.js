(function(){"use strict";var e={8893:function(e,t,n){var o=n(5130),i=n(6768);const a={class:"content"};function l(e,t,n,o,l,r){const s=(0,i.g2)("NavMenu"),c=(0,i.g2)("Home"),d=(0,i.g2)("ParalaxFrame"),p=(0,i.g2)("About"),u=(0,i.g2)("Services"),m=(0,i.g2)("Skills"),g=(0,i.g2)("Experiences"),f=(0,i.g2)("Formations"),h=(0,i.g2)("Contact"),b=(0,i.g2)("StyledApp");return(0,i.uX)(),(0,i.Wv)(b,{class:"page_container",id:"page_container"},{default:(0,i.k6)((()=>[(0,i.bF)(s),(0,i.Lk)("div",{class:"container",onScroll:t[0]||(t[0]=(...e)=>r.animateChart&&r.animateChart(...e))},[(0,i.Lk)("div",a,[(0,i.bF)(c),(0,i.bF)(d,{_class:"home_parallax",image:l.responsive,title:"Responsive Web Development",description:"Compatible with Mobile, Tablets & PCs",urlPhoto:l.image1},null,8,["image","urlPhoto"]),(0,i.bF)(p),(0,i.bF)(d,{_class:"about_parallax",image:l.grpmeeting,title:"Companies, associations, or individuals",description:"Your needs are a priority",urlPhoto:l.image2},null,8,["image","urlPhoto"]),(0,i.bF)(u),(0,i.bF)(m),(0,i.bF)(d,{_class:"skills_parallax",image:l.customizedExperience,title:"Customized solutions",description:"Customized solutions to fit your industry needs!",urlPhoto:l.image3},null,8,["image","urlPhoto"]),(0,i.bF)(g),(0,i.bF)(d,{_class:"exp_parallax",image:l.topixel,title:"Vision to reality",description:"Transforming visions into pixels",urlPhoto:l.image4},null,8,["image","urlPhoto"]),(0,i.bF)(f),(0,i.bF)(d,{_class:"form_parallax",image:l.idearealize,title:" Precision in execution",description:"Bringing ideas to life with precision",urlPhoto:l.image5},null,8,["image","urlPhoto"]),(0,i.bF)(h)])],32)])),_:1})}var r=n(2274);const s=r.Ay.div`
  background-color: #00293C;
  width: 100%;
  height:100vh;
  display:grid;
  grid-template-columns: 250px calc(100vw - 250px);
  margin: auto;
  font-family: Georgia, serif;
  z-index:-2;
  .container{
    height: 100vh;
    max-height: 100vh;
    overflow: auto;
    background-position: 100% 50%;
    width: 100%;
    > .content{
      background: transparent;
      display:flex;
      flex-direction: column;
    }
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns:100%;
  }
  
`;var c=s,d=n(4232);const p=(0,i.Lk)("i",{class:"fa-solid fa-bars"},null,-1),u=[p],m=(0,i.Lk)("i",{class:"fa-solid fa-xmark"},null,-1),g=[m],f=(0,i.Lk)("h3",null,"AB",-1),h=[f],b={class:"nav-items"},k=(0,i.Lk)("i",{class:"fa-solid fa-house"},null,-1),x=(0,i.Lk)("i",{class:"fa-solid fa-address-card"},null,-1),v=(0,i.Lk)("i",{class:"fa-solid fa-wrench"},null,-1),y=(0,i.Lk)("i",{class:"fa-solid fa-lightbulb"},null,-1),L=(0,i.Lk)("i",{class:"fa-solid fa-laptop-code"},null,-1),w=(0,i.Lk)("i",{class:"fa-solid fa-book"},null,-1),T=(0,i.Lk)("i",{class:"fa-solid fa-envelope"},null,-1),_={class:"social"},S={href:"https://www.linkedin.com/in/abdeljalil-abahbaz/",target:"_blanc"},A={href:"https://www.facebook.com/abdeljalil.abahbaz.1",target:"_blanc"};function C(e,t,n,o,a,l){const r=(0,i.g2)("font-awesome-icon"),s=(0,i.g2)("StyledNav");return(0,i.uX)(),(0,i.Wv)(s,null,{default:(0,i.k6)((()=>[(0,i.Lk)("div",{class:(0,d.C4)(["mobile-menu-icon",{hide:!a.menuOpen}]),onClick:t[0]||(t[0]=e=>l.setMenuOpen(!a.menuOpen))},u,2),(0,i.Lk)("ul",{class:(0,d.C4)(["nav-menu",{hide:!a.menuOpen}])},[(0,i.Lk)("div",{class:"mobile-menu-icon",onClick:t[1]||(t[1]=e=>l.setMenuOpen(!a.menuOpen))},g),(0,i.Lk)("li",{class:(0,d.C4)(["logo",{hide:!a.menuOpen}])},h,2),(0,i.Lk)("li",b,[(0,i.Lk)("nav",null,[(0,i.Lk)("ul",null,[(0,i.Lk)("li",null,[(0,i.Lk)("a",{href:"#home",class:(0,d.C4)({active:"#home"===a.activeMenuItem}),onClick:t[2]||(t[2]=e=>l.handleClick("#home",e))},[k,(0,i.eW)(" Home")],2)]),(0,i.Lk)("li",null,[(0,i.Lk)("a",{href:"#about",class:(0,d.C4)({active:"#about"===a.activeMenuItem}),onClick:t[3]||(t[3]=e=>l.handleClick("#about",e))},[x,(0,i.eW)(" About")],2)]),(0,i.Lk)("li",null,[(0,i.Lk)("a",{href:"#services",class:(0,d.C4)({active:"#services"===a.activeMenuItem}),onClick:t[4]||(t[4]=e=>l.handleClick("#services",e))},[v,(0,i.eW)(" Services")],2)]),(0,i.Lk)("li",null,[(0,i.Lk)("a",{href:"#skills",class:(0,d.C4)({active:"#skills"===a.activeMenuItem}),onClick:t[5]||(t[5]=e=>l.handleClick("#skills",e))},[y,(0,i.eW)(" Skills")],2)]),(0,i.Lk)("li",null,[(0,i.Lk)("a",{href:"#experiences",class:(0,d.C4)({active:"#experiences"===a.activeMenuItem}),onClick:t[6]||(t[6]=e=>l.handleClick("#experiences",e))},[L,(0,i.eW)(" Experiences")],2)]),(0,i.Lk)("li",null,[(0,i.Lk)("a",{href:"#formations",class:(0,d.C4)({active:"#formations"===a.activeMenuItem}),onClick:t[7]||(t[7]=e=>l.handleClick("#formations",e))},[w,(0,i.eW)(" Formations")],2)]),(0,i.Lk)("li",null,[(0,i.Lk)("a",{href:"#contact",class:(0,d.C4)({active:"#contact"===a.activeMenuItem}),onClick:t[8]||(t[8]=e=>l.handleClick("#contact",e))},[T,(0,i.eW)(" Contact")],2)])])])]),(0,i.Lk)("li",_,[(0,i.Lk)("a",S,[(0,i.bF)(r,{icon:["fab","linkedin"]})]),(0,i.Lk)("a",A,[(0,i.bF)(r,{icon:["fab","facebook"]})])])],2)])),_:1})}const F=r.Ay.div`

    width:250px;
    background-color:#012231;
    z-index: 3;
    ul.nav-menu{
        height: 100vh;
        justify-content: space-between;
        display:flex;
        flex-direction:column;
        justify-content:center;
        list-style:none;
        user-select: none;
        padding:0;
        margin:0;
        
        .social{
            display: flex;
            justify-content: center;
            column-gap: 10px;
            a{
                color: #f1f3ce;
                font-size: 35px;
                .linkedin,.facebook{
                    cursor:pointer;
                }
            }
            
        }
        li.logo{
            cursor:pointer;
            display:flex;
            align-items:center;
            justify-content: center;
            padding:15px;
            h3{
                color: #f1f3ce;
                font-size: 56px;
                border: 2px solid #f1f3ce;
                border-radius: 50%;
                height: 100px;
                width: 100px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0;
                padding: 0;
            }
            p{

            }
        }
        .nav-items{
            flex:1;
            ul {
                display: flex;
                flex-direction: column;
                justify-content: center;
                flex: 1;
                padding:0;
                li{
                    padding:10px;
                    &.active{
                        a{
                            color :red;background
                        }
                    }
                    a{
                        color:#6c757d;
                        cursor:pointer;
                        padding-block:1rem;
                        text-align:center;
                        cursor:pointer;
                        display:flex;
                        justify-content:flex-start;
                        align-items:center;
                        height:50px; 
                        i{
                            margin-right:5px
                        }
                        
                        &:hover {
                            color:#F62A00;
                        }
                        &:where(.active){
                            color:#F62A00;
                        }
                        
                    } 
                    &:not(:last-child){
                        border-bottom: solid 1px grey;
                        
                    }          
                    
                    
                }
            }
            
        }
        
    }

    a{
        font-family:RobotoMono Regular, monospace;
        text-decoration:none;
        font-size:1.3rem;
        outline:none;
    }
    .mobile-menu-icon{
        color:#FFF;
        font-size:44px; 
        position:absolute;
        right:1.5rem;
        top:1rem;
        cursor:pointer;
        display:none;
    }
    
    @media only screen and (max-width: 768px) {
        position: fixed;
        width: 300px;
        right: 40px;
        top: 30px;
        border-radius: 10px;
        .mobile-menu-icon {
            display:block;
        }
        ul.nav-menu{
            max-width:300px;
            width:90%;
            padding-inline:0;
            padding-top:4rem;
            flex-direction:column;
            justify-content:center;
            width: 100%;
            max-height: 70vh;
            overflow-y: auto; 
            .nav-items ul {
                justify-content: flex-start;
                li{
                    border-radius:unset;
                }
            }
            
            .social{
                margin-top: auto;
                position: absolute;
                top: 18px;
                left: 18px;
            }
        }
        .hide{
            display: none!important;
        }
    }
`;var I=F;function E(e,t){t.preventDefault();const n=document.querySelector(e);n&&(n.scrollIntoView({behavior:"smooth"}),history.pushState({},"",e))}function z(){const e=window.location.hash||"#home",t=document.querySelector(e);t&&t.scrollIntoView({behavior:"smooth"})}var P={data(){return{menuOpen:!0,activeMenuItem:"#home",scrollTimeOut:null,scrollToSection:E,handlePopstate:z}},mounted(){window.addEventListener("popstate",this.handlePopstate()),document.querySelector(".container").addEventListener("scroll",(()=>{this.handleTimeout("scrollTimeOut",this.handleScroll,50)}))},beforeUnmount(){window.removeEventListener("popstate",this.handlePopstate()),document.querySelector(".container").removeEventListener("scroll",(()=>{this.handleTimeout("scrollTimeOut",this.handleScroll,50)}))},methods:{setMenuOpen(e){this.menuOpen=e},handleClick(e,t){this.activeMenuItem=e,this.scrollToSection(e,t)},handleTimeout(e,t,n){this[e]&&clearTimeout(this[e]),this[e]=setTimeout((()=>{t()}),n)},handleScroll(){const e=document.querySelector("#home").offsetTop,t=document.querySelector("#about").offsetTop,n=document.querySelector("#services").offsetTop,o=document.querySelector("#skills").offsetTop,i=document.querySelector("#experiences").offsetTop,a=document.querySelector("#formations").offsetTop,l=document.querySelector("#contact").offsetTop,r=document.querySelector(".container").scrollTop,s=[{id:"#home",offsetTop:e},{id:"#about",offsetTop:t},{id:"#services",offsetTop:n},{id:"#skills",offsetTop:o},{id:"#experiences",offsetTop:i},{id:"#formations",offsetTop:a},{id:"#contact",offsetTop:l}];let c="#home";for(let d=0;d<s.length;d++){const e=s[d],t=s[d+1];if(r>=e.offsetTop&&(r<t?.offsetTop||!t)){c=e.id;break}}this.activeMenuItem=c}},components:{StyledNav:I}},$=n(1241);const D=(0,$.A)(P,[["render",C]]);var M=D;const j=e=>((0,i.Qi)("data-v-3f379370"),e=e(),(0,i.jt)(),e),H={class:"intro"},W={class:"hello_text"},O={class:"my_name"},X={class:"profession_text"},N=j((()=>(0,i.Lk)("span",{class:"animated_bg"},null,-1))),q=j((()=>(0,i.Lk)("span",{class:"contactme"},"Contact me",-1))),R=[N,q],Y=j((()=>(0,i.Lk)("div",{class:"home-hero__mouse-scroll-cont"},[(0,i.Lk)("div",{class:"mouse"})],-1))),B=j((()=>(0,i.Lk)("div",{class:"sun"},null,-1)));function G(e,t,n,o,a,l){const r=(0,i.g2)("AnimatedTitle"),s=(0,i.g2)("StyledIntroText"),c=(0,i.g2)("AnimatedImg"),p=(0,i.g2)("StyledHome");return a.homeData?((0,i.uX)(),(0,i.CE)("div",{key:0,class:"bloc",id:"home",style:(0,d.Tr)({backgroundImage:`url('${a.homeCover}')`})},[(0,i.bF)(p,null,{default:(0,i.k6)((()=>[(0,i.Lk)("div",H,[(0,i.bF)(s,{class:"head_name"},{default:(0,i.k6)((()=>[(0,i.Lk)("span",W,[(0,i.bF)(r,{title:"Hello,"})]),(0,i.Lk)("span",O,[(0,i.bF)(r,{title:"I'm "+a.homeData.first_name},null,8,["title"])]),(0,i.Lk)("span",X,[(0,i.bF)(r,{title:a.homeData.function},null,8,["title"])]),(0,i.Lk)("a",{class:"hire_me",onClick:t[0]||(t[0]=e=>a.scrollToSection("#contact",e)),href:"#contact"},R)])),_:1}),(0,i.bF)(c,{urlImg:a.host+a.homeData.photo.data.attributes.url},null,8,["urlImg"])]),Y,B])),_:1})],4)):(0,i.Q3)("",!0)}const Q=["innerHTML"];function U(e,t,n,o,a,l){const r=(0,i.g2)("styled-title");return(0,i.uX)(),(0,i.Wv)(r,null,{default:(0,i.k6)((()=>[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(n.title,((e,t)=>((0,i.uX)(),(0,i.CE)("span",{innerHTML:e,key:t,class:(0,d.C4)({letter:!0,space:" "===e,first_letter:0===t})},null,10,Q)))),128))])),_:1})}const V=r.Ay.div`
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
`;var J=V,K={props:{title:String},components:{"styled-title":J}};const Z=(0,$.A)(K,[["render",U]]);var ee=Z;const te={class:"wrapper"};function ne(e,t,n,o,a,l){const r=(0,i.g2)("StyledAnimatedImg");return(0,i.uX)(),(0,i.Wv)(r,null,{default:(0,i.k6)((()=>[(0,i.Lk)("section",te,[(0,i.Lk)("div",{style:(0,d.Tr)({"background-image":`url('${n.urlImg}')`}),class:"one"},null,4),(0,i.Lk)("div",{style:(0,d.Tr)({"background-image":`url('${n.urlImg}')`}),class:"one2"},null,4),(0,i.Lk)("div",{style:(0,d.Tr)({"background-image":`url('${n.urlImg}')`}),class:"one3"},null,4),(0,i.Lk)("div",{style:(0,d.Tr)({"background-image":`url('${n.urlImg}')`}),class:"one4"},null,4),(0,i.Lk)("div",{style:(0,d.Tr)({"background-image":`url('${n.urlImg}')`}),class:"one5"},null,4),(0,i.Lk)("div",{style:(0,d.Tr)({"background-image":`url('${n.urlImg}')`}),class:"one6"},null,4),(0,i.Lk)("div",{style:(0,d.Tr)({"background-image":`url('${n.urlImg}')`}),class:"one7"},null,4),(0,i.Lk)("div",{style:(0,d.Tr)({"background-image":`url('${n.urlImg}')`}),class:"one8"},null,4),(0,i.Lk)("div",{style:(0,d.Tr)({"background-image":`url('${n.urlImg}')`}),class:"one9"},null,4),(0,i.Lk)("div",{style:(0,d.Tr)({"background-image":`url('${n.urlImg}')`}),class:"one10"},null,4),(0,i.Lk)("div",{style:(0,d.Tr)({"background-image":`url('${n.urlImg}')`}),class:"one11"},null,4),(0,i.Lk)("div",{style:(0,d.Tr)({"background-image":`url('${n.urlImg}')`}),class:"one12"},null,4),(0,i.Lk)("div",{style:(0,d.Tr)({"background-image":`url('${n.urlImg}')`}),class:"one13"},null,4),(0,i.Lk)("div",{style:(0,d.Tr)({"background-image":`url('${n.urlImg}')`}),class:"one14"},null,4),(0,i.Lk)("div",{style:(0,d.Tr)({"background-image":`url('${n.urlImg}')`}),class:"one15"},null,4),(0,i.Lk)("div",{style:(0,d.Tr)({"background-image":`url('${n.urlImg}')`}),class:"one16"},null,4),(0,i.Lk)("div",{style:(0,d.Tr)({"background-image":`url('${n.urlImg}')`}),class:"one17"},null,4),(0,i.Lk)("div",{style:(0,d.Tr)({"background-image":`url('${n.urlImg}')`}),class:"one18"},null,4),(0,i.Lk)("div",{style:(0,d.Tr)({"background-image":`url('${n.urlImg}')`}),class:"one19"},null,4),(0,i.Lk)("div",{style:(0,d.Tr)({"background-image":`url('${n.urlImg}')`}),class:"one20"},null,4),(0,i.Lk)("div",{style:(0,d.Tr)({"background-image":`url('${n.urlImg}')`}),class:"one21"},null,4),(0,i.Lk)("div",{style:(0,d.Tr)({"background-image":`url('${n.urlImg}')`}),class:"one22"},null,4),(0,i.Lk)("div",{style:(0,d.Tr)({"background-image":`url('${n.urlImg}')`}),class:"one23"},null,4),(0,i.Lk)("div",{style:(0,d.Tr)({"background-image":`url('${n.urlImg}')`}),class:"one24"},null,4),(0,i.Lk)("div",{style:(0,d.Tr)({"background-image":`url('${n.urlImg}')`}),class:"one25"},null,4),(0,i.Lk)("div",{style:(0,d.Tr)({"background-image":`url('${n.urlImg}')`}),class:"one26"},null,4),(0,i.Lk)("div",{style:(0,d.Tr)({"background-image":`url('${n.urlImg}')`}),class:"one28"},null,4),(0,i.Lk)("div",{style:(0,d.Tr)({"background-image":`url('${n.urlImg}')`}),class:"one29"},null,4),(0,i.Lk)("div",{style:(0,d.Tr)({"background-image":`url('${n.urlImg}')`}),class:"one30"},null,4),(0,i.Lk)("div",{style:(0,d.Tr)({"background-image":`url('${n.urlImg}')`}),class:"one31"},null,4),(0,i.Lk)("div",{style:(0,d.Tr)({"background-image":`url('${n.urlImg}')`}),class:"one32"},null,4),(0,i.Lk)("div",{style:(0,d.Tr)({"background-image":`url('${n.urlImg}')`}),class:"one33"},null,4)])])),_:1})}const oe=r.Ay.div`
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

`;var ie=oe,ae={name:"animated-image",props:{urlImg:String},components:{StyledAnimatedImg:ie}};const le=(0,$.A)(ae,[["render",ne]]);var re=le;const se=r.Ay.h1`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    line-height:5rem;
    justify-content: center;
    letter-spacing: 2px;
    padding-inline:20px;
    
    .hello_text{
        color:#F1F3CE;
        .first_letter{
            font-size:6rem;
        }
    }
    .hire_me{
        width:100%;
        text-align:center;
        font-size: 1.5rem;
        text-transform: uppercase;
        font-family: "Raleway-semibold";
        border: 2px solid #1e656d;
        margin-top: 3rem;
        background-color: #1e656d;
        color: #f1f3ce;
        cursor: pointer;
        position: relative;
        .animated_bg{
            background-color:#F62A00;
            display:block;
            height:100%;
            position:absolute;
            z-index:-1;
            width:0px;
            transition:width 0.5s ;
        }
        .contactme{
            padding:10px;
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
    .my_name{
        color: #F1F3CE;
        font-weight: bold;
        font-size: 4vw;
        b{
            font-family: "Raleway-semibold", sans-serif;
        }
    }
    .profession_text{
        font-size:4rem;
        color:#F1F3CE;
    }
   
    
    @media screen and (max-width: 1920px){
        .my_name,.profession_text {
            font-size: 4rem!important;
        }
    }
    @media screen and (max-width: 1560px){
        .my_name,.profession_text {
            font-size: 3rem!important;
        }
    
    }
    @media screen and (max-width: 1235px){
        .my_name,.profession_text {
          font-size: 3vw!important;
        }
        line-height:4rem;
    }
    @media screen and (max-width: 1001px){
        .my_name,.profession_text {
          font-size: 2.5vw!important;
        }
        line-height:3rem;
        
    }
    @media screen and (max-width: 914px){
        
        line-height: 4rem;
        width:90%;

        .my_name,.profession_text {
            font-size: 5vw!important;
        }
        .hire_me{
            width:100%;
            margin:auto;
            margin-top:3rem;
        }
        
    }
    
    
    
    
`;var ce=se;const de=r.Ay.div`
        
        height: 800px;
        position: relative;
        position:relative;
        flex:1;
        
        img{
            height:100%;
        }
            
            
        
        @media screen and (max-width: 1235px){
            
            .my_image{
            width: 40%!important;
            height:auto!important;
            img{
                width:100%!important;
                height:auto!important;
            }
            }
        }
        @media screen and (max-width: 914px){
        
            width: 90%!important;
            height:auto!important;
        
            img{
                width:100%!important;
                height:auto!important;
            }
            
        }
    
`;var pe=de;const ue=r.Ay.div`
   
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content: center;
    line-height:3rem;
    overflow: hidden;
    position: relative;

    
    .intro{
      display:flex;
      flex-direction:row;
      width: 100%;
      justify-content: space-around;
      z-index:1;
      height: 100vh;
      align-items: center;
    }
    
  .home-hero__mouse-scroll-cont {
    position: absolute;
    bottom: 3%;
    left: 50%;
    transform: translateX(-50%);
    .mouse {
      width: 25px;
      height: 40px;
      border: 2px solid #f1f3ce;
      border-radius: 60px;
      position: relative;
      overflow: hidden;
      &::before {
        content: '';
        width: 5px;
        height: 5px;
        position: absolute;
        top: 7px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #f1f3ce;
        border-radius: 50%;
        opacity: 1;
        animation: wheel 1.3s infinite;
        -webkit-animation: wheel 1.3s infinite;
      }
    }
    

  }
    a{
      text-decoration: none;
    }
    @media screen and (max-width: 914px){
      .intro{
        flex-direction: column;
        align-items: flex-start;
      }
    }
    @keyframes wheel {
      to {
          opacity: 0;
          top: 27px
      }
  }
`;var me=ue,ge=n.p+"img/home-cover.4846f381.jpg",fe={name:"Home",data(){return{homeData:null,host:"http://localhost:4000",scrollToSection:E,homeCover:ge}},watch:{"$store.getters.getHero.attributes":{handler(e){this.homeData=e},immediate:!0}},mounted(){window.addEventListener("mousemove",(function(e){const t=document.getElementById("home"),n=10;window.addEventListener("mousemove",(function(e){const o=(e.clientX-t.offsetLeft)/n,i=(e.clientY-t.offsetTop)/n;t.style.backgroundPosition=`${o}px ${i}px`}))}))},components:{AnimatedTitle:ee,AnimatedImg:re,StyledIntroText:ce,StyledHeroPhoto:pe,StyledHome:me}};const he=(0,$.A)(fe,[["render",G],["__scopeId","data-v-3f379370"]]);var be=he,ke=n.p+"img/about-middle4.9aeb38ba.png";const xe={key:0,class:"bloc",id:"about"},ve={class:"text-about"},ye={class:"description-left"},Le={key:0,className:"text"},we=(0,i.Lk)("img",{src:ke},null,-1),Te={class:"description-right"},_e=(0,i.Lk)("p",{className:"text"}," The experience I have gained through various projects and positions enables me to better understand client expectations and respond precisely to the requested needs within the specific domain of activity. From simple showcase websites to more complex projects, I offer expertise and web development that aligns with your expectations and requirements. ",-1);function Se(e,t,n,o,a,l){const r=(0,i.g2)("PageHeading"),s=(0,i.g2)("AnimatedTitle"),c=(0,i.g2)("Shapes"),p=(0,i.g2)("StyledAbout");return a.aboutData?((0,i.uX)(),(0,i.CE)("div",xe,[(0,i.bF)(p,null,{default:(0,i.k6)((()=>[(0,i.bF)(r,{title:"About",subTitle:"I am a web developer, and I love it!"}),(0,i.Lk)("div",ve,[(0,i.Lk)("div",ye,[(0,i.Lk)("h3",null,[(0,i.bF)(s,{title:"Passionate web developer"})]),a.aboutData?((0,i.uX)(),(0,i.CE)("p",Le,(0,d.v_)(a.aboutData),1)):(0,i.Q3)("",!0)]),we,(0,i.Lk)("div",Te,[(0,i.Lk)("h3",null,[(0,i.bF)(s,{title:"Experienced developer"})]),_e])]),(0,i.bF)(c,{data:a.ShapesData},null,8,["data"])])),_:1})])):(0,i.Q3)("",!0)}const Ae=r.Ay.div`
    color :#F1F3CE;
    padding:20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between
    align-items: center;
    h3{
        font-size: 23px;
        color:#F1F3CE;
        margin:0;
        .letter.first_letter{
            font-size:3rem;
        }
        
    }
    .text-about{
        display: flex;
        flex-direction: row;
        p{
            font-size: 14px;
            line-height: 1.6;
            padding:20px;
        }
        .description-left, .description-right, img{
            height: 257px;
        }
        
    }
    
    @media only screen and (max-width: 913px) {
        width:100%!important;
    }
`;var Ce=Ae;function Fe(e,t,n,o,a,l){const r=(0,i.g2)("StyledPageHeading");return(0,i.uX)(),(0,i.Wv)(r,null,{default:(0,i.k6)((()=>[(0,i.Lk)("h1",null,(0,d.v_)(n.title),1),(0,i.Lk)("span",null,(0,d.v_)(n.subTitle),1)])),_:1})}const Ie=r.Ay.div`
    margin-bottom:50px;
    text-align: center;
    h1{
        width:100%;
        color:#f1f3ce;
        font-size:60px;
        text-transform: uppercase;
        
    }
    span{
        font-size:14px;
        margin-block:5px;
        line-height:2;
        color: #8f9ca8;
    }
    &::after{
      content:'';
      display:block;
      height:3px;
      width:50px;
      background-color:red;
      margin: auto;
    }
`;var Ee=Ie,ze={props:{title:String,subTitle:String},components:{StyledPageHeading:Ee}};const Pe=(0,$.A)(ze,[["render",Fe]]);var $e=Pe;const De={class:"shape"},Me={class:"text"};function je(e,t,n,o,a,l){const r=(0,i.g2)("StyledShapes");return(0,i.uX)(),(0,i.Wv)(r,{class:"shapes"},{default:(0,i.k6)((()=>[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(n.data,((e,t)=>((0,i.uX)(),(0,i.CE)("div",{key:t},[(0,i.Lk)("div",De,[(0,i.Lk)("div",null,[(0,i.Lk)("span",null,[(0,i.Lk)("i",{class:(0,d.C4)(e.icon)},null,2)])])]),(0,i.Lk)("div",Me,[(0,i.Lk)("h1",null,(0,d.v_)(e.title),1)])])))),128))])),_:1})}const He=r.Ay.div`
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
`;var We=He,Oe={props:{data:Array},components:{StyledShapes:We}};const Xe=(0,$.A)(Oe,[["render",je]]);var Ne=Xe,qe={name:"AboutMe",data(){return{aboutData:null,ShapesData:[{title:"ANALYSIS",icon:"fa-solid fa-magnifying-glass-chart"},{title:"DESIGN",icon:"fa-solid fa-pen-fancy"},{title:"CODE",icon:"fa-solid fa-code"},{title:"TESTS",icon:"fa-solid fa-vial-circle-check"},{title:"DELIVERY",icon:"fa-solid fa-paper-plane"}]}},watch:{"$store.getters.getHero.attributes.about":{handler(e){this.aboutData=e},immediate:!0}},components:{StyledAbout:Ce,AnimatedTitle:ee,PageHeading:$e,Shapes:Ne}};const Re=(0,$.A)(qe,[["render",Se]]);var Ye=Re;const Be={id:"skills",class:"bloc"},Ge={class:"skills_content"},Qe={class:"skills_chart"},Ue={class:"skills_para"},Ve=(0,i.Lk)("h4",null,[(0,i.Lk)("span",null,"✓"),(0,i.eW)(" WEB PROJECT MANAGEMENT")],-1),Je=(0,i.Lk)("p",null,"Showcase, corporate, event, e-commerce, intranet, mobile application.",-1),Ke=(0,i.Lk)("h4",null,[(0,i.Lk)("span",null,"✓"),(0,i.eW)(" GRAPHIC DESIGN & WEB DESIGN")],-1),Ze=(0,i.Lk)("p",null,"Logos, Web templates, advertising brochures, business cards, newsletters...",-1),et=(0,i.Lk)("h4",null,[(0,i.Lk)("span",null,"✓"),(0,i.eW)(" SPECIFIC APPLICATIONS AND ADMINISTRATION INTERFACE")],-1),tt=(0,i.Lk)("p",null," PHP - MYSQL - AJAX / ASP.NET - C# - SQL",-1),nt=(0,i.Lk)("h4",null,[(0,i.Lk)("span",null,"✓"),(0,i.eW)(" IMPLEMENTATION / MODIFICATION / MANAGEMENT OF CMS")],-1),ot=(0,i.Lk)("p",null,"Wordpress, Joomla, Prestashop, phpBB, IPBoard",-1),it=(0,i.Lk)("h4",null,[(0,i.Lk)("span",null,"✓"),(0,i.eW)(" (X)HTML / CSS INTEGRATION")],-1),at=(0,i.Lk)("p",null,"Hand coding respecting Web standards",-1),lt=(0,i.Lk)("h4",null,[(0,i.Lk)("span",null,"✓"),(0,i.eW)(" PAGES DYNAMIZATION THROUGH JAVASCRIPT / AJAX")],-1),rt=(0,i.Lk)("p",null," jQuery, Prototype, Mootools, Scriptaculous",-1),st=(0,i.Lk)("h4",null,[(0,i.Lk)("span",null,"✓"),(0,i.eW)(" W3C VALIDATION, WAI & SEO NATURAL REFERENCING")],-1),ct=(0,i.Lk)("p",null,"Accessibility & ergonomics of web pages",-1),dt=(0,i.Lk)("h4",null,[(0,i.Lk)("span",null,"✓"),(0,i.eW)(" MULTI-PLATFORM DESIGN")],-1),pt=(0,i.Lk)("p",null,"Compatible with all devices, tablets & mobile applications",-1);function ut(e,t,n,o,a,l){const r=(0,i.g2)("PageHeading"),s=(0,i.g2)("SkillsChart"),c=(0,i.g2)("AnimatedTitle"),d=(0,i.g2)("StyledSkills");return(0,i.uX)(),(0,i.CE)("div",Be,[(0,i.bF)(d,null,{default:(0,i.k6)((()=>[(0,i.bF)(r,{title:"Skills",subTitle:"My skills at your service"}),(0,i.Lk)("div",Ge,[(0,i.Lk)("div",Qe,[(0,i.bF)(s,{items:a.skills,title:"Development skills"},null,8,["items"]),(0,i.bF)(s,{items:a.languages,title:"Top languages"},null,8,["items"])]),(0,i.Lk)("div",Ue,[(0,i.Lk)("h3",null,[(0,i.bF)(c,{title:"Areas of expertise"})]),Ve,Je,Ke,Ze,et,tt,nt,ot,it,at,lt,rt,st,ct,dt,pt])])])),_:1})])}const mt=r.Ay.div`
  .skills_content{
    display:flex;
    justify-content: space-around;
    flex-direction:row;
    .skills_para,.skills_chart{
      width:45%
    }
    .skills_para{
      h3{
        font-size: 20px;
        padding-block: 20px;
        color:#F1F3CE;
        margin:0;
        .letter.first_letter{
            font-size:3rem;
        }
      }
      h4{
        color:#F1F3CE;
        span{
          color:red;
        }
      }
      p{
        font-size: 13px;
        line-height: 1.6;
        padding: 20px;
        color:#F1F3CE;
      }
    }
    .skills_chart{
      color:#FFFFFF;
      display:flex;
      flex-direction:column;
      column-gap:40px;
      
      @media only screen and (max-width: 913px) {
          flex-wrap: wrap!important;
      }
    }
  }
  
`;var gt=mt;const ft={class:"chart-title"},ht=["data-percent"];function bt(e,t,n,o,a,l){const r=(0,i.g2)("AnimatedTitle"),s=(0,i.g2)("StyledChart");return(0,i.uX)(),(0,i.Wv)(s,{class:"chart_container",ref:"chart"},{default:(0,i.k6)((()=>[(0,i.Lk)("h3",ft,[(0,i.bF)(r,{title:n.title},null,8,["title"])]),((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(n.items,(e=>((0,i.uX)(),(0,i.CE)("div",{key:e.id,class:"chart"},[(0,i.Lk)("div",null,[(0,i.Lk)("div",{class:"bg","data-percent":e.percent||e.attributes&&e.attributes.percent,style:(0,d.Tr)({width:"0%",backgroundColor:e.color||e.attributes&&e.attributes.color})},null,12,ht),(0,i.Lk)("h3",null,(0,d.v_)(e.title||e.attributes&&e.attributes.title),1)])])))),128))])),_:1},512)}const kt=r.Ay.div`
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
`;var xt=kt,vt={props:{items:Array,title:String},methods:{},components:{AnimatedTitle:ee,StyledChart:xt}};const yt=(0,$.A)(vt,[["render",bt]]);var Lt=yt,wt={data(){return{skills:[],languages:[]}},watch:{"$store.getters.getSkills":{handler(e){this.skills=e},immediate:!0},"$store.getters.getHero.attributes.language":{handler(e){this.languages=e||[]},immediate:!0}},components:{StyledSkills:gt,About:Ye,SkillsChart:Lt,PageHeading:$e,AnimatedTitle:ee}};const Tt=(0,$.A)(wt,[["render",ut]]);var _t=Tt;const St={key:0,id:"experiences",class:"bloc"};function At(e,t,n,o,a,l){const r=(0,i.g2)("PageHeading"),s=(0,i.g2)("TimeLine"),c=(0,i.g2)("StyledExperience");return a.experiences?((0,i.uX)(),(0,i.CE)("div",St,[(0,i.bF)(c,null,{default:(0,i.k6)((()=>[(0,i.bF)(r,{title:"My experience",subTitle:"Time line of my career"}),(0,i.bF)(s,{items:a.experiences},null,8,["items"])])),_:1})])):(0,i.Q3)("",!0)}const Ct=r.Ay.div`
  h1{
    width:100%;
    color:#f1f3ce;
    font-size:60px;
    text-transform: uppercase;
    text-align: center;
  }
  
`;var Ft=Ct;const It={class:"time_line_container"},Et=(0,i.Lk)("span",{class:"time_line"},null,-1),zt=(0,i.Lk)("br",null,null,-1);function Pt(e,t,n,o,a,l){const r=(0,i.g2)("StyledTimeLine");return(0,i.uX)(),(0,i.Wv)(r,null,{default:(0,i.k6)((()=>[(0,i.Lk)("div",It,[Et,(0,i.Lk)("ul",null,[(0,i.eW)((0,d.v_)(console.log(e.data))+" ",1),((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(n.items,(e=>((0,i.uX)(),(0,i.CE)("li",{key:e.id},[(0,i.Lk)("div",null,[(0,i.Lk)("h5",null,(0,d.v_)(e.attributes.title),1),(0,i.Lk)("em",null,(0,d.v_)(e.attributes.company)+", "+(0,d.v_)(e.attributes.location),1),(0,i.Lk)("mark",null,(0,d.v_)(e.attributes.date_start)+" - "+(0,d.v_)(e.attributes.date_end),1),zt,(0,i.Lk)("p",null,(0,d.v_)(e.attributes.description),1)])])))),128))])])])),_:1})}const $t=r.Ay.div`
    
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
`;var Dt=$t,Mt={props:{items:Array},components:{StyledTimeLine:Dt}};const jt=(0,$.A)(Mt,[["render",Pt]]);var Ht=jt,Wt={data(){return{experiences:[]}},watch:{"$store.getters.getExperiences":{handler(e){this.experiences=e},immediate:!0}},components:{StyledExperience:Ft,TimeLine:Ht,PageHeading:$e}};const Ot=(0,$.A)(Wt,[["render",At]]);var Xt=Ot;const Nt={key:0,id:"formations",class:"bloc"};function qt(e,t,n,o,a,l){const r=(0,i.g2)("PageHeading"),s=(0,i.g2)("TimeLine"),c=(0,i.g2)("StyledFormation");return a.formations?((0,i.uX)(),(0,i.CE)("div",Nt,[(0,i.bF)(c,null,{default:(0,i.k6)((()=>[(0,i.bF)(r,{title:"My education",subTitle:"School and diplomes"}),(0,i.bF)(s,{items:a.formations},null,8,["items"])])),_:1})])):(0,i.Q3)("",!0)}const Rt=r.Ay.div`
h1{
  width:100%;
  color:#f1f3ce;
  font-size:60px;
  text-transform: uppercase;
  text-align: center;
}

`;var Yt=Rt,Bt={data(){return{formations:[]}},watch:{"$store.getters.getFormations":{handler(e){this.formations=e},immediate:!0}},components:{StyledFormation:Yt,TimeLine:Ht,PageHeading:$e}};const Gt=(0,$.A)(Bt,[["render",qt]]);var Qt=Gt;const Ut={class:"bloc",id:"contact"},Vt={class:"content"};function Jt(e,t,n,o,a,l){const r=(0,i.g2)("PageHeading"),s=(0,i.g2)("ContactForm"),c=(0,i.g2)("ContactInfos"),d=(0,i.g2)("ContactMap"),p=(0,i.g2)("StyledContact");return(0,i.uX)(),(0,i.CE)("div",Ut,[(0,i.bF)(p,null,{default:(0,i.k6)((()=>[(0,i.bF)(r,{title:"Address & contact",subTitle:"Have an idea? let's make it real!"}),(0,i.Lk)("div",Vt,[(0,i.bF)(s),(0,i.bF)(c),(0,i.bF)(d)])])),_:1})])}const Kt=r.Ay.div`
h1{
  width:100%;
  color:#f1f3ce;
  font-size:60px;
  text-transform: uppercase;
  text-align: center;
}
.content{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
    
`;var Zt=Kt;const en={class:"app-form-group"},tn={class:"label"},nn={class:"app-form-group"},on={class:"label"},an={class:"app-form-group"},ln={class:"label"},rn={class:"app-form-group message"},sn={class:"label"},cn=(0,i.Lk)("div",{class:"app-form-group buttons"},[(0,i.Lk)("button",{class:"send",type:"submit"},[(0,i.Lk)("span",{class:"animated_bg"}),(0,i.Lk)("span",{class:"contactme"},[(0,i.Lk)("i",{class:"fa-solid fa-paper-plane"}),(0,i.eW)(" Send")])])],-1);function dn(e,t,n,a,l,r){const s=(0,i.g2)("StyledContactForm");return(0,i.uX)(),(0,i.Wv)(s,{id:"contact_form"},{default:(0,i.k6)((()=>[(0,i.Lk)("form",{class:"app-form",onSubmit:t[4]||(t[4]=(0,o.D$)(((...e)=>r.submitForm&&r.submitForm(...e)),["prevent"]))},[(0,i.Lk)("div",en,[(0,i.bo)((0,i.Lk)("input",{class:"app-form-control field",placeholder:"Your name",name:"name","onUpdate:modelValue":t[0]||(t[0]=e=>l.formData.name=e)},null,512),[[o.Jo,l.formData.name]]),(0,i.Lk)("label",tn,(0,d.v_)(l.nameError),1)]),(0,i.Lk)("div",nn,[(0,i.bo)((0,i.Lk)("input",{class:"app-form-control field",placeholder:"Your e-mail",name:"email","onUpdate:modelValue":t[1]||(t[1]=e=>l.formData.email=e)},null,512),[[o.Jo,l.formData.email]]),(0,i.Lk)("label",on,(0,d.v_)(l.emailError),1)]),(0,i.Lk)("div",an,[(0,i.bo)((0,i.Lk)("input",{class:"app-form-control field",placeholder:"+212 6 50 44 81 79",name:"phone","onUpdate:modelValue":t[2]||(t[2]=e=>l.formData.phone=e)},null,512),[[o.Jo,l.formData.phone]]),(0,i.Lk)("label",ln,(0,d.v_)(l.phoneError),1)]),(0,i.Lk)("div",rn,[(0,i.bo)((0,i.Lk)("textarea",{class:"app-form-control field",placeholder:"Type your message here",name:"message","onUpdate:modelValue":t[3]||(t[3]=e=>l.formData.message=e)},null,512),[[o.Jo,l.formData.message]]),(0,i.Lk)("label",sn,(0,d.v_)(l.messageError),1)]),cn],32)])),_:1})}const pn=r.Ay.div`
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
`;var un=pn,mn=n(8355),gn={components:{StyledContactForm:un},data(){return{formData:{name:"",email:"",phone:"",message:""},nameError:"",emailError:"",phoneError:"",messageError:""}},methods:{validateForm(){return this.nameError=this.formData.name?"":"Name is required",this.messageError=this.formData.message?"":"Message is required",!this.nameError&&!this.messageError},async submitForm(){this.validateForm()&&(console.log("Form submitted:",this.formData),mn.A.post("http://localhost:4000/api/messages",{data:this.formData},{headers:{"Content-Type":"application/json",accept:"application/json"}}).then((()=>{alert("sent")})).catch((e=>{})),this.formData={name:"",email:"",phone:"",message:""})}}};const fn=(0,$.A)(gn,[["render",dn]]);var hn=fn;const bn={className:"mapouter"},kn={className:"gmap_canvas"},xn=["src"];function vn(e,t,n,o,a,l){const r=(0,i.g2)("StyledContactMap");return(0,i.uX)(),(0,i.Wv)(r,null,{default:(0,i.k6)((()=>[(0,i.Lk)("div",bn,[(0,i.Lk)("div",kn,[(0,i.Lk)("iframe",{id:"gmap_canvas",src:`https://maps.google.com/maps?q=${a.lat},${a.lon}&t=&z=13&ie=UTF8&iwloc=&output=embed`,frameBorder:"0",scrolling:"no",marginHeight:"0",marginWidth:"0"},null,8,xn)])])])),_:1})}const yn=r.Ay.div`
    flex:1;
    min-width:min(100% , 700px);
    iframe{
      width:100%;
      height:500px;
    }
`;var Ln=yn,wn={data(){return{lat:30.397033,lon:-9.558904}},components:{StyledContactMap:Ln}};const Tn=(0,$.A)(wn,[["render",vn]]);var _n=Tn;const Sn={class:"contact-info"},An=(0,i.Lk)("h3",null,[(0,i.Lk)("i",{class:"fa fa-road","aria-hidden":"true"}),(0,i.eW)(" Address ")],-1),Cn=(0,i.Lk)("hr",null,null,-1),Fn=(0,i.Lk)("h3",null,[(0,i.Lk)("i",{class:"fa fa-phone","aria-hidden":"true"}),(0,i.eW)(" Phone ")],-1),In={class:"tel-box"},En={class:"tel"},zn=["href"],Pn=(0,i.Lk)("hr",null,null,-1),$n=(0,i.Lk)("h3",null,[(0,i.Lk)("i",{class:"fa fa-envelope","aria-hidden":"true"}),(0,i.eW)(" Mail ")],-1),Dn=["href"],Mn=(0,i.Lk)("hr",null,null,-1),jn=(0,i.Lk)("h3",null,[(0,i.Lk)("i",{class:"fa-brands fa-linkedin"}),(0,i.eW)(" LinkedIn ")],-1),Hn=["href"];function Wn(e,t,n,o,a,l){const r=(0,i.g2)("StyledContactInfos");return a.hero?((0,i.uX)(),(0,i.Wv)(r,{key:0,class:"contact-address"},{default:(0,i.k6)((()=>[(0,i.Lk)("div",Sn,[An,(0,i.Lk)("address",null,(0,d.v_)(a.hero.location),1),Cn,Fn,(0,i.Lk)("div",In,[(0,i.Lk)("span",En,[(0,i.Lk)("a",{href:`tel:${a.hero.contact.phone}`,class:"tel"},(0,d.v_)(a.hero.contact.phone),9,zn)])]),Pn,$n,(0,i.Lk)("a",{href:`mailto:${a.hero.contact.email}`},(0,d.v_)(a.hero.contact.email),9,Dn),Mn,jn,(0,i.Lk)("a",{href:a.hero.links.linkedin,target:"_blank"}," Abdeljalil-Abahbaz ",8,Hn)])])),_:1})):(0,i.Q3)("",!0)}const On=r.Ay.div`
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
`;var Xn=On,Nn={data(){return{hero:null}},watch:{"$store.getters.getHero.attributes":{handler(e){this.hero=e},immediate:!0}},components:{StyledContactInfos:Xn}};const qn=(0,$.A)(Nn,[["render",Wn]]);var Rn=qn,Yn={components:{StyledContact:Zt,PageHeading:$e,ContactForm:hn,ContactMap:_n,ContactInfos:Rn}};const Bn=(0,$.A)(Yn,[["render",Jt]]);var Gn=Bn;const Qn={key:0,class:"bloc",id:"services"},Un={class:"services_content"},Vn={class:"icon"},Jn={class:"title"};function Kn(e,t,n,o,a,l){const r=(0,i.g2)("PageHeading"),s=(0,i.g2)("StyledServices");return a.services?((0,i.uX)(),(0,i.CE)("div",Qn,[(0,i.bF)(s,null,{default:(0,i.k6)((()=>[(0,i.bF)(r,{title:"Services",subTitle:"Adapted services to meet your needs"}),(0,i.Lk)("div",Un,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(a.services,(e=>((0,i.uX)(),(0,i.CE)("div",{key:e.id,class:"service","data-animate":"fadeInUp","data-delay":"100"},[(0,i.Lk)("span",Vn,[(0,i.Lk)("i",{class:(0,d.C4)(e.attributes.icon),"aria-hidden":"true"},null,2)]),(0,i.Lk)("div",null,[(0,i.Lk)("h4",Jn,(0,d.v_)(e.attributes.title),1),(0,i.Lk)("p",null,(0,d.v_)(e.attributes.description)+".",1)])])))),128))])])),_:1})])):(0,i.Q3)("",!0)}const Zn=r.Ay.div`
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

`;var eo=Zn,to={name:"Services",data(){return{services:[]}},watch:{"$store.getters.getServices":{handler(e){this.services=e},immediate:!0}},components:{StyledServices:eo,AnimatedTitle:ee,PageHeading:$e}};const no=(0,$.A)(to,[["render",Kn]]);var oo=no;const io={class:"parallax-container"},ao={class:"parallax-content"},lo=["innerHTML"],ro=["innerHTML"],so=["src"];function co(e,t,n,o,a,l){return(0,i.uX)(),(0,i.CE)("div",io,[(0,i.Lk)("div",ao,[(0,i.Lk)("h1",{innerHTML:n.title},null,8,lo),(0,i.Lk)("p",{innerHTML:n.description},null,8,ro),n.image?((0,i.uX)(),(0,i.CE)("img",{key:0,src:n.image},null,8,so)):(0,i.Q3)("",!0)]),(0,i.Lk)("div",{class:"parallax",style:(0,d.Tr)(l.generateStyle(n.urlPhoto)),ref:"parallax"},null,4)])}var po={props:{urlPhoto:String,title:String,description:String,image:String},mounted(){window.addEventListener("scroll",this.parallaxEffect)},beforeUnmount(){window.removeEventListener("scroll",this.parallaxEffect)},methods:{parallaxEffect(){const e=window.scrollY,t=this.$refs.parallax;t&&(t.style.backgroundPositionY=50-.1*e+"%")},generateStyle(e){return{width:"100%",overflow:"hidden",background:`linear-gradient(rgba(241, 243, 206, 0.2), rgba(241, 243, 206, 1)), url(${e})`,backgroundAttachment:"fixed",backgroundPosition:"center",backgroundSize:"cover",position:"absolute",inset:"0 0 0 0",zIndex:"0",height:this.image?"calc(100% - 185px)":"100%"}}}};const uo=(0,$.A)(po,[["render",co],["__scopeId","data-v-487ba715"]]);var mo=uo,go=n.p+"img/bg_01.eb23011d.jpg",fo=n.p+"img/bg_02.53408bcd.jpg",ho=n.p+"img/bg_03.0cb91444.jpg",bo=n.p+"img/bg_04.b4ca9f7b.jpg",ko=n.p+"img/bg_05.0944394e.jpg",xo=n.p+"img/responsive.31c9f38b.png",vo=n.p+"img/client-meeting.ab5bb8a9.png",yo=n.p+"img/custom-service.2428c587.png",Lo=n.p+"img/topixel.f77e0fb6.png",wo=n.p+"img/idea-realization.5e37712a.webp",To={name:"App",data(){return{animateChartDone:!1,image1:go,image2:fo,image3:ho,image4:bo,image5:ko,responsive:xo,grpmeeting:vo,customizedExperience:yo,topixel:Lo,idearealize:wo}},mounted(){this.getContent()},methods:{async getContent(){try{await Promise.all([this.$store.dispatch("fetchData",{params:"technos?populate=*&sort=percent:asc",action:"skills"}),this.$store.dispatch("fetchData",{params:"hero?populate=*",action:"hero"}),this.$store.dispatch("fetchData",{params:"experiences?populate=*",action:"experiences"}),this.$store.dispatch("fetchData",{params:"formations?populate=*",action:"formations"}),this.$store.dispatch("fetchData",{params:"services?populate=*",action:"services"})])}catch(e){console.error("Error fetching about data:",e)}},animateChart(){var e=window.innerHeight;const t=document.querySelector(".skills_chart");t.querySelectorAll(".chart").forEach((t=>{const n=t.querySelector(".bg"),o=n.getBoundingClientRect(),i=o.top>=0&&o.bottom<=e;i&&(n.style.width=n.getAttribute("data-percent")+"%")}))}},components:{StyledApp:c,NavMenu:M,Home:be,About:Ye,Skills:_t,Experiences:Xt,Formations:Qt,Contact:Gn,ParalaxFrame:mo,Services:oo}};const _o=(0,$.A)(To,[["render",l]]);var So=_o,Ao=n(1387);const Co=[{path:"/",name:"home",component:be},{path:"/about",name:"about",component:Ye},{path:"/skills",name:"skills",component:_t}],Fo=(0,Ao.aE)({history:(0,Ao.LA)("/"),routes:Co,scrollBehavior(e,t,n){return e.hash?{el:e.hash,behavior:"smooth"}:{left:0,top:0,behavior:"smooth"}}});var Io=Fo,Eo=n(782),zo=(0,Eo.y$)({state:{hero:{},skills:[],experiences:[],formations:[],services:[]},mutations:{setData(e,t){e[t.action]=t.data}},actions:{async fetchData({commit:e},t){const{params:n,action:o}=t;try{const t=await mn.A.get(`http://localhost:4000/api/${n}`);e("setData",{data:t.data.data,action:o})}catch(i){throw console.error("Error fetching data:",i),i}}},getters:{getHero:e=>e.hero,getSkills:e=>e.skills,getExperiences:e=>e.experiences,getFormations:e=>e.formations,getServices:e=>e.services}}),Po=n(8950),$o=n(2353),Do=n(92),Mo=n(4996),jo=n(292);Po.Yv.add($o.X7I,Do.C91,Mo.Cvc);const Ho=(0,o.Ef)(So);Ho.component("font-awesome-icon",jo.gc),Ho.use(Io).use(zo).mount("#app")}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,i,a){if(!o){var l=1/0;for(d=0;d<e.length;d++){o=e[d][0],i=e[d][1],a=e[d][2];for(var r=!0,s=0;s<o.length;s++)(!1&a||l>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(r=!1,a<l&&(l=a));if(r){e.splice(d--,1);var c=i();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[o,i,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,a,l=o[0],r=o[1],s=o[2],c=0;if(l.some((function(t){return 0!==e[t]}))){for(i in r)n.o(r,i)&&(n.m[i]=r[i]);if(s)var d=s(n)}for(t&&t(o);c<l.length;c++)a=l[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(d)},o=self["webpackChunkfront"]=self["webpackChunkfront"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(8893)}));o=n.O(o)})();
//# sourceMappingURL=app.ee7398ef.js.map