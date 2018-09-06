new Vue({
  el: '#free',
  props: {
    email:{
        type : String,
        default : ''
     },
    password: {
      type : String,
      default : ''
    }, 

  },
  data () {
    return {
      msg: 'Hello World!'
    }
  },
  methods : {
    provideInfo: function (event) {
      console.log(this.email + this.password)
      var tab = new Array();
      tab.push(this.email)
      tab.push(this.password)
      console.log(tab)
      return tab
    },
    goforgot : function (argument) {
      window.document.location.href='forgot.html';
    }
  }

})
