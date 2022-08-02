# Directory(Folder) Structure
아래 `kimcode`, `leecode`와 같이 각 팀원별로 각자의 이름에 맞는 폴더를 생성하여 기존 저스트그램 코드를 옮겨둡니다.
```
kimcode/
├─ data/
│  ├─ feeds.json
│  ├─ profiles.json
├─ style/
│  ├─ common.css
│  ├─ login.css
│  ├─ main.css
├─ js/
│  ├─ login.js
│  ├─ main.js
├─ login.html
├─ main.html
leecode/
├─ data/
│  ├─ feeds.json
│  ├─ profiles.json
├─ style/
│  ├─ common.css
│  ├─ login.css
│  ├─ main.css
├─ js/
│  ├─ login.js
│  ├─ main.js
├─ login.html
├─ main.html
```

# JUSTGRAM UI Mission

> 💡 순서에 맞게 vanilla 환경에서 스타벅스 클론 프로젝트에 필요한 UI를 생성하는 과제입니다.

## [Mission 1] 로그인 페이지 레이아웃

### 관련파일

- HTML: login.html
- CSS: style/login.css

### 디자인

구현해야할 로그인 페이지는 실제 instagram 로그인 부분과 유사합니다.

- 로그인 페이지 이미지

<img width="366" alt="login" src="https://user-images.githubusercontent.com/20152376/182086903-f49b04a3-baf5-48a9-b265-e67231534c24.png">

