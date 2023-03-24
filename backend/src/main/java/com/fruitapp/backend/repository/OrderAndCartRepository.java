package com.fruitapp.backend.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.fruitapp.backend.model.OrderAndCart;

public interface OrderAndCartRepository extends MongoRepository<OrderAndCart, String> {
    List<OrderAndCart> findBycustomerIdAndStatus(String customerId, int status);
}
