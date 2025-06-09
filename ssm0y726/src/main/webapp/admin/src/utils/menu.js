const menu = {
    list() {
        return [{"backMenu":[{"child":[{"buttons":["查看","修改","删除","新增"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"buttons":["查看","修改","删除","新增"],"menu":"房间信息","menuJump":"列表","tableName":"fangjianxinxi"}],"menu":"房间信息管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"房间类型","menuJump":"列表","tableName":"fangjianleixing"}],"menu":"房间类型管理"},{"child":[{"buttons":["查看","删除","审核","住宿登记"],"menu":"房间预订","menuJump":"列表","tableName":"fangjianyuding"}],"menu":"房间预订管理"}],"frontMenu":[],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["查看","预订"],"menu":"房间信息","menuJump":"列表","tableName":"fangjianxinxi"}],"menu":"房间信息管理"},{"child":[{"buttons":["查看","支付","入住"],"menu":"房间预订","menuJump":"列表","tableName":"fangjianyuding"}],"menu":"房间预订管理"}],"frontMenu":[],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"用户","tableName":"yonghu"}]
    }
}
export default menu;
