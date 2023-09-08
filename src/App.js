//import components
import Navbar from './components/navbar';
import { Banner } from './components/banner';
import { Skills } from './components/skills';
import { Project } from './components/Project';
import { Contact } from './components/contact';
import { Footer } from './components/footer';

//import css
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/styles/App.css';

function App() {
  return (
    <div className="App">
  <Navbar />
<Banner />
<Skills />
<Project />
<Contact />
<Footer />
    </div>
  );
}

export default App;
