package com.eatme.springboot.dao.models;

import javax.persistence.*;

@Entity
public class Transaction {

    @Id
    @Column(name = "id_transaction", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idTransaction;
    private long idProduct;
    private long userId;
    private Double amount_before;
    private Double amount_after;
    private Double amount_changed;
    private long createdAt;
    private String TransactionType;

    public Transaction() {
    }

    public Transaction(long idTransaction, long idProduct, long userId, Double amount_before, Double amount_after, Double amount_changed, long createdAt, String transactionType) {
        this.idTransaction = idTransaction;
        this.idProduct = idProduct;
        this.userId = userId;
        this.amount_before = amount_before;
        this.amount_after = amount_after;
        this.amount_changed = amount_changed;
        this.createdAt = createdAt;
        TransactionType = transactionType;
    }

    public long getIdTransaction() {
        return idTransaction;
    }

    public void setIdTransaction(long idTransaction) {
        this.idTransaction = idTransaction;
    }

    public long getIdProduct() {
        return idProduct;
    }

    public void setIdProduct(long idProduct) {
        this.idProduct = idProduct;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public Double getAmount_before() {
        return amount_before;
    }

    public void setAmount_before(Double amount_before) {
        this.amount_before = amount_before;
    }

    public Double getAmount_after() {
        return amount_after;
    }

    public void setAmount_after(Double amount_after) {
        this.amount_after = amount_after;
    }

    public Double getAmount_changed() {
        return amount_changed;
    }

    public void setAmount_changed(Double amount_changed) {
        this.amount_changed = amount_changed;
    }

    public long getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(long createdAt) {
        this.createdAt = createdAt;
    }

    public String getTransactionType() {
        return TransactionType;
    }

    public void setTransactionType(String transactionType) {
        TransactionType = transactionType;
    }
}