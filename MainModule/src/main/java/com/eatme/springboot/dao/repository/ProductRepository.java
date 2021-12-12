package com.eatme.springboot.dao.repository;

import com.eatme.springboot.dao.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    @Override
    List<Product> findAll();

    @Override
    <S extends Product> S save(S s);

    @Override
    <S extends Product> S saveAndFlush(S s);

    Product findProductsByIdProduct(Long id);

    List<Product> findProductByIdUserAndArchived(Long id, int archived);
}
