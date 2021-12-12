package com.eatme.springboot.controllers;

import com.eatme.springboot.dao.models.Transaction;
import com.eatme.springboot.services.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//TODO add req from port 4200
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/v2/transactions")
public class TransactionController {

    private final TransactionService transactionService;

    @Autowired
    public TransactionController(TransactionService transactionService) {
        this.transactionService = transactionService;
    }

    @GetMapping("")
    public ResponseEntity<List<Transaction>> findAll() {

        List<Transaction> transactions = transactionService.findAll();
        return new ResponseEntity<>(transactions, HttpStatus.OK);
    }

    @GetMapping("/{transactionId}")
    public ResponseEntity<List<Transaction>> findAllByIdProduct(@PathVariable("transactionId") Long transactionId) {

        List<Transaction> transaction = transactionService.findAllByIdProduct(transactionId);
        return new ResponseEntity<>(transaction, HttpStatus.OK);
    }
}
