import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../../redux/auth/operations";
import { Button } from "components/Button/Button";
import { Input } from "components/Input/Input";

import s from './RegisterForm.module.css'

export const RegisterForm = () => {
    const dispatch = useDispatch();
    const navigation = useNavigate()
  
    const handleSubmit = e => {
      e.preventDefault();
      const form = e.currentTarget;
      dispatch(register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,

      }))
      form.reset();

      navigation('/')
    };
  return (
    <div className={s.wrapper_form}>
      <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={s.label}>
          Username
          <Input type="text" name="name" />
        </label>
        <label className={s.label}>
          Email
          <Input type="email" name="email" />
        </label>
        <label className={s.label}>
          Password
          <Input type="password" name="password" />
        </label>
        <Button type="submit">Register</Button>
      </form>
    </div>
    );
  };