package com.sanjana.sdp.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sanjana.sdp.model.Product;

public interface ProductRepo extends JpaRepository<Product,Long> {

}
