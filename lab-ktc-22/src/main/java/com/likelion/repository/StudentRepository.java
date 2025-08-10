package com.likelion.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.likelion.entity.Student;

import java.util.Optional;

public interface StudentRepository extends JpaRepository<Student, Long> {
      Optional<Student> findById(Long id);
}