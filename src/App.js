import { useNavigate } from 'react-router-dom';
import './App.css';


function App() {

  const navigate = useNavigate();

  return (
    <div style={{ backgroundImage: `url(${require("./low-poly-grid-haikei.png")})`, height: "953px" }}>

      <div className='container'>

        <div className="row d-flex justify-content-center">

          <div className='row mt-5'>

            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <button className="btn btn-dark" onClick={() => navigate('/login')} style={{ width: "100px", height: "50px", backgroundColor: "#003874", color: "#83c7eb", fontWeight: "bold", fontSize: "20px" }}>Log In</button>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <button className="btn btn-dark" onClick={() => navigate('/signup')} style={{ width: "100px", height: "50px", backgroundColor: "#003874", color: "#83c7eb", fontWeight: "bold", fontSize: "20px" }}>Sign Up</button>
            </div>
          </div>

        </div>

      </div>

    </div>
  )

};

export default App;

