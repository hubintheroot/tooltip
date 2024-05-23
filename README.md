# Tooltip Component

### `npm start`
개발모드로 앱을 실행합니다.
실행 된 앱은 웹 브라우저로 [http://localhost:3000](http://localhost:3000)에 접속하여 확인할 수 있습니다.

## 사용된 라이브러리
[styled-components@6.1.11](https://styled-components.com/)

[@types/styled-components@5.1.34](https://www.npmjs.com/package/@types/styled-components)

### 사용 이유
props를 통해 스타일링이 편리하며 가독성이 좋다고 생각하여 사용했습니다.

## 사용법
툴팁을 띄울 요소(Text, HTMLElement)를 Tooltip 태그로 감싸고, content 속성에 툴팁 내용물(Text, HTMLElement)를 넣어 사용할 수 있습니다.
```
<Tooltip content="tooltip">Text</Tooltip>
```
```
<Tooltip
  content={(<span>tooltip</span>)}>
    <button>Button</button>
</Tooltip>
```
## 속성
### 필수 속성
`content`
### 선택 속성
`delay`, `disabled`, `direction`, `customStyle`

`delay`
-
delay 속성은 number 타입을 받는 속성입니다.
delay 속성으로 넘겨준 n이 양수일 때 툴팁을 표시할 요소에 마우스를 올린 후 `n`초가 지나면 툴팁이 나타납니다.
```
const n = 1
...
<Tooltip
  content={(<span>tooltip</span>)}
  delay={n}
  >
    <button>Button</button>
</Tooltip>
```
delay 속성으로 넘겨준 n이 음수일 때 툴팁을 표시할 요소에 마우스를 내린 후 'n'초가 지나면 툴팁이 사라집니다.
```
const n = -1
...
<Tooltip
  content={(<span>tooltip</span>)}
  delay={n}
  >
    <button>Button</button>
</Tooltip>
```
`disabled`
-
disabled 속성은 boolean 타입을 받는 속성입니다.

disabled 속성으로 넘겨준 state 값에 따라 툴팁의 작동여부를 정합니다.
```
const [disabled, setDisabled] = useState(false);
...
<Tooltip
  content={(<span>tooltip</span>)}
  disabled={disabled}
  >
    <button
      onClick={() => setDisabled(!disabled)}
      >
        Button
      </button>
</Tooltip>
```
`direction`
-
direction 속성은 'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom' 값을 받습니다.

선택적 속성으로 기본 값은 'top'입니다.

direction 속성으로 넘겨준 값에 따라 툴팁의 위치를 지정합니다.
```
const position = 'leftTop';
...
<Tooltip
  content={(<span>tooltip</span>)}
  direction={position}
  >
    <button>Button</button>
</Tooltip>
```
`customStyle`
-
customStyle 속성은 CSSProperties 값을 받습니다.

customStyle 속성으로 넘겨준 값에 따라 툴팁의 디자인을 그립니다.
```
const customCSS = {backgroundColor:'lightskyblue'};
...
<Tooltip
  content={(<span>tooltip</span>)}
  customStyle={customCSS}
  >
    <button>Button</button>
</Tooltip>
```