// Descrizione:
// Rifare l'esercizio dello slider come fatto assieme in classe.
// Bonus:
// Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente.

var app = new Vue({
    el: '#root',
    data: {
        autoslide:'',
        img: 0,
        images : [
            'img/campagna.jpg',
            'img/cascate.webp',
            'img/fiori.jpeg',
            'img/montagne.webp',
        ]
    },
    methods:{
        nextPhoto(){

            if(this.img == this.images.length -1){
                this.img = 0;
            }else{
                this.img = this.img + 1;
            }
        },
        prevPhoto(){

            if(this.img == 0){
                this.img = this.images.length - 1 ;
            }else{
                this.img = this.img - 1;
            }
        },
        created: function() {
            setInterval(() => {
                this.nextPhoto();
            }, 3000)
        },
         
    },
    
})

