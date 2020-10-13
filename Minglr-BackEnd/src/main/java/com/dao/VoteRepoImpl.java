package com.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.models.Posts;
import com.models.Vote;

@Transactional
@Repository("VoteRepoImpl")
public class VoteRepoImpl implements VoteRepo {
	@Autowired
	private SessionFactory sesFact;

	@Override
	public void createVotebyUser(Vote vote) {
		sesFact.getCurrentSession().save(vote);
	}
	
	@Override
	public void deleteVoteByPostId(int postid) {
		Posts post = (Posts) sesFact.getCurrentSession().get(Posts.class, postid);
		System.out.println(post);
		
		sesFact.getCurrentSession().delete(post);
		sesFact.getCurrentSession().flush();		
	}
	
	@Override
	public List<Vote> selectAllVote(int voteId) {
		System.out.println("getting all posts..");
		List<Vote> votes = sesFact.getCurrentSession().createQuery("from Vote where user_id ='"+ voteId +"'", Vote.class).list();
		return votes;
	}
}
