import '../../Home/Admin/adminHome.css'
function Admin_home(){

  return(
    <>
        <nav>
            <span>
                <Link style={{ 'textDecoration': "none"}} to="#">Inicio</Link>
            </span>
            <span>
                <Link style={{ 'textDecoration': "none"}} to="#">Ver Usuarios</Link>
            </span>
            <span>
                <Link style={{ 'textDecoration': "none"}} to="#">Todos los productos</Link>
            </span>
            <span>
                <Link style={{ 'textDecoration': "none"}} to="#">Perfil</Link>
            </span>
            <span>
                <Link style={{ 'textDecoration': "none"}} to="#">Manual de Usuario</Link>
            </span>
        </nav>
    </>
);
}
export default Admin_home;