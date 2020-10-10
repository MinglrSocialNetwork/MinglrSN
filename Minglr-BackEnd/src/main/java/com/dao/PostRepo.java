package com.dao;

import java.util.List;



import com.models.Posts;
import com.models.User;


public interface PostRepo {
	
	public List<Posts> selectAllPosts();
	
	public void createPost(Posts post);
	
	public Posts updatePost(int postid, Posts post); //Will probably need to change 
	
	//public Posts selectByPostId(int postid);
	
	public void deletePost(int postid);
	
	public void increaseUpvotes(int postid);
	
	public void increaseDownVotes(int postid);
	
	public User getPostUsername(int postid);
}
