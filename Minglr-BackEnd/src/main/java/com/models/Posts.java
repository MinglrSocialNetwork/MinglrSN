package com.models;



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "post_table")
public class Posts{
	
	

	
	@Column(name ="userid")
	private String userID;
	
	@Id
	@Column(name="post_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@Column(name="upvote")
	private int upvote;
	
	@Column(name="downvote")
	private int downvote;
	
	@Column(name="post_text")
	private String postText;
	

	public Posts() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Posts(String userID, int id, int upvote, int downvote, String postText) {
		super();
		this.userID = userID;
		this.id = id;
		this.upvote = upvote;
		this.downvote = downvote;
		this.postText = postText;
	}

	public String getUserID() {
		return userID;
	}

	public void setUserID(String userID) {
		this.userID = userID;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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

	public String getPostText() {
		return postText;
	}

	public void setPostText(String postText) {
		this.postText = postText;
	}

	@Override
	public String toString() {
		return "Posts [userID=" + userID + ", id=" + id + ", upvote=" + upvote + ", downvote=" + downvote
				+ ", postText=" + postText + "]";
	}	

}
