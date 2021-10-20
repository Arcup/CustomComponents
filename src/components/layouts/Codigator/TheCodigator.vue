<template>
  <div class="container">
      <div id="content_html">
        <prism language="html">{{ code_html }}</prism>
      </div>
      <div id="content_js">
        <prism language="javascript">{{ code_js }}</prism>
      </div>
      <div id="content_sass">
          
      </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import Prism from 'vue-prism-component'

export default {
    props: ['section'],

    components: {
        Prism,
    },

    setup(props) {
        const section = ref(props.section)

        const code_html = ref(
            '<template>' +
                '<div id="card" class="content" :style="getStyle().card">' +
                    '<div id="header" :style="getStyle().header">' +
                    '<h2 class="content-title">{{ getData().title }}</h2>' +
                    '</div>' +
                    '<div id="body" class="content__header" :style="getStyle().body">' +
                        '<h3>{{ getData().body }}</h3>' +
                    '</div>' +
                    '<div id="button" class="content__button" @click="clicButton()" :style="getStyle().button">' +
                        '{{ getData().button }}' +
                    '</div>' +
                '</div>' +
            '</template>')

        const code_js = ref('const code_js = ref()')

        const code_sass = ref('.container' +
                                'position: relative' +
                                'margin-right: 18rem' +
                                'text-align: right')

        return {
            section,
            code_html,
            code_js,
            code_sass
        }
    }
}
</script>
<style lang="sass" scoped>
.container
  position: relative
  margin-right: 18rem
  text-align: right
</style>