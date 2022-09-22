new Vue({
    el:'#desafio',
    data: {
        nome:'Ana Silva',
        idade: 28,
        imagem: 'http://files.cod3r.com.br/curso-vue/vue.jpg'
    },
    methods:{
        idadeMultiplicada() {
            return this.idade * 5
        },
        random() {
            return Math.random()
        }
        
    }
})