package com.dao;

import java.util.List;

import com.models.Image;


public interface ImageRepo {
	
	public List<Image> selectAllImage();
}
