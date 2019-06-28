package com.bitcamp.web.service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

// import com.bitcamp.web.common.util.PageProxy;
import com.bitcamp.web.domain.CustomerDTO;
import com.bitcamp.web.entities.Customer;
import com.bitcamp.web.repositories.CustomerRepository;
import com.bitcamp.web.service.CustomerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService {

    @Autowired CustomerRepository customerRepository;

    public Customer addCustomerOne(Customer customer) {
        return customerRepository.save(customer);
    }

    public Iterable<Customer> addCustomers (Iterable<Customer> customers){
        return customerRepository.saveAll(customers);
    }

    public Iterable<Customer> findAllCustomers() {
        return customerRepository.findAll();
    }

    public Iterable<Customer> findCustomersByOption(Iterable<Long> ids){
        return customerRepository.findAllById(ids);
    }

    public CustomerDTO findCustomerByCustomerId(String customerId) {
        return customerRepository.findByCustomerId(customerId);
    }

    public Optional<Customer> findCustomerById(Long lid) {
        return customerRepository.findById(lid);
    }

    public CustomerDTO findOne(Customer customer) {
        return customerRepository.findOne(customer);
    }

    public Customer updateCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    public void deleteOne(Customer customer) {
        customerRepository.delete(customer);
    }

    public void deleteCustomerById(Long id) {
        customerRepository.deleteById(id);
    }

    public void deleteCustomersByOption(Iterable<Customer> customers) {
        customerRepository.deleteAll(customers);
    }

    public Long countAll() {
        return customerRepository.count();
    }

    public boolean countOne(Long lid) {
        return customerRepository.existsById(lid);
    }

    public CustomerDTO login(CustomerDTO customer) {
        return customerRepository.login(customer);
    }

    public void deleteAll() {
        customerRepository.deleteAll();
    }

}