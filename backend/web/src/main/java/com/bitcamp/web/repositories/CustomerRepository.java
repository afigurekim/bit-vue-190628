package com.bitcamp.web.repositories;

import java.util.List;

import com.bitcamp.web.domain.CustomerDTO;
import com.bitcamp.web.entities.Customer;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends CrudRepository<Customer, Long>{

    public CustomerDTO findOne(Customer customer);
    public CustomerDTO findByCustomerId(String customerId);
    public CustomerDTO login(CustomerDTO customer);
}