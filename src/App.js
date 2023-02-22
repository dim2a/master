import './App.css';

function App() {
  let win;
  let interval;

  const clickHandler = async () => {

    await setTimeout(() => {
      win = window.open('https://dim2a.github.io/slave/',
        '_blank',
        'location=yes,status=yes,resizable=yes,scrollbars=yes,width=600,height=800');
        // win.location.href = 'https://dim2a.github.io/slave/';
        interval = setInterval(() => {
          checkLocation();
        }, 1000);
    }, 500);    
  };

  const clickHandler2 = async() => {

    await setTimeout(() => {
      win = window.open(undefined,
        '_blank',
        'location=yes,status=yes,resizable=yes,scrollbars=yes,width=600,height=800');
        win.location.href = 'https://dim2a.github.io/slave/';
        interval = setInterval(() => {
          checkLocation();
        }, 1000);
    }, 500);
  };

  const checkLocation = () => {
    console.log('win.location?.origin: ', win.location?.origin);
    if (win.location?.href === window.location.href) {
      clearInterval(interval);
      win.close();
    }
  };
  console.log('v: 0.1.0');

  return (
    <div className="App" >
      <button style={{width: '100px', height:'50px', backgroundColor:"red"}} onClick={clickHandler}>Button1</button>
      <button style={{width: '100px', height:'50px', backgroundColor:"green", marginLeft: '5px'}} onClick={clickHandler2}>Button2</button>
    </div>
  );
}

export default App;
