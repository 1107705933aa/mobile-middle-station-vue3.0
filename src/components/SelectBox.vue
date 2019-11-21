<template>
  <div id="select-box">
    <el-select v-model="value" placeholder="请选择" size="mini">
      <el-option
        v-for="item in giveSvalue"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: "selectBox",
  props: ["giveSvalue"],
  data() {
    return {
      options: [],
      value: ""
    };
  },
  methods: {},
  computed: {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
#select-box {
  width: 160px;
}
</style>