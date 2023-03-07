package com.fruitapp.backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.fruitapp.backend.model.Customer;

public interface CustomerRepository extends MongoRepository<Customer, String> {

}
