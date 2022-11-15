import * as React from "react";
import { Alert, Button, Modal } from "react-bootstrap";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { API } from "../../config/api";
import { UserContext } from "../context/userContext";


const Login2 = ({ modalLogin, setModalLogin, setModalRegister }) => {
  const navigate = useNavigate();

  const [state, dispatch] = React.useContext(UserContext)
  const [message, setMessage] = React.useState(null)


  const [form, setForm] = React.useState({
    email:'',
    password:'',
  })

const { email, password } = form

const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value
  })
}

const handleSubmit = useMutation(async (e) =>{
  try{
    // e.preventDefault()

    // const data = await API.post("/login", form)

    // const alert = <Alert variant="success">Login
    // Sukses</Alert>;
    // setMessage(alert);

    // let payload = data.data.data;






    // dispatch({
    //   type:"LOGIN_SUCCESS",
    //   payload,
    // })
    // navigate("/search");
    // =================================================
    // newwwwwwwwww
          e.preventDefault();

            // Data body
            const body = JSON.stringify(form);

            // Configuration
            const config = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: body,
            };

            // Insert data for login process
            const response = await API.post("/login", body, config);
            // localStorage.setItem('token', response.data.data.token)

            console.log(response);

            // Checking process
            if (response.data.code == 200) {
                // Send data to useContext
                dispatch({
                    type: "LOGIN_SUCCESS",
                    payload: response.data.data,
                });

                // Status check
                if (response.data.data.status === "admin") {
                    navigate("/verification")
                } else {
                    navigate("/search");
                }
            } else {
                const alert = (
                    <Alert variant="danger" className="py-1">
                        Login failed
                    </Alert>
                );
                console.log("else")

                setMessage(alert);
            }




    // ==============================



    setModalLogin(false)
  } catch (err){
    console.log(err)
    const alert = <Alert variant="danger">Wrong Email/Password</Alert>
    setMessage(alert)
  }
})

  return (
    <>
      <Modal show={modalLogin} onHide={() => setModalLogin(false)} size="md" aria-labelledby="d-flex flex-column justify-content-center align-items-centerr" centered
      >
        <Modal.Body className="modal-body">
          <h2 className="text-darkblue mb-4">Sign In</h2>
          {message && message}
          <form onSubmit={(e) => handleSubmit.mutate(e)}
          >
            <div className="mb-3">
              <input type="email" 
              className="form-control" 
              id="email" 
              aria-describedby="emailHelp" 
              placeholder="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input type="password" 
              className="form-control" 
              id="password" 
              aria-describedby="emailHelp" placeholder="Password"
              name="password"
              value={form.password}
              onChange={handleChange}
              />
            </div>
            <Button type="submit" className="btn bg-maroon text-light fw-bold w-100 mb-4" 
            // onClick={() => navigate("/search")}
            >
              Sign In
            </Button>
          </form>
          <p className="text-center">
            Don't have an account ? Click{" "}
            <span
              className="click-here fw-bold"
              onClick={() => {
                setModalRegister(true);
                setModalLogin(false);
              }}
              style={{cursor: "pointer"}}
            >
              Here
            </span>
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Login2;