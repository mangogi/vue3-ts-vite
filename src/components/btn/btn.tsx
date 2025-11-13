import { defineComponent } from "vue";


export default defineComponent({
  name: "Btn",
  props: {
    type: {
      type: String,
      default: "primary",
    },
    size: {
      type: String,
      default: "normal",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots }) {
    return () => (
     <el-button {...props}>默认按钮</el-button>
    )
  }
})