- instagram 사이트 로그인 페이지를 참고하여 로그인 영역만 개발합니다.
- 아이콘은 flaticon 사이트를 이용해 다운받아 사용해 주세요.
  - 🖇️ [아이콘 링크](https://www.flaticon.com/free-icon/instagram_1384031?related_item_id=1384031&term=instagram)
- instagram 로고는 아래의 폰트를 이용해 'justgram'으로 작성해주세요.
  - 🖇️ [폰트 링크](https://fonts.google.com/specimen/Lobster?preview.text=&preview.text_type=custom)

### HTML 작성

디자인 이미지를 보면서 다음 요구사항에 맞게 HTML을 작성해주세요.  
(로그인 되지 않은 [https://www.instagram.com/](https://www.instagram.com/) 화면을 참고하셔도 괜찮습니다. 🙂 )

- 로그인 전체를 감싸고 border가 적용된 div 태그
- 폰트를 변경한 'justgram'이 들어간 로고
- 로그인 입력칸 input 태그
  - type은 text와 password 사용
  - placeholder 속성 사용 → "전화번호, 사용자 이름 또는 이메일", “비밀번호”
- 로그인 버튼 button 태그
  - disabled 속성 사용 → 버튼 비활성화

### CSS 작성

HTML 작성 단계가 끝났다면, css 파일을 작성하여주세요.

## [Mission 2] ID, PW 입력 시 로그인 버튼 활성화 기능

### 관련파일

- HTML: login.html
- JS: js/login.js

### 입력 이벤트 등록

Input 요소(Element)에 이벤트를 등록하여 글자 변화를 감지하게 만들어주세요.

- 요소에 addEventListener로 이벤트 등록
- ID 입력칸과(AND) PW 입력칸에 글자가 하나라도 들어가면 로그인 버튼 활성화

## [Mission 3] 메인 페이지 레이아웃

### 관련파일

- HTML: main.html
- CSS: style/main.css

### 디자인

구현해야할 메인 페이지는 실제 instagram 메인페이지와 거의 비슷한 디자인입니다.

- 디자인 이미지

<img width="834" alt="main" src="https://user-images.githubusercontent.com/20152376/182087141-4c99dc28-195a-462e-ad91-d160a807c4a7.png">

- 우측 메뉴 아이콘은 아래 주소를 사용해주세요.
  - 탐색: [https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png](https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png)
  - 하트: [https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png](https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png)
  - 마이: [https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png](https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png)
- 피드 사진, 프로필 사진
  - 개인이 가지고 있는 사진 활용
  - 혹은 무료 이미지 사이트 [Unsplash](https://unsplash.com/) 활용
    - 저작권 문제가 발생할 수 있사오니 타 이미지보다는 Unsplash 사이트를 이용해주세요!

### HTML 작성

디자인 이미지를 보면서 다음 요구사항에 맞게 HTML을 작성해주세요.  
(로그인 된 [https://www.instagram.com/](https://www.instagram.com/) 화면을 참고하셔도 괜찮습니다. 🙂 )

- 헤더 부분
  - 아이콘, 로고, 검색창, 탐색, 하트, 마이는 적절한 tag를 사용해서 구현
- 피드 부분
  - 크게 4가지 div로 나누어서 진행
    - 피드 헤더, 피드 사진, 메뉴바, 댓글 부분
  - 피드는 3개 이상 나타나게 구현

### CSS 작성

HTML 작성 단계가 끝났으면 이제 css 파일을 작성하여주세요.

## [Mission 4] 댓글 내용 입력 후 Enter 키 입력, 게시 버튼 클릭 시 댓글 추가 기능

### 관련파일

- HTML: main.html
- JS: js/main.js

### 댓글 입력 함수 작성

- Enter 이벤트, 버튼 클릭 이벤트에서 사용할 댓글 입력 함수 작성
- 작성 내용, 작성자 매개변수로 받기
  - function writeComment(content, writer) { … }

### 입력칸 Enter 이벤트 등록

- 요소에 addEventListener로 이벤트 등록
- 피드가 3개 이상 있는 것에 유의하며 이벤트를 등록
  - hint: forEach 메소드 활용

### 게시 버튼 클릭 이벤트 등록

- 요소에 addEventListener로 이벤트 등록
- 피드가 3개 이상 있는 것에 유의하며 이벤트를 등록
  - hint: forEach 메소드 활용

## [Mission 5] feed mock data fetch 후 UI 그리기

### 관련파일

- HTML: main.html
- JS: js/main.js
- JSON: data/feeds.json

### ui 동적 처리

- [Mission 3](https://www.notion.so/Project-JUSTGRAM-UI-876b6ef09ccb4058b918f91744f5db8b) 에서 publishing 한 레이아웃을 mock 데이터를 통해 html 을 동적으로 생성하게 만들어주세요.
- 순차 단계
  - json mock data fetch 하기
  - 받은 데이터 forEach 로 순회
  - [element.append 를 이용하여 html 동적으로 생성하기](https://www.notion.so/2e2b591559094d858476fcabcb183245)

---

> 🗣️ 아래는 추가 미션입니다. 정식 리뷰는 하지 않으니 개별적으로 진행하시면 되겠습니다.

## [Mission 6] ID, PW validation

### 관련파일

- HTML: login.html
- JS: js/login.js

### 유효성 검증 함수 작성

- [Mission 2](https://www.notion.so/Project-JUSTGRAM-UI-876b6ef09ccb4058b918f91744f5db8b) 에서 등록된 이벤트에 사용할 유효성 검증 함수 작성
- 실제 로그인 하는 경우를 생각하며 **validation(유효성 검사)** 기능을 추가해주세요.
- 유효성 검증에 따른 버튼 활성화 분기
- ex) id >>> '@' 포함 / pw >>> 5글자 이상

## [Mission 7] 댓글 좋아요 / 삭제 기능

### 관련파일

- HTML: main.html
- JS: js/main.js

### 댓글 좋아요 기능 구현

- 댓글 우측에 나타나는 하트 클릭시 하트 색 변경
- 색이 차있으면 → 색 없애기, 색이 없으면 → 색 채우기

### 댓글 삭제 기능 구현

- 댓글 우측에 나타나는 삭제 버튼(없을시 생성) 클릭시 댓글 없어지게 하기
- (선택) Alert 활용하여 confirm(정말 삭제하시겠습니까?, 예 / 아니오) 단계 넣기
- hint: [MDN | ChildNode.remove()](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove)

## [Mission 8] 아이디 검색 기능

### 관련파일

- HTML: main.html
- JS: js/main.js
- JSON: data/profiles.json

### 디자인 이미지

사진과 데이터가 달라도 괜찮습니다.

![90870020-fc605e00-e3d3-11ea-9e85-f73e16941710](https://user-images.githubusercontent.com/20152376/182087489-68b872b0-4cc6-40f2-8feb-787e8a689f4d.png)

### ui 동적 처리

- profiles.json 데이터를 fetch 하여 검색이 가능하게 만들어주세요.

## [Mission 9] nav 프로필 사진 클릭 시 메뉴 박스 생성

### 관련파일

- HTML: main.html
- CSS: css/main.css
- JS: js/main.js

### 디자인 이미지

![90870746-fae36580-e3d4-11ea-929d-135d86f87e60](https://user-images.githubusercontent.com/20152376/182087455-c9f38d2b-eb4f-4280-b105-44676a82a718.png)

### 프로필 버튼, 저장됨 버튼, 설정 버튼

- 클릭 시 아무 일도 일어나지 않아도 괜찮습니다.

### 로그아웃 버튼

- 클릭시 로그인 페이지로 이동하여주세요.

## [Mission 10] 반응형 구현

### 관련파일

    - HTML: main.html
    - JS: js/main.js

### 반응형 구현

- HTML, CSS repl.it 문제에서 **Responsive Web(반응형 웹)** 에 대해 학습하였습니다.
- 화면의 크기가 특정 지점(**break point**) 이하로 줄어들시 자동으로 맞춰지게 구현하여주세요.
- 참고) [MDN | @media](https://developer.mozilla.org/ko/docs/Web/CSS/@media)
