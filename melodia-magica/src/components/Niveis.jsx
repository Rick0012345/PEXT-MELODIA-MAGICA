import { useNavigate } from "react-router-dom";
import '../styles/Niveis.css';

const Niveis = () => {
    const pathBase = "/PEXT-MELODIA-MAGICA";
    const navigate = useNavigate();

    const handleCardClick = (levelNumber) => {
        navigate(`${pathBase}/level${levelNumber}`);
    };

    return (
        <div className="container">
            <h1 className="title">Inicio de sua jornada</h1>
            
            <div className="card-row">
                {[1, 2, 3, 4, 5].map((num) => (
                    <div 
                        key={num} 
                        className="card"
                        onClick={() => navigate(`${pathBase}/game_page`)}
                    >
                        {num}
                    </div>
                ))}
            </div>
    
            <div className="card-row">
                {[6, 7, 8, 9, 10].map((num) => (
                    <div 
                        key={num} 
                        className="card"
                        onClick={() => navigate(`${pathBase}/game_page`)}
                    >
                        {num}
                    </div>
                ))}
            </div>
        </div>
    );
};

// Add this export statement at the end
export default Niveis;