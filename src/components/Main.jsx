import './Main.scss'
import main from '../main_assets/main.png'
import customerReview from '../data/customer.js'
import Panel from '../components/Panel'
import vectorIcon from '../icons/vector.png'

export default function Main() {
    return(
        <div className="main">
            <div className="left">
                <img src={main} alt="img" className="mainImg" />

                <div className="customer">
                    <ul>
                        {customerReview.map(item => (
                            <li key={item.id}>
                                <div className="card">
                                    <div className="left">
                                        <img src={item.profilePicture} alt={item.name} />
                                    </div>
                                    <div className="right">
                                        <img src={item.starIcon} alt="stars" className="stars" />
                                        <div className="info">
                                            <div className="name">
                                                {item.name}
                                            </div> 
                                            <div className="customer-tag">
                                                {/* {item.vectorIcon} */}
                                                <img src={vectorIcon} alt="vector" className="vectorIcon" />
                                                {item.tag}
                                            </div>
                                        </div>  
                                    </div>
                                </div>
                                <div className="review">
                                    {item.review}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="right">
                <Panel  />
            </div>
        </div>
    );
}