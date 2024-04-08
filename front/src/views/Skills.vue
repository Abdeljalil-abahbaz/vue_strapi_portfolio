<template>
    <div id="skills" class="bloc">
    <StyledSkills >
        <PageHeading title="Skills" subTitle="My skills at your service"/>
        <div class="skills_content">
            <div class='skills_chart'>
                <SkillsChart :items="skills" title="Development skills"/>
                <SkillsChart :items="languages" title="Top languages"/>
            </div>
            <div class="skills_para">
                <h3><AnimatedTitle title="Areas of expertise"/></h3>
                <h4><span>✓</span> WEB PROJECT MANAGEMENT</h4>
                    <p>Showcase, corporate, event, e-commerce, intranet, mobile application.</p>
                    <h4><span>✓</span> GRAPHIC DESIGN & WEB DESIGN</h4>
                    <p>Logos, Web templates, advertising brochures, business cards, newsletters...</p>
                    <h4><span>✓</span> SPECIFIC APPLICATIONS AND ADMINISTRATION INTERFACE</h4>
                  <p>  PHP - MYSQL - AJAX / ASP.NET - C# - SQL</p>
                    <h4><span>✓</span> IMPLEMENTATION / MODIFICATION / MANAGEMENT OF CMS</h4>
                    <p>Wordpress, Joomla, Prestashop, phpBB, IPBoard</p>
                        <h4><span>✓</span> (X)HTML / CSS INTEGRATION</h4>
                 <p>Hand coding respecting Web standards</p>
                    <h4><span>✓</span> PAGES DYNAMIZATION THROUGH JAVASCRIPT / AJAX</h4>
                   <p> jQuery, Prototype, Mootools, Scriptaculous</p>
                    <h4><span>✓</span> W3C VALIDATION, WAI & SEO NATURAL REFERENCING</h4>
                    <p>Accessibility & ergonomics of web pages</p>
                    <h4><span>✓</span> MULTI-PLATFORM DESIGN</h4>
                    <p>Compatible with all devices, tablets & mobile applications</p>
                
            </div>
        </div>
        
       
    </StyledSkills> 
    </div>
    
</template>
<script>
import StyledSkills from '../components/StyledComponents/StyledSkills'
import About from './About.vue';
import SkillsChart from '../components/SkillsChart.vue';
import PageHeading from '../components/pageHeading.vue'
import AnimatedTitle from '@/components/AnimatedTitle.vue';
export default {
    data(){
        return {
            skills:[],
            languages:[]
        }
    },
    watch:{
        '$store.getters.getSkills':{
            handler(newVal){
                this.skills = newVal
            },
            immediate : true
        },
        '$store.getters.getHero.attributes.language':{
            handler(newVal){
                this.languages = newVal||[]
            },
            immediate : true
        }
    },
    components:{
        StyledSkills,
        About,
        SkillsChart,
        PageHeading,
        AnimatedTitle
    }
}
</script>