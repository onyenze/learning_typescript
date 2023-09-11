"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class takePhoto {
    constructor(cameraMode, filter) { }
    getReelTime() {
        // calculations
        return 8;
    }
}
class Instagram extends takePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
    }
}
