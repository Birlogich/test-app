"use client"

import Link from "next/link";
import { useRef, useState} from "react";
import { useForm } from "react-hook-form";
import { sendFormRequest} from '@/helpers/sendFormRequest'; 
import {formValidator} from '@/helpers/formValidator';

const Login = () => {
  const { validateEmail, validateUsername, validatePassword } = formValidator(); 
  const refWrapper = useRef(null);
  const refRegisterLink = useRef(null);
  const refLogLink = useRef(null);
  const [switcher, setSwitcher] = useState(false);  // Для conditional renrering, чтобы избешать ошибок с "react-hook-form"
  const [isSuccess, setIsSuccess] = useState(false) // Просто мок заглушка, чтобы на UI показать, что запрос ушел. Так бы через Slice в Redux сделал

  const handleRegLink = () => {
    refWrapper.current.classList.add("active");
    const timer = setTimeout(() => setSwitcher(!switcher), 2200);
    return () => clearTimeout(timer);
  };
  const handleLogLink = () => {
    refWrapper.current.classList.remove("active");
    const timer = setTimeout(() => setSwitcher(!switcher), 1400);
    return () => clearTimeout(timer);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "all",
  });

  const sendLoginRequest = async (data, isRegister) => {
    
    const formData = isRegister
      ? {
          email: data.email,
          username: data.username,
          password: data.password,
        }
      : {
          username: data.username,
          password: data.password,
        };


    const res = await sendFormRequest(formData, isRegister);
        
    if(res) {
      setIsSuccess(true);
      //затем редирект в зависимости от сценария
    }
  };


    return (
    <div className="wrapper" ref={refWrapper}>
      <span className="bg-animate"></span>
      <span className="bg-animate2"></span>

{!switcher && 
      <div className="form-box login">
      <h2 className="animation" style={{ "--i": 0 }}>
        Login
      </h2>
      <form action="#"  
       onSubmit={handleSubmit((data) => sendLoginRequest(data, false))}
        >
        <div className="input-box animation" style={{ "--i": 1 }}>
          <input
            type="text"
            name="username"
            required
            autoFocus
            noValidate
            {...register("username", validateUsername)}
          ></input>
          <label>Username</label>
          {errors?.username && (
          <p style={{color: 'red'}}>{errors?.username?.message}</p>
      )}
        </div>
        <div className="input-box animation" style={{ "--i": 2 }}>
          <input
            type="password"
            name="password"
            required
            noValidate
            {...register("password", validatePassword)}
          ></input>
          <label>Password</label>
          {errors?.password && (
          <p style={{color: 'red'}}>{errors?.password?.message}</p>
      )}
        </div>
        <button type="submit" className={(!errors.username && !errors.password) ? "btn animation" : "btn animation errors"} style={{ "--i": 3 }}>
          {!isSuccess ? 'Login' : 'Request Sent' }
        </button>
        <div className="logreg-link animation" style={{ "--i": 4 }}>
          <p>
            Don&#39;t have an account?
            <Link 
              href="#"
              className="register-link"
              ref={refRegisterLink}
              onClick={handleRegLink}
            >
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
}
      <div className="info-text login">
        <h2 className="animation" style={{ "--i": 0 }}>
          Thank you for second chance!
        </h2>
        <p className="animation" style={{ "--i": 1 }}>
          This auth form was written by Ivan Zhigalev as a test task
        </p>
      </div>

{switcher &&
       <div className="form-box register">
       <h2 className="animation" style={{ "--i": 17 }}>
         Sign Up
       </h2>
       <form action="#" onSubmit={handleSubmit((data) => sendLoginRequest(data, false))}>
         <div className="input-box animation" style={{ "--i": 18 }}>
           <input
             type="text"
             required
             name="username"
             noValidate
             {...register("username", validateUsername)}
           ></input>
           <label>Username</label>
           {errors?.username && (
           <p style={{color: 'red'}}>{errors?.username?.message}</p>
       )}
         </div>
         <div className="input-box animation" style={{ "--i": 19 }}>
           <input
             type="text"
             name="email"
             required
             noValidate
              {...register("email", validateEmail)}
           ></input>
           <label>Email</label>
           {errors?.email && (
           <p style={{color: 'red'}}>{errors?.email?.message}</p>
       )}
         </div>
         <div className="input-box animation" style={{ "--i": 20 }}>
           <input
             type="password"
             name="password"
             required
             noValidate
             {...register("password", validatePassword)}
             
           ></input>
           <label>Password</label>
           {errors?.password && (
           <p style={{color: 'red'}}>{errors?.password?.message}</p>
       )}
         </div>
         <button type="submit" className={(!errors.username && !errors.password && !errors.email) ? "btn animation" : "btn animation errors"} style={{ "--i": 21 }}>
         {!isSuccess ? 'Login' : 'Request Sent' }
         </button>
         <div className="logreg-link animation" style={{ "--i": 22 }}>
           <p>
             Already have an account?{" "}
             <Link
               href="#"
               className="login-link"
               ref={refLogLink}
               onClick={handleLogLink}
             >
               Login
             </Link>{" "}
           </p>
         </div>
       </form>
     </div>
}
      <div className="info-text register">
        <h2 className="animation" style={{ "--i": 17 }}>
          Dear reviewer
        </h2>
        <p className="animation" style={{ "--i": 18 }}>
          I hope we&#39;ll work together!
        </p>
      </div>
    </div>
  );
};

export { Login };
