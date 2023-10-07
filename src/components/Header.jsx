import BrazilFlag from '../public/br.svg';
import USFlag from '../public/us.svg';


export default function Header() {
    return (
        <header className="header">
            <div className='link'><p>Home</p></div>
            <div className='link'><p>About Me</p></div>
            <div className='link'><p>My Projects</p></div>
            <div className='link'><p>Knowledges</p></div>
            <div className='flags'>
                <img src={BrazilFlag} alt='brazil'></img>
                <img src={USFlag} alt='united-states'></img>
            </div>
        </header >
    )
}