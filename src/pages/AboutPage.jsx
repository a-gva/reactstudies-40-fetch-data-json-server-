import Card from "../components/shared/Card";
import { Link } from 'react-router-dom'
import { FaQuestion } from 'react-icons/fa'

function AboutPage() {
    return (
        <Card>
            <div className="about">
                <h1>Sobre Este Projeto</h1>
                <p>Projeto React</p>
                <p>Versão 1.0.0</p>
                <p>
                    <Link to='/'>
                        HomePage
                    </Link>
                </p>
            </div>
        </Card>
    )
}

export default AboutPage;
