 <template>
  <v-container>
    <v-row
    justify="center"
    content="center"
    >
      <v-col
      cols="12"
      md="8"
      >
        <v-card
        outlined
        >
          <v-card-title>
            <h2>laravel error</h2>
          </v-card-title>
          <v-card-text>
            <v-row>
            <v-col>
              <p>omid zamani</p>
            </v-col>
            <v-col>
              <p class="text-right">2020/10/10 20:30</p>
            </v-col>
          </v-row>
          <vue-markdown>
            # markdown
            [Google](https://google.com)
            :)
          </vue-markdown>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col
        cols="12"
        md="8"
      >
        <v-row>
          <v-col>
            <h2>Replies:</h2>
          </v-col>
          <v-col
          class="text-right"
          >
            <v-btn
            ripple
            to="#"
            color="green"
            dark
            >
              Reply
            </v-btn>
          </v-col>
        </v-row>
      </v-col>

      <v-row
      justify="center"
      content="center"
      >
        <v-col
        cols="12"
        md="8"
      >
        <v-card
        outlined
        >
          <v-card-title>
            <v-avatar
              color="orange"
              size="62"
            >
              OZ
            </v-avatar>
            <v-row class="ml-6">
              <v-col
              cols="12"
              md="12"
              >
                <h5>Omid Zamani</h5>
              </v-col>
              <v-col
              cols="12"
              md="12"
              >
                <small class="gray--text" style="font-size:10pt">2020/10/10 20:10:30</small>
              </v-col>
            </v-row>
          </v-card-title>
          <v-card-text>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, ut tempora iure ipsa praesentium voluptate accusamus ratione deleniti, vel fugit saepe 
            iste natus iusto nisi? Ipsum quia harum 
            repellendus aliquam veniam fuga vero, 
            molestias quisquam adipisci! Est quidem delectus quam quibusdam ipsa? Necessitatibus debitis 
            magnam voluptatem quod ullam voluptas nesciunt.</p>
          </v-card-text>
        </v-card>
      </v-col>
      </v-row>
    </v-row>
  </v-container> 
</template>

<script>
import VueMarkdown from 'vue-markdown/src/VueMarkdown'
export default{
  name:"SingleThread",
  components:{
    'vue-markdown': VueMarkdown 
  }
}
</script>