package com.sanjana.sdp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sanjana.sdp.model.Product;
import com.sanjana.sdp.model.Users;
import com.sanjana.sdp.repo.ProductRepo;
import com.sanjana.sdp.repo.UserRepo;
@Service
public class UserService {
    @Autowired
    private UserRepo urepo;
    @Autowired
    private ProductRepo prepo;
    public Users addUsers(Users user){
        return urepo.save(user);
    }
    public Product addProduct(Product product){
        return prepo.save(product);
    }
    public List<Users> getUsers(){
        return urepo.findAll();
    }
    public List<Product> getProduct(){
        return prepo.findAll();
    }
    public Users findUserByEmail(String email){
        return urepo.findUserByEmail(email); 
    }
    public String deleteUser(Long uid){
        urepo.deleteById(uid);
        return "user deleted successfully" + uid;
    }
    public String delete(Long id){
        prepo.deleteById(id);
        return "user deleted successfully" + id;
    }

}
