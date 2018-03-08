<template>
  <div class="google-map" :id="mapName"></div>
</template>
<script>
import bus from '../eventBus.js'

export default {
  name: 'google-map',
  props: ['name'],
  data: function () {
    return {
      returnedAddress: "",
      mapName: this.name + "-map",
      markerCoordinates: [{
          latitude: 38.8977,
          longitude: -77.0365
        }],
      map: null,
      bounds: null,
      markers: [],
      address: this.$parent.seletedOfficial.address
    }
  },
  mounted () {
  

    const element = document.getElementById(this.mapName)
    const mapCentre = this.markerCoordinates[0]
    const options = {
      zoom: 10,
      center: new google.maps.LatLng(mapCentre.latitude, mapCentre.longitude)
    }
    this.map = new google.maps.Map(element, options);
    this.markerCoordinates.forEach((coord) => {
      const position = new google.maps.LatLng(coord.latitude, coord.longitude);
      const marker = new google.maps.Marker({
        position,
        map: this.map
      });
    this.markers.push(marker)
    });
    
  }
};

//     var geocoder = new google.maps.Geocoder();
//     var address = this.returnedAddress;
//
//     geocoder.geocode( { 'address': address}, function(results, status) {
//
//     if (status == google.maps.GeocoderStatus.OK) {
//         var lat = results[0].geometry.location.latitude;
//         var lng = results[0].geometry.location.longitude;
//         this.markerCoordinates[0].latitude = lat;
//         this.markerCoordinates[0].longitude = lng;
//         }
// });
  
</script>
<style scoped>
.google-map {
  height: 100%;
  width: 100%;
  margin: 5px;
  background: gray;
  padding: 5px;
}
</style>
