# 원티드 프리온보딩 프론트엔드 사전 선발 과제

## 🔷 최종 구현 영상

<img src="https://user-images.githubusercontent.com/97580860/186359729-a28c457c-a637-4ca5-901e-d98895561771.gif" alt="데모 영상" />


---

## 🔷 프로젝트 실행 방법

```
git clone https://github.com/joohe71/wanted-pre-onboarding-fe.git
cd front
yarn install
yarn start
```


---

## 🔷 구현 기능
- 로그인/회원가입 페이지

- todo list 페이지
    - 로그아웃 버튼
    - 할 일 추가 버튼
    - 할 일 목록 (+ check box)
    - 수정/삭제 버튼

- 할 일 추가 및 수정 폼


---

## 🔷 기술 스택
- React : 컴포넌트 재사용 등으로 인한 유지보수가 쉽고 개발 생태계가 가장 잘 활성화

- TypeScript : 타입을 적어 줌으로써 Props, API연결에서 생기는 타입 에러를 미리 막을 수 있음

- Axios : 브라우저 호환성 과 편의성을 제공

- Styled-components : CSS in JS 로 관리 용이 및 자유로운 커스텀과 props로 스타일 구분 가능

- mui :  React UI 컴포넌트의 라이브러리로 디자인 시스템을 쉽게 구현 가능


---

## 🔷 폴더 구조
```
📦src
 ┣ 📂api
 ┃ ┗ 📜Api.tsx
 ┣ 📂auth
 ┃ ┣ 📜Login.tsx
 ┃ ┗ 📜SignUp.tsx
 ┣ 📂hooks
 ┃ ┣ 📜useLogin.tsx
 ┃ ┗ 📜useSignUp.tsx
 ┣ 📂layout
 ┃ ┣ 📜Footer.tsx
 ┃ ┗ 📜Header.tsx
 ┣ 📂router
 ┃ ┣ 📜ProtectedRoute.tsx
 ┃ ┗ 📜Root.tsx
 ┣ 📂style
 ┃ ┗ 📜GlobalStyle.tsx
 ┣ 📂todo
 ┃ ┣ 📜ToDo.tsx
 ┃ ┣ 📜ToDoAddForm.tsx
 ┃ ┣ 📜ToDoEditForm.tsx
 ┃ ┗ 📜ToDoList.tsx
 ┣ 📜App.tsx
 ┣ 📜index.tsx
 ┗ 📜ToDoSkeleton.tsx
```
