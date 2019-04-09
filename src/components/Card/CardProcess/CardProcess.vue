<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex>
        <v-card class="elevation-4">
          <v-card-title>
            <v-icon large left>folder</v-icon>
            <span class="title font-weight-light">Process</span>
          </v-card-title>
          <v-card-text>
            <v-data-table :headers="headers" :items="desserts">
              <template v-slot:items="props">
                <td class="text-xs-left">{{ props.item.name }}</td>
                <td class="text-xs-left">{{ props.item.calories }}</td>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Names",
          align: "left",
          sortable: true,
          value: "name"
        },
        {
          text: "Date",
          align: "left",
          value: "calories"
        }
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159
        },
        {
          name: "Ice cream sandwich",
          calories: 237
        },
        {
          name: "Eclair",
          calories: 262
        },
        {
          name: "Cupcake",
          calories: 305
        },
        {
          name: "Gingerbread",
          calories: 356
        },
        {
          name: "Jelly bean",
          calories: 375
        },
        {
          name: "Lollipop",
          calories: 392
        }
      ]
    };
  }
};
</script>
