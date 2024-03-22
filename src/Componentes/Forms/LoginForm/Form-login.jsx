    import ButtonMain from "../../UI/Button/ButtonMain";
    import InputMain from "../../UI/Input/InputMain";
    import '../LoginForm/loginForm.css'
import {  Link } from "react-router-dom";
import handleSubmit from "../../../Utils/Login/LoginConexion";


    function FormLogin( onUsernameChange, onPasswordChange,required){
      return(
        <div className="container page-login">
        <div className="login">
        <form onSubmit={handleSubmit}>
          <h1>Iniciar sesión</h1>
          <InputMain label="Nombre de Usuario" type="text" name="username"  onChange={onUsernameChange} required={required} />
          <InputMain label="Password" type="password" name="password"  onChange={onPasswordChange}  required={required} />  
          <ButtonMain type="submit">Ingresar</ButtonMain> 
          </form>
  <p>No tienes cuenta ingresa aqui: </p> 
  <li><Link to={'/homeUser'}>Ingresar</Link></li> 
        </div>        
        </div>
      )
    }
    export default FormLogin;