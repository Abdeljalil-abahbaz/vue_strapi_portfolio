<template>
    <div class="animated_shapes" ref="container">
      <!-- Your other content here -->
      <svg class="animation-container" viewBox="0 0 100 100">
        <template v-for="(shape, index) in shapes" v-if="shapes && shapes.length">
          <circle v-if="shape.type === 'circle'" :key="'circle_' + shape.id" :class="'shape shape' + (index + 1)" :cx="shape.cx" :cy="shape.cy" :r="shape.r"></circle>
          <rect v-else-if="shape.type === 'rect'" :key="'rect_' + shape.id" :class="'shape shape' + (index + 1)" :x="shape.x" :y="shape.y" :width="shape.width" :height="shape.height"></rect>
          <polygon v-else-if="shape.type === 'triangle'" :key="'triangle_' + shape.id" :class="'shape shape' + (index + 1)" :points="shape.points"></polygon>
          <polygon v-else-if="shape.type === 'star'" :key="'star_' + shape.id" :class="'shape shape' + (index + 1)" :points="shape.points"></polygon>
          <ellipse v-else-if="shape.type === 'ellipse'" :key="'ellipse_' + shape.id" :class="'shape shape' + (index + 1)" :cx="shape.cx" :cy="shape.cy" :rx="shape.rx" :ry="shape.ry"></ellipse>
          <path v-else-if="shape.type === 'path'" :key="'path_' + shape.id" :class="'shape shape' + (index + 1)" :d="shape.d"></path>
        </template>
      </svg>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        shapes: [
          { type: 'circle', cx: 10, cy: 10, r: 5, color: '#ff0000' },  // Red circle
          { type: 'rect', x: 20, y: 20, width: 10, height: 10, color: '#00ff00' },  // Green rectangle
          { type: 'triangle', points: '30,30 40,50 20,50', color: '#0000ff' }, // Blue triangle
          { type: 'star', points: '50,10 60,40 90,40 65,60 75,90 50,75 25,90 35,60 10,40 40,40', color: '#ffff00' }, // Yellow star
          { type: 'ellipse', cx: 60, cy: 20, rx: 8, ry: 5, color: '#ff00ff' }, // Magenta ellipse
          { type: 'path', d: 'M 70,10 Q 80,20 90,10 Q 100,20 110,10', color: '#00ffff' }, // Cyan path
          // Add more shapes as needed
        ],
        containerRect: null
      };
    },
    mounted() {
      this.containerRect = this.$refs.container.getBoundingClientRect();
      window.addEventListener('mousemove', this.updateShapesPosition);
    },
    beforeUnmount() {
      window.removeEventListener('mousemove', this.updateShapesPosition);
    },
    methods: {
      updateShapesPosition(event) {
        if (!this.containerRect) return;
        const mouseX = event.clientX - this.containerRect.left;
        const mouseY = event.clientY - this.containerRect.top;
        this.shapes.forEach(shape => {
          if (shape.type === 'circle' || shape.type === 'ellipse') {
            shape.cx = shape.cx + (mouseX - 50) / 10;
            shape.cy = shape.cy + (mouseY - 50) / 10;
          } else if (shape.type === 'rect' || shape.type === 'triangle' || shape.type === 'star' || shape.type === 'path') {
            shape.x = shape.x + (mouseX - 50) / 10;
            shape.y = shape.y + (mouseY - 50) / 10;
          }
        });
      }
    }
  };
  </script>
  
  <style>
  .animated_shapes {
    position: absolute;
    width: 100%;
  }
  
  .animation-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none; /* Allows clicks to pass through */
    z-index: 0; /* Places the shapes behind the content */
  }
  
  .shape {
    fill: transparent; /* Makes the shapes transparent */
    stroke-width: 2; /* Adjust the stroke width as needed */
  }
  
  /* Define colors for each shape */
  .shape1 { stroke: #ff0000; } /* Red color */
  .shape2 { stroke: #00ff00; } /* Green color */
  .shape3 { stroke: #0000ff; } /* Blue color */
  .shape4 { stroke: #ffff00; } /* Yellow color */
  .shape5 { stroke: #ff00ff; } /* Magenta color */
  .shape6 { stroke: #00ffff; } /* Cyan color */
  /* Add more shapes' styles here */
  </style>
  