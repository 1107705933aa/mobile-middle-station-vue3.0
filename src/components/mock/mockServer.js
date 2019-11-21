// 使用mockjs提供mock数据
import Mock from "mockjs"
import permission from "./permission"
import encryption from "./encryption"
// 返回接口
Mock.mock("/permissionData", { code: 0, permission: permission.permissionData })
Mock.mock("/encryptionData", { code: 0, encryption: encryption.encryptionData })
