import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logIn } from "../../../redux/auth/operations";
import { Button } from "components/Button/Button";
import { Input } from "components/Input/Input";
import s from './LoginForm.module.css'

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate()

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(logIn({
      email: form.elements.email.value,
      password: form.elements.password.value,
    }))
    form.reset();

    navigation('/')
  };

  return (
    <div className={s.wrapper_from}>
      <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={s.label}>
          Email
          <Input type="email" name="email" />
        </label>
        <label className={s.label}>
          Password
          <Input type="password" name="password" />
        </label>
        <Button type="submit">Log In</Button>
      </form>
    </div>
    );
  };