<template>
  <div id="message">
    <h2>报文类型管理</h2>
    <!-- 检索 -->
    <el-row class="el-row-space">
      <el-col :span="24">
        <el-form ref="form" :model="form" label-width="70px" label-position="left">
          <el-row>
            <el-col :span="7">
              <el-form-item class="clear-space" label="报文编号">
                <input-box :giveValue="form.messageNum"></input-box>
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item class="clear-space" label="报文名称">
                <input-box :giveSvalue="form.messageName"></input-box>
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item class="clear-space" label="渠道商">
                <select-box :giveSvalue="form.channelBusiness"></select-box>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <el-form-item class="clear-space" label="报文类型">
                <select-box :giveSvalue="form.messageType"></select-box>
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item class="clear-space" label="报文状态">
                <select-box :giveSvalue="form.messageStatus"></select-box>
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
    <!-- 新增报文 -->
    <el-row class="el-row-space">
      <el-col :span="24">
        <el-row>
          <el-button size="mini">&nbsp;&nbsp;&nbsp;新增报文&nbsp;&nbsp;&nbsp;</el-button>
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
      <el-table-column prop="messageNum" label="报文编号" width="180" align="center"></el-table-column>
      <el-table-column prop="messageName" label="报文名称" width="180" align="center"></el-table-column>
      <el-table-column prop="messageDescrip" label="报文概述" align="center"></el-table-column>
      <el-table-column prop="messageType" label="报文类型" align="center"></el-table-column>
      <el-table-column label="操作" width="180" align="center">
        <template slot-scope="scope">
          <el-button
            @click="handleClick(scope.row)"
            type="text"
            size="small"
            class="clear-space"
          >编辑|删除</el-button>
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
  name: "message",
  components: {
    InputBox,
    SelectBox
  },
  data() {
    return {
      // 检索内容input
      form: {
        messageNum: "",
        messageName: "",
        // 检索内容select
        channelBusiness: [
          {
            value: "选项1",
            label: "黄金糕"
          },
          {
            value: "选项2",
            label: "双皮奶"
          }
        ],
        messageType: [
          {
            value: "选项1",
            label: "果汁"
          },
          {
            value: "选项2",
            label: "牛奶"
          }
        ],
        messageStatus: [
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
    onSubmit() {},
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
#message {
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