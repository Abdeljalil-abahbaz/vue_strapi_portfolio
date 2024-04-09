import styled from 'vue3-styled-components'
const StyleHeroImage = styled.div`
        
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
    
`;

export default StyleHeroImage