/**
 *  Javascript의 모듈화
 *  
 *  함수들을 하나의 모듈처럼 묶음으로 구성하는 것을 의미한다. (모듈 -> 함수, 재상요, 부품)
 *  화면 내에서 Javascript 처리를 하다 보면 이벤트 처리와 DOM, Ajax처리 등이
 *  복잡하게 섞여서 유지보수가 힘들다. 따라서 Javascript를 하나의 모듈처럼 구성하여 사용한다.
 *  
 *  a(data){
 *  	결과 : 메소드
 *  	callback(data)
 *  }
 *  
 *  reply modules
 */

console.log("Reply Modules..............");

var replyService = (function(){ //자바는 클래스안에 메소드, 자바스크립트는 Object안에 메소드
	
	//댓글 추가
	//callback, error는 외부에서 전달받을 함수이다.
	//함수의 파라미터 개수를 일치시킬 필요가 없기 때문에
	//사용 시 callback이나 error와 같은 파라미터는 상황에 따라 작성한다.
	function add(reply, callback, error){
		console.log("add reply.......");
		
		$.ajax({
			type : "POST",
			url : "/replies/new",
			data : JSON.stringify(reply), //내가 전송할 데이터
			contentType : "application/json; charset=utf-8",
			success : function(result, status, xhr){
				if(callback){
					console.log(result);
					//외부에서 전달받은 값이 있다면 결과를 해당 함수에 전달하여 사용한다.
					callback(result);
				}
			},
			error : function(xhr, status, er){
				if(error){
					//외부에서 전달받은 값이 있다면 er객체를 전달하여 사용한다.
					error(er);
				}
			}
		});
		
	}
	
	//댓글 목록
	function getList(param, callback, error)	{
		var bno = param.bno;
		
		//var v = a || b : a에 값이 있으면 a를 v에 할당, 없으면 b를 v에 할당
		var page = param.page || 1;
		
		//$.getJSON은 통신 관련 상세 설정은 지원하지 않으나, json데이터를 화면에 뿌려줄 때
		//간결한 소스코드를 활용할 수 있게 해준다.
		
		//컨트롤러에 있는 페이지 목록 조회 메소드를 json 타입으로 호출한다.
		$.getJSON("/replies/pages/" + bno + "/" + page + ".json", 
				function(data){
				//페이지 목록 조회 컨트롤러 메소드의 리턴타입인 ReplyPageDTO를 data로 전달받는다.
					if(callback){
						//전달받은 메소드의 매개변수에 각각 댓글 전체 개수, 요청한 페이지의 게시글 List를 전달해준다.
						callback(data.replyCnt, data.list);
					}
		}).fail(function(xhr, status, er){
			if(error){
				error(er);
			}
		});
		
	}
	
	//댓글 수정
	//rno, reply, bno
	function update(reply, callback, error){
		console.log("RNO : " + reply.rno);
		
		$.ajax({
			type:"PUT",
			url:"/replies/" + reply.rno,
			data: JSON.stringify(reply),
			contentType:"application/json;charset=utf-8",
			success:function(result, status, xhr){
				if(callback){
					callback(result);
				}
			},
			error:function(xhr, status, er){
				if(error){
					error(er);
				}
			}
			
		});
	}
	
	//댓글 삭제
	function remove(rno, callback, error){
		console.log("RNO : " + rno);
		
		$.ajax({
			type:"DELETE",
			url:"/replies/" + rno,
			success:function(result, status, xhr){
				if(callback){
					callback(result);
				}
			},
			error:function(xhr, status, er){
				if(error){
					error(er);
				}
			}
		});
	}
	
	
	//시간처리(당일은 시/분/초, 지난 날은 년/월/일)
	function displayTime(timeValue){

		var today = new Date();
		var replyDate = new Date(timeValue);
		var gap = replyDate.getTime() - today.getTime();
		var gapDay = gap / (24 * 60 * 60 * 1000);
		
		var yearDiff = today.getFullYear() - replyDate.getFullYear();
		console.log("yearDiff : " + yearDiff);
		
		var monthDiff = (today.getMonth() + 1) - (replyDate.getMonth() + 1);
		console.log("monthDiff : " + monthDiff);
		
		var dayDiff = today.getDate() - replyDate.getDate();
		
		console.log("today.getDate() : " + today.getDate());
		console.log("replyDate.getDate() : " + replyDate.getDate());
		console.log("dayDiff : " + dayDiff);
		
		// 12/31  01/01   1 - 12
		// 
		// 1 - 12, 2 - 1, 3 - 2, 4 - 3, 5 - 4, 6 - 5, 7 - 6, 8 - 7, 9 - 8, 10 - 9, 11 - 10, 12 - 11 
		
		if (dayDiff == 0){
			//시/분/초
			var hh = replyDate.getHours();
			var mi = replyDate.getMinutes();
			var ss = replyDate.getSeconds();
			
			return [(hh > 9 ? ' ' : '0') + hh, ':', (mi > 9 ? ' ' : '0') + mi, ":", (ss > 9 ? ' ' : '0') + ss].join(' ');
		}else{
			//년/월/일
			var yy = replyDate.getFullYear();
			var mm = replyDate.getMonth() + 1;
			var dd = replyDate.getDate();
			
			return [yy, '-', (mm > 9 ? ' ' : '0') + mm, ":", (dd > 9 ? ' ' : '0') + dd].join(' ');
			
			
		}
		
		/*if(gap < 1000 * 60 * 60 * 24){
			//시/분/초
			var hh = replyDate.getHours();
			var mi = replyDate.getMinutes();
			var ss = replyDate.getSeconds();
			
			return [(hh > 9 ? ' ' : '0') + hh, ':', (mi > 9 ? ' ' : '0') + mi, ":", (ss > 9 ? ' ' : '0') + ss].join(' ');
		}else{
			//년/월/일
			var yy = replyDate.getFullYear();
			var mm = replyDate.getMonth() + 1;
			var dd = replyDate.getDate();
			
			return [yy, '-', (mm > 9 ? ' ' : '0') + mm, ":", (dd > 9 ? ' ' : '0') + dd].join(' ');
		}*/
		
	}
	
//	return {name : "AAAA"};
	return {add : add, getList : getList, update : update, remove : remove, displayTime : displayTime};	
})();

















