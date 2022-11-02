/*Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Utilizzare almeno una classe CSS in modo dinamico

Bonus:
1. Aggiungere alla pagina un’immagine, presa anch’essa da un data.
2. Cambiare dinamicamente l’immagine
3. Al click di un bottone nascondere l’immagine e mostrare un testo*/

const {createApp} = Vue;

createApp({
  data(){
    return{
      msg:'Ciao sto usando Vue!',
      colorText:'',
      fontStyle:'',
      isShow: 'true',
      img: 'img/blacksabbath.jpg',
      img2: 'img/gojira.jpg'
    }
  },
  methods:{
    nascondiImg(){
      this.isShow = false;
    }
  }
}).mount('#app');