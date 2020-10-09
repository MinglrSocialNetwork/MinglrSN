package com.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.models.User;

@Controller("SessionController")
public class SessionController {
	
	@PostMapping(value = "login", produces = "application/json")
	public @ResponseBody String login(HttpServletRequest req) {
		HttpSession session = req.getSession();
		
		User incomingUser = new User(0, "a", "b", "c", "d");
		
		session.setAttribute("loggedInUser", incomingUser);
		
		return "Logged in";
	}
	
	@PostMapping(value = "logout", produces = "application/json")
	public @ResponseBody String logout(HttpSession session) {
		
		session.invalidate();
		
		return null;
		
		
	}
	@PostMapping(value = "getLoggedInfo")
	public @ResponseBody User getLoggedInUser(HttpSession session) {
//		
//		User currentUser;
//		
//		currentUser = (User) session.getAttribute("loggedInUser");
//		
////		if (currentUser == null) {
////			currentUser = new User ("invalid user")
////		}
//		
		
		return null;
		
	}
}
