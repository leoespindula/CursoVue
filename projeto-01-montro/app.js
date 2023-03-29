new Vue({
    el:'#app',
    data:{
        running:false,
        playerLife:100,
        monsterLife:100,
    },
    computed:{
        hasResulted(){
            return this.playerLife == 0 || this.monsterLife == 0
        }

    },
    methods:{
        startGame(){
            this.running =true
            this.playerLife = 100
            this.monsterLife = 100
        },
        attack(especial){
            this.hurt('playerLife', 7, 12, false)
            this.hurt('monsterLife', 5, 10, especial)
        },
        hurt(prop, min, max, especial){
            const plus = especial ? 5 : 0
            const hurt = this.getRandom(min + plus, max + plus)
            this[prop] = Math.max(this[prop] - hurt, 0)
        },
        healAndHurt(){
            this.heal(10, 15)
            this.hurt('playerLife', 7, 12, false)
        },
        getRandom(min, max){
            const value =Math.random() * (max - min) + min
            return Math.round(value)
        },
        heal(min, max){
            const heal = this.getRandom(min, max)
            this.playerLife = Math.min(this.playerLife + heal, 100)
        }

    },
    watch:{
        hasResulted(value){
            if(value) this.running = false
        }
    }
})