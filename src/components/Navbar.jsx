import bannerItems from '../data/banner.js'
import heroItems from '../data/hero.js'
import stepItems from '../data/steps.js'
import './Navbar.scss'
import clarifion from '../logos/clarifion.png'
import mcafee from '../logos/mcafee.png'
import norton from '../logos//norton.png'

export default function Navbar() {
    return (
        <>
        <nav>
            <ul>
            {bannerItems.map(item => (
                <li key={item.id}>
                    <img src={item.icon} alt={item.title} /> {item.title}
                </li>
            ))}
            </ul>
        </nav>

        <div className="logos">
            <div className="left">
                <img src={clarifion} alt="clarifon_logo" />
            </div>
            <div className="right">
                <img src={mcafee} alt="mcafee" className="mcafee" />
                <img src={norton} alt="norton" />
            </div>
        </div>

        <div className="hero">
            <ul>
            {heroItems.map(item => (
                <li key={item.id}>
                    <p className="title">{item.title}</p>
                    <p className="sub">{item.sub}</p>
                </li>
            ))}
            </ul>
        </div>

        <div className="steps">
            <ul>
                {stepItems.map(item => (
                    <li key={item.id}>
                        <img src={item.icon} alt={item.label} /> 
                        <p>
                            <span className="label">{item.label}</span> {item.desc}</p> 
                    </li>
                ))}
            </ul>
        </div>
        </>
    );
}