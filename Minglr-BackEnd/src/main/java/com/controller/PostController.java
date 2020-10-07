package com.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.dao.PostRepo;
import com.models.Posts;

@Controller
@RequestMapping(value = "/post")
@CrossOrigin(origins = "*") //will change 
public class PostController {
	
	@Autowired
	private PostRepo postRepo;
	
	

	
	@GetMapping(value = "/selectAllPosts")
	public @ResponseBody List<Posts> selectAllPosts(){
		
		List<Posts> posts = postRepo.selectAllPosts();
		System.out.println("Retrieving all posts.... " + posts);
		
		return posts;
		
	}


	@PostMapping(value = "/createPost")
	public void createPost(@RequestBody Posts post ) {
		
		System.out.println("Creating new posts " + post );
		Posts p = new Posts( "1",  2, 3,  5, "right there");
		postRepo.createPost(post);
		
		//return "Post created!";
		
	}
	

	
	@PutMapping(value = "/posts/updatePost/{postid}")
	public ResponseEntity<Posts> updatePost (@PathVariable int postid , @RequestBody Posts post) {
		
		System.out.println("Updating post.....");
		
	
		Posts updatedPost = postRepo.updatePost(postid , post);
		return new ResponseEntity<Posts>(updatedPost, HttpStatus.OK) ;
		
		
	}
	
	
	@DeleteMapping(value = "/posts/deletePost/{postid}")
	public ResponseEntity<Void> deletePost(@PathVariable int postid) {
		
		System.out.println("Deleting post....");

//		
//		if (post == null)
//			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		
		postRepo.deletePost(postid);
		System.out.println(postid);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
//	public static void main(String[] args) {
//		
//		PostController PC = new PostController();
//		PC.deletePost(0, null);
//		
//	}
		
	

}
