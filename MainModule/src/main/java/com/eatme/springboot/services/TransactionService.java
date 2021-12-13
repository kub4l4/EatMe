package com.eatme.springboot.services;

import com.eatme.springboot.dao.models.Transaction;
import com.eatme.springboot.dao.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TransactionService {

    private final TransactionRepository transactionRepository;

    @Autowired
    public TransactionService(TransactionRepository transactionRepository) {
        this.transactionRepository = transactionRepository;
    }
    public <S extends Transaction> S save(S s) {
        return transactionRepository.saveAndFlush(s);
    }

    public <S extends Transaction> S saveAndFlush(S s) {
        return transactionRepository.saveAndFlush(s);
    }

    public List<Transaction> findAllByIdProduct(long id) {
        return transactionRepository.findAllByIdProduct(id);
    }

    public List<Transaction> findAll() {
        return transactionRepository.findAll();
    }

}
