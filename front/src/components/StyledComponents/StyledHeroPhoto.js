import styled from 'vue3-styled-components'
const StyleHeroImage = styled.div`
        
        transform: rotate(32deg);
        height: 100vh;
        position: relative;
        position:relative;
        
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
    
`;

export default StyleHeroImage