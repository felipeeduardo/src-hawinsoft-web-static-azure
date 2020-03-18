<template>
  <v-container grid-list-md>
    <h1 class="title font-weight-light">
      <v-icon class="mr-1">mail</v-icon>Mensagem
    </h1>
    <v-layout justify-center wrap>
      <v-flex xs12 class="mt-3">
        <v-expansion-panel class="elevation-0">
          <!--popout-->
          <v-expansion-panel-content v-for="(message, i) in messages" :key="i" hide-actions>
            <template v-slot:header>
              <v-layout align-center row spacer>
                <v-flex xs4 sm2 md1>
                  <v-avatar size="36px">
                    <v-icon :color="message.color" v-text="message.icon"></v-icon>
                  </v-avatar>
                </v-flex>

                <v-flex sm5 md3 hidden-xs-only>
                  <strong class="font-weight-light" v-html="message.name"></strong>
                </v-flex>

                <v-flex no-wrap xs5 sm3>
                  <strong v-html="message.title"></strong>
                </v-flex>

                <v-flex v-if="message.excerpt" class="grey--text" ellipsis hidden-sm-and-down>
                  &mdash;
                  {{ message.excerpt }}
                </v-flex>
              </v-layout>
            </template>

            <v-card>
              <v-divider></v-divider>
              <v-card-text v-text="lorem"></v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    messages: [
      {
        color: "primary",
        icon: "mail",
        name: "Team Hawinsoft",
        title: "Welcome Hawinsoft",
        excerpt: "Thank you for joining our community..."
      },
      {
        color: "primary",
        icon: "mail",
        name: "Team Hawinsoft",
        title: "Welcome Hawinsoft",
        excerpt: "Thank you for joining our community..."
      }
    ],
    lorem:
      "Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum."
  })
};
</script>

<style>
</style>
