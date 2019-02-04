<template>
  <div>
    <GCOOSHeader/>
    <Header/>
    <nuxt/>
    <Footer/>
  </div>
</template>

<script>
import GCOOSHeader from "~/components/GCOOSHeader.vue";
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    GCOOSHeader,
    Header,
    Footer
  }
};
</script>
