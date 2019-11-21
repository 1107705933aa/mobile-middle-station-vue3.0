<template>
  <div id="channel-interface">
    <!-- tab切换 -->
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="XX接口信息明细" name="first">
        <!-- 新增、编辑接口页面 -->
        <el-row class="el-row-space">
          <el-col :span="24">
            <el-form ref="form" :model="form" label-width="70px" label-position="left">
              <el-row>
                <el-col :span="8">
                  <el-form-item label="接口编号">
                    <input-box :giveValue="form.interfaceNum" :isInput="form.isTf"></input-box>
                  </el-form-item>
                </el-col>
                <el-col :span="16">
                  <el-form-item label="接口状态">
                    <input-box :giveValue="form.interfaceStatus" :isInput="form.isTf"></input-box>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="接口名称">
                    <input-box :giveValue="form.interfaceName"></input-box>
                  </el-form-item>
                </el-col>
                <el-col :span="16">
                  <el-form-item label="接口类型">
                    <select-box :giveSvalue="form.interfaceType"></select-box>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="15">
                  <el-form-item label="接口概述">
                    <el-input
                      type="textarea"
                      :rows="10"
                      placeholder="请输入内容"
                      v-model="form.interfaceDescrip"
                    ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="接口配置" name="second">
        <!-- 接口配置 -->
        <el-row class="el-row-space">
          <el-col :span="24">
            <el-form ref="form" :model="form" label-width="90px" label-position="left">
              <el-row>
                <el-col :span="10">
                  <el-form-item class="clear-space" label="接口服务名">
                    <el-input v-model="form.interfaceServiceName" placeholder="请输入内容" size="mini"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="10">
                  <el-form-item class="clear-space" label="接口地址">
                    <el-input v-model="form.interfaceAddress" placeholder="请输入内容" size="mini"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="10">
                  <el-form-item class="clear-space" label="接口方法名">
                    <el-input v-model="form.interfaceMethod" placeholder="请输入内容" size="mini"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item class="clear-space" label="报文类型">
                    <el-select v-model="value" placeholder="请选择" size="mini">
                      <el-option
                        v-for="item in form.messageType"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item class="clear-space" label="加密类型">
                    <el-select v-model="value" placeholder="请选择" size="mini">
                      <el-option
                        v-for="item in form.encryptionType"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item class="clear-space" label="接口协议">
                    <el-select v-model="value" placeholder="请选择" size="mini">
                      <el-option
                        v-for="item in form.interfaceProtoco"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="参数明细" name="third">
        <el-row>
          <el-col :span="21">
            <h3>入参明细</h3>
          </el-col>
          <el-col :span="3">
            <el-button size="small" @click="jump">&nbsp;&nbsp;&nbsp;添加参数&nbsp;&nbsp;&nbsp;</el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <!-- 入参明细表格内容 -->
            <el-table
              :data="enterParamData"
              border
              style="width: 100%"
              size="mini"
              :header-cell-style="{background:'#FAFAFA',color:'#606266'}"
            >
              <el-table-column prop="paramId" label="参数标识" width="180" align="center"></el-table-column>
              <el-table-column prop="paramName" label="参数名称" width="180" align="center"></el-table-column>
              <el-table-column prop="paramDescrip" label="参数说明" align="center"></el-table-column>
              <el-table-column prop="paramRule" label="数据规则" align="center"></el-table-column>
              <el-table-column prop="defaultValue" label="默认值" align="center"></el-table-column>
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
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <h3>出参明细</h3>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <!-- 出参明细表格内容 -->
            <el-table
              :data="outParamData"
              border
              style="width: 100%"
              size="mini"
              :header-cell-style="{background:'#FAFAFA',color:'#606266'}"
            >
              <el-table-column prop="paramId" label="参数标识" width="180" align="center"></el-table-column>
              <el-table-column prop="paramName" label="参数名称" width="180" align="center"></el-table-column>
              <el-table-column prop="paramDescrip" label="参数说明" align="center"></el-table-column>
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
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import axios from "axios";
import InputBox from "./InputBox";
import SelectBox from "./SelectBox";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "channelInterface",
  components: {
    InputBox,
    SelectBox
  },
  data() {
    return {
      // 确定tab默认选项
      activeName: "first",
      form: {
        // 新增、编辑接口页面参数
        // input不可写
        isTf: "false",
        // input默认值
        defaultFvalue: "",
        defaultSvalue: "",
        interfaceNum: "XXD123人2312412",
        interfaceStatus: "待审核",
        interfaceName: "",
        interfaceDescrip: this.$store.state.interfaceDescrip,
        // select
        interfaceType: [
          {
            value: "选项1",
            label: "黄金糕"
          },
          {
            value: "选项2",
            label: "双皮奶"
          }
        ],
        // 接口配置
        interfaceServiceName: "",
        interfaceAddress: "",
        interfaceMethod: "",
        // select
        messageType: [
          {
            value: "选项1",
            label: "黄金糕"
          },
          {
            value: "选项2",
            label: "双皮奶"
          }
        ],
        encryptionType: [
          {
            value: "选项1",
            label: "黄金糕"
          },
          {
            value: "选项2",
            label: "双皮奶"
          }
        ],
        interfaceProtoco: [
          {
            value: "选项1",
            label: "黄金糕"
          },
          {
            value: "选项2",
            label: "双皮奶"
          }
        ]
      },
      value: "",
      // 参数明细
      enterParamData: [],
      outParamData: []
    };
  },
  methods: {
    // 添加参数
    jump() {
      this.$router.push("/AddParam");
    }
  },
  computed: {},
  mounted() {
    // 查询表格数据
    axios.get("/permissionData").then(res => {
      this.enterParamData = res.data.permission;
      this.outParamData = res.data.permission;
    });
  }
};
</script>

<style lang="scss" scoped>
#channel-interface {
  padding-top: 10px;
  h3 {
    color: #879ab7;
    margin: 10px 0 20px;
  }
  .clear-space {
    margin: 0;
    padding: 0;
  }
}
</style>