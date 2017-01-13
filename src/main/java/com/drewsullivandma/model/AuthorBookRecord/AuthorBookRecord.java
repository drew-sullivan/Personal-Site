package com.drewsullivandma.model.AuthorBookRecord;

import com.drewsullivandma.model.Author.Author;
import com.drewsullivandma.model.Book.Book;

public class AuthorBookRecord {

	private Book book;
	private Author author;
	
	public Book getBook() {
		return book;
	}
	public void setBook(Book book) {
		this.book = book;
	}
	public Author getAuthor() {
		return author;
	}
	public void setAuthor(Author author) {
		this.author = author;
	}
	
	
}
