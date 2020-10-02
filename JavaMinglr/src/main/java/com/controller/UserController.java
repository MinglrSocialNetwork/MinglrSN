package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.dao.UserRepo;
import com.models.User;

@Controller
@RequestMapping(value = "/api")
@CrossOrigin(origins = "*")
public class UserController {
	
	@Autowired
	private UserRepo userRepo;
	
	@PostMapping(value = "/createUser")
	public @ResponseBody String createUser(@RequestBody User user) {
		
		System.out.println("Inside put");
		
		userRepo.insertUser(user);
		
		return "Oh yea!!";
	}
	
	@GetMapping(value = "/8661")
	public @ResponseBody List<User> getAllUsers(){
		List<User> allUsers = userRepo.selectAllUsers();
		return allUsers;
	}
	
	
}