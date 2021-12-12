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
    private double amount_before;
    private double amount_after;
    private double amount_changed;
    private long createdAt;
    private String TransactionType;

    public Transaction() {
    }

    public Transaction(long idTransaction, long idProduct, long userId, double amount_before, double amount_after, double amount_changed, long createdAt, String transactionType) {
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

    public double getAmount_before() {
        return amount_before;
    }

    public void setAmount_before(double amount_before) {
        this.amount_before = amount_before;
    }

    public double getAmount_after() {
        return amount_after;
    }

    public void setAmount_after(double amount_after) {
        this.amount_after = amount_after;
    }

    public double getAmount_changed() {
        return amount_changed;
    }

    public void setAmount_changed(double amount_changed) {
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