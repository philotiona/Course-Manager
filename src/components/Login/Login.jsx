import { useState } from 'react';
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";
import style from "./Login.module.css"

export default function Login({handleLoginSubmit}) {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        handleLoginSubmit?.(formData);
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
                    <span className={style.span}>Registration</span>
                </p>
            </form>
        </div>
    );
}