<template>
  <div class="menubar">
    <div class="oneline"></div>
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav-collapse">
        <b-navbar-brand href="http://products.gcoos.org">
          <i class="fas fa-home"></i>&nbsp;
        </b-navbar-brand>
        <b-navbar-nav>
          <b-nav-item href="/river_discharge/">
            <i class="fas fa-map-marked-alt"></i>&nbsp;Map
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>&nbsp;
  </div>
</template>

<style>
.menubar {
  position: relative;
  margin-top: 105px;
  height: auto;
  width: 100%;
  z-index: 999;
}

.oneline {
  width: 100%;
  height: 2px;
  background-color: #da880e;
}
/* Navbar setting */
.navbar {
  padding: 1px 12px !important;
}
.nav-link {
  color: white !important;
}
.navbar-dark .navbar-nav .nav-link {
  color: rgba(255, 255, 255, 1) !important;
}
.bg-dark {
  background-color: #0d4060 !important;
}
</style>

