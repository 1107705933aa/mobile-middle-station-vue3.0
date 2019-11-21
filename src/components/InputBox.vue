<template>
  <div id="input-box">
    <el-input size="mini" v-model="giveValue" placeholder="请输入内容" :disabled="Boolean(isInput)"></el-input>
    {{parentValue}}
  </div>
</template>
<script>
export default {
  name: "inputBox",
  props: ["giveValue", "isInput"],
  data() {
    return {
      parentValue: ""
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
#input-box {
  width: 200px;
}
</style>