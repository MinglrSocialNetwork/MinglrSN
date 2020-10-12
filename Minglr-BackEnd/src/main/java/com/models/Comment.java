package com.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "comment_table")
public class Comment {

	@Id
	@Column(name="comment_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int commentId;
	
	@Column(name ="post_id")
	private int postId;
	
	@Column(name ="comment_text")
	private String commentText;

	@Column(name="gif_url")
	private String gifUrl;
	
	public Comment() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Comment(int commentId, int postId, String commentText, String gifUrl) {
		super();
		this.commentId = commentId;
		this.postId = postId;
		this.commentText = commentText;
		this.gifUrl = gifUrl;
	}

	public int getCommentId() {
		return commentId;
	}

	public void setCommentId(int commentId) {
		this.commentId = commentId;
	}

	public int getPostId() {
		return postId;
	}

	public void setPostId(int postId) {
		this.postId = postId;
	}

	public String getCommentText() {
		return commentText;
	}

	public void setCommentText(String commentText) {
		this.commentText = commentText;
	}

	public String getGifUrl() {
		return gifUrl;
	}

	public void setGifUrl(String gifUrl) {
		this.gifUrl = gifUrl;
	}

	@Override
	public String toString() {
		return "Comment [commentId=" + commentId + ", postId=" + postId + ", commentText=" + commentText + ", gifUrl="
				+ gifUrl + "]";
	}
}
