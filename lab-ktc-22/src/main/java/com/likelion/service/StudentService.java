package com.likelion.service;

import java.util.List;

import com.likelion.dto.StudentDto;

public interface StudentService {
      List<StudentDto> getAllStudents();

      StudentDto getStudentById(Long id);

      StudentDto createStudent(StudentDto dto);

      StudentDto updateStudent(Long id, StudentDto dto);

      void deleteStudent(Long id);
}