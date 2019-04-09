<template>
  <v-menu bottom left>
    <template v-slot:activator="{ on }">
      <v-btn dark icon v-on="on">
        <v-icon>person</v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-tile>
        <v-list-tile-title>
          <v-icon>person</v-icon>felipe.e.oliveira
        </v-list-tile-title>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-title>...</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>