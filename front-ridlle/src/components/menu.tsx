import { Link } from "react-router-dom";
export function Menu() {
    return (
        <nav>
            <ul>
                <li><Link to="/SwohRiddle">Show All Riddles</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/BestPlayer">Best Player</Link></li>
                <li><Link to="/BestPlayers">Best Players</Link></li>
                <li><Link to="/DeleteRiddle">Delete Riddle</Link></li>
                <li><Link to="/UpdateRiddle">Update Riddle</Link></li>
            </ul>
        </nav>

    )
}