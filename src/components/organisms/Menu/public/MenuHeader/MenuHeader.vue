<template>
  <v-menu bottom left>
    <template v-slot:activator="{ on }">
      <v-btn dark icon v-on="on">
        <v-icon>person</v-icon>
      </v-btn>
    </template>
  </v-menu>
</template>