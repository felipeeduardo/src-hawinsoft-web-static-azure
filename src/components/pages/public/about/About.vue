<template>
  <v-container grid-list-md>
    <v-layout wrap class="py-1 px-2">
      <v-flex xs12 class="mt-2">
        <h2 class="headline font-weight-light mb-2 primary--text">
          Sobre o projeto
        </h2>
        <h3 class="font-weight-light">
          O projeto Hawinsoft originou-se com a necessidade de automatizar
          processos e rotinas de call centers, tais processos como inclusão de
          vendas em uma intranet, buscar informações em sites públicos criação
          de backlog e mailing no para call centers ativos.
        </h3>
        <h3 class="font-weight-light">
          A ideia de criar um projeto que atendesse a necessidade surgiu em
          meados de 2016, no decorrer de todo esse período foram criadas várias
          versões, várias tentativas de ter uma infraestrutura de baixo custo,
          onde poderiam ser executados web scraping remotamente e gerenciados
          por uma página web.<br />
          Este nível de maturidade foi alcançado depois de várias madrugadas de
          estudos decidindo também que linguagem de progração mais atenderia o
          caso, este esforço rendeu a publicação de uma versão inicial em
          Dezembro de 2020.
        </h3>
        <h2 class="headline font-weight-light mt-3 primary--text">
          Visão alto nível
        </h2>
        <v-flex class="mt-4">
          <v-img
            :src="require('@/assets/img/hawinsoft-arquitetura.png')"
            contain
            max-height="300"
          ></v-img>
        </v-flex>
        <h2 class="headline font-weight-light mt-3 mb-2 primary--text">
          Criação do bot
        </h2>
        <h3 class="font-weight-light">
          Os bots são criados com base na SDK do Chrome(Chromium) onde seu
          funcionamento é 100% remoto, em containers na cloud Azure.<br />
          A criação é feita através do criador de bots do projeto, seguindo 3
          etapas:<br />
        </h3>
        <v-layout row wrap class="mt-3 mb-3">
          <v-flex d-flex xs3 text-xs-center class="pa-1">
            <v-img
              :src="require('@/assets/img/hawinsoft-chromium-logo.png')"
              contain
              max-height="150"
            ></v-img>
          </v-flex>
          <v-flex d-flex xs9 class="pa-1">
            <h3 class="font-weight-light">
              <b>Definição</b>: Definição de nome e inclusão de url base<br />
              <b>Construção</b>: Inclusão de passo a passo(o que o bot precisa
              fazer, como dados de entrada, clicks, obtenção de textos e
              outros).<br />
              <b>Finalização</b>: Revisão do passo a passo incluso para
              execução.<br />
            </h3>
          </v-flex>
        </v-layout>
        <h3 class="font-weight-light">
          Observações: A inclusão do passo a passo é feita por meio de DevTools
          do Chrome. <br />
          Por exemplo:
        </h3>
        <v-layout row wrap class="mt-3 mb-3">
          <v-flex d-flex xs12 sm4 md4 text-xs-center class="pa-1">
            <v-img
              :src="require('@/assets/img/hawinsoft-create-bot-step1.png')"
              contain
              max-height="250"
            ></v-img>
          </v-flex>
          <v-flex d-flex xs12 sm4 md4 text-xs-center class="pa-1">
            <v-img
              :src="require('@/assets/img/hawinsoft-create-bot-step2.png')"
              contain
              max-height="250"
            ></v-img>
          </v-flex>
          <v-flex d-flex xs12 sm4 md4 class="pa-1">
            <h3 class="font-weight-light">
              Por fim, terá um texto semelhante:<br />
              <b
                >#app > div.application--wrap > main > div > div.container >
                div.layout.justify-center.wrap > div:nth-child(2) > div >
                div.v-card__text > form >
                div.v-input.v-text-field.v-input--has-state.theme--light.error--text
                > div.v-input__control > div.v-input__slot > div >
                input[type=text]</b
              >
            </h3>
          </v-flex>
        </v-layout>
        <h3 class="font-weight-light">
          Este resultado é incluso no campo <b>Selector</b> em seguida informe o
          evento que precisa ser feito, input(inserção de dados), clicks,
          getText(extração de texto).
        </h3>
        <h2 class="headline font-weight-light mt-3 mb-2 primary--text">
          Monitoramento
        </h2>
        <h3 class="font-weight-light">
          O projeto Hawinsoft conta com a exposição de métricas, para analises
          de sucesso, falha e tempo médio de execução do bot
        </h3>
        <h2 class="headline font-weight-light mt-3 mb-2 primary--text">
          Custo
        </h2>
        <h3 class="font-weight-light">
          A monetização do projeto é feita por meio pré-pago, onde o usuário
          efetua seu cadastro na plataforma, cria seu bot, e só é tarifado pelo
          seu uso.<br />
          O custo é de <b>R$ 0.35/seg</b> (trinta e cinco centavos por segundo
          de processamento).<br />
          O Processo de pagamento é feita através do pagseguro.
          <v-img
            :src="require('@/assets/img/hawinsoft-pagseguro.png')"
            contain
            max-height="60"
          ></v-img>
        </h3>
        <h2 class="headline font-weight-light mt-3 mb-2 primary--text">
          Dúvidas ?
        </h2>
        <h3 class="font-weight-light">contato@hawinsoft.com.br</h3>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>