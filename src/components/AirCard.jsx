import righPanelItems from '../data/righPanel.js'
import './AirCard.scss'
import rightImage from '../icons/right.png'
import starIcon from '../icons/stars.png'
import bubbleIcon from '../icons/bubble2.png'
import tickIcon from '../icons/tick.png'
import percentageIcon from '../icons/percentage.png'

export default function AirCard() {
    return(
        <div className="air">
            <div className="one">
                {/* <p>one</p> */}
                <div className="row">
                    <div className="left">
                        <img src={rightImage} alt="right" className="rightImage" />        
                    </div>
                    <div className="right">
                        <ul className="rOne">
                            {righPanelItems.map(item => (
                                <li key={item.id}>
                                    <div className="cardHeader">
                                        <span className="title">
                                            {item.title}
                                        </span>
                                        <div className="prices">
                                            <span className="firstPrice">
                                                {item.firstPrice}
                                            </span>
                                            <span className="secondPrice">
                                                {item.secondPrice}
                                            </span>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="rTwo">
                            <img src={starIcon} alt="star" className="starIcon" />
                        </div>
                        <div className="rThree">
                            <img src={bubbleIcon} alt="bubble" className="bubbleIcon" />
                            <ul>
                                {righPanelItems.map(item => (
                                    <li key={item.id} className="stock">
                                        {item.stock}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="rFour">
                            <ul>
                                {righPanelItems.map(item => (
                                    <li key={item.id} className="desc">
                                        {item.desc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="two">
                <div className="negative">
                    <img src={tickIcon} alt="tick" className="tickIcon" />
                    <ul>
                        {righPanelItems.map(item => (
                            <li key={item.id}>
                                <p className="tick1" dangerouslySetInnerHTML={{ __html: item.tick1 }} />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="designed">
                    <img src={tickIcon} alt="tick" className="tickIcon" />
                    <ul>
                        {righPanelItems.map(item => (
                            <li key={item.id}>
                                <p className="tick2" dangerouslySetInnerHTML={{ __html: item.tick2 }} />
                            </li>
                        ))}
                    </ul>               
                </div>
                <div className="perfect">
                    <img src={tickIcon} alt="tick" className="tickIcon" />
                    <ul>
                        {righPanelItems.map(item => (
                            <li key={item.id}>
                                <p className="tick3" dangerouslySetInnerHTML={{ __html: item.tick3 }} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="three">
                <div className="percentage">
                    <img src={percentageIcon} alt="percentage" className="percentageIcon" />
                    <ul className="percentageText">
                        {righPanelItems.map(item => (
                            <li key={item.id}>
                                <p dangerouslySetInnerHTML={{ __html: item.percentageText }} />
                            </li>
                        ))}
                    </ul>    
                </div>
            </div>
        </div>
    );
}