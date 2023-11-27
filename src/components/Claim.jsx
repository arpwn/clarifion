import righPanelItems from '../data/righPanel.js'
import './Claim.scss'
import badge from '../icons/badge.png'
import { FaArrowRight } from "react-icons/fa";
import visa from '../icons/visa.png'
import shoppay from '../icons/shoppay.png'
import paypal from '../icons/paypal.png'
import master from '../icons/mastercard.png'
import gpay from '../icons/gpay.png'
import applepay from '../icons/applepay.png'
import amex from '../icons/amex.png'
import lock from '../icons/lock2.png'

export default function Claim(){
    return(
        <div className="claimSection">
            <button>
                {righPanelItems.map(item => (
                    <li key={item.id}>
                        {item.buttonMessage}
                    </li>
                ))}
                <FaArrowRight className="arrow" />
            </button>
            <div className="payment">
                {righPanelItems.map(item => (
                    <li key={item.id} className="shipping">
                        {item.shippingText}
                    </li>
                ))}
                <span className="fSpan">|</span>
                <img src={lock} alt="lock" className="lock" />
                {righPanelItems.map(item => (
                    <li key={item.id} className="security">
                        {item.securityText}
                    </li>
                ))}
                <span className="span">|</span>
                <hr />
                <img src={visa} alt="visa" className="lg" />
                <img src={shoppay} alt="shoppay" className="lg" />
                <img src={paypal} alt="paypal" className="lg" />
                <img src={master} alt="mastercard" className="lg" />
                <img src={gpay} alt="gpay" className="lg" />
                <img src={applepay} alt="applepay" className="lg" />
                <img src={amex} alt="amex" className="lg" />
            </div>
            <div className="satisfaction">
                <div className="reject">
                    {righPanelItems.map(item => (
                        <li key={item.id} className="shipping">
                            {item.titlexD}
                        </li>
                    ))}
                </div>
                <div className="badge">
                    <img src={badge} alt="badge" className="badgeIcon" />
                    {righPanelItems.map(item => (
                        <li key={item.id} className="shipping">
                            <p dangerouslySetInnerHTML={{ __html: item.message }} />
                        </li>
                    ))}
                </div>
                
            </div>
        </div>
    );
}