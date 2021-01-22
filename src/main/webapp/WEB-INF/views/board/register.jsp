<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<title>Board</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<meta name="description" content="" />
		<meta name="keywords" content="" />
		<link rel="stylesheet" href="/resources/assets/css/main.css" />
	</head>
	<body class="is-preload">
		<!-- Main -->
			<div id="main">
				<div class="wrapper">
					<div class="inner">

						<!-- Elements -->
							<header class="major">
								<h1>Board</h1>
								<p>게시글 등록</p>
							</header>
									<!-- Table -->
										<h3><a href="/board/list${cri.getListLink()}" class="button small">목록 보기</a></h3>
						<div class="content">
							<div class="form">
								<form method="post" action="/board/register" id="registForm">
									<div class="fields">
										<div class="field">
											<h4>제목</h4>
											<input name="title" placeholder="Title" type="text" />
										</div>
										<div class="field">
											<h4>내용</h4>
											<textarea name="content" rows="6" placeholder="Content" style="resize:none"></textarea>
										</div>
										<div class="field">
											<h4>작성자</h4>
											<input name="writer" placeholder="Writer" type="text" />
										</div>
									</div>
									<ul class="actions special">
										<li><input type="submit" class="button" value="등록" /></li>
									</ul>
								</form>
							</div>
										</div>
								</div>
							</div>
						</div> 
		<!-- Scripts -->
			<script src="/resources/assets/js/jquery.min.js"></script>
			<script src="/resources/assets/js/jquery.dropotron.min.js"></script>
			<script src="/resources/assets/js/browser.min.js"></script>
			<script src="/resources/assets/js/breakpoints.min.js"></script>
			<script src="/resources/assets/js/util.js"></script>
			<script src="/resources/assets/js/main.js"></script>
	</body>
	
	<script>
		window.onpageshow = function(event){
				//현재 페이지를 뒤로가기 접근했을 때
			if(event.persisted  || window.performance && window.performance.navigation.type == 2){
				alert("만료된 페이지입니다.");
				history.forward();
			}			
		}
	</script>
	
</html>







