package com.models;

import java.util.Arrays;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;





@Entity
@Table(name = "images")
public class Image {
	
	@Id
	@Column(name = "id")
	private int id;
	
	
	@Column(name = "image")
	private byte[] bytea;
	


	public Image() {
		super();
		// TODO Auto-generated constructor stub
	}

	

	public Image(int id, byte[] bytea) {
		super();
		this.id = id;
		this.bytea = bytea;
	}


	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	

	public byte[] getBytea() {
		return bytea;
	}


	public void setBytea(byte[] bytea) {
		this.bytea = bytea;
	}



	@Override
	public String toString() {
		return "Image [id=" + id + ", bytea=" + Arrays.toString(bytea) + "]";
	}



	
	
}
