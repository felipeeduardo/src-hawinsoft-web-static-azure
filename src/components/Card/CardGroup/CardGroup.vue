<template>
  <v-flex xs12>
    <v-card class="elevation-4">
      <v-card-title>
        <v-icon large left color="primary">folder</v-icon>
        <span class="title font-weight-light">Groups</span>
      </v-card-title>
      <v-card-text>
        <v-data-table :headers="headers" :items="desserts">
          <template v-slot:items="props">
            <td class="text-xs-left">{{ props.item.name }}</td>
            <td class="text-xs-left">{{ props.item.calories }}</td>
            <td class="text-xs-left" style="width:5%">
              <v-btn flat icon color="green" @click="goProcess(props.item.id)">
                <v-icon>input</v-icon>
              </v-btn>
            </td>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
import router from "@/router";
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
        },
        {
          text: "",
          sortable: false,
          align: "",
          value: ""
        }
      ],
      desserts: [
        {
          id: 1,
          name: "Frozen Yogurt",
          calories: 159
        },
        {
          id: 2,
          name: "Ice cream sandwich",
          calories: 237
        },
        {
          id: 3,
          name: "Eclair",
          calories: 262
        },
        {
          id: 4,
          name: "Cupcake",
          calories: 305
        },
        {
          id: 5,
          name: "Gingerbread",
          calories: 356
        },
        {
          id: 6,
          name: "Jelly bean",
          calories: 375
        },
        {
          id: 7,
          name: "Lollipop",
          calories: 392
        }
      ]
    };
  },
  methods: {
    goProcess: function(id) {
      router.push({ name: "Process", params: { Pid: id } });
    }
  }
};
</script>
