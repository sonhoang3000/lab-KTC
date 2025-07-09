"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseManager = void 0;
const Course_1 = require("./Course");
class CourseManager {
    constructor() {
        this.courses = [];
        // Feature 3 
        this.updateCourse = (id, { name, instructor, duration }) => {
            const index = id - 1;
            if (index < 0 || index >= this.courses.length) {
                console.log("Không tìm thấy khóa học với ID này.");
                return;
            }
            const course = this.courses[index];
            if (name !== undefined)
                course.name = name;
            if (instructor !== undefined)
                course.instructor = instructor;
            if (duration !== undefined)
                course.duration = duration;
            console.log(`Đã cập nhật khóa học ID ${id}.`);
        };
    }
    // Feature 1
    addCourse(name, instructor, duration) {
        const course = new Course_1.Course(name, instructor, duration);
        this.courses.push(course);
    }
    // Feature 2 
    listCourses() {
        if (this.courses.length === 0) {
            console.log("Chưa có khóa học nào.");
            return;
        }
        this.courses.forEach((course, index) => {
            console.log(`${index + 1}. Tên: ${course.name} | Giảng viên: ${course.instructor} | Thời lượng: ${course.duration} giờ`);
        });
    }
    // Feature 4 
    deleteCourse(id) {
        const index = id - 1;
        if (index < 0 || index >= this.courses.length) {
            console.log("Không tìm thấy khóa học với ID này.");
            return;
        }
        this.courses = this.courses.filter((_, i) => i !== index);
        console.log(`Đã xóa khóa học ID ${id}.`);
    }
}
exports.CourseManager = CourseManager;
