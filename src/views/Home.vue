<template>
  <div>
   <HeaderMain />
    <Map />
    <Cards/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderMain from '@/components/HeaderMain.vue'
import Map from '@/components/main/Map.vue'
import Cards from '@/components/main/Cards.vue'
export default {
  name: 'Home',
  components: {
    HeaderMain,
    Map,
    Cards
  }
}
</script>
