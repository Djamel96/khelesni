new Vue({
  el: '#app',
  props: {
      show:{
        type : Boolean,
        default : true
      },
      clientShow: {
        type : Boolean,
        default : false
      },
      freeShow: {
        type : Boolean,
        default : false
      }
    },
  data : {
    tabContent : [

  { ID : 'about', 
    title : 'A propos de nous', 
    description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' , 
    color : '#F0EDE5',
    right : false,
    linkImg : ['img/about-image.jpg','img/about-image-2.jpg']
  },
  {
    ID : 'how', 
    title : 'Comment ça marche  ', 
    description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    color : '#B4B7BA',
    right : true,
    linkImg : ['img/about-image.jpg','img/about-image-2.jpg']}
  ]
  },
  methods:{
    goClient : function (argument) {
      window.document.location.href='html/clientSignin.html';
    },

    goArtisan : function (argument) {
      window.document.location.href='html/ArtisanSignin.html';
    },

    goCatalog : function (argument) {
      window.document.location.href='html/catalog.html';
    },
  }
})
