package com.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.models.Comment;

@Transactional
@Repository("CommentRepoImpl")
public class CommentRepoImpl implements CommentRepo {
	@Autowired
	private SessionFactory sesFact;
	
	@Override
	public List<Comment> selectAllComments() {
	return sesFact.getCurrentSession().createQuery("from Comment",Comment.class).list();
	}

	@Override
	public void createComment(Comment comment) {
		sesFact.getCurrentSession().save(comment);		
	}

	@Override
	public Comment updateComment(int commentId, Comment commentText) {
		System.out.println("Updating comment...");
		
		Comment currentComment = (Comment) sesFact.getCurrentSession().get(Comment.class, commentId);
		
		if(currentComment == null) {
			return null;
		}
		
		sesFact.getCurrentSession().merge(currentComment);
		
		Comment updatedComment = (Comment) sesFact.getCurrentSession().get(Comment.class, commentId);
		System.out.println("Updating comment... "+updatedComment);
		sesFact.getCurrentSession().flush();
		return updatedComment;
	}

	@Override
	public void deleteComment(int commentId) {
		Comment comment = (Comment) sesFact.getCurrentSession().get(Comment.class, commentId);
		System.out.println("Deleting comment: ");
		System.out.print(comment);
		
		sesFact.getCurrentSession().delete(comment);
		sesFact.getCurrentSession().flush();
		System.out.println("Done deleting comment");
	}
}
