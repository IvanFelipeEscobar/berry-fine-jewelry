import berrylogo from "../assets/berry_logo_mark.png";
export default function ServiceItem() {
  return (
    <div id="service-card">
      <img src={berrylogo} alt="berry logo" id="sl-img" />
      <section id="sl-text">
        <h2>Service Item</h2>
        <p>this is a short description of the service offered. kakoii desu</p>
        <p>Price: $44.94</p>
      </section>
    </div>
  );
}
