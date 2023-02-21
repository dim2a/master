import './App.css';

function App() {
  let win;
  let interval;

  const clickHandler = () => {   

    win = window.open('http://localhost:3009',
    '_blank',
    'location=yes,status=yes,resizable=yes,scrollbars=yes,width=600,height=800');
    interval = setInterval(() => {
      checkLocation();
    }, 1000);

  };

  const checkLocation = () => {
    console.log('win.location?.origin: ', win.location?.origin);
    if (win.location?.origin === window.origin) {
      clearInterval(interval);
      win.close();
    }
  };

  return (
    <div className="App">
      <button onClick={clickHandler}>ClickMe!</button>
    </div>
  );
}

export default App;
