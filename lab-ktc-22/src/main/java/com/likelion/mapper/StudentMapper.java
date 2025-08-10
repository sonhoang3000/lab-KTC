package com.likelion.mapper;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

import com.likelion.dto.StudentDto;
import com.likelion.entity.Student;

@Mapper(componentModel = "spring")
public interface StudentMapper {
      StudentDto toDto(Student student);

      List<StudentDto> toDtoList(List<Student> customers);

      Student toEntity(StudentDto dto);

      void updateEntityFromDto(StudentDto dto, @MappingTarget Student entity);

}