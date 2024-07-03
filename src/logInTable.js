import { useState } from "react";

export function TableData() {

    const [data, setData] = useState(JSON.parse(localStorage.getItem("public")) || []);
    
    console.log(setData);

    return (
        <div className='row'>

            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">

                <div className=' d-flex justify-content-center mt-5'>

                    <table>

                        <thead>

                            <th>User Name:</th>
                            <th>E-mail:</th>
                            <th>Password:</th>

                        </thead>

                        <tbody>
                            {data?.map((item, index) => {
                                return (
                                    <tr>
                                        <td>{item.username}</td>
                                        <td>{item.email}</td>
                                        <td>{item.password}</td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    )
}