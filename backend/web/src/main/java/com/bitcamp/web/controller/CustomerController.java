package com.bitcamp.web.controller;

import java.util.Optional;

// import com.bitcamp.web.common.util.PageProxy;
import com.bitcamp.web.domain.CustomerDTO;
import com.bitcamp.web.entities.Customer;
import com.bitcamp.web.service.CustomerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/customers")
public class CustomerController {
    @Autowired CustomerService customerService;

    @GetMapping("/count")
    public long count(){
        return customerService.count();
    }
    /* @DeleteMapping("/{id}")
    public void delete(CustomerDTO dto){
        customerService.delete(null);
    } */
    /* @DeleteMapping("/{id}")
    public void deleteAll(){
        customerService.deleteAll();
    } */
    /* @DeleteMapping("/{id}")
    public void deleteAll(Iterable<CustomerDTO> dtos){
        customerService.deleteAll(null);
    } */
    @DeleteMapping("/{id}")
    public void deleteById(Long id){
        customerService.deleteById(id);
    }
    @GetMapping("/exists/{id}")
    public boolean existsById(Long id){
        return customerService.existsById(id);
    }
    @GetMapping("")
    public Iterable<CustomerDTO> findAll(){
        Iterable<Customer> entity = customerService.findAll();
        return null;
    }
    /* @GetMapping("/{id}")
    public Iterable<CustomerDTO> findAllById(Iterable<Long> ids){
        Iterable<Customer> entity = customerService.findAllById(ids);
        return null;
    } */
    @GetMapping("/{id}")
    public Optional<CustomerDTO> findById(Long id){
        Optional<Customer> entity = customerService.findById(id);
        return null;
    }
    @PostMapping("")
    public CustomerDTO save(CustomerDTO dto){
        Customer entity = customerService.save(null);
        return null;
    }
    /* @PostMapping("/{id}")
    public Iterable<CustomerDTO> saveAll(Iterable<CustomerDTO> dtos){
        Iterable<Customer> entity = customerService.saveAll(null);
        return null;
    } */

}