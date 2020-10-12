package com.controller;

import java.io.IOException;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.dao.PostRepo;
import com.dao.VoteRepo;
import com.models.Posts;
import com.models.User;
import com.models.Vote;

@Controller("PostController")
@RequestMapping(value = "/post")
@CrossOrigin(origins = "http://d2833sfl28pbuq.cloudfront.net") //will change 
public class PostController {
	
	@Autowired
	private PostRepo postRepo;
	
	@Autowired
	private VoteRepo voteRepo;
	
	@GetMapping(value= "/getPosts/{userid}")
	public @ResponseBody List<Posts> getPostbyId(@PathVariable String userid) {
		return postRepo.selectPostsbyUserId(userid);
	}

	
	@GetMapping(value = "/selectAllPosts", produces="application/json")
	public @ResponseBody List<Posts> selectAllPosts(){
		
		List<Posts> posts = postRepo.selectAllPosts();
//		System.out.println("Retrieving all posts.... " + posts);
		
		return posts;
		
	}
	
	@GetMapping(value = "/getUsername/{postid}", produces="application/json")
	public @ResponseBody User getUsername(@PathVariable int postid){
		
		User user = postRepo.getPostUsername(postid);
//		System.out.println("Retrieving all posts.... " + posts);
		
		return user;
		
	}


	@PostMapping(value = "/createPost")
	public @ResponseBody String createPost(@RequestBody Posts post) throws IOException{
		
//		System.out.println("Creating new IMAGE post " );
//		System.out.println(post.getImage());
		
//		byte[] img = compressBytes(file.getBytes());	          
//		post.setImage(img);
		postRepo.createPost(post);
//		@RequestParam("image") MultipartFile file 
		
		return "";
		
	}
	

	
	@PutMapping(value = "/posts/updatePost/{postid}")
	public ResponseEntity<Posts> updatePost (@PathVariable int postid , @RequestBody Posts post) {
		
		System.out.println("Updating post.....");
		
	
		Posts updatedPost = postRepo.updatePost(postid , post);
		return new ResponseEntity<Posts>(updatedPost, HttpStatus.OK) ;
		
		
	}
	
	
	@DeleteMapping(value = "/posts/deletePost/{postid}")
    public ResponseEntity<Void> deletePost(@PathVariable int postid) {
		
		System.out.println("Deleting post....");

//		
//		if (post == null)
//			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		
		postRepo.deletePost(postid);
		System.out.println(postid);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
	
	
	   // compress the image bytes before storing it in the database
//	    public static byte[] compressBytes(byte[] data) {
//	        Deflater deflater = new Deflater();
//	        deflater.setInput(data);
//	        deflater.finish();
//	        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
//	        byte[] buffer = new byte[1024];
//	        
//	        while (!deflater.finished()) {
//	            int count = deflater.deflate(buffer);
//	            outputStream.write(buffer, 0, count);
//	        }
//	        try {
//	            outputStream.close();
//	        } catch (IOException e) {
//	        }
//	        System.out.println("Compressed Image Byte Size - " + outputStream.toByteArray().length);
//	
//	        return outputStream.toByteArray();
//	    }
//	
//	public static void main(String[] args) {
//		
//		PostController PC = new PostController();
//		PC.deletePost(0, null);
//		
//	}

	@PutMapping(value = "/posts/upvotePost/{userId}")
    public ResponseEntity<Void> upVotePost(@PathVariable int userId, @RequestBody Posts post ) {
		/*
		 * change db so that these 2 table are relational
		 */
		Vote vote = new Vote(0,userId,post.getId(),post.getUpvote(), post.getDownvote());		
		voteRepo.createVotebyUser(vote);
		postRepo.increaseUpvotes(post.getId(), post.getUpvote());
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
	@PutMapping(value = "/posts/downvotePost/{userId}")
    public ResponseEntity<Void> downVotePost(@PathVariable int userId, @RequestBody Posts post) {
		
		System.out.println("Updating down vote post.... "+ userId);	
		Vote vote = new Vote(0,userId,post.getId(),post.getDownvote(), post.getDownvote());
		
		voteRepo.createVotebyUser(vote);
		postRepo.increaseDownVotes(post.getId(), post.getDownvote());
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
	@GetMapping(value = "/selectAllVotes/{userId}", produces="application/json")
	public @ResponseBody List<Vote> selectAllVotes(@PathVariable int userId){
		System.out.println(userId);
		List<Vote> votes = voteRepo.selectAllVote(userId);
		System.out.println(votes);
//		System.out.println("Retrieving all posts.... " + posts);
		return votes;	
	}

}
