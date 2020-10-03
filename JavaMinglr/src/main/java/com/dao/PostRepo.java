package com.dao;

import java.util.List;

import com.models.Posts;
import com.models.User;

public interface PostRepo {
	
	public List<Posts> selectAllPosts();
	
	public void insertPost(Posts post);
	
	public void updatePost(Posts post); //Will probably need to change 
	
	public Posts selectByPostId(Integer id);
	
	public void deletePost(Posts post);
	
	public void increaseUpvotes(int id);
	
	public void increaseDownVotes(int id);
}
