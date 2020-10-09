package com.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.models.Friend;

@Transactional
@Repository("FriendRepoImpl")
public class FriendRepoImpl implements FriendRepo {

	@Autowired
	private SessionFactory sesFact;
	
	@Override
	public List<Friend> getFriends(int userid) {
		List<Friend> friends = (List<Friend>) sesFact.getCurrentSession().createQuery("from Friend where userId = '" + userid + "'",Friend.class).list();
		
		return friends;
	}

	@Override
	public void addFriend(Friend friend) {
		sesFact.getCurrentSession().save(friend);
		
	}

	
	
}