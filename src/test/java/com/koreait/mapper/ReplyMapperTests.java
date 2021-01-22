package com.koreait.mapper;

import java.util.List;
import java.util.stream.IntStream;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;

import com.koreait.domain.Criteria;
import com.koreait.domain.ReplyVO;

import lombok.Setter;
import lombok.extern.log4j.Log4j;

//SpringRunner는 SpringJUnit4ClassRunner의 자식이며 4.3버전 이상부터 사용 가능한 확장판이다.
@RunWith(SpringRunner.class)
@ContextConfiguration("file:src/main/webapp/WEB-INF/spring/root-context.xml")
@Log4j
public class ReplyMapperTests {
	
	@Setter(onMethod_ = @Autowired)
	private ReplyMapper mapper;
	
//	@Test
//	public void testMapper() {
//		log.info(mapper);
//	}
	
	private Long[]bno = {2637983L, 2637982L, 2637981L, 2637980L, 2637979L};
	
//	@Test
//	public void testInsert() {
//		//5개의 최신 게시글에 2개씩 댓글 달기
//		//IntStream
////		for (int i = 0; i < bno.length; i++) {
////			ReplyVO reply = new ReplyVO();
////			for (int j = 0; j < 2; j++) {
////				reply.setBno(bno[i]);
////				reply.setReply("안녕");
////				reply.setReplier("브라이언");
////				mapper.insert(reply);
////			}
////		}
//		
//		IntStream.rangeClosed(1, 10).forEach(i->{
//			ReplyVO reply = new ReplyVO();
//			
//			//12340 12340
//			reply.setBno(bno[i % 5]);
//			reply.setReply("댓글 테스트" + i);
//			reply.setReplier("replier" + i);
//			mapper.insert(reply);
//			
//		});
//	}
	
//	@Test
//	public void testRead() {
//		log.info(mapper.read(12L));
//	}
	
//	@Test
//	public void testDelete() {
//		log.info(mapper.delete(11L));
//	}
	
//	@Test
//	public void testUpdate() {
//		ReplyVO reply = new ReplyVO();
//		reply.setRno(12L);
//		reply.setReply("수정된 댓글");
//		
//		log.info(mapper.update(reply));
		
//		Long targetRno = 10L;
//		ReplyVO reply = mapper.read(targetRno);
//		reply.setReply("Update Reply");
//		
//		int count = mapper.update(reply);
//		log.info("UPDATE COUNT : " + count);
//	}
	
//	@Test
//	public void testList() {
//		Criteria cri = new Criteria();
//		
//		List<ReplyVO> replies = mapper.getListWithPaging(cri, bno[2]);
//		replies.forEach(reply->log.info(reply));
//	}
	
	
	
}















