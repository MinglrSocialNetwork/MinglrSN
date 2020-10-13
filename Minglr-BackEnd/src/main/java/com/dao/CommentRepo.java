package com.dao;

import java.util.List;

import com.models.Comment;

public interface CommentRepo {

	public List<Comment> selectAllComments();
	
	public void createComment(Comment comment);
	
	public Comment updateComment(int commentId , Comment commentText); 
	
	public void deleteComment(int commentId);
}
