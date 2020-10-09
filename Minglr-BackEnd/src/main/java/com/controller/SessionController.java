package com.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.models.User;

@Controller("SessionController")
@RequestMapping(value="/sessions")
@CrossOrigin(origins="http://localhost:4200", allowCredentials="true")
public class SessionController {
	
	@PostMapping(value = "login")
	public @ResponseBody void login(HttpServletRequest req,@RequestBody User user) {
		
		HttpSession session = req.getSession();
	
		session.setAttribute("loggedInUser", user);
		
		  System.out.println(session.getAttribute("loggedInUser")); 
		  User lg = (User) session.getAttribute("loggedInUser"); 
//		  System.out.println(lg.getFirstName());
//		  System.out.println(lg.getUserName()); 
//		  System.out.println(lg.getPassword());
//		  System.out.println(lg.getId());
	}
	
	@PostMapping(value = "logout", produces = "application/json")
	public @ResponseBody void logout(HttpSession session) {
		System.out.println("for it to run on angular it has to run on java");
		session.invalidate();
	}
	
	@GetMapping(value = "getLoggedInfo", produces = "application/json")
	public @ResponseBody User getLoggedInUser(HttpSession session) {
		System.out.println("i'm inside here");
	
		User currentUser = (User) session.getAttribute("loggedInUser");
		
		if(currentUser == null) {
			currentUser = new User(100, "wack", "user", "false", "dumbass");
			System.out.println(currentUser);
		} else {
			System.out.println(currentUser);
		}
		
		return currentUser;
		//List<User> cUser= (List<User>) currentUser;
		//return cUser;
	}
}
