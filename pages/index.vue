<template>
  <div>
    <b-container>
      <h1 style="text-align:center;">River Discharge</h1>
      <br>
      <b-row>
        <b-col>
          <h3>Records from 61 rivers that discharge into the Gulf of Mexico</h3>
          <ul>
            <li>
              <a
                data-mce-href="https://geo.gcoos.org/data/riverdischarge/gom_discharge_1900_present.nc"
                href="http://geo.gcoos.org/data/riverdischarge/gom_discharge_1900_present.nc"
                target="_blank"
              >&nbsp;NetCDF File</a>
            </li>
            <li>
              <a
                data-mce-href="https://geo.gcoos.org/data/riverdischarge/gomriver2.tar.Z"
                href="http://geo.gcoos.org/data/riverdischarge/gomriver2.tar.Z"
                target="_blank"
              >&nbsp;ASCII file</a>&nbsp;(tar.z)
            </li>
          </ul>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div id="gommap" style="width:100%; height:650px;">
            <div
              class="gm-style"
              style="position: absolute; left: 0px; top: 0px; overflow: hidden; width: 100%; height: 100%; z-index: 10;"
            ></div>
          </div>
          <div id="floating-panel">
            <b>River Menu</b>
            <select id="rivermenu" onchange="rivermenu">
              <option value="25">Alabama R NR Monroeville, AL</option>
              <option value="35">Amite R NR Denham Springs, LA</option>
              <option value="55">Apalachicola R @ Chattahoochee, FL</option>
              <option value="16">Apalachicola R NR Sumatra, FL</option>
              <option value="53">Aransas R NR Skidmore, TX</option>
              <option value="1">Atachafalya @ Simmesport, LA</option>
              <option value="36">Bayou Teche R @ Arnaudville, LA</option>
              <option value="38">Bayou Nezpique NR Basile, LA</option>
              <option value="59">Black Creek NR Brooklyn, MS</option>
              <option value="28">Black Creek R NR Wiggins, MS</option>
              <option value="21">Blackwater R NR Baker, FL</option>
              <option value="33">Bogue Chitto R NR Bush, LA</option>
              <option value="45">Brays Bayou @ Houston, TX</option>
              <option value="46">Brazos R NR Rosharon, TX</option>
              <option value="39">Calcasieu R NR Kinder, LA</option>
              <option value="2">Caloosahatchee Canal</option>
              <option value="15">Chipola R NR Altha, FL</option>
              <option value="17">Choctawhatchee R NR Bruce, FL</option>
              <option value="56">Choctawhatchee R @ Caryville, FL</option>
              <option value="48">Colorado R NR Bay City, TX</option>
              <option value="6">Crystal R @ Bagley Cove, FL</option>
              <option value="12">Econfina R NR Perry, FL</option>
              <option value="22">Escambia R NR Century, FL</option>
              <option value="23">Escambia R NR Molino, FL</option>
              <option value="10">Fenholloway R NR Foley, FL</option>
              <option value="11">Fenholloway R NR Perry, FL</option>
              <option value="50">Guadalupe R @ Victoria, TX</option>
              <option value="49">Lavaca R NR Edna, TX</option>
              <option value="52">Mission R @ Refugio, TX</option>
              <option value="0">Mississippi @ Tarbert Landing, MS</option>
              <option value="4">Myakka R NR Laurel, FL</option>
              <option value="41">Neches R @ Evadale, TX</option>
              <option value="54">Nueces R NR Mathis, TX</option>
              <option value="13">Ochlockonee R NR Bloxham, FL</option>
              <option value="14">Ochlockonee R NR Smith Creek</option>
              <option value="30">Pascagoula R @ Graham Ferry, MS</option>
              <option value="27">Pascagoula R @ Merril, MS</option>
              <option value="3">Peace R @ Arcadia, FL</option>
              <option value="32">Pearl R NR Bogalusa, LA</option>
              <option value="24">Perdido R @ Barrineau Park, FL</option>
              <option value="7">Rainbow R @ Dunnellon, FL</option>
              <option value="29">Red Creek R @ Vestry, MS</option>
              <option value="40">Sabine R NR Ruliff, TX</option>
              <option value="51">San Antonio R @ Goliad, TX</option>
              <option value="47">San Bernard R NR Boling, TX</option>
              <option value="57">San Jacinto NR Conroe, TX</option>
              <option value="44">San Jacinto R NR Porter, TX</option>
              <option value="60">Shark River @ Monroe County, FL</option>
              <option value="19">Shoal R NR Crestview, FL</option>
              <option value="9">Steinhatchee R NR Cross City, FL</option>
              <option value="8">Suwanne R @ Branford, FL</option>
              <option value="58">Suwanne @ Ellaville, FL</option>
              <option value="34">Tangipahoa R @ Robert, LA</option>
              <option value="26">Tombigbee R NR Coffeeville, AL</option>
              <option value="43">Trinity R @ Romayor, TX</option>
              <option value="37">Vermillion R @ Perry, LA</option>
              <option value="42">Village Creek NR Kountze , TX</option>
              <option value="5">Weeki Wachee R NR Brooksville, FL</option>
              <option value="31">Wolf R NR Landon, MS</option>
              <option value="18">Yellow R @ Milligan, FL</option>
              <option value="20">Yellow R NR Milton, FL</option>
            </select>
          </div>
        </b-col>
      </b-row>
    </b-container>
    
    <script
      async
      defer
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAT-25-xVEY8DczyQ3Uvk81e0DpXO6fCOY&callback=initMap&region=GB"
      type="text/javascript"
    ></script>
    <script type="text/javascript" src="js/google_riverdischarge.js"></script>
  </div>
</template>

<script>
export default {
mounted() {
    initMap();
  }
}
</script>

<style scoped>
.centered span {
  display: none;
}
.centered:after {
  content: "River Discharge";
}
#map_canvas {
  min-height: 600px;
  height: 600px;
  width: 100%;
}
#floating-panel {
  position: absolute;
  top: 11px;
  left: 42%;
  z-index: 15;
  background-color: #fff;
  text-align: center;
  font-family: "Roboto", "sans-serif";
  line-height: 25px;
  padding-left: 10px;
  padding-right: 10px;
}
.gm-style-iw * {
  width: 100%;
}
.gm-style .gm-style-iw {
  max-width: 350px !important;
}
.gm-style-iw h4,
.gm-style-iw p {
  margin: 0;
  padding: 0;
}
</style>
