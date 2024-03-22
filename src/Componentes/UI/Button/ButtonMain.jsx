  import '../../UI/Button/button.css'
  function ButtonMain({ onClick, children,type }) {
      return (
        <button type={type} onClick={onClick}>
          {children}
        </button>
      );
    }
    export default ButtonMain;
    