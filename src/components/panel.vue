<template>
	<el-card>
		<header>
			<slot name="header"></slot>
		</header>
		<hr>
		<main>
			<el-form :model="good" label-width="80px" ref="goodForm">
				<el-form-item label="商品名称">
					<el-input v-model="good.goodName"></el-input>
				</el-form-item>
				<el-form-item label="价格">
					<el-input v-model="good.unitPrice"></el-input>
				</el-form-item>
				<el-form-item label="库存">
					<el-input v-model="good.amount"></el-input>
				</el-form-item>
				<el-form-item label="商品介绍">
					<el-input type='textarea' v-model="good.goodInfo"></el-input>
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
	import '@/assets/animate.min.css'
	export default {
		data() {
			return {
				good: {
					goodId: '',
					goodInfo: '',
					unitPrice: '',
					goodName: '',
					amount: ''
				},
				ifFeedback: false,
				route: '',
			}
		},
		props: [
			'jsonUrl',
			'goodId'
		],
		methods: {
			submit: function() {
				this.good.goodId = this.goodId;
				axios.get(this.jsonUrl, {
						params: {
							good: this.good
						}
					})
					.then(res => {
						if (res.data.code === 0) {
							this.ifFeedback = true;
							this.route = '/good/' + res.data.data.goodId;
						}
					}).catch(err => {
	
					})
			},
			toContinue: function() {
				this.good.goodInfo = this.good.amount = this.good.goodName = this.good.unitPrice = '';
			}
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
