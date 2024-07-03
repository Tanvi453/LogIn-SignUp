import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function LogIn() {

    const navigate = useNavigate();

    const [user, setUser] = useState({ username: "", email: "", password: "" });

    const [data, setData] = useState(JSON.parse(localStorage.getItem("public")) || []);

    const handleInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    };

    const handleSubmit = () => {
        setData([...data, user]);
        localStorage.setItem('public', JSON.stringify([...data, user]));
        navigate('/logInTable');
    };


    return (
        <div style={{ backgroundImage: "url(https://wallpapers.com/images/hd/office-background-98u0d3viaysny9v9.jpg)", backgroundRepeat: "no-repeat", height: "953px", paddingTop: "13%" }}>
            <div className="container" >

                <div className="row d-flex flex-column align-items-center">

                    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                        <label htmlFor="username" className="form-label mt-4" style={{ fontWeight: "bold", fontFamily: "serif", fontSize: "25px", color: "black" }}>User Name:</label>
                        <input type="text" id="username" name="username" value={user.username} className="form-control border border-dark" onChange={(e) => handleInputChange(e)} style={{ backgroundColor: "transparent", color: "black" }} required />
                    </div>

                    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">

                        <label htmlFor="email" className="form-label mt-4" style={{ fontWeight: "bold", fontFamily: "serif", fontSize: "25px", color: "black" }}>E-mail:</label>
                        <input type="email" id="email" name="email" value={user.email} className="form-control border border-dark" onChange={(e) => handleInputChange(e)} style={{ backgroundColor: "transparent", color: "black" }} required />

                    </div>

                    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">

                        <label htmlFor="password" className="form-label mt-4" style={{ fontWeight: "bold", fontFamily: "serif", fontSize: "25px", color: "black" }}>Password:</label>
                        <input type="password" id="password" name="password" value={user.password} className="form-control border border-dark" onChange={(e) => handleInputChange(e)} style={{ backgroundColor: "transparent", color: "black" }} required />

                    </div>

                    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">

                        <button type="submit" onClick={handleSubmit} className="btn form-control mt-5" style={{ height: "60px", fontWeight: "bold", fontSize: "25px", fontFamily: "serif", color:"black", border:"1px #cfdfba solid" }}>Log In</button>

                    </div>

                </div>

            </div>



        </div>
    )
};

export default LogIn;