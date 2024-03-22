import '../../UI/Input/input.css'
function InputMain ({ label, type, value,placeholder,required,name }) {
            return(
                <>    
                    <div>
            <label htmlFor={label}>{label}:</label>
            <input
                type={type}
                id={label}
                name={name}
                value={value}
                placeholder={placeholder}
                required={required}
            />
            </div>
                </>
            )
    };
        
        export default InputMain;