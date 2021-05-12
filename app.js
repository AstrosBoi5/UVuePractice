const app = Vue.createApp({
    data(){
        return {
            courseGoalA: 'Finish the course !!!',
            courseGoalB: "Hell Yeah",
            courseGoalC: "<h2>My Course Goal</h2>",
            linuxLink: 'https://www.tecmint.com/install-zip-and-unzip-in-linux/'
        };
    },
    methods: {
        outputGoal(){
            const randomNumber = Math.random();
            if(randomNumber < 0.5){
                return this.courseGoalA;
            }else{
                return this.courseGoalB;
            }
        },
        vHtml(){
            return this.courseGoalC;
        }
    },
});

app.mount('#user-goal');