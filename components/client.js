
new Vue({
  el: '#clientSign',
	
		props : {
			email:{
        		type : String,
        		default : ''
        	},
    		password: {
      			type : String,
      			default : ''
    		}
		},
		
		methods:{
			provideInfo: function (event) {
			    
			    console.log(this.email + this.password);
			    var tab = new Array();
			    tab.push(this.email);
			    tab.push(this.password);
				console.log(tab);
				window.document.location.href='catalog.html';
			    return tab;
		    },
		    goforgot : function (argument) {
      			window.document.location.href='forgot.html';
   		    }
		}


})


