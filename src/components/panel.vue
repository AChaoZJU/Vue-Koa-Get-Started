<template>
	<el-card>
		<header>
			<slot name="header"></slot>
		</header>
		<hr>
		<main>
			<el-form :model="good" label-width="80px" ref="goodForm">
				<el-form-item label="商品名称">
					<el-input v-model="good.name"></el-input>
				</el-form-item>
				<el-form-item label="价格">
					<el-input v-model="good.price"></el-input>
				</el-form-item>
				<el-form-item label="库存">
					<el-input v-model="good.amount"></el-input>
				</el-form-item>
				<el-form-item label="商品介绍">
					<el-input type='textarea' v-model="good.info"></el-input>
				</el-form-item>
				<el-form-item label="图片上传">
					<img-upload :imgURL='good.img' ref="imgUpload"></img-upload>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submit">
						<slot name='button'></slot>
					</el-button>
				</el-form-item> 
				<div class="feedback" v-show="ifFeedback">
					<div>
						<img src="/static/icons/success.svg">
						<slot name="result"></slot>成功!
					</div>
					<div>您可以<span><router-link :to='route'>查看商品详情？</router-link></span>
						<span @click="toContinue"><slot name="continue"></slot></span>
					</div>
				</div>
			</el-form>
		</main>
	</el-card>
</template>

<script>
	import axios from 'axios'
	import imgUpload from '@/components/img-upload'
	export default {
		data() {
			return {
				good: {
					id: '',
					info: '',
					price: 0,
					name: '',
					amount: 0,
					img: ''
				},
				ifFeedback: false,
				route: ''
			}
		},
		props: [
			'jsonUrl',
			'id'
		],
		created() {
			if(this.jsonUrl.includes("update")) {
            	this.$http.get('/api/goodDetail/' + this.$route.params.id)
            	    .then(res => {
            	        let code = res.data.code;
            	        if (code === 0) {
            	            this.good = res.data.result;
            	            this.good.price = price(this.good.price);
            	        } else {
            	            this.$message({
            	                type: 'error',
            	                message: res.data.msg
            	            });
            	        }
            	    }).catch(error => {
            	    })
			}
		},
		methods: {
			submit: function() {
				this.good.img = this.$refs.imgUpload.img;
				this.good.id = this.id;
				this.$http.post(this.jsonUrl, this.good)
					.then(res => {
						const data = res.data;
						if (data.code === 0) {
							this.ifFeedback = true;
							if(data.data){
								this.route = '/good/'+data.data;
							}else{
								this.route = '/good/'+ this.id;
							}
							this.$message({
								type: 'success',
								message: data.msg
							});
						} else {
							this.$message({ 
								type: 'error',
								message:data.msg
								});
						}
					}).catch(err => {
	
					})
			},
			toContinue: function() {
				this.good.amount  =  this.good.price = 0;
				this.good.info = this.good.name  = '';
				this.ifFeedback = false;
			}
		},
		components: {
			imgUpload
		}
	}
</script>

<style lang='scss' scoped>
	.el-card {
		width: 50%;
		margin: 30px auto;
		header {
			text-align: left;
		}
		main {
			.el-form-item {
				margin-top: 30px;
			}
			.feedback {
				img {
					height: 30px;
					margin-right: 10px;
				}
				span {
					color: #2d8cba;
					margin: 0 5px;
				}
				span:hover {
					cursor: pointer;
				}
			}
		}
	}
</style>
