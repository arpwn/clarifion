import footerItems from '../data/footer.js'
import './Footer.scss'

export default function Footer() {
    return(
        <footer>
            <ul>
            {footerItems.map(item => (
                <li key={item.id}>
                    <p className="one">{item.rights} | {item.email}</p>
                    <p className="two">
                        <img src={item.icon} alt="lock" /> 
                        {item.certificate}
                    </p>
                </li>
            ))}
            </ul>
        </footer>
    );
}