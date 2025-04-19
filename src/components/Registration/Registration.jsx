import { useState } from 'react';
import styles from "./Registration.module.css"
import Input from "../../common/Input/Input"
import Button from "../../common/Button/Button"

export default function Registration({ onRegister }) {
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
    // Clear error when user types
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      onRegister(formData);
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
        <p className={styles.text}>If you have an account you may <span className={styles.login}>Login</span></p>
      </form>
    </div>
  );
}