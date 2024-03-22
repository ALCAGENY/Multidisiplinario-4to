 import { Link } from "react-router-dom";
 import '../../Home/Admin/adminHome.css'   
 function Nav_home(){
    return(
        <>
        <nav>
            <span>
                <Link style={{ 'textDecoration': "none" ,'color':'white'}} to="/homeUser">Inicio</Link>
            </span>
            <span>
                <Link style={{ 'textDecoration': "none" ,'color':'white'}} to="/cotizar">Cotizar</Link>
            </span>
            <span>
                <Link style={{ 'textDecoration': "none" ,'color':'white'}} to="#">Todos los productos</Link>
            </span>
            <span>
                <Link style={{ 'textDecoration': "none" ,'color':'white'}} to="#">Perfil</Link>
            </span>
            <span>
                <Link style={{ 'textDecoration': "none" ,'color':'white'}} to="#">Manual de Usuario</Link>
            </span>
        </nav>
        </>
    );
    }
    export default Nav_home;