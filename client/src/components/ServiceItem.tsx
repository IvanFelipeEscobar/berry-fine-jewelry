import { Link } from "react-router-dom";
import logo from "../assets/berry_logo_mark.png";
import { sampleItems } from "../assets/data";
export default function ServiceItem() {
  return (
sampleItems.map(x => (
    <div id="service-card" key={x.slug}>
      <Link to={"/product/" + x.slug}><img src={logo} alt={x.slug} id="sl-img" /></Link>
      <section id="sl-text">
        <h2>{x.name}</h2>
        <p>{x.description}</p>
        <p>Price: ${x.price}</p>
      </section>
    </div>)
    )
  );
}
