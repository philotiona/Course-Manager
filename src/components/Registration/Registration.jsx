import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from "./Registration.module.css"
import Input from "../../common/Input/Input"
import Button from "../../common/Button/Button"

export default function Registration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
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
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name should be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password should be at least 6 characters';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const response = await fetch("http://localhost:4000/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        });
        const data = await response.json()
        if(response.ok) {
          navigate("/login");
        } else {
          console.error("Error:", data.message);
        }
      } catch(err) {
        console.error("Error:", err)
      } 
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Registration</h1>
      <form className={styles.box} onSubmit={handleSubmit}>
        <Input 
          labelText="Name" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          error={errors.name} 
          classInput="common" 
          className="generic" 
        />
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
          name="password" 
          value={formData.password} 
          onChange={handleChange} 
          error={errors.password} 
          classInput="common" 
          className="generic" 
        />
        <Button text="REGISTER" type="submit" className="w300" />
        <p className={styles.text}>If you have an account you may <Link><span className={styles.login}>LOGIN</span></Link></p>
      </form>
    </div>
  );
}