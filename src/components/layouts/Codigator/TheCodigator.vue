<template>
  <div class="container">
      <div id="content_html">
        <prism language="html">{{ code_html }}</prism>
      </div>
      <div id="content_js">
        <prism language="javascript">{{ code_js }}</prism>
      </div>
      <div id="content_sass">
          <prism language="css">{{ code_sass }}</prism>
      </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import Prism from 'vue-prism-component'

export default {
    props: ['section'],

    components: {
        Prism,
    },

    setup(props) {

        const section = ref(props.section)

        const code_html = ref("")

        const code_js = ref("")

        const code_sass = ref("")

        const readCode = () => {
            const PATH = "./../../../../assets/img/navigation/formaLogo-Arcup.png"
            console.log(PATH);
            const reader = new FileReader();
            reader.onload = e => console.log(e.target);
            reader.readAsText(new Blob(props.section.__file));
        }

        readCode()
        watch(() => props.section, () => {
            readCode();
        });
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