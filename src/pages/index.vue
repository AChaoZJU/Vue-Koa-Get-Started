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
            let pwdReg = /^[\s\S]{3,18}$/;
            pwd = pwd.trim();
            return pwdReg.test(pwd);
        },
        login: function() {
            let type = 'error',
                message = '邮箱或密码错误，请重新输入'
            if (this.checkEmail(this.email) && this.checkPwd(this.pwd)) {
                let obj = {
                    email: this.email,
                    pwd: this.pwd
                }
                this.$http.post('/auth/seller', obj).then(res => {
                    const data = res.data;
                    if (data.code === 0) {
                        type = 'success';
                        message = '登录成功';
                        sessionStorage.setItem('wepay-token',data.token);
                        this.$router.push('/good');
                    }
                }).catch((err) => {
                    message = '系统故障';
                    console.log(err);
                }).finally(()=>{
                    this.$message({
                    type: type,
                    message: message
                })
                })
            } else {
                this.$message({
                    type: type,
                    message: message
                })
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
