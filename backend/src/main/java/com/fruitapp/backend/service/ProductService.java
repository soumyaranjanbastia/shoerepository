package com.fruitapp.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.fruitapp.backend.model.Product;
import com.fruitapp.backend.repository.ProductRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductService {
    private final ProductRepository productRepository;

    public List<Product> getProducts() {
        return productRepository.findAll();
    }

    public Product getProduct(String productId) {
        return productRepository.findById(productId).orElseThrow();
    }

    public void addProduct(Product product) {
        if(product.getProductId().isEmpty())
            product.setProductId(null);
        productRepository.save(product);
    }

    public void addProducts(List<Product> products) {
        productRepository.saveAll(products);
    }

    public void deleteProduct(String id) {
        productRepository.deleteById(id);
    }

}
