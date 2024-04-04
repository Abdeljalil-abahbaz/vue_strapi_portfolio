import styled from 'vue3-styled-components'
const StyledNav = styled.div`

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
`;
export default StyledNav