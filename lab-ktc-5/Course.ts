export class Course {
    name: string;
    instructor: string;
    duration: number;

    // Feature 1 

    constructor(
        name: string = "Anything name",
        instructor: string = "Any tutor",
        duration: number = 10
    ) {
        this.name = name;
        this.instructor = instructor;
        this.duration = duration;
    }
} 