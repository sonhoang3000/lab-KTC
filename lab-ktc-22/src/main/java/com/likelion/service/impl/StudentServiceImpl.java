package com.likelion.service.impl;

import java.util.List;
import org.springframework.stereotype.Service;
import com.likelion.dto.StudentDto;
import com.likelion.exception.ResourceNotFoundException;
import com.likelion.mapper.StudentMapper;
import com.likelion.repository.StudentRepository;
import com.likelion.service.StudentService;
import org.springframework.transaction.annotation.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class StudentServiceImpl implements StudentService {

      private final StudentRepository studentRepository;
      private final StudentMapper studentMapper;

      @Override
      @Transactional(readOnly = true)
      public List<StudentDto> getAllStudents() {
            return studentMapper.toDtoList(studentRepository.findAll());
      }

      @Override
      @Transactional(readOnly = true)
      public StudentDto getStudentById(Long id) {
            return studentRepository.findById(id)
                        .map(studentMapper::toDto)
                        .orElseThrow(() -> new ResourceNotFoundException("Student not found with id: " + id));
      }

      @Override
      @Transactional
      public StudentDto createStudent(StudentDto dto) {
            return studentMapper.toDto(studentRepository.save(studentMapper.toEntity(dto)));
      }

      @Override
      @Transactional
      public StudentDto updateStudent(Long id, StudentDto dto) {
            return studentRepository.findById(id)
                        .map(existing -> {
                              studentMapper.updateEntityFromDto(dto, existing);
                              return studentMapper.toDto(studentRepository.save(existing));
                        })
                        .orElseThrow(() -> new ResourceNotFoundException("Not found: " + id));
      }

      @Override
      @Transactional
      public void deleteStudent(Long id) {
            studentRepository.findById(id)
                        .ifPresentOrElse(studentRepository::delete,
                                    () -> {
                                          throw new ResourceNotFoundException("Not found: " + id);
                                    });
      }
}