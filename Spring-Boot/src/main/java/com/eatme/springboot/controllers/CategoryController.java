package com.eatme.springboot.controllers;

import com.eatme.springboot.dao.models.Category;
import com.eatme.springboot.dao.models.Product;
import com.eatme.springboot.dao.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/category")
public class CategoryController {


    private CategoryRepository categoryRepository;

    @Autowired
    public CategoryController(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @GetMapping("")
    public ResponseEntity<List<Category>> getAllCategory(){

        List<Category> category = categoryRepository.findAll();
        return new ResponseEntity<>(category, HttpStatus.OK);
    }

    @PostMapping("")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Category> addCategory(@RequestBody Map<String, Object> productMap) {
        String title = (String) productMap.get("title");
        String description = (String) productMap.get("description");
        Category category = new Category(title, description);
        categoryRepository.save(category);
        return new ResponseEntity<>(category, HttpStatus.CREATED);
    }

    @PutMapping("/{categoryId}")//TODO naprawić, żeby updatowało, a nie tworzyło nowe.
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Map<String, Boolean>> updateCategory(@PathVariable("categoryId") Integer categoryId,
                                                              @RequestBody Category category) {
        categoryRepository.deleteById(categoryId);
        categoryRepository.save(category);
        Map<String, Boolean> map = new HashMap<>();
        map.put("success", true);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    @DeleteMapping("/{categoryId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Map<String, Boolean>> deleteCategory(@PathVariable("categoryId") Integer categoryId) {

        categoryRepository.deleteById(categoryId);

        Map<String, Boolean> map = new HashMap<>();
        map.put("success", true);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

}
