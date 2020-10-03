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
	System.out.println("getting all posts..");
	
		List<Posts> posts = sesFact.getCurrentSession().createQuery("from Posts", Posts.class).list();
		
		return posts;
		
	}

	@Override
	public void createPost(Posts post) {
	System.out.println("starting to create post...");
		
		sesFact.getCurrentSession().save(post);
		
	}

	@Override
	public Posts updatePost(Posts post, int postid) {
	System.out.println("Updating post...");
		
		Posts currentPosts = (Posts) sesFact.getCurrentSession().get(Posts.class, postid);
		if(currentPosts == null) {
			return null;
		}
		
		sesFact.getCurrentSession().merge(post);
		Posts updatedPosts = (Posts) sesFact.getCurrentSession().get(Posts.class, postid);
		sesFact.getCurrentSession().flush();
		sesFact.getCurrentSession().close();
		
		return updatedPosts;
	}

	@Override
	public Posts selectByPostId(int postid) {
	System.out.println("retrieving selected post...");
	
		Posts post = (Posts) sesFact.getCurrentSession().get(Posts.class, postid);
		sesFact.getCurrentSession().close();
	
		return post;
	}

	@Override
	public void deletePost(int postid) {
	System.out.println("starting to delete post..");
	
		Posts post = (Posts) sesFact.getCurrentSession().get(Posts.class, postid);
		sesFact.getCurrentSession().delete(post);
		sesFact.getCurrentSession().close();
	
		
	}

	@Override
	public void increaseUpvotes(int postid) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void increaseDownVotes(int postid) {
		// TODO Auto-generated method stub
		
	}


	
	
//	public static void main(String[] args) {
//		PostRepoImpl PRI = new PostRepoImpl();
//		Posts p = new Posts( "1",  2, 3,  5, "right there");
//		PRI.createPost(p);
		
	//}
}
	


