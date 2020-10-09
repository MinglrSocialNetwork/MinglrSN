package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.dao.FriendRepo;
import com.models.Friend;

@Controller
@RequestMapping(value="/friend")
@CrossOrigin(origins="http://localhost:4200")
public class FriendController {

	@Autowired
	private FriendRepo friendRepo;
	
	@GetMapping(value ="/getFriends/{userid}")
	public @ResponseBody List<Friend> getFriends(@PathVariable int userid) {
		return friendRepo.getFriends(userid);
		
	}
	// , consumes="application/json", produces="application/json"
	@PostMapping(value="/addFriend")
	public void addFriend(@RequestBody Friend friend) {
		System.out.println(friend);
		friendRepo.addFriend(friend);
	}
	
	
}