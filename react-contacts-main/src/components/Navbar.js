import { useAuth } from "../contexts/AuthContext";

export const Navbar = () => {
    const { logoutUser } = useAuth();
    return(
        <nav>
            <ul>
                <li>
                    <button onClick={() => logoutUser()}>Logout</button>
                </li>
            </ul>
        </nav>
    );
}