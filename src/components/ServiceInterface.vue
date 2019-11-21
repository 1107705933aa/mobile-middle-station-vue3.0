<template>
  <div id="service-interface">
    <el-row>
      <el-col :span="12">
        <div>
          <img src="../img/logic.png" alt />
        </div>
      </el-col>
      <el-col :span="12">
        <div class="content">
          <el-button class="left-space">&nbsp;&nbsp;&nbsp;渠道接口&nbsp;&nbsp;&nbsp;</el-button>
          <el-button class="top-space">&nbsp;&nbsp;&nbsp;判断节点&nbsp;&nbsp;&nbsp;</el-button>
          <el-button class="top-space">&nbsp;&nbsp;&nbsp;等待节点&nbsp;&nbsp;&nbsp;</el-button>
          <el-button class="top-space">&nbsp;&nbsp;&nbsp;开始结束&nbsp;&nbsp;&nbsp;</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  serviceInterface: "",
  data() {
    return {};
  },
  methods: {},
  computed: {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
#service-interface {
  .left-space {
    margin-left: 10px;
  }
  .content {
    width: 150px;
    height: 410px;
    padding: 15px 5px;
    background-color: #d7d7d7;
  }
  .top-space {
    margin-top: 10px;
  }
}
</style>