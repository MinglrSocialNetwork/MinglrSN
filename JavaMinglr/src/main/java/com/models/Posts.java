package com.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "post_table")
public class Posts implements Serializable{
	
	
	private static final long serialVersionUID = 6072051181552184518L;

	@Id
	@Column(name ="")
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
	

}
