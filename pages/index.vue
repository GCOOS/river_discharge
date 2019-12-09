<template>
  <div class="canvas">
    <b-container>
      <h1 style="text-align:center;">River Discharge</h1>
      <b-row>
        <b-col>
          <h3>Records from 61 rivers that discharge into the Gulf of Mexico</h3>
          <ul>
            <li>
              <a
                data-mce-href="https://geo.gcoos.org/data/riverdischarge/gom_discharge_1900_present.nc"
                href="http://geo.gcoos.org/data/riverdischarge/gom_discharge_1900_present.nc"
                target="_blank"
                >&nbsp;NetCDF File</a
              >
            </li>
            <li>
              <a
                data-mce-href="https://geo.gcoos.org/data/riverdischarge/gomriver2.tar.Z"
                href="http://geo.gcoos.org/data/riverdischarge/gomriver2.tar.Z"
                target="_blank"
                >&nbsp;ASCII file</a
              >&nbsp;(tar.z)
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
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      var test_id = [
        [
          "01100mis",
          "pin_blu",
          31.0083,
          -91.6236,
          28.8853,
          -89.4456,
          "Mississippi R @ Tarbert Landing, MS",
          "Mississippi"
        ],
        [
          "03045atc",
          "pin_blu",
          30.9825,
          -91.7983,
          29.3989,
          -91.3655,
          "Atachafalya @ Simmesport, LA",
          "Atachafalya"
        ],
        [
          "02292010",
          "pin_blu",
          26.8333,
          -81.0889,
          26.4499,
          -81.9905,
          "Caloosahatchee Canal",
          "Caloosahatchee_Canal"
        ],
        [
          "02296750",
          "pin_blu",
          27.2206,
          -81.8764,
          26.7091,
          -82.2624,
          "Peace R @ Arcadia, FL",
          "Peace"
        ],
        [
          "02298880",
          "pin_blu",
          27.1853,
          -82.3558,
          26.7091,
          -82.2624,
          "Myakka R NR Laurel, FL",
          "Myakka"
        ],
        [
          "02310525",
          "pin_blu",
          28.5186,
          -82.5825,
          28.535,
          -82.6546,
          "Weeki Wachee R NR Brooksville, FL",
          "Weeki_Wachee"
        ],
        [
          "02310747",
          "pin_blu",
          28.9064,
          -82.6239,
          28.9199,
          -82.714,
          "Crystal R @ Bagley Cove, FL",
          "Crystal"
        ],
        [
          "02313100",
          "pin_blu",
          29.0492,
          -82.4478,
          28.9825,
          -82.775,
          "Rainbow R @ Dunnellon, FL",
          "Rainbow"
        ],
        [
          "02320500",
          "pin_blu",
          29.9556,
          -82.9278,
          29.2774,
          -83.1818,
          "Suwanne R @ Branford, FL",
          "Suwanne_Branford"
        ],
        [
          "02324000",
          "pin_blu",
          29.7864,
          -83.3217,
          29.666,
          -83.4164,
          "Steinhatchee R NR Cross City, FL",
          "Steinhatchee"
        ],
        [
          "02324400",
          "pin_blu",
          30.0981,
          -83.4719,
          29.9699,
          -83.788,
          "Fenholloway R NR Foley, FL",
          "Fenholloway_Foley"
        ],
        [
          "02325000",
          "pin_blu",
          30.0711,
          -83.6625,
          29.9699,
          -83.788,
          "Fenholloway R NR Perry, FL",
          "Fenholloway_Perry"
        ],
        [
          "02326000",
          "pin_blu",
          30.1706,
          -83.8239,
          30.0357,
          -83.929,
          "Econfina R NR Perry, FL",
          "Econfina"
        ],
        [
          "02330000",
          "pin_blu",
          30.3831,
          -84.655,
          29.9603,
          -84.3383,
          "Ochlockonee R NR Bloxham, FL",
          "Ochlockonee_Bloxham"
        ],
        [
          "02330150",
          "pin_blu",
          30.1764,
          -84.6681,
          29.9603,
          -84.3383,
          "Ochlockonee R NR Smith Creek",
          "Ochlockonee_Smith_Creek"
        ],
        [
          "02359000",
          "pin_blu",
          30.5339,
          -85.1653,
          29.5403,
          -84.9721,
          "Chipola R NR Altha, FL",
          "Chipola"
        ],
        [
          "02359170",
          "pin_blu",
          29.9492,
          -85.0156,
          29.729,
          -84.96,
          "Apalachicola R NR Sumatra, FL",
          "Apalachicola_Sumatra"
        ],
        [
          "02366500",
          "pin_blu",
          30.4508,
          -85.8983,
          30.3519,
          -86.5167,
          "Choctawhatchee R NR Bruce, FL",
          "Choctawhatchee_Bruce"
        ],
        [
          "02368000",
          "pin_blu",
          30.7528,
          -86.6292,
          30.3084,
          -87.3076,
          "Yellow R @ Milligan, FL",
          "Yellow_Milligan"
        ],
        [
          "02369000",
          "pin_blu",
          30.6972,
          -86.5708,
          30.3084,
          -87.3076,
          "Shoal R NR Crestview, FL",
          "Shoal"
        ],
        [
          "02369600",
          "pin_red",
          30.5694,
          -86.9236,
          30.3084,
          -87.3076,
          "Yellow R NR Milton, FL",
          "Yellow_Milton"
        ],
        [
          "02370000",
          "pin_blu",
          30.8333,
          -86.7347,
          30.3084,
          -87.3076,
          "Blackwater R NR Baker, FL",
          "Blackwater"
        ],
        [
          "02375500",
          "pin_blu",
          30.965,
          -87.2342,
          30.3084,
          -87.3076,
          "Escambia R NR Century, FL",
          "Escambia_Century"
        ],
        [
          "02376033",
          "pin_blu",
          30.6681,
          -87.2667,
          30.3084,
          -87.3076,
          "Escambia R NR Molino, FL",
          "Escambia_Molino"
        ],
        [
          "02376500",
          "pin_blu",
          30.6903,
          -87.4403,
          30.2529,
          -87.5541,
          "Perdido R @ Barrineau Park, FL",
          "Perdido"
        ],
        [
          "02428400",
          "pin_blu",
          31.6114,
          -87.5531,
          30.2074,
          -88.0606,
          "Alabama R NR Monroeville, AL",
          "Alabama"
        ],
        [
          "02469761",
          "pin_blu",
          31.7583,
          -88.1292,
          30.2074,
          -88.0606,
          "Tombigbee R NR Coffeeville, AL",
          "Tombigbee"
        ],
        [
          "02479000",
          "pin_blu",
          30.9789,
          -88.7269,
          30.3607,
          -88.605,
          "Pascagoula R @ Merril, MS",
          "Pascagoul_Merril"
        ],
        [
          "02479160",
          "pin_red",
          30.8533,
          -88.9136,
          30.3607,
          -88.605,
          "Black Creek R NR Wiggins, MS",
          "Black_Creek_Wiggins"
        ],
        [
          "02479300",
          "pin_blu",
          30.7361,
          -88.7811,
          30.3607,
          -88.605,
          "Red Creek R @ Vestry, MS",
          "Red_Creek"
        ],
        [
          "02479310",
          "pin_red",
          30.6103,
          -88.6406,
          30.3607,
          -88.605,
          "Pascagoula R @ Graham Ferry, MS",
          "Pascagoula_Graham"
        ],
        [
          "02481510",
          "pin_blu",
          30.4861,
          -89.2744,
          30.2819,
          -89.3123,
          "Wolf R NR Landon, MS",
          "Wolf"
        ],
        [
          "02489500",
          "pin_blu",
          30.7931,
          -89.8208,
          30.1743,
          -89.5246,
          "Pearl R NR Bogalusa, LA",
          "Pearl"
        ],
        [
          "02492000",
          "pin_blu",
          30.6292,
          -89.8972,
          30.1743,
          -89.5246,
          "Bogue Chitto R NR Bush, LA",
          "Bogue_Chitto"
        ],
        [
          "07375500",
          "pin_blu",
          30.5064,
          -90.3617,
          30.1413,
          -89.6126,
          "Tangipahoa R @ Robert, LA",
          "Tangipahoa"
        ],
        [
          "07378500",
          "pin_blu",
          30.4639,
          -90.9903,
          30.1413,
          -89.6126,
          "Amite R NR Denham Springs, LA",
          "Amite"
        ],
        [
          "07385500",
          "pin_red",
          30.3972,
          -91.9306,
          29.427,
          -91.4845,
          "Bayou Teche R @ Arnaudville, LA",
          "Bayou_Teche"
        ],
        [
          "07386980",
          "pin_blu",
          29.9511,
          -92.1561,
          29.7378,
          -92.1125,
          "Vermillion R @ Perry, LA",
          "Vermillion_River"
        ],
        [
          "08012000",
          "pin_blu",
          30.4806,
          -92.6318,
          29.7213,
          -93.0113,
          "Bayou Nezpique NR Basile, LA",
          "Bayou_Nezpique"
        ],
        [
          "08015500",
          "pin_blu",
          30.5028,
          -92.9153,
          29.7446,
          -93.3429,
          "Calcasieu R NR Kinder, LA",
          "Calcasieu"
        ],
        [
          "08030500",
          "pin_blu",
          30.3036,
          -93.7436,
          29.6109,
          -93.8272,
          "Sabine R NR Ruliff, TX",
          "Sabine"
        ],
        [
          "08041000",
          "pin_blu",
          30.3556,
          -94.0931,
          29.6109,
          -93.8272,
          "Neches R @ Evadale, TX",
          "Neches"
        ],
        [
          "08041500",
          "pin_blu",
          30.3978,
          -94.2633,
          29.6109,
          -93.8272,
          "Village Creek NR Kountze , TX",
          "Village_Creek"
        ],
        [
          "08066500",
          "pin_blu",
          30.425,
          -94.8506,
          29.346,
          -94.7131,
          "Trinity R @ Romayor, TX",
          "Trinity"
        ],
        [
          "08068090",
          "pin_blu",
          30.0858,
          -95.2997,
          30.438,
          -95.0,
          "San Jacinto R NR Porter, TX",
          "San_Jacinto_Porter"
        ],
        [
          "08075000",
          "pin_blu",
          29.6969,
          -95.4119,
          29.346,
          -94.7131,
          "Brays Bayou @ Houston, TX",
          "Brays_Bayou"
        ],
        [
          "08116650",
          "pin_blu",
          29.3494,
          -95.5822,
          28.8739,
          -95.3791,
          "Brazos R NR Rosharon, TX",
          "Brazos"
        ],
        [
          "08117500",
          "pin_blu",
          29.3133,
          -95.8936,
          28.8439,
          -95.468,
          "San Bernard R NR Boling, TX",
          "San_Bernard"
        ],
        [
          "08162500",
          "pin_blu",
          28.9739,
          -96.0122,
          28.4125,
          -96.3176,
          "Colorado R NR Bay City, TX",
          "Colorado"
        ],
        [
          "08164000",
          "pin_blu",
          28.9597,
          -96.6861,
          28.4125,
          -96.3176,
          "Lavaca R NR Edna, TX",
          "Lavaca"
        ],
        [
          "08176500",
          "pin_blu",
          28.7928,
          -97.0128,
          28.4125,
          -96.3176,
          "Guadalupe R @ Victoria, TX",
          "Guadalupe"
        ],
        [
          "08188500",
          "pin_blu",
          28.6494,
          -97.3844,
          27.8203,
          -97.0211,
          "San Antonio R @ Goliad, TX",
          "San_Antonio"
        ],
        [
          "08189500",
          "pin_blu",
          28.2917,
          -97.2789,
          27.8203,
          -97.0211,
          "Mission R @ Refugio, TX",
          "Mission"
        ],
        [
          "08189700",
          "pin_blu",
          28.2822,
          -97.6206,
          27.8203,
          -97.0211,
          "Aransas R NR Skidmore, TX",
          "Aransas"
        ],
        [
          "08211000",
          "pin_blu",
          28.0381,
          -97.86,
          27.8203,
          -97.0211,
          "Nueces R NR Mathis, TX",
          "Nueces"
        ],
        [
          "02358000",
          "pin_blu",
          30.7008,
          -84.8592,
          29.729,
          -84.96,
          "Apalachicola R @ Chattahoochee, FL",
          "Apalachicola_Chattahoo"
        ],
        [
          "02365500",
          "pin_blu",
          30.7756,
          -85.8278,
          30.3519,
          -86.5167,
          "Choctawhatchee R @ Caryville, FL",
          "Choctawhatchee_Caryvil"
        ],
        [
          "08068000",
          "pin_blu",
          30.2444,
          -95.4569,
          30.438,
          -95.0,
          "San Jacinto NR Conroe, TX",
          "San_Jacinto_Conroe"
        ],
        [
          "02319500",
          "pin_blu",
          30.4011,
          -83.1719,
          29.2774,
          -83.1818,
          "Suwanne @ Ellaville, FL",
          "Suwanne_Ellaville"
        ],
        [
          "02479130",
          "pin_red",
          31.0519,
          -89.2042,
          30.3607,
          -88.605,
          "Black Creek NR Brooklyn, MS",
          "Black_Creek_Brooklyn"
        ],
        [
          "252230081021300",
          "pin_blu",
          25.3749,
          -81.0367,
          25.3533,
          -81.1173,
          "Shark River @ Monroe County, FL",
          "Shark"
        ]
      ];
      //console.log(test_id);
      var marker = [];
      var marker_mouth = [];
      var i, map;
      var pin_blu;
      var pin_red;
      var pin_grn;

      function startMap() {
        var clatlng = new google.maps.LatLng(28.1, -88.5);
        var mapOptions = {
          center: clatlng,
          zoom: 6,
          zoomControl: true,
          scaleControl: false,
          streetViewControl: false,
          //mapTypeId: google.maps.MapTypeId.HYBRID
          mapTypeId: google.maps.MapTypeId.TERRAIN
        };
        map = new google.maps.Map(
          document.getElementById("gommap"),
          mapOptions
        );
        setMarkers(test_id);

        var onChangeHandler = function() {
          var cId = document.getElementById("rivermenu").value;
          marker[cId].setAnimation(google.maps.Animation.BOUNCE); //** set up the marker animation as the highlighter **//
          marker_mouth[cId].setAnimation(google.maps.Animation.BOUNCE); //** set up the marker animation as the highlighter **//
          map.panTo(marker[cId].getPosition()); //** used selected marker location as the map center.**//
          map.setZoom(8); //** zoom in from level 6 to level 8 **//
          google.maps.event.addListener(marker[cId], "mouseover", function() {
            map.info_clik.close(), marker[cId].setAnimation(null); //** remove the marker animation **//
            marker_mouth[cId].setAnimation(null); //** remove the marker animation **//
          });
        }; //** end of the function of var onChangeHandler **//
        document
          .getElementById("rivermenu")
          .addEventListener("change", onChangeHandler); //** dropdown info to : onChangeHandler**//
      }

      function setMarkers(test_id) {
        pin_blu = new google.maps.MarkerImage("img/blue.png");
        pin_red = new google.maps.MarkerImage("img/red.png");
        pin_grn = new google.maps.MarkerImage("img/green.png");

        for (i = 0; i < test_id.length; i++) {
          var site_id = test_id[i][0];
          var pin = test_id[i][1];
          var gauge_lat = test_id[i][2];
          var gauge_lon = test_id[i][3];
          var mouth_lat = test_id[i][4];
          var mouth_lon = test_id[i][5];
          var rivername = test_id[i][6];
          var spl_usage = test_id[i][7];

          //** Give the river mouth a green pin **//
          var latlng = new google.maps.LatLng(mouth_lat, mouth_lon);
          marker_mouth[i] = new google.maps.Marker({
            map: map,
            icon: pin_grn,
            position: latlng
          });
          marker_mouth[i].over =
            '<div id="Rmouth_over">' +
            "<p><b> river mouth : </b> (" +
            rivername +
            ") </p>" +
            "</div>";

          //** set up the station on blue **//
          //** if the station info is not updating, then red  **//
          var latlng = new google.maps.LatLng(gauge_lat, gauge_lon);
          marker[i] = new google.maps.Marker({
            map: map,
            title: site_id,
            icon: eval(pin),
            position: latlng
          });
          marker[i].clik =
            '<div id="content">' +
            '<div id="siteNotice">' +
            "<p><b> Site id : </b>" +
            '<a href="https://geo.gcoos.org/data/riverdischarge/ascii/' +
            spl_usage +
            '" target="black">' +
            site_id +
            "</a> (" +
            rivername +
            ")</p>" +
            "<p><b> Gage location : </b>" +
            gauge_lat +
            "N, " +
            gauge_lon +
            "E</p>" +
            "<p><b> Mouth location : </b>" +
            mouth_lat +
            "N, " +
            mouth_lon +
            "E</p>" +
            '<a href="https://geo.gcoos.org/data/riverdischarge/png/' +
            spl_usage +
            '.png" target=_blank>' +
            '<img src="https://geo.gcoos.org/data/riverdischarge/png/' +
            spl_usage +
            '.png" WIDTH=60% HEIGHT=60% ALIGN=texttop></a>';
          "</div>" + "</div>";
          marker[i].over =
            '<div id="content">' +
            '<div id="siteNotice">' +
            "<p><b> Site id (river name): </b>" +
            site_id +
            " (" +
            rivername +
            ") </p>" +
            "</div>" +
            "</div>";

          map.info_clik = new google.maps.InfoWindow();
          map.info_over = new google.maps.InfoWindow({
            maxWidth: 250
          });

          google.maps.event.addListener(marker[i], "click", function() {
            map.info_over.close(),
              map.info_clik.setContent(this.clik),
              map.info_clik.open(map, this);
          });
          google.maps.event.addListener(marker[i], "mouseover", function() {
            map.info_clik.close(),
              map.info_over.setContent(this.over),
              map.info_over.open(map, this);
            //marker[i].setAnimation(google.maps.Animation.BOUNCE);	//** set up the marker animation as the highlighter **//
            //marker_mouth[i].setAnimation(google.maps.Animation.BOUNCE);	//** set up the marker animation as the highlighter **//
          });
          google.maps.event.addListener(marker[i], "mouseout", function() {
            map.info_over.close();
            //marker[i].setAnimation(null);	//** set up the marker animation as the highlighter **//
            //marker_mouth[i].setAnimation(null);	//** set up the marker animation as the highlighter **//
          });
          google.maps.event.addListener(
            marker_mouth[i],
            "mouseover",
            function() {
              map.info_clik.close(),
                map.info_over.setContent(this.over),
                map.info_over.open(map, this);
              //marker[i].setAnimation(google.maps.Animation.BOUNCE);	//** set up the marker animation as the highlighter **//
            }
          );
          google.maps.event.addListener(
            marker_mouth[i],
            "mouseout",
            function() {
              map.info_over.close();
              //marker[i].setAnimation(null);	//** set up the marker animation as the highlighter **//
            }
          );
        }
      }

      startMap();
    }
  }
};
</script>

<style scoped>
.canvas {
  font-size: 16px;
}
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
