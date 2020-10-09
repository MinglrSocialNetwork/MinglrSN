package com.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.models.Image;

@Transactional
@Repository("ImageRepoImpl")
public class ImageRepoImpl implements ImageRepo {

	@Autowired
	private SessionFactory sesFact;
	
	@Override
	public List<Image> selectAllImage() {
		
		List<Image> Images = sesFact.getCurrentSession().createQuery("from Image", Image.class).list();
		return Images;
	}

}
