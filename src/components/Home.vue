<template>
  <div id="home">
    <!--顶部-->
    <el-row>
      <el-col :span="24">
        <el-row class="header">
          <el-col :span="3">
            <h3>移动中台管理系统</h3>
          </el-col>
          <el-col :span="21">
            <h5>—— Mobile middle platform</h5>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <!--内容-->
    <el-row>
      <!--内容左部-->
      <el-col :span="4">
        <el-tree
          class="menu"
          :data="menu"
          :props="defaultProps"
          @node-click="handleNodeClick"
          :default-expand-all="true"
        ></el-tree>
      </el-col>
      <!--内容右部-->
      <el-col :span="20" class="content">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      menu: [
        {
          label: "主页",
          children: [
            {
              label: "业务管理",
              children: [
                {
                  label: "接入商逻辑",
                  children: [
                    {
                      label: "业务权限管理"
                    },
                    {
                      label: "终端管理"
                    }
                  ]
                },
                {
                  label: "渠道商逻辑",
                  children: [
                    {
                      label: "加密协议管理"
                    },
                    {
                      label: "报文类型管理"
                    },
                    {
                      label: "接口协议管理"
                    },
                    {
                      label: "渠道接口管理"
                    }
                  ]
                },
                {
                  label: "通用逻辑",
                  children: [
                    {
                      label: "秘钥管理（无）"
                    }
                  ]
                },
                {
                  label: "业务接口管理",
                  children: [
                    {
                      label: "接口逻辑管理"
                    },
                    {
                      label: "新增、编辑接口页面"
                    }
                  ]
                }
              ]
            },
            {
              label: "用户管理",
              children: [
                {
                  label: "账户管理（无）"
                },
                {
                  label: "接入商管理"
                },
                {
                  label: "渠道商管理"
                }
              ]
            },
            {
              label: "系统管理",
              children: [
                {
                  label: "略"
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  methods: {
    // 主菜单路由跳转
    handleNodeClick(data) {
      if (data.$treeNodeId == 4) {
        this.$router.push("/Permission");
      } else if (data.$treeNodeId == 5) {
        this.$router.push("/Terminal");
      } else if (data.$treeNodeId == 7) {
        this.$router.push("/Encryption");
      } else if (data.$treeNodeId == 8) {
        this.$router.push("/Message");
      } else if (data.$treeNodeId == 9) {
        this.$router.push("/InterfaceAgree");
      } else if (data.$treeNodeId == 18) {
        this.$router.push("/AccessProvider");
      } else if (data.$treeNodeId == 19) {
        this.$router.push("/ChannelBusiness");
      } else if (data.$treeNodeId == 10) {
        this.$router.push("/ChannelInterface");
      } else if (data.$treeNodeId == 22) {
        this.$router.push("/ServiceInterface");
      } else if (data.$treeNodeId == 23) {
        this.$router.push("/ServiceAdd");
      } else if (data.$treeNodeId == 15) {
        this.$router.push("/ServiceAdd");
      } else if (data.$treeNodeId == 14) {
        this.$router.push("/ServiceInterface");
      }
    }
  },
  computed: {},
  mounted() {
    this.$router.push("/Permission");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#home {
  width: 100%;
  height: 100%;
  // 头部样式设置
  .header {
    width: 100%;
    height: 50px;
    margin-top: 0;
    margin-left: 0;
    padding: 0;
    background-color: #6db9f5;
    h3 {
      display: inline-block;
      line-height: 50px;
      margin-left: 10px;
      color: #fff;
    }
    h5 {
      display: inline-block;
      line-height: 50px;
      color: #fff;
    }
  }
  // 菜单
  .menu {
    width: 100%;
    height: 100%;
    background-color: #daedfc;
  }
  // 内容
  .content {
    padding: 15px;
  }
}
</style>>
