
import './App.css';

let array = ["profile","message","news","setting"]
let saveTag = array.map(item => (<div><a href='#'>{item}</a></div>)) 
console.log(saveTag)

function App(props) {




  return (
    <div className="app_wrapper">
       
      <header className='app_header'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/1200px-Coca-Cola_logo.svg.png'></img>
      </header>
      <nav className='app_nav'>
        
        {saveTag}
        
        
      </nav>
      
      <div className='app_content'>
        <textarea className='area'></textarea>
        <button className='btn_input'>+</button>
      </div>
     
    </div>
  );
}

export default App;

