const app = new Vue ({

  el: '#app',
  data: {
    messaggio: "Questo è il messaggio base",
    immagine: "https://www.formula1.com/content/dam/fom-website/sutton/2020/Italy/Sunday/1270967102.jpg.transform/9col/image.jpg"
  },
  methods:{
    cambiaClasse(classe){
      this.miaClasse = classe;
    },
    modificaMessaggio(evento){
      messaggio = evento;
    }
  }

});