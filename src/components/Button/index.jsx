import './button-add-task.css'

export function Button( {children , ...rest} ) {
    return(
        <button {...rest} className="salvar-alteracao-button">
            {children}
        </button>
    )
}