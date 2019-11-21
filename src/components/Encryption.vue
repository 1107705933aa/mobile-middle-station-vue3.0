<template>
  <div id="encryption">
    <h2>加密协议管理</h2>
    <!-- 检索 -->
    <el-row class="el-row-space">
      <el-col :span="24">
        <el-form ref="form" :model="form" label-width="70px" label-position="left">
          <el-row>
            <el-col :span="7">
              <el-form-item class="clear-space" label="协议编号">
                <input-box :giveValue="form.agreementNum"></input-box>
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item class="clear-space" label="渠道商">
                <input-box :giveValue="form.channelBusiness"></input-box>
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item class="clear-space" label="协议概述">
                <select-box :giveSvalue="form.agreementDescrip"></select-box>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item class="clear-space" label="协议类型">
                <select-box :giveSvalue="form.agreementType"></select-box>
              </el-form-item>
            </el-col>

            <el-col :span="12">
              <el-form-item class="clear-space">
                <el-button
                  type="primary"
                  @click="onSubmit"
                  size="mini"
                >&nbsp;&nbsp;&nbsp;检索&nbsp;&nbsp;&nbsp;</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-col>
    </el-row>
    <!-- 新增协议 -->
    <el-row class="el-row-space">
      <el-col :span="24">
        <el-row>
          <el-button size="mini">&nbsp;&nbsp;&nbsp;新增协议&nbsp;&nbsp;&nbsp;</el-button>
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
      <el-table-column prop="agreementNum" label="协议号" width="180" align="center"></el-table-column>
      <el-table-column prop="agreementName" label="协议名称" width="180" align="center"></el-table-column>
      <el-table-column prop="agreementDescrip" label="协议概述" align="center"></el-table-column>
      <el-table-column prop="agreementType" label="协议类型" align="center"></el-table-column>
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
  name: "Encryption",
  components: {
    InputBox,
    SelectBox
  },
  data() {
    return {
      // 检索内容input
      form: {
        agreementNum: "",
        channelBusiness: "",
        // 检索内容select
        agreementDescrip: [
          {
            value: "选项1",
            label: "黄金糕"
          },
          {
            value: "选项2",
            label: "双皮奶"
          }
        ],
        agreementType: [
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
    axios.get("/encryptionData").then(res => {
      this.tableData = res.data.encryption;
    });
  }
};
</script>

<style lang="scss" scoped>
#encryption {
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