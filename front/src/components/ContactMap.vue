<template>
    <StyledContactMap>
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe id="gmap_canvas" :src="`https://maps.google.com/maps?q=${lat},${lon}&t=&z=13&ie=UTF8&iwloc=&output=embed`" frameBorder='0' scrolling='no' marginHeight='0' marginWidth='0'>
            </iframe>
          </div>
         </div>
    </StyledContactMap>
</template>
<script>
import StyledContactMap from '../components/StyledComponents/StyledContactMap'
export default {
    data(){
        return{
            lat :30.397033,
            lon :-9.558904
        }
    },
    components:{ 
        StyledContactMap
    }
}
</script>./StyledComponents/StyledContactMap