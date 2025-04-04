import { useNavigate } from "react-router-dom";
import "../styles/Niveis.css"; // Adjust the path as necessary
import logo from '../assets/logo.jpeg'; // Adjust the path as necessary

const Home = () => {
    const pathBase = "/PEXT-MELODIA-MAGICA";
    const navigate = useNavigate();

    return (
        <div className="container">

            <div className="parent">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <div 
                        key={num} 
                        className={`card div${num}`}
                        onClick={() => navigate(`${pathBase}/game_page`)}
                    >
                        {num}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;