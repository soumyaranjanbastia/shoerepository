package com.fruitapp.backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.fruitapp.backend.model.Product;

public interface ProductRepository extends MongoRepository<Product, String> {
       
}
