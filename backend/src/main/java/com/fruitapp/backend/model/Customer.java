package com.fruitapp.backend.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;

@Document
@Getter
@Setter
public class Customer {
    @Id
    private String customerId;
    private String customerName;
    private String customerPassword;
    private String customerAddress;
    private String customerPhoneNumber;
    private String customerEmail;
    private String customerPin;
    private String customerCountry;
    private List<String> cartProductId;
    private List<String> orderProductId;
}
