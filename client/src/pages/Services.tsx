import logoB from '../assets/berry_logo_mark.png'
import ServiceItem from '../components/ServiceItem'
export default function Services() {
    return (
    <div>
        <h2>Book On line</h2>
        <hr/>
        <ServiceItem/>
        <img src={logoB} alt="berry fine jewelry logo" id='berry-logo'/>
    </div>)
}