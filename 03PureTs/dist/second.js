"use strict";
// a new class implementing an interface must take all of it's properties
class Instagram {
    constructor(cameraMode, filetr, burst, short) {
        this.cameraMode = cameraMode;
        this.filetr = filetr;
        this.burst = burst;
        this.short = short;
    }
}
// a new class implementing an interface can add more properties and give them an initial state
class youtube {
    constructor(cameraMode, filetr, burst, short, workmode) {
        this.cameraMode = cameraMode;
        this.filetr = filetr;
        this.burst = burst;
        this.short = short;
        this.workmode = workmode;
    }
    createStory() {
        console.log("Story created");
    }
}
