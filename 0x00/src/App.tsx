import { useState } from 'react';
import './App.css';
import MyExternalComponent from './components/MyExternalComponent';

function RedBox() {
  return <div className="red-box"></div>;
}

function BlueBox() {
  return <div className="blue-box"></div>;
}

const isTrue = true;
const content = isTrue ? <BlueBox /> : <RedBox />;

const people = [
  { id: 1, name: 'anne' },
  { id: 2, name: 'john' },
  { id: 3, name: 'jane' },
];

function handleClick() {
  console.log('clicked!');
}

function App() {
  const [count, setCount] = useState(0);

  const user = {
    imgUrl: 'https://github.com/javierandres-dev.png',
    imgSize: 64,
    library: 'react',
  };

  const peopleItems = people.map((person) => (
    <li key={person.id}>{person.name}</li>
  ));

  return (
    <>
      <p>App works!</p>

      <MyExternalComponent />

      <div className="box">
        <img src={user.imgUrl} alt="avatar" style={{ width: user.imgSize }} />
      </div>
      <div>{user.library}</div>

      {content}
      {!isTrue ? <BlueBox /> : <RedBox />}
      {isTrue && <BlueBox />}

      <ul>{peopleItems}</ul>

      <button onClick={handleClick}>Click me</button>
      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </>
  );
}

export default App;
