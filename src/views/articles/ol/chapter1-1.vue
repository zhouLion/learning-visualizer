<template>
  <section>
    <h2>最简单地图</h2>
    <div style="width: 100%; height: 50vh;" ref="map"></div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import Tile from 'ol/layer/Tile';
import { fromLonLat } from 'ol/proj';

export default Vue.extend({
  mounted() {
    const map = new Map({
      target: this.$refs.map as HTMLElement,
      layers: [
        new Tile({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([112.41, 20.82]),
        zoom: 7,
      }),
    });
  },
});
</script>
