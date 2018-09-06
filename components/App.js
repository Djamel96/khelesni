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
    description : 'Khelesni un site algérien  qui vise à relier les prestataires de services des professionnels, artisans et chefs d’entreprise, des organisations et des entreprises à des prestataires de services de toute nature. Notre service se limite à héberger et publier le contenu des publicités postées par l’annonceur, image, texte ou publicité. Le service est gratuit et accessible à tous.Le service consiste à héberger des publicités conformes aux conditions générales du site et à être affichées automatiquement sur le site et consultées par les visiteurs sans aucune responsabilité du site à l\'intention des annonceurs ou des internautes sur le site' , 
    color : '#F0EDE5',
    right : false,
    linkImg : ['img/about-image.jpg','img/about-image-2.jpg']
  },
  {
    ID : 'how', 
    title : 'Comment ça marche  ', 
    description : 'Ce site web vous permet de trouver des taches à faire et gagner de l\'argent, il suffit de poster votre demande dans notre catalogue et on vas vous contacter pour commencer votre travail',
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
