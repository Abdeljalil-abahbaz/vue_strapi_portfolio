<template>
    <StyledChart class="chart_container" ref="chart">
        <h3 class="chart-title"><AnimatedTitle :title="title" /></h3>
        <div v-for="(item) in items" :key="item.id" class='chart'>
            <div>
                <div class="bg" :data-percent="item.percent || (item.attributes && item.attributes.percent)" :style="{width: '0%', backgroundColor : item.color || (item.attributes && item.attributes.color)}"></div>
                <h3>{{ item.title || (item.attributes && item.attributes.title) }}</h3>
            </div>
        </div>
    </StyledChart>
</template>
<script>
import StyledChart from './StyledComponents/StyledChart'
import AnimatedTitle from './AnimatedTitle.vue';
export default{
    props:{
        items:Array,
        title:String
    },
    methods:{
        
    },
    components:{
        AnimatedTitle,
        StyledChart
    }
}
</script>