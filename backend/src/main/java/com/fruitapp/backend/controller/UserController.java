package com.fruitapp.backend.controller;

import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fruitapp.backend.dto.OrderAndCartDto;
import com.fruitapp.backend.model.Customer;
import com.fruitapp.backend.model.OrderAndCart;
import com.fruitapp.backend.service.CustomerService;
import com.fruitapp.backend.service.OrderAndCartService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
@CrossOrigin
public class UserController {
    private final CustomerService customerService;
    private final OrderAndCartService orderAndCartService;

    @PostMapping
    public ResponseEntity<Customer> addCustomer(@RequestBody Customer customer) {
        Customer cus = customerService.addCustomer(customer);
        return new ResponseEntity<Customer>(cus, HttpStatus.OK);
    }

    @PostMapping("/login")
    public Customer login(@RequestBody Customer customer) {
        var customerEmail = customer.getCustomerEmail();
        var customerPassword = customer.getCustomerPassword();

        return customerService.login(customerEmail, customerPassword);
    }

    @PostMapping("/cart")
    public void addCart(@RequestBody OrderAndCart orderAndCart) {
        orderAndCartService.addCart(orderAndCart);
    }

    @GetMapping("/order/{userId}")
    public void order(@PathVariable String userId) {
        orderAndCartService.order(userId);
    }

    @GetMapping("/cart/all/{userId}")
    public Map<String, Object> allCart(@PathVariable String userId) {
        return orderAndCartService.allCart(userId);
    }

    @GetMapping("/order/all/{userId}")
    public List<OrderAndCartDto> allOrder(@PathVariable String userId) {
        return orderAndCartService.allOrder(userId);
    }

    @GetMapping("/cart/remove/{productId}")
    public void removeCart(@PathVariable String productId) {
        orderAndCartService.removeItemFromCart(productId);
    }

}
