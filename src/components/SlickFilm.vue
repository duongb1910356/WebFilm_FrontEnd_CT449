<template>
    <div> <h1 style="">rerry</h1>
        <VueSlickCarousel :arrows="true" :dots="true">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </VueSlickCarousel>
    </div>
</template>
   
<script>
import VueSlickCarousel from 'vue-slick-carousel'


export default {
    inheritAttrs: false,
    data(){
        return{
            arrows: true,
            dots: false,
        }
    },
    //   name: 'MyComponent',
    components: { VueSlickCarousel },
}
</script> 