<template>
  <div>
    <section class="hero is-medium is-primary is-bold">
      <div style="margin:5px;">
       <GmapMap
       :center="coordinates"
       :zoom="10.5"
       style="width:100%;height:300px;padding:3px;"
       > 
6
       </GmapMap> 
      </div>
    </section>
    <section class="box">
         <b-field label="¿Que es lo que quieres?">
            <b-autocomplete
                placeholder="Escriba que servicio quiere"
                :keep-first="false"
                :open-on-focus="true"
                :data="filteredDataObj"
                field="nombreServicio"
                @select="option => selected = option">
            </b-autocomplete> 
        </b-field>
    </section> 
  </div>
</template>

<script>
import data from '../../data_test/data.js';

export default {
  data() {
    return {
      info: JSON.parse(JSON.stringify(data)),
      selected:null,
      coordinates:{
        lat:10,
        lng:10
      }
  }
},
computed:{
filteredDataObj() {
  //var jsonResult = JSON.parse(JSON.stringify(this.data));
  var dataGeneral = this.info.data.servicios_global;
      //console.log(jsonResult.data.servicios_global);
         return dataGeneral.filter((option) => {
           console.log(option.nombreServicio);
                return option.nombreServicio
                    .toString()
                    .toLowerCase()
                    .indexOf(option.nombreServicio.toLowerCase()) >= 0
              console.log(this.selected);
            })

}

           
},
created(){
    this.$getLocation({}).then(coordinates=>{
      this.coordinates=coordinates;
      alert(this.coordinates.lng);
      alert(this.coordinates.lat);
    })
    .catch(error=> {console.log(error) });
    console.log(this.info);
  }

}
</script>
<style>
.box{
  margin:2px;
}
</style>