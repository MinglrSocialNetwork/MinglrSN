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
@RequestMapping(value = "/api")
@CrossOrigin(origins = "*") //will change 
public class PostController {
	
	@Autowired
	private PostRepo postRepo;
	
	@PostMapping(value = "/createPost")
	public @ResponseBody String createPost(@RequestBody Posts post ) {
		
		postRepo.insertPost(post);
		
		return "Post created!";
		
	}
	
	@GetMapping(value = "/selectAllPost", produces = "application/json")
	public @ResponseBody List<Posts> selectAllPosts(){
		
		return postRepo.selectAllPosts();
		
	}
	
	@PutMapping(value = "/updatedPost")
	Posts updatePost (@RequestBody Posts post) {
		return null; //add additional logic here
	}
	
	
	@DeleteMapping(value = "/posts/{id}")
	void deletePost(@RequestBody Posts post) {
		postRepo.deletePost(post);
	}

}
