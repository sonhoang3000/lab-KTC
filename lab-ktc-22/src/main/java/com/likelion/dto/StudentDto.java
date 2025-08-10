package com.likelion.dto;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class StudentDto {
      private Long id;
      private String name;
      private String phone;
      private String email;
      private String address;
}