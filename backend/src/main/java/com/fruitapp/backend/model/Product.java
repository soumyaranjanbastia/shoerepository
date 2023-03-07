package com.fruitapp.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;

@Document
@Getter
@Setter
public class Product {
    @Id
    private String productId;
    private String productName;
    private String productImageURL;
    private String productDescription;
    private double productPrice;
}
