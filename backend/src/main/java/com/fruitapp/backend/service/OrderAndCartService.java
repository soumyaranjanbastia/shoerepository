package com.fruitapp.backend.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.fruitapp.backend.dto.OrderAndCartDto;
import com.fruitapp.backend.model.OrderAndCart;
import com.fruitapp.backend.repository.OrderAndCartRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class OrderAndCartService {
    private final OrderAndCartRepository orderAndCartRepository;
    private final ProductService productService;

    public void addCart(OrderAndCart orderAndCart) {
        orderAndCart.setStatus(1);
        orderAndCartRepository.save(orderAndCart);
    }

    public void order(String id) {
        List<OrderAndCart> cartItems = orderAndCartRepository
                .findBycustomerIdAndStatus(id, 1);
        for (OrderAndCart orderAndCart : cartItems) {
            orderAndCart.setStatus(2);
        }

        orderAndCartRepository.saveAll(cartItems);
    }

    public List<OrderAndCartDto> allOrder(String customerId) {
        List<OrderAndCartDto> response = new ArrayList<>();

        var<OrderAndCart> items = orderAndCartRepository
                .findBycustomerIdAndStatus(customerId, 2);
        for (OrderAndCart orderAndCart : items) {
            var singleItem = new OrderAndCartDto();
            singleItem.setCounter(orderAndCart.getCounter());
            singleItem.setId(orderAndCart.getId());
            var product = productService.getProduct(orderAndCart.getProductId());
            singleItem.setProduct(product);

            response.add(singleItem);
        }

        return response;
    }

    public Map<String, Object> allCart(String customerId) {
        Map<String, Object> details = new HashMap<>();
        List<OrderAndCartDto> products = new ArrayList<>();

        var<OrderAndCart> items = orderAndCartRepository
                .findBycustomerIdAndStatus(customerId, 1);
        var total = 0;
        for (OrderAndCart orderAndCart : items) {
            var singleItem = new OrderAndCartDto();
            singleItem.setCounter(orderAndCart.getCounter());
            singleItem.setId(orderAndCart.getId());
            var product = productService.getProduct(orderAndCart.getProductId());
            singleItem.setProduct(product);
            total += (product.getProductPrice() * singleItem.getCounter());
            products.add(singleItem);
        }

        details.put("products", products);
        details.put("total", total);
        return details;
    }

    public void removeItemFromCart(String id) {
        orderAndCartRepository.deleteById(id);
    }
}
