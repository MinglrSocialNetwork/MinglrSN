package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
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
	
	
//	@GetMapping(value = "/selectAllPosts")
//	public @ResponseBody List<Posts> selectAllPosts(){
//		
//		System.out.println("Retrieving all posts");
//		
//		return postRepo.selectAllPosts();
//		
//	}
	
	@GetMapping(value = "/selectAllPosts")
	public @ResponseBody List<Posts> selectAllPosts(){
		
		List<Posts> posts = postRepo.selectAllPosts();
		System.out.println("Retrieving all posts.... " + posts);
		
		return posts;
		
	}


	@PostMapping(value = "/createPost")
	public  void createPost(@RequestBody Posts post ) {
		
		System.out.println("Creating new posts " + post );
		Posts p = new Posts( "1",  2, 3,  5, "right there");
		postRepo.createPost(post);
		
		//return "Post created!";
		
	}
//	
//
//	
//	@PutMapping(value = "/updatedPost/posts/{id}")
//	Posts updatePost (@RequestBody Posts post) {
//		return null; //add additional logic here
//	}
//	
//	
//	@DeleteMapping(value = "/posts/{id}")
//	void deletePost(@RequestBody Posts post) {
//		postRepo.deletePost(post);
//	}

}
