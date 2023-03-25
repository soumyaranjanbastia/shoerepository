package com.fruitapp.backend.dto;

import java.util.List;

import com.fruitapp.backend.model.Product;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OrderAndCartDto {
    private String id;
    private Product product;
    private int counter;
}
