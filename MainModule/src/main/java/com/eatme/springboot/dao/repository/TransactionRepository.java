package com.eatme.springboot.dao.repository;

import com.eatme.springboot.dao.models.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {

    @Override
    <S extends Transaction> S saveAndFlush(S s);

    @Override
    <S extends Transaction> S save(S s);


    List<Transaction> findAllByIdProduct(long id);

    @Override
    List<Transaction> findAll();
}
