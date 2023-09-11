abstract class takePhoto {
    constructor(
        cameraMode : string,
        filter: string
        ){ }
        abstract getSepia():void
        getReelTime():number{
            // calculations
            return 8
        }
}


class Instagram extends takePhoto {
    constructor(
        public cameraMode : string,
        public filter: string,
        public burst : number
    ){
        super(cameraMode,filter)
    }

    getSepia():void {
        console.log("Sepia");
    }
}

// const chibu = new Instagram("test", "Test")





export{}