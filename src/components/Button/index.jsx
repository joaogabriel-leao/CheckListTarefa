import './button-add-task.css'

export function Button( {children} ) {
    return(
        <button className="salvar-alteracao-button">
            {children}
        </button>
    )
}