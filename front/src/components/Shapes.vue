<template>
    <StyledShapes class="shapes">        
            <div v-for="(shape, index) in data" :key="index" >
                <div class="shape">
                    <div>
                        <span>
                            <i :class="shape.icon"></i>
                        </span>
                    </div>
                </div>
                <div class="text">
                <h1>{{ shape.title }}</h1>
                </div>
            </div>
    </StyledShapes>
</template>
<script>
import StyledShapes from '../components/StyledComponents/StyledShapes'
export default {
    props:{
        data : Array
    },
    components:{
        StyledShapes
    }
}
</script>