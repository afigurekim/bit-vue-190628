package com.bitcamp.web.repositories;

import static org.junit.Assert.assertThat;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CustomerRepositoryTests {

    @Autowired CustomerRepository repo;

    @Test
    public void countTest() throws Exception {
        Long count = repo.count();
        // assertThat(count, equalTo(31), matcher);
    }
}