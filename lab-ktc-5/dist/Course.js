"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
class Course {
    // Feature 1 
    constructor(name = "Anything name", instructor = "Any tutor", duration = 10) {
        this.name = name;
        this.instructor = instructor;
        this.duration = duration;
    }
}
exports.Course = Course;
