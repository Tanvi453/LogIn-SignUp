import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';


function SignUp() {

    const navigate = useNavigate();

    const [user, setUser] = useState({ username: "", email: "", password: "" });

    const [data, setData] = useState(JSON.parse(localStorage.getItem("user")) || []);

    const handleInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        setData([...data, user]);
        localStorage.setItem('user', JSON.stringify([...data, user]));
        navigate('/signUpTable')
    }

    return (
        <div style={{ backgroundImage: "url(https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-01.jpg)", backgroundRepeat: "no-repeat", height: "953px", backgroundSize: "cover", paddingTop: "13%" }}>

            <div className="container">

                <div className="row d-flex flex-column align-items-center">

                    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                        <label htmlFor="username" className="form-label mt-4 text-white" style={{ fontWeight: "bold", fontFamily: "serif", fontSize: "25px" }}>User Name:</label>
                        <input type="text" id="username" name="username" value={user.username} className="form-control" onChange={(e) => handleInputChange(e)} style={{ backgroundColor: "transparent", color: "white" }}  required  />
                    </div>

                    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">

                        <label htmlFor="email" className="form-label mt-4 text-white" style={{ fontWeight: "bold", fontFamily: "serif", fontSize: "25px" }}>E-mail:</label>
                        <input type="email" id="email" name="email" value={user.email} className="form-control" onChange={(e) => handleInputChange(e)} style={{ backgroundColor: "transparent", color: "white" }}  required />

                    </div>

                    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">

                        <label htmlFor="password" className="form-label mt-4 text-white" style={{ fontWeight: "bold", fontFamily: "serif", fontSize: "25px" }}>Password:</label>
                        <input type="password" id="password" name="password" value={user.password} className="form-control" onChange={(e) => handleInputChange(e)} style={{ backgroundColor: "transparent", color: "white" }}  required />

                    </div>

                    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">

                        <button type="submit" onClick={handleSubmit} className="btn form-control mt-5 text-light border border-info" style={{ height: "60px", fontWeight: "bold", fontSize: "25px", fontFamily: "serif", }}>Sign Up</button>

                    </div>

                </div>

            </div>

        </div>
    )
};

export default SignUp;