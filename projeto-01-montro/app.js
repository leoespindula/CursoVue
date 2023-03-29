new Vue({
    el:'#app',
    data:{
        running:false,
        playerLife:100,
        monsterLife:0,
    },
    computed:{
        hasResulted(){
            return this.playerLife == 0 || this.monsterLife == 0
        }

    },
    methods:{

    },
    watch:{

    }
})