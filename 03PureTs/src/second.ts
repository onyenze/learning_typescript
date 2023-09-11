interface takePhoto {
    cameraMode : string
    filetr: string
    burst: number
}

interface Story {
    createStory():void 
}

// a new class implementing an interface must take all of it's properties
class Instagram implements takePhoto {
    constructor(
        public cameraMode : string,
        public filetr: string,
        public burst: number,
        public short: string
        ){

    }
}

// a new class implementing an interface can add more properties and give them an initial state
class youtube implements takePhoto ,Story{
    constructor(
        public cameraMode : string,
        public filetr: string,
        public burst: number,
        public short: string,
        public workmode:boolean
        ){

    }

    createStory(){
        console.log("Story created");
        
    }
}