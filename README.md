<img width="100%" alt="image" src="https://user-images.githubusercontent.com/78010896/161050917-86632f8e-2dd3-42a0-98a7-4760ead73b18.png">

# 💊 BBIYAK

약은 BBIYAK!

어떤약인지 궁금하다면?

약을 까먹지 않고 먹어야 한다면?

BBIYAK에게 부탁해 보세요!

## Motivation

약이 필요한데 집에 뒤섞여 있는 먹고 남은 약들 중에 필요한 약이 있는지 모르겠어서 답답했던 경험이 있으신가요?

매일 먹는 영양제, '오늘 내가 영양제를 먹었나??' 헷갈리신적이 있으신가요?

어떤 약인지 찾아주고, 약이나 영양제 섭취를 잊지 않도록 도와주는 서비스가 있으면 좋을것 같다는 생각에 두가지 기능을 결합한 BBIYAK을 만들어 보았습니다.

## Features

<img width="200" alt="image" src="https://user-images.githubusercontent.com/78010896/161048913-876c5319-e557-4e93-a175-46c8492fd44d.jpg"><img width="200" alt="image" src="https://user-images.githubusercontent.com/78010896/161049169-cead5e54-d4df-4abe-bd89-9db4679e45db.jpg"><img width="200" alt="image" src="https://user-images.githubusercontent.com/78010896/161049079-47bf65c8-bc97-417d-9d2d-3708a4082e69.jpg"><img width="200" alt="image" src="https://user-images.githubusercontent.com/78010896/161049448-1db8ff14-a1f6-43bb-9255-dba1526aa026.jpg">

 📌 약의 사진을 찍어 약을 검색할 수 있습니다.

 📌 약의 식별문자, 이름을 입력해서 검색할 수 있습니다.

 📌 약의 형태를 알고있는 경우 약의 색, 모양, 형질을 통해 약을 검색할 수 있습니다.

 📌 요일에 따라 약 또는 영양제를 섭취하도록 알려줄 알람을 등록할 수 있습니다.

 📌 등록할 알람을 확인하거나 삭제할 수 있습니다.

## 📱 App

### Google Play Store

 👉 **https://play.google.com/store/apps/details?id=com.bbiyak**

## 📅 Schedule

기획 : 2022/2/21 ~ 2022/2/27 (1주간)

 💡 아이디어 및 기술 검증

개발 : 2022/2/28 ~ 2020/3/13 (2주)

 🛠 기능 구현 / UI / 배포

## 🖥 Tech Stack

### Frontend

- React-Native(React-Native-CLI)
- Redux
- OCR(React-Native-Text-Recognition)
- Camera
- Push notification
- React-Native-Testing-Library

### Convention

- prettier
- eslint

## 🔥 Why?
### Why React Native

이번 프로젝트는 간편하게 약을 검색할 수 있는 기능을 제공하는 것이 주요 목표 기능 중 하나였기 때문에 고민 없이 모바일 앱으로 만들기로 했습니다. 

그리 길지 않은 시간 안에 내용을 기획하고 구현하기 위해서는 가장 익숙한 언어를 사용하는 것이 좋을 것이라고 생각했습니다. 지금까지 Javascript, React를 활용한 개발을 진행해 왔고, React Native가 굉장히 널리 사용되는 프레임워크이기 때문에 여러 부분에 대한 토론도 활발할뿐더러 공식문서도 굉장히 친절하고 상세히 설명되어있어 이번 프로젝트에 사용했습니다.

React Native를 사용해보니 로직 작성에 대한 부분은 React를 사용할 때와 크게 다른 부분을 느끼지 못했습니다. Hook을 사용하거나 Redux를 사용하여 상태관리를 하는 부분도 익숙한 방법으로 앱 개발을 할 수 있다는 부분이 너무 편리하게 느껴졌습니다. 차이를 느꼈던 것은 View 부분을 작성할 때 HTML이 아닌 React Native 전용 component를 사용해서 작성한다는 것과 UI 작업을 하는 부분이었는데 처음에는 적응하기 위해 조금 시간이 필요하긴 했지만 어느 정도 익숙해지고 나니 일차적인 맞춤 작업이 끝난 도구를 사용하는 느낌이 들어 오히려 더 편리하다고 느꼈습니다. 제가 사용을 고려했던 컴포넌트 중 일부는 사용하는 방법을 새로 익혔어야 했지만, 마찬가지로 한 번 익히고 나면 훨씬 더 편리하지 않을까 싶습니다. 또한 React에는 없던 Stack 개념 때문에 component unmount가 조금 다르게 적용되는 부분이 있었던 것 정도가 제가 느꼈던 React와의 차이점이었습니다.

React 문법을 알고 있는 상태에서 앱 개발을 하기를 원할 때 큰 러닝커브 없이 빠르게 적응해서 사용할 수 있고 UI 작업이 매우 편리하다는 점이 제가 직접 느낀 React Native의 큰 장점이 아닐까 싶습니다. 하지만 저의 경우 코드를 작성하고 구현하는 부분보다는 개발 환경적인 부분에서 생각 외로 시간이 많이 소비되었는데요, 이 부분은 아래 React Native CLI 항목에서 기술하겠습니다.

### Why React Native CLI

React Native로 개발을 시작하는 방법에 Expo CLI, React Native CLI가 있다는 것을 알고 조사를 해본 결과 Expo CLI로 개발해도 결국 eject를 해야 할 가능성이 크다는 점, React Native CLI가 개발자가 원하는 기능 및 다양한 요소를 제어할 수 있다는 점 때문에 React Native CLI를 선택했습니다.

React Native CLI를 선택하면서 걱정했던 부분이기는 하지만 개발 환경을 세팅하면서 낯선 파일들을 수정해야 하는 일이 많았는데 여기에서 발생한 문제들을 해결하는 데에 예상한 것보다 많은 시간을 소비하였습니다. 처음 하는 작업이었던 탓도 있었겠지만 코드 작성을 할 때 와는 다르게 디버깅 자체가 거의 불가능한 상황이어서 문제를 파악하는 자체에도 시간이 많이 투자되었습니다. 이 과정에서 Expo CLI를 사용해서 개발했다면 이러한 시간을 줄여서 프로젝트의 기능 개발에 더 집중할 수 있지 않았을까 하는 아쉬운 마음도 들었지만, 프로젝트를 끝낸 시점에서 보면 시간을 투자한 만큼 React Native에 대해 더 공부할 수 있었던 기회였다고 생각합니다. 저의 경우 아직 네이티브 언어를 활용하지 못해 다양하게 사용해보지는 못했지만, 카메라 사용 권한, 알림 기능 권한 등을 사용하고 Gradle 빌드 설정을 맞춰주는 등의 설정을 직접 할 수 있었고 개발자의 능력과 의도에 따라 확장성을 제어할 수 있다는 점이 큰 장점으로 여겨졌습니다.

이번 프로젝트에서 React Native CLI의 장점을 충분히 활용했다는 느낌이 들지는 않지만 이에 대해 공부할 기회가 되었던 것 같고, 주어진 도구를 십분 활용하기 위해 더 노력해야겠다는 동기를 느끼게 되었던 좋은 경험이었다고 생각합니다.
