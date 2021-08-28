<template>
  <div>
    <div class="ma-8">
      <CCard/>
    </div>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue';
import CCard from '../components/CCard.vue';

export default {
  name: 'Home',
  
  components: {
    HelloWorld,
    CCard,
  },
};
</script>
