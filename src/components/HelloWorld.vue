<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="logo"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4" cols="12">
        <h1 class="mb-3">
          Heartflow Material UI Components based on syle guidelines
        </h1>
      </v-col>
      <v-col cols="12" lg="6">
        <v-card class="fill-height" color="background-lighten-1">
          <v-card-title>Dropdowns</v-card-title>
          <v-card-text>
            <v-select :items="states" />
            <v-select :items="states" :disabled="true" v-model="disabledStateValue" />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" lg="6">
        <v-card class="fill-height" color="background-lighten-1">
          <v-card-title>Link & Button</v-card-title>
          <v-card-text>
            <v-container>
              <v-row class="text-left">
                <v-col cols="12"><a class="primary--text" href="#">link</a></v-col>
                <v-col cols="12">
                  <v-btn variant="text">Text Button</v-btn>
                  <v-btn variant="text" :disabled="true">Disabled Text Button</v-btn>
                </v-col>
                <v-col cols="12">
                  <v-btn class="mr-2">Button</v-btn>
                  <v-btn :disabled="true">Disabled Button</v-btn>
                </v-col>
                <v-col cols="12">
                  <v-btn class="mr-2" color="secondary">Secondary</v-btn>
                  <v-btn :disabled="true" color="success">Success</v-btn>
                </v-col>
                <v-col cols="12">
                  <v-btn class="mr-2" color="warning">Warning</v-btn>
                  <v-btn :disabled="true" color="error">Error</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import logo from '../assets/logo.svg'

const states = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois',
  'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
  'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
  'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
  'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah',
  'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
]

const disabledStateValue = states[6]

</script>
