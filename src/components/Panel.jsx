import righPanel from '../data/righPanel.js'
import './Panel.scss';
import AirCard from '../components/AirCard'
import Claim from '../components/Claim'

export default function Panel() {
    return(
        <div>
            <ul>
                {righPanel.map(item => (
                    <li key={item.id}>
                        <p className="header" dangerouslySetInnerHTML={{ __html: item.header }} /> 
                    </li>
                ))}
                <AirCard  />
                <Claim  />
            </ul>
        </div>
    );
}