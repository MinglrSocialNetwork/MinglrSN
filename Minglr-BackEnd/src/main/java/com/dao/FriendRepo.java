package com.dao;

import java.util.List;

import com.models.Friend;

public interface FriendRepo {

	public List<Friend> getFriends(int userid);
	
	public void addFriend(Friend friend);
}
