package com.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.models.User;

@Transactional
@Repository("UserRepoImpl")
public class UserRepoImpl implements UserRepo{
	
	@Autowired
	private SessionFactory sesFact;
	
	public void insertUser(User user) {
		
		sesFact.getCurrentSession().save(user);
	}

	
	public List<User> selectAllUsers() {
		
		return sesFact.getCurrentSession().createQuery("from User", User.class).list();
	}



	@Override
	public void updateUser(User user) {
		
		sesFact.getCurrentSession().update(user);
	}


	@Override
	public User selectByUserId(Integer id) {
		
		User u = (User) sesFact.getCurrentSession().createQuery("from User where id = '" + id + "'",User.class);
		
		return u;
	}


	@Override
	public void deleteUser(User user) {
		
		sesFact.getCurrentSession().delete(user);
	}

}