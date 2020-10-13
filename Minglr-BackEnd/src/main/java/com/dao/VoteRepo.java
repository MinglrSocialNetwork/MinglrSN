package com.dao;

import java.util.List;

import com.models.Vote;

public interface VoteRepo {
	public void createVotebyUser(Vote vote);
	
	public void deleteVoteByPostId(int postid);
	
	public List<Vote> selectAllVote(int voteId);
}
