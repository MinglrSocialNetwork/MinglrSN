package com.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import com.dao.CommentRepo;
import com.models.Comment;



@RestController
@RequestMapping(value = "/comment")
@CrossOrigin(origins = "http://minglrs3bucket.s3-website.us-east-2.amazonaws.com") //will change 
public class CommentController {

	@Autowired
	private CommentRepo commentRepo;

	@GetMapping(value = "/selectAllComment")
	public List<Comment> selectAllComments(){
		return commentRepo.selectAllComments();
	}
	
	@PostMapping(value = "/createComment")
	public void createComment(@RequestBody Comment comment ) {
		System.out.println("Creating new comment " + comment );
		commentRepo.createComment(comment);		
	}
}
