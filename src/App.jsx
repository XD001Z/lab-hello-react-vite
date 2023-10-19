import './App.css'

function App() {
  return (
    <div className='App'>
      <div className='hero'>
        <div className='hero-top'>
          <img src="src/assets/ironhack-logo-xs.png" alt="logo" />
          <img src="src/assets/menu-top-xs.png" alt="menu" />
        </div>
        <div className='hero-main'>
          <p className='pitch'>Say hello to</p>
          <p className='pitch'>ReactJS</p>
          <br />
          <p className='sub-text'>You will learn how to use</p>
          <p className='sub-text'>the most popular frontend library,</p>
          <p className='sub-text'>and become a super Ninja developer.</p>
          <br />
          <p className='button'>Awesome!</p>
          <br />
        </div>
      </div>
      <div className='details'>
        <div className='info'>
          <img src="src/assets/icon1.png" alt="icon" />
          <h4>Declarative</h4>
          <p>React makes it</p>
          <p>painless to create</p>
          <p>interactive UIs.</p>
        </div>
        <div className='info'>
          <img src="src/assets/icon2.png" alt="icon" />
          <h4>Components</h4>
          <p>Build encapsulated</p>
          <p>components that</p>
          <p>manage their state.</p>
        </div>
        <div className='info'>
          <img src="src/assets/icon3.png" alt="icon" />
          <h4>Single-Way</h4>
          <p>A set of immutable</p>
          <p>values are passed to</p>
          <p>the components.</p>
        </div>
        <div className='info'>
          <img src="src/assets/icon4.png" alt="icon" />
          <h4>JSX</h4>
          <p>Statically-typed</p>
          <p>designed to run on</p>
          <p>modern browsers.</p>
        </div>
      </div>
    </div>
  )
}

export default App;
