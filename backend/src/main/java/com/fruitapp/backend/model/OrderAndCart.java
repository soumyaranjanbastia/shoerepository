package com.fruitapp.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Document
public class OrderAndCart {
    @Id
    private String id;
    private String customerId;
    private String productId;
    private int counter;
    // 1 for cart 2 for order
    private int status;
}
