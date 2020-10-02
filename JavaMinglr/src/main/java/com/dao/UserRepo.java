package com.dao;

import java.util.List;

import com.models.User;

public interface UserRepo {
	
	
	public void insertUser(User user);
	
	public void updateUser(User user);
	
	public User selectByUserId(Integer id);
	
	public List<User> selectAllUsers();
	
	public void deleteUser(User user); 
}