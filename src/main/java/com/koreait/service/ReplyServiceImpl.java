package com.koreait.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.koreait.domain.Criteria;
import com.koreait.domain.ReplyPageDTO;
import com.koreait.domain.ReplyVO;
import com.koreait.mapper.ReplyMapper;

import lombok.Setter;
import lombok.extern.log4j.Log4j;

@Service
@Log4j
public class ReplyServiceImpl implements ReplyService {
	
	@Setter(onMethod_= @Autowired)
	private ReplyMapper mapper;
	
	@Override
	public int register(ReplyVO reply) {
		log.info("register......" + reply);
		
		return mapper.insert(reply);
		
	}

	@Override
	public ReplyVO get(Long rno) {
		log.info("get................" + rno);
		
		return mapper.read(rno);
	}

	@Override
	public int modify(ReplyVO reply) {
		log.info("modify.............." + reply);
		
		return mapper.update(reply);
	}

	@Override
	public int remove(Long rno) {
		log.info("remove............" + rno);
		
		return mapper.delete(rno);
	}

	@Override
	public ReplyPageDTO get(Criteria cri, Long bno) {
		log.info("get reply list of board" + bno);
		
		//return mapper.getListWithPaging(cri, bno);
		
		//사용자가 요청한 페이지에 맞는 게시글 List만 전달하게 되면
		//마지막 페이지가 정확하지 않을 수 있다
		//예) 게시글은 총 101개이면 마지막 페이지는 11페이지
		//		하지만 10의 배수로 계산하게 되면 마지막 페이지는 20페이지로 표시된다.
		//		따라서 정확한 마지막 페이지 연산을 위해 댓글 전체 개수도 전달해야 한다.
		//댓글 전체 개수와 해당 페이지 게시글 List를 ReplyPageDTO객체에 담아서 전달한다.
		return new ReplyPageDTO(mapper.getTotal(bno), mapper.getListWithPaging(cri, bno));
	}

}














