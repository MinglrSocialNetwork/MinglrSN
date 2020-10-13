package com.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "vote_table")
public class Vote {
	@Id
	@Column(name="vote_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int voteId;
	
	@Column(name="user_id")
	private int userId;
	
	@Column(name="post_id")
	private int postId;
	
	@Column(name="upvote")
	private int upvote;
	
	@Column(name="downvote")
	private int downvote;

	public Vote() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Vote(int voteId, int userId, int postId, int upvote, int downvote) {
		super();
		this.voteId = voteId;
		this.userId = userId;
		this.postId = postId;
		this.upvote = upvote;
		this.downvote = downvote;
	}

	public int getVoteId() {
		return voteId;
	}

	public void setVoteId(int voteId) {
		this.voteId = voteId;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getPostId() {
		return postId;
	}

	public void setPostId(int postId) {
		this.postId = postId;
	}

	public int getUpvote() {
		return upvote;
	}

	public void setUpvote(int upvote) {
		this.upvote = upvote;
	}

	public int getDownvote() {
		return downvote;
	}

	public void setDownvote(int downvote) {
		this.downvote = downvote;
	}

	@Override
	public String toString() {
		return "Vote [voteId=" + voteId + ", userId=" + userId + ", postId=" + postId + ", upvote=" + upvote
				+ ", downvote=" + downvote + "]";
	}	
}
