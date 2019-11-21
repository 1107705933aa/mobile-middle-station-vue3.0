<template>
  <div id="terminal">
    <h2>接入终端管理</h2>
    <!-- 检索 -->
    <el-row class="el-row-space">
      <el-col :span="24">
        <el-form ref="form" :model="form" label-width="90px" label-position="left">
          <el-row>
            <el-col :span="7">
              <el-form-item class="clear-space" label="终端名称">
                <input-box :giveValue="form.terminalName"></input-box>
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item class="clear-space" label="接入商类型">
                <select-box :giveSvalue="form.accessType"></select-box>
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item class="clear-space" label="接入商名称">
                <input-box :giveValue="form.accessName"></input-box>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <el-form-item class="clear-space" label="终端状态">
                <select-box :giveSvalue="form.terminalStatus"></select-box>
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item class="clear-space" label="终端类型">
                <select-box :giveSvalue="form.terminalType"></select-box>
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item class="clear-space">
                <el-button type="primary" @click="onSubmit" size="mini">&nbsp;检索&nbsp;</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-col>
    </el-row>
    <!-- 新增终端 -->
    <el-row class="el-row-space">
      <el-col :span="24">
        <el-row>
          <el-button size="mini">&nbsp;&nbsp;&nbsp;新增终端&nbsp;&nbsp;&nbsp;</el-button>
        </el-row>
      </el-col>
    </el-row>
    <!-- 表格内容 -->
    <el-table
      :data="tableData"
      border
      style="width: 100%"
      size="mini"
      :header-cell-style="{background:'#FAFAFA',color:'#606266'}"
    >
      <el-table-column prop="accessName" label="接入商名称" width="180" align="center"></el-table-column>
      <el-table-column prop="terminalName" label="终端名称" width="180" align="center"></el-table-column>
      <el-table-column prop="terminalType" label="终端类型" align="center"></el-table-column>
      <el-table-column prop="terminalStatus" label="终端状态" align="center"></el-table-column>
      <el-table-column prop="terminalDescrip" label="终端说明" align="center"></el-table-column>
      <el-table-column label="操作" width="180" align="center">
        <template slot-scope="scope">
          <el-button
            @click="handleClick(scope.row)"
            type="text"
            size="small"
            class="clear-space"
          >编辑|审核</el-button>
          <el-button type="text" size="small" class="clear-space">权限管理|禁用</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";
import InputBox from "./InputBox";
import SelectBox from "./SelectBox";
export default {
  name: "terminal",
  components: {
    InputBox,
    SelectBox
  },
  data() {
    return {
      // 检索内容input
      form: {
        accessName: "",
        terminalName: "",
        // 检索内容select
        accessType: [
          {
            value: "选项1",
            label: "黄金糕"
          },
          {
            value: "选项2",
            label: "双皮奶"
          }
        ],
        terminalType: [
          {
            value: "选项1",
            label: "果汁"
          },
          {
            value: "选项2",
            label: "牛奶"
          }
        ],
        terminalStatus: [
          {
            value: "选项1",
            label: "果汁"
          },
          {
            value: "选项2",
            label: "牛奶"
          }
        ]
      },

      // 表格内容
      tableData: []
    };
  },
  methods: {
    // 检索
    onSubmit() {}
  },
  computed: {},
  mounted() {
    // 查询表格数据
    axios.get("/permissionData").then(res => {
      this.tableData = res.data.permission;
    });
  }
};
</script>

<style lang="scss" scoped>
#terminal {
  h2 {
    margin-top: 10px;
    color: #879ab7;
  }
  .el-row-space {
    margin-top: 30px;
    margin-bottom: 20px;
  }
  .clear-space {
    margin: 0;
    padding: 0;
  }
}
</style>