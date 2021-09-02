package com.eatme.springboot.dao.repository;

import com.eatme.springboot.dao.models.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface CategoryRepository extends JpaRepository <Category,Integer> {

}
