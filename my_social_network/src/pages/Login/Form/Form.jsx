import React, {useEffect} from "react";
import { useForm } from 'react-hook-form'
import { useUserContext } from "../../../Contexts/UserContext";
import logo from "../../../assets/img/logo.png"
import { useNavigate } from "react-router-dom";

const routes = {
    "admin": "/admin",
    "user": "/user"
}

const Form = () => {
    const {register, errors, handleSubmit} = useForm();
    const context = useUserContext();
    const navigate = useNavigate(); 
    const onSubmitHandler = async  (data, e) =>{
        //console.log(data);
        try{
            const response = await context.login(data.user, data.password)

            console.log( response )

        }catch(error){
            console.error(error)
        }
        e.target.reset();
    }

    useEffect(()=> {
        if(context.user) {
          navigate(routes[context.user.role] ?? "/login");
        }
    }, [context.user]);

    return (
        <div className="w-1/3 h-3/5 bg-transparent   relative flex flex-col justify-center items-center">
            <img className="w-3/12" src={logo}/>
            <form onSubmit={handleSubmit(onSubmitHandler)} className="w-4/5 h-3/5 flex flex-col justify-around items-center">
                <input name="user" className="w-3/4 h-12 px-4 rounded-full border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="User" {...register("user")} />
                <input name="password" type="password" className="w-3/4 h-12 px-4 rounded-full border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Password" {...register("password")} />
                <button type="submit" className="w-3/4 h-12 px-4 py-1 text-3xl font-semibold rounded-full border border-purple-600 text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Ingresar</button>
            </form>
        </div>
    );
};

export default Form;

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MThjNTIwYjRjZmQ3MDRhZTMzN2Q2NTUiLCJpYXQiOjE2Mzc2MDc5MjksImV4cCI6MTYzODgxNzUyOX0.fz3sf3ZcPSVgObNu58ohEgrpdc39eGRL5LtoVsMnD_U
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MThjNTIwYjRjZmQ3MDRhZTMzN2Q2NTUiLCJpYXQiOjE2Mzc2MDgxMTMsImV4cCI6MTYzODgxNzcxM30.xJP0nysKaEQvAr0FhicVo0qtLZIvxM1hdJpNg_-oQNg