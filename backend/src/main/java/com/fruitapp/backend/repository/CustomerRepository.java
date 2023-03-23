package com.fruitapp.backend.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.fruitapp.backend.model.Customer;

public interface CustomerRepository extends MongoRepository<Customer, String> {
    public Optional<Customer> findByCustomerEmailAndCustomerPassword(String customerEmail, String customerPassword);
}
