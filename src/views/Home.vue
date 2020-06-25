<template>
  <div>
   <HeaderMain />
    <Map />
    <Cards/>
    <footer>
        <Footer />
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderMain from '@/components/HeaderMain.vue'
import Map from '@/components/main/Map.vue'
import Cards from '@/components/main/Cards.vue'
import Footer from '@/components/main/Footer.vue'
export default {
  name: 'Home',
  components: {
    HeaderMain,
    Map,
    Cards,
    Footer
  }
}
</script>
