import UserAuth from "../context/AuthContext"

export const Home = () => {
    const {logout} = UserAuth();

    return (
        
        <>
        <button className="btn btn-danger" onClick={logout}>Logout</button>
        </>
    
    )
}
