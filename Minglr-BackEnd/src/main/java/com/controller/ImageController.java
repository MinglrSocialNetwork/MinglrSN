package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.dao.ImageRepo;
import com.models.Image;

@Controller
@RequestMapping(value = "/image")
@CrossOrigin(origins = "http://localhost:4200") 
public class ImageController {
	
	@Autowired
	private ImageRepo imageRepo;

	@GetMapping(value = "/selectAllImages")
	public @ResponseBody List<Image> selectAllImages(){
		
		List<Image> images = imageRepo.selectAllImage();
		System.out.println("Image stuff.....");
		return images;
	}
}
