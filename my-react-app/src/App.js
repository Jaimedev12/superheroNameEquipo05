import QuizForm from './QuizForm';
import Header from './Header';
import Navigationbar from './Navigationbar';
import './App.css';

/*
  public key: 9a80d271d6c7a4e0c4534eedaa10cd6e
  private key: f36068157b8b0160dbf4c9b7b4ce170a58edd1ec
*/

function App() {
  return (
    <div className="App" data>
      <Navigationbar />
      <p className="my-3" >Marvel. (2024). Marvel Comics API. Marvel Developer Portal. https://developer.marvel.com/v1/</p>
      {/* <Header />
      <QuizForm /> */}
    </div>
  );
}

export default App;
