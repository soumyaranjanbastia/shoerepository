package com.fruitapp.backend.service;

import org.springframework.stereotype.Service;

import com.fruitapp.backend.model.OrderAndCart;
import com.fruitapp.backend.repository.OrderAndCartRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class OrderAndCartService {
    private final OrderAndCartRepository orderAndCartRepository;

    public void addCart(OrderAndCart orderAndCart) {
        orderAndCart.setStatus(1);
        orderAndCartRepository.save(orderAndCart);
    }

    public void order(String id) {
        var item = orderAndCartRepository.findById(id).orElse(null);
        if (item != null) {
            item.setStatus(2);
            orderAndCartRepository.save(item);
        }
    }

    public void allOrder(String customerId) {
        var<OrderAndCart> items = orderAndCartRepository.findBycustomerIdAndStatus(customerId, 2);

        ite

    }
}
