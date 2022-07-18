const Card = ({children,className}) => {
    return (
        <div className={`m-4 bg-white shadow-md-5 rounded-xl ${className}`}>
            {children}
        </div>
    )
}
export default Card;