<template>
  <v-app>
    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script setup>
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

defineComponent({ HelloWorld })

</script>
