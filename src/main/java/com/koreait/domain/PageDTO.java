package com.koreait.domain;

import lombok.Data;

@Data
public class PageDTO {
	private int startPage;
	private int endPage;
	private int realEnd;
	private boolean prev, next;
	
	private int total;
	private Criteria cri;
	
	public PageDTO(Criteria cri, int total) {
		this.cri = cri;
		this.total = total;
										//Math.ceil : 반올림
		this.endPage = (int)(Math.ceil(cri.getPageNum() / 10.0)) * 10; //밑에 있는 번호 [1] [2] [3] 
		this.startPage = this.endPage - 9;
		
		realEnd = (int)(Math.ceil((total * 1.0) / cri.getAmount()));
		
		if(realEnd < this.endPage) {
			this.endPage = realEnd;
		}
		
		this.prev = this.startPage > 1;
		this.next = this.endPage < realEnd;
	}
	
	
}
