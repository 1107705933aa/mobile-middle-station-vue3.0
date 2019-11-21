<template>
  <div id="add-param">
    <el-form ref="form" :model="form" label-width="110px" label-position="left">
      <el-row :gutter="20">
        <el-col :span="7">
          <el-form-item label="参数标识" class="clear-space">
            <el-input v-model="form.name" size="mini"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="17">
          <el-form-item label="参数类型" class="clear-space">
            <el-select v-model="value" placeholder="请选择" size="mini">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="7">
          <el-form-item label="参数名称" class="clear-space">
            <el-input v-model="form.name" size="mini"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="17">
          <el-form-item label="聚合参数标识" class="clear-space">
            <el-select v-model="value" placeholder="请选择" size="mini">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="top-space">
        <el-col :span="14">
          <el-form-item label="参数说明">
            <el-input type="textarea" :rows="5" v-model="form.name" size="mini"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="参数数据类型" class="clear-space">
            <el-select v-model="value" placeholder="请选择" size="mini">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="参数正则类型" class="clear-space">
            <el-select v-model="value" placeholder="请选择" size="mini">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="14">
          <el-form-item label="自定义正则规则" class="clear-space">
            <el-input v-model="form.name" size="mini" placeholder="请选择"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="9">
          <el-form-item label="参数长度限定" class="clear-space">
            <el-row>
              <el-col :span="10">
                <el-input placeholder="请选择" v-model="form.date1" size="mini"></el-input>
              </el-col>
              <el-col :span="4" :push="2">-</el-col>
              <el-col :span="10">
                <el-input placeholder="请选择" v-model="form.date2" size="mini"></el-input>
              </el-col>
            </el-row>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item>
            <el-checkbox label="是否允许为空" name="type" v-model="form.type"></el-checkbox>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "addParam",
  data() {
    return {
      // 表单内容
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      // select
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: ""
    };
  },
  methods: {},
  computed: {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
#add-param {
  padding-top: 10px;
  .top-space {
    margin-top: 10px;
  }
  .clear-space {
    margin: 0;
    padding: 0;
  }
}
</style>