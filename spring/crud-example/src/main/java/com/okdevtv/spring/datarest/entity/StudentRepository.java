package com.okdevtv.spring.datarest.entity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface StudentRepository
        extends JpaRepository<Student, Long> {
}
