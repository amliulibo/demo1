new Vue({
    el: "#vue-app",
    data: {
        age: 30,
        x: 0,
        y:0
    },
    methods: {
        updateXY(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        stopMoving(event) {
            event.stopPropagation();
        }
    }
})