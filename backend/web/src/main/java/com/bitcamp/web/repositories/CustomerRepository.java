package com.bitcamp.web.repositories;


import java.util.List;

import com.bitcamp.web.domain.CustomerDTO;
import com.bitcamp.web.entities.Customer;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends CrudRepository<Customer, Long>{
    // public CustomerDTO login(Customer entity);
    public List<Customer> findByCustomerId(String customerId);
}