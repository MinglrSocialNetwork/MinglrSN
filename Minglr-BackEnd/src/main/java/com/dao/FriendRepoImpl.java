package com.dao;

import java.util.List;

import javax.persistence.Query;

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
		// List<Friend> friends = (List<Friend>) sesFact.getCurrentSession().createNativeQuery("select * from user_table join friend_list on friendid = user_id where userid = 1",Friend.class).list();
		Query q = sesFact.getCurrentSession().createNativeQuery("select user_name, friendid from user_table join friend_list on friendid = user_id where userid = ?");
		q.setParameter(1, userid);
		
		List<Friend> friends = q.getResultList();
		System.out.println(friends);
		return friends;
	}

	@Override
	public void addFriend(Friend friend) {
		sesFact.getCurrentSession().save(friend);
		
	}

	
	
}