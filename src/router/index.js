import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Permission from '@/components/Permission'
import Terminal from '@/components/Terminal'
import Encryption from '@/components/Encryption'
import Message from '@/components/Message'
import InterfaceAgree from '@/components/InterfaceAgree'
import AccessProvider from '@/components/AccessProvider'
import ChannelBusiness from '@/components/ChannelBusiness'
import ChannelInterface from '@/components/ChannelInterface'
import ServiceInterface from '@/components/ServiceInterface'
import ServiceAdd from '@/components/ServiceAdd'
import AddParam from '@/components/AddParam'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'Home',
		component: Home,
		children: [
			{
				path: '/Permission',
				name: 'Permission',
				component: Permission
			}, {
				path: '/Terminal',
				name: 'Terminal',
				component: Terminal
			}, {
				path: '/Encryption',
				name: 'Encryption',
				component: Encryption
			}, {
				path: '/Message',
				name: 'Message',
				component: Message
			}, {
				path: '/InterfaceAgree',
				name: 'InterfaceAgree',
				component: InterfaceAgree
			}, {
				path: '/AccessProvider',
				name: 'AccessProvider',
				component: AccessProvider
			}, {
				path: '/ChannelBusiness',
				name: 'ChannelBusiness',
				component: ChannelBusiness
			}, {
				path: '/ChannelInterface',
				name: 'ChannelInterface',
				component: ChannelInterface
			}, {
				path: '/ServiceInterface',
				name: 'ServiceInterface',
				component: ServiceInterface
			}, {
				path: '/ServiceAdd',
				name: 'ServiceAdd',
				component: ServiceAdd
			}, {
				path: '/AddParam',
				name: 'AddParam',
				component: AddParam
			}
		]
	}]
})