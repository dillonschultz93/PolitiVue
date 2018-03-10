<template>
  <div class="google-map" :id="mapName"></div>
</template>
<script>
import bus from "../eventBus.js";

export default {
  name: "google-map",
  props: ["name"],
  data: function() {
    return {
      returnedAddress: "",
      mapName: this.name + "-map",
      markerCoordinates: [
        {
          latitude: 38.8977,
          longitude: -77.0365
        }
      ],
      map: null,
      bounds: null,
      markers: [],
      address: this.$parent.seletedOfficial.address
    };
  },
  mounted() {
    bus.$on('seletedOfficial', (seletedOfficial) => {
      console.log(seletedOfficial.address)
      this.address = seletedOfficial.address
      this.updateMap()
    })
    const element = document.getElementById(this.mapName);
    const mapCentre = this.markerCoordinates[0];
    const options = {
      zoom: 10,
      center: new google.maps.LatLng(mapCentre.latitude, mapCentre.longitude)
    };
    this.map = new google.maps.Map(element, options);
    this.updateMap()
  },
  methods: {
    updateMap: function() {
      var geocoder = new google.maps.Geocoder();
      var address = this.address;
      console.log(address);
      geocoder.geocode({ address: address }, (results, status) => {
        if (status == "OK") {
          this.map.setCenter(results[0].geometry.location);
          var marker = new google.maps.Marker({
            map: this.map,
            position: results[0].geometry.location
          });
        } else {
          alert(
            "Geocode was not successful for the following reason: " + status
          );
        }
      });
    }
  },
};

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
