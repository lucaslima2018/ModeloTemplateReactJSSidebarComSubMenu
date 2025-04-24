import { Link } from "react-router-dom";
import './index.css';

function Erro() {
    return(
        <div className="not-found">
            <h1>404</h1>
            <h2>Página não encontrada!</h2>
            <Link to="/">Click aqui para acessar novamente!</Link>
        </div>
    );
}

export default Erro;