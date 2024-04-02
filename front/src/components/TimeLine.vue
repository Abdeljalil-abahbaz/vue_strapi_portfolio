<template>
    <StyledTimeLine>
        <div class="time_line_container">
          <span class="time_line"></span>
          <ul>
              <li v-for="item in items" :key="item.id">
                <div>
                    <h5>{{item.attributes.title}}</h5>
                    <em>{{item.attributes.company}}, {{item.attributes.location}} </em>
                    <mark>{{item.attributes.date_start}} - {{ item.attributes.date_end }}</mark><br />
                    <p>{{item.attributes.description}}</p>
                </div>
              </li>
          </ul>
        </div>
    </StyledTimeLine> 
</template>
<script>
import StyledTimeLine from '../components/StyledComponents/StyledTimeLine'
export default {
    
    props:{
        items : Array
    },
    components:{
        StyledTimeLine
    }
}
</script>