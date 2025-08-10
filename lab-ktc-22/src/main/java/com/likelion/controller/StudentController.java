package com.likelion.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;
import lombok.RequiredArgsConstructor;

import com.likelion.dto.StudentDto;
import com.likelion.service.StudentService;

@RestController
@RequestMapping("/api/students")
@RequiredArgsConstructor
public class StudentController {

      private final StudentService studentService;

      @GetMapping
      public List<StudentDto> getAllStudents() {
            return studentService.getAllStudents();
      }

      @GetMapping("/{id}")
      public StudentDto getStudentById(@PathVariable Long id) {
            return studentService.getStudentById(id);
      }

      @PostMapping
      public StudentDto createStudent(@RequestBody StudentDto dto) {
            return studentService.createStudent(dto);
      }

      @PutMapping("/{id}")
      public StudentDto updateStudent(@PathVariable Long id, @RequestBody StudentDto dto) {
            return studentService.updateStudent(id, dto);
      }

      @DeleteMapping("/{id}")
      public void deleteStudent(@PathVariable Long id) {
            studentService.deleteStudent(id);
      }
}