## Youtubue

### Stack

- React
- emotion
- axios
- Material UI
- rapid api
- react-router-dom

---

### npm install --legacy-peer-deps

npm install --legacy-peer-deps는 npm 패키지 관리자에서 사용하는 옵션 중 하나입니다. 이 옵션을 사용하면, npm 7 이상에서 의존성 충돌이 발생할 때 일부 패키지가 설치되지 않는 문제를 해결할 수 있습니다.

기본적으로, npm 7 이상에서는 동료(peer) 패키지의 버전이 호환되지 않으면 설치가 중지됩니다. 하지만 이 옵션을 사용하면 이러한 동료 패키지의 버전 충돌 문제를 무시하고 설치를 계속할 수 있습니다. 그러나 이 옵션을 사용하면 일부 패키지가 작동하지 않을 수 있으므로, 가능하면 이 문제를 해결하는 더 좋은 방법을 찾는 것이 좋습니다.

---

# react-router-dom

## BrowserRouter

    BrowserRouter는 React 라이브러리에서 제공하는 라우팅을 위한 컴포넌트 중 하나입니다. React 애플리케이션에서 클라이언트 측 라우팅을 구현하는 데 사용됩니다.
    BrowserRouter는 HTML5 History API를 사용하여 URL을 관리합니다. 이를 통해 브라우저의 URL이 변경될 때 페이지를 다시로드하지 않고도 페이지를 업데이트할 수 있습니다. 이는 사용자 경험을 향상시키는 데 도움이 됩니다.
    BrowserRouter는 <Router> 컴포넌트를 확장하며, 브라우저에서 사용할 수 있는 기능을 추가로 제공합니다. 이를 사용하면 React 애플리케이션에서 라우팅을 더 쉽게 구현할 수 있습니다. 예를 들어, Route 컴포넌트를 사용하여 특정 URL 경로에 대한 렌더링을 구현할 수 있습니다.

## Route exact

exact 속성은 React Router에서 <Route> 컴포넌트에 사용되는 속성 중 하나입니다. 이 속성을 사용하면 경로가 정확히 일치할 때만 라우팅이 수행되도록 지정할 수 있습니다.
예를 들어, <Route path="/" exact>와 같이 exact 속성을 사용하면 경로가 정확히 /일 때만 해당 라우팅이 수행됩니다. 경로에 추가적인 세그먼트가 있는 경우에는 라우팅이 수행되지 않습니다.
exact 속성을 사용하지 않으면, <Route> 컴포넌트는 경로의 첫 부분만 일치하면 라우팅을 수행합니다. 이는 예상치 못한 라우팅 동작을 유발할 수 있습니다.
따라서 경로가 정확히 일치해야 하는 경우에는 exact 속성을 사용하여 라우팅이 수행되도록 지정하는 것이 좋습니다.

### @Material UI

    @mui에서 sm은 일반적으로 미디어 쿼리에 사용되는 값으로, @mui에서는 sm을 "small"을 의미하는 값으로 사용합니다. 이 값은 Material-UI 라이브러리에서 사용되는 그리드 시스템에서 breakpoint 값을 나타냅니다.
    Material-UI의 그리드 시스템은 행(row)과 열(column)을 이용하여 레이아웃을 구성합니다. sm breakpoint는 일반적으로 스마트폰 크기의 화면을 대상으로 하며, 이를 기준으로 브라우저 창의 너비를 600px로 설정합니다. 이렇게 설정된 breakpoint에서는, 600px 이하의 화면에서는 그리드 시스템이 자동으로 한 열(column)로 축소되도록 합니다.
    @mui에서는 sm breakpoint 이외에도, xs, md, lg, xl과 같은 breakpoint 값을 제공하며, 각 breakpoint에 따라 그리드 시스템의 동작이 달라집니다. 이를 활용하여, 다양한 화면 크기에 대응하는 반응형 레이아웃을 쉽게 구현할 수 있습니다.

---

    Box 컴포넌트는 Material UI 라이브러리에서 제공하는 레이아웃을 만들기 위한 컴포넌트 중 하나입니다. Box는 HTML 요소와 유사한 속성을 갖추고 있으며, div, span, section 등의 요소를 대체하여 사용할 수 있습니다.
    Box 컴포넌트는 자식 요소를 감싸는 데 사용됩니다. 자식 요소는 children 속성을 통해 전달됩니다. Box 컴포넌트는 다음과 같은 속성을 갖습니다.
    sx: 스타일 속성을 설정합니다.
    className: CSS 클래스를 설정합니다.
    component: 렌더링할 HTML 요소를 설정합니다. 기본값은 div 입니다.
    ref: 컴포넌트의 ref를 설정합니다.
    그 외에도 padding, margin, display, alignItems 등의 속성을 설정할 수 있습니다.
    Box 컴포넌트는 Material UI에서 제공하는 그리드 레이아웃 등의 다른 컴포넌트와 함께 사용하여 더 복잡한 레이아웃을 만들 수 있습니다.

---

@mui에서 spacing은 간격(여백)을 설정하는 데 사용되는 값입니다. 이 속성은 padding이나 margin과 같은 여백 속성을 일괄적으로 설정할 때 사용되며, 각 속성 값이 같은 경우에는 특히 유용합니다.

Material-UI에서는 spacing 값으로 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, auto를 제공하며, 기본값은 8입니다. 이 값들은 각각 4px, 8px, 16px, 24px, 32px, 40px, 48px, 56px, 64px, 72px, 80px, 자동의 의미를 가집니다.

예를 들어, spacing={2}와 같이 설정하면 해당 요소의 여백이 16px로 설정됩니다. 이 속성은 Grid, Box, IconButton, Paper, TextField 등 다양한 Material-UI 컴포넌트에서 사용됩니다.

---

useParams는 React Router 라이브러리에서 제공하는 훅(hook) 중 하나입니다. 이 훅은 React 컴포넌트에서 현재 URL 경로에서 파라미터를 추출하는 데 사용됩니다.

예를 들어, 다음과 같은 라우트가 있다고 가정해 봅시다.

php
Copy code
<Route path="/users/:id" component={UserDetails} />
그리고 UserDetails 컴포넌트에서 id 파라미터를 가져오고 싶다면, 다음과 같이 useParams를 사용할 수 있습니다.

jsx
Copy code
import { useParams } from 'react-router-dom';

function UserDetails() {
const { id } = useParams();

return (

<div>
<h2>사용자 정보</h2>
<p>사용자 ID: {id}</p>
</div>
);
}
이 예제에서 useParams는 현재 URL의 파라미터 값을 포함하는 객체를 반환합니다. id 변수는 useParams에서 반환된 객체의 id 속성값에 할당됩니다.
