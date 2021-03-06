--시퀀스를 생성할 때에는 'SEQ_'로 시작하는 것이 일반적이다.
CREATE SEQUENCE SEQ_BOARD;

--테이블 생성시 'TBL_'로 시작하거나 'T_'와 같이 시작하는 것이 일반적이다.

CREATE TABLE TBL_BOARD(
	BNO NUMBER(10),
	TITLE VARCHAR2(1000) NOT NULL,
	CONTENT VARCHAR2(2000) NOT NULL,
	WRITER VARCHAR2(100) NOT NULL,
	REGDATE DATE DEFAULT SYSDATE,
	UPDATEDATE DATE DEFAULT SYSDATE,
	CONSTRAINT PK_BOARD PRIMARY KEY(BNO)
);

SELECT * FROM TBL_BOARD;

SELECT COUNT(*) FROM TBL_BOARD;


SELECT ROWNUM, BNO, TITLE, CONTENT, WRITER, REGDATE, UPDATEDATE FROM
(SELECT /*+ INDEX_DESC(TBL_BOARD PK_BOARD) */ ROWNUM RN, BNO, TITLE, CONTENT, WRITER, REGDATE, UPDATEDATE 
FROM TBL_BOARD
WHERE
(TITLE LIKE 'B%' OR
CONTENT LIKE 'B%' OR
WRITER LIKE 'B%') 
AND
ROWNUM <= 10)
WHERE RN > 0;


--테이블 생성시 넣는 의미 없는 데이터를 토이 데이터(toy data) 혹은 더미 데이터(dummy data)라고 한다.

INSERT INTO TBL_BOARD (BNO, TITLE, CONTENT, WRITER)
VALUES(SEQ_BOARD.NEXTVAL, '테스트 제목2', '테스트 내용2', '백성민');

INSERT INTO TBL_BOARD (BNO, TITLE, CONTENT, WRITER)
(SELECT SEQ_BOARD.NEXTVAL, TITLE, CONTENT, WRITER FROM TBL_BOARD);
------------------------------------- REPLY ---------------------------------------------------
CREATE TABLE TBL_REPLY(
	RNO NUMBER(10),
	BNO NUMBER(10) NOT NULL,
	REPLY VARCHAR2(2000) NOT NULL,
	REPLIER VARCHAR2(100) NOT NULL,
	REPLYDATE DATE DEFAULT SYSDATE,
	UPDATEDATE DATE DEFAULT SYSDATE
);
ALTER TABLE TBL_REPLY ADD CONSTRAINT PK_REPLY PRIMARY KEY(RNO);
ALTER TABLE TBL_REPLY ADD CONSTRAINT FK_REPLY_BOARD FOREIGN KEY(BNO)
REFERENCES TBL_BOARD(BNO);
DROP TABLE TBL_REPLY;
SELECT * FROM TBL_REPLY WHERE BNO = 5275806;
SELECT * FROM TBL_REPLY;

INSERT INTO TBL_REPLY(RNO, BNO, REPLY, REPLIER, REPLYDATE)

CREATE SEQUENCE SEQ_REPLY;


