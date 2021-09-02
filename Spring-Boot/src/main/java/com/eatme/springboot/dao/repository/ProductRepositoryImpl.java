package com.eatme.springboot.dao.repository;

import com.eatme.springboot.dao.models.Product;
import com.eatme.springboot.exceptions.EtBadRequestException;
import com.eatme.springboot.exceptions.EtResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.Statement;
import java.time.LocalDateTime;
import java.util.List;

@Repository
public class ProductRepositoryImpl implements ProductRepository {

    private static final String SQL_FIND_ALL = "SELECT PRODUCT_ID, CATEGORY_ID, USER_ID, NAME, CREATED_AT, EXPIRE_DATE, QUANTITY FROM PRODUCT WHERE USER_ID = ?";
    private static final String SQL_FIND_BY_ID = "SELECT PRODUCT_ID, CATEGORY_ID, USER_ID, NAME, CREATED_AT, EXPIRE_DATE, QUANTITY FROM PRODUCT WHERE USER_ID = ? AND PRODUCT_ID = ?";
    private static final String SQL_CREATE = "INSERT INTO PRODUCT (PRODUCT_ID, CATEGORY_ID, USER_ID, NAME, CREATED_AT, EXPIRE_DATE, QUANTITY) VALUES(NEXTVAL('product_product_id_seq'), ?, ?, ?, ?, ?, ?)";
    private static final String SQL_UPDATE = "UPDATE PRODUCT SET NAME = ?, EXPIRE_DATE = ?, QUANTITY = ?, CATEGORY_ID = ? WHERE USER_ID = ? AND PRODUCT_ID = ?";
    private static final String SQL_DELETE = "DELETE FROM PRODUCT WHERE USER_ID = ? AND PRODUCT_ID = ?";

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public List<Product> findAll(Integer userId) {
        return jdbcTemplate.query(SQL_FIND_ALL, new Object[]{userId}, transactionRowMapper);
    }//TODO replace deprecated

    @Override
    public Product findById(Integer userId, Integer productId) throws EtResourceNotFoundException {
        try {
            return jdbcTemplate.queryForObject(SQL_FIND_BY_ID, new Object[]{userId, productId}, transactionRowMapper);
        }catch (Exception e) {
            throw new EtResourceNotFoundException("Transaction not found");
        }//TODO replace deprecated
    }

    @Override
    public Integer create(String name, String createdAt, String expireDate, String quantity, Integer categoryId, Integer userId) throws EtBadRequestException {
        try {
            KeyHolder keyHolder = new GeneratedKeyHolder();
            jdbcTemplate.update(connection -> {
                PreparedStatement ps = connection.prepareStatement(SQL_CREATE, Statement.RETURN_GENERATED_KEYS);
                ps.setInt(1, categoryId);
                ps.setInt(2, userId);
                ps.setString(3, name);
                ps.setString(4, createdAt);
                ps.setString(5, expireDate);
                ps.setString(6, quantity);
                return ps;
            }, keyHolder);
            return (Integer) keyHolder.getKeys().get("PRODUCT_ID");
        }catch (Exception e) {
            throw new EtBadRequestException("Invalid request");
        }
    }

    @Override
    public void update(Integer productId, Integer categoryId, String name, String createdAt, String expireDate, String quantity,  Integer userId, Product product) throws EtBadRequestException {
        try {
            jdbcTemplate.update(SQL_UPDATE, new Object[]{name, expireDate, quantity, categoryId, userId, productId});
        }catch (Exception e) {
            throw new EtBadRequestException("Invalid request");
        }
    }

    @Override
    public void removeById(Integer userId, Integer productId) throws EtResourceNotFoundException {
        int count = jdbcTemplate.update(SQL_DELETE, new Object[]{userId, productId});
        if(count == 0)
            throw new EtResourceNotFoundException("Transaction not found");
    }

    private RowMapper<Product> transactionRowMapper = ((rs, rowNum) -> {
        return new Product(rs.getInt("PRODUCT_ID"),
                rs.getString("CREATED_AT"),
                rs.getString("EXPIRE_DATE"),
                rs.getString("NAME"),
                rs.getInt("PRODUCT_ID"),
                rs.getString("QUANTITY"),
                rs.getInt("USER_ID"));
    });
}
