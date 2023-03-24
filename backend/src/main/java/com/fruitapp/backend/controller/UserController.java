package com.fruitapp.backend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fruitapp.backend.model.Customer;
import com.fruitapp.backend.service.CustomerService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
@CrossOrigin
public class UserController {

    private final CustomerService customerService;

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

}
