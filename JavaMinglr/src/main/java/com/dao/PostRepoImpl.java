package com.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.models.Posts;

@Transactional
@Repository("PostRepoImpl")
public class PostRepoImpl implements PostRepo {
	
	@Autowired
	private SessionFactory sesFact;

	@Override
	public List<Posts> selectAllPosts() {
		return sesFact.getCurrentSession().createQuery("from Post", Posts.class).list();
	}

	@Override
	public void insertPost(Posts post) {
		sesFact.getCurrentSession().save(post);
		
	}

	@Override
	public void updatePost(Posts post) {
		sesFact.getCurrentSession().update(post); //will probably need to change to update specific post by ID
		
	}

	@Override
	public Posts selectByPostId(Integer id) {
		
		Posts p = (Posts) sesFact.getCurrentSession().createQuery("from Posts where id = '" + id + "'",Posts.class);
		
		return p;
	}

	@Override
	public void deletePost(Posts post) {
		sesFact.getCurrentSession().delete(post);
		
	}

	@Override
	public void increaseUpvotes(int id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void increaseDownVotes(int id) {
		// TODO Auto-generated method stub
		
	}
}
	


