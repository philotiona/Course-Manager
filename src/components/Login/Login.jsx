import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";
import style from "./Login.module.css"

export default function Login() {
    const navigate = useNavigate(); 
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.password.trim()) {
            newErrors.password = 'Password is required';
        }

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        } else {
            try {
                const response = await fetch("http://localhost:4000/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                });
                const data = await response.json()
                if (response.ok) {
                    localStorage.setItem("token", data.result.replace('Bearer ', ''));
                    localStorage.setItem("name", data.user.name);
                    navigate("/courses");
                } else {
                    console.error("Error:", data.message)
                }
            } catch(err) {
                console.error("Error:", err)
            }
        }

        
    };

    return(
        <div className={style.container}>
            <h1 className={style.title}>Login</h1>
            <form className={style.box} onSubmit={handleSubmit}>
                <Input 
                    labelText="Email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    classInput="common" 
                    className="generic"
                />
                <Input 
                    labelText="Password" 
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    error={errors.password}
                    classInput="common" 
                    className="generic"
                />
                <Button text="LOGIN" type="submit" className="w300"/>
                <p className={style.text}>
                    If you don't have an account you may <br /> 
                    <span className={style.span}><Link to ="/register">REGISTRATION</Link></span>
                </p>
            </form>
        </div>
    );
}