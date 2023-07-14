import logoB from '../assets/berry_logo_mark.png'
import ServiceItem from '../components/ServiceItem'
export default function HomePage() {
    return (
    <div>
        <h1>Home</h1>
        <hr></hr>
        <ServiceItem/>
        <img src={logoB} alt="berry fine jewelry logo" id='berry-logo'/>
    </div>)
}