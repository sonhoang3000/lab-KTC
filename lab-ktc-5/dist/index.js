"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CourseManager_1 = require("./CourseManager");
const readlineSync = require('readline-sync');
const manager = new CourseManager_1.CourseManager();
// Thêm một số khóa học mẫu
manager.addCourse("Lập trình TypeScript", "AAAA", 20);
manager.addCourse("NodeJS cơ bản", "BBBB");
manager.addCourse("CCCC");
while (true) {
    console.log("\n===== MENU QUẢN LÝ KHÓA HỌC =====");
    console.log("1. Thêm khóa học mới");
    console.log("2. Hiển thị danh sách khóa học");
    console.log("3. Cập nhật khóa học");
    console.log("4. Xóa khóa học");
    console.log("5. Thoát");
    const choice = readlineSync.question("Chọn chức năng (1-5): ");
    if (choice === '1') {
        const name = readlineSync.question("Tên khóa học: ");
        const instructor = readlineSync.question("Giảng viên: ");
        const durationStr = readlineSync.question("Thời lượng (giờ): ");
        const duration = durationStr ? parseInt(durationStr) : undefined;
        manager.addCourse(name || undefined, instructor || undefined, duration);
        console.log("Đã thêm khóa học!");
    }
    else if (choice === '2') {
        manager.listCourses();
    }
    else if (choice === '3') {
        manager.listCourses();
        const idStr = readlineSync.question("Nhập ID khóa học muốn cập nhật: ");
        const id = parseInt(idStr);
        if (isNaN(id)) {
            console.log("ID không hợp lệ!");
            continue;
        }
        const name = readlineSync.question("Tên mới (bỏ qua nếu không đổi): ");
        const instructor = readlineSync.question("Giảng viên mới (bỏ qua nếu không đổi): ");
        const durationStr = readlineSync.question("Thời lượng mới (bỏ qua nếu không đổi): ");
        const duration = durationStr ? parseInt(durationStr) : undefined;
        manager.updateCourse(id, Object.assign(Object.assign(Object.assign({}, (name && { name })), (instructor && { instructor })), (durationStr && { duration })));
    }
    else if (choice === '4') {
        manager.listCourses();
        const idStr = readlineSync.question("Nhập ID khóa học muốn xóa: ");
        const id = parseInt(idStr);
        if (isNaN(id)) {
            console.log("ID không hợp lệ!");
            continue;
        }
        manager.deleteCourse(id);
    }
    else if (choice === '5') {
        console.log("Đã thoát chương trình.");
        break;
    }
    else {
        console.log("Lựa chọn không hợp lệ!");
    }
}
