new Vue({
	el:'#gwResume',
	data:{
		langauge:'',//语言
	},
	create:function(){
		//语言显示
		
		
	},
	methods:{
		changeLanguage:function(){
			let _self = this;
			let lang = localStorage.getItem('lang') || 'zh_CN';
			if(lang == 'zh_CN'){
				 localStorage.setItem('lang','en_US');
			}else{
				 localStorage.setItem('lang','zh_CN')
			}
			location.replace(location);
		},
		//切换语言的显示
		showChange:function(){
			let lang = localStorage.getItem('lang') || 'zh_CN';
			if(lang){
				if(lang == 'zh_CN'){ //为中文时切换英文
					langauge = i18n[lang].G008;
				}
				
				if(lang == 'zh_CN'){ //为英文时切换英文
					
				}
			}
		}
		
	},
	
})