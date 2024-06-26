# 펫 용품 웹사이트 클론코딩 :dog:

- 디자이너로부터 figma 를 사용한 웹 사이트 시안을 받았다.
- HTML, CSS, JS 를 작성해보자.

## :gem: 사용한 기술

![html5](https://img.shields.io/badge/html5-E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white)
![css3](https://img.shields.io/badge/css3-1572B6.svg?&style=for-the-badge&logo=css3&logoColor=white)
![javascript](https://img.shields.io/badge/javascript-F7DF1E.svg?&style=for-the-badge&logo=javascript&logoColor=white)
![swiper](https://img.shields.io/badge/swiper-6332F6.svg?&style=for-the-badge&logo=swiper&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837.svg?&style=for-the-badge&logo=npm&logoColor=white)

## :airplane: 결과

[시안출처] : <https://www.figma.com/community/file/1342046467033602215/free-business-website-for-pets>

[구현링크] : <https://leedbswo107.github.io/petSuppliesWebClone/>

<img src="./petSuppliesWebClone.png" width="50%"/>

## :clipboard: 구현할 기능 목록

- 반응형으로 디자인 적용.
- 자동 슬라이드 효과 적용.
- 마우스 호버 이펙트를 적용.
- 스크롤에 따른 효과 적용(ex : header 속 두개의 요소 중 하나가 스크롤에 따라 사라지게 구현)

## :warning: 해결해야하는 부분

| 문제 사진                        | 문제 내용                                                                                    | 해결                                                                                                                                               |
| -------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="./img/problem1.jpeg"/> | review section <b>리뷰의 높이(height)</b> 에 맞게 버튼의 height값이 변하게 구현              | autoHeight 추가                                                                                                                                    |
| <img src="./img/problem3.png"/>  | 상단 브랜드 로고 슬라이드의 속도가 일정하게 구현                                             | swiper-wrapper 속 transition-timing-function 값을 linear로 변경                                                                                    |
| <img src="./img/problem2.png"/>  | <b>top 버튼속 arrow 이미지</b>가 자연스럽게 사라지게 구현                                    | style을 css에서 미리 클래스화 하여 그것을 JS로 컨트롤                                                                                              |
| <img src="./img/problem4.png"/>  | <b>header의 utilHeader</b> 영역이 스크롤하면 사라지게 구현                                   | window의 프로퍼티 scrollY와 innerHeight를 이용한 조건문을 통한 제어                                                                                |
| <img src="./img/problem5.png"/>  | <b>mobile 환경</b>에서 햄버거 버튼 클릭시 header의 utilHeader 영역이 상단을 가리지 않게 구현 | ham 요소 클릭 이벤트 발생시 utilHeader의 높이를 제어해 안 보이게 하는 기능 추가 ham 요소 클릭 후 열린 gnb 의 z-index 값을 top 보다 높여버려도 가능 |

## :file_folder: 파일 구조 및 파일명

- :open_file_folder: petSuppliesWebClone
  - :memo: index.html
  - :open_file_folder: img
  - :open_file_folder: js
    - :memo: common.js
    - :memo: svgfiles.js
    - :memo: swiper.js
  - :open_file_folder: css
    - :open_file_folder: header
      - :memo: gnb.css
      - :memo: utilHeader.css
    - :open_file_folder: main
      - :memo: sec1_mainVisual.css
      - :memo: sec2_brands.css
      - :memo: sec3_introduce.css
      - :memo: sec4_newArrivals.css
      - :memo: sec5_category.css
      - :memo: sec6_review.css
      - :memo: sec7_ad.css
      - :memo: sec8_brandComments.css
      - :memo: sec9_founderComments.css
      - :memo: sec10_designProducts.css
      - :memo: sec11_enterEmail.css
    - :open_file_folder: footer
      - :memo: foot.css
    - :memo: common.css
    - :memo: cssLink.css
    - :memo: my_reset.css

## :book: 커밋 컨벤션

- 자주 사용하는 태그 종류
  - feat : 새로운 기능을 추가하는 경우
  - fix : 버그를 고친경우
  - docs : 문서를 수정한 경우
  - style : 코드 포맷 변경, 세미콜론 누락, 코드 수정이 없는경우
  - refactor : 코드 리펙토링
  - test : 테스트 코드. 리펙토링 테스트 코드를 추가했을 때
  - chore : 빌드 업무 수정, 패키지 매니저 수정
  - design : CSS 등 사용자가 UI 디자인을 변경했을 때
  - rename : 파일명(or 폴더명) 을 수정한 경우
  - remove : 코드(파일) 의 삭제가 있을 때. "Clean", "Eliminate" 를 사용하기도 함
- 기타 태그 타입들
  - add : 코드나 테스트, 예제, 문서등의 추가 생성이 있는경우
  - Improve : 향상이 있는 경우. 호환성, 검증 기능, 접근성 등이 될수 있습니다.
  - implement : 코드가 추가된 정도보다 더 주목할만한 구현체를 완성시켰을 때
  - move : 코드의 이동이 있는경우
  - updated : 계정이나 버전 업데이트가 있을 때 사용. 주로 코드보다는 문서나, 리소스, 라이브러리등에 사용합니다.
  - comment : 필요한 주석 추가 및 변경

## 참고 사이트

[swiper] <https://swiperjs.com/>  
[mdn] <https://developer.mozilla.org/ko/>
