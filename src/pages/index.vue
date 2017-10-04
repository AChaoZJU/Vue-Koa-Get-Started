<template>
    <div class="container">
        <el-card class="box-card">
            <el-input v-model="email" placeholder="请输入邮箱"></el-input>
            <el-input icon="password" v-model="pwd" type="password" placeholder="请输入密码"></el-input>
            <el-button type="primary" @click="login">登录</el-button>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            pwd: ''
        }
    },
    methods: {
        checkEmail: email => {
            let emailReg = /^[A-Za-z]\w{4,18}@((163)|(126)|(sina)|(qq))\.com$/;
            email = email.trim();
            return emailReg.test(email);
        },
        checkPwd: pwd => {
            let pwdReg = /^[\s\S]{6,18}$/;
            pwd = pwd.trim();
            return pwdReg.test(pwd);
        },
        login: function() {
            let type = 'success', message = '登录成功'
            if (!this.checkEmail(this.email) || !this.checkPwd(this.pwd)) {
                type = 'error';
                message = '账号或密码错误，请重新输入';
            }
            this.$message({
                type: type,
                message: message
            })
            if (type === 'success') {
                
            }
        }
    }
}
</script>

<style lang='scss' scoped>
.container {
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.el-input {
    margin-bottom: 20px;
}
</style>
