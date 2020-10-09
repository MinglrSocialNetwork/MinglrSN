package com.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "friend_list")
public class Friend {
	
	@Id
	@Column(name="primary_key")
	@GeneratedValue(strategy= GenerationType.AUTO)
	private int key;
	
	@Column(name = "userid")
	private int userId;
	
	@Column(name = "friendid")
	private int friendId;

	
	public Friend(int key, int userId, int friendId) {
		super();
		this.key = key;
		this.userId = userId;
		this.friendId = friendId;
	}
	
//	public Friend(int userId, int friendId) {
//		super();
//		this.userId = userId;
//		this.friendId = friendId;
//	}

	public Friend() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	public int getKey() {
		return key;
	}

	public void setKey(int key) {
		this.key = key;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getFriendId() {
		return friendId;
	}

	public void setFriendId(int friendId) {
		this.friendId = friendId;
	}

	@Override
	public String toString() {
		return "Friend [key=" + key + ", userId=" + userId + ", friendId=" + friendId + "]";
	}
	
	
		
}