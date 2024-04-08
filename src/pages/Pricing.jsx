import PageNav from "../components/PageNav";
import styles from "./Pricing.module.css";
function Pricing() {
  return (
    <div className={styles.main}>
      <PageNav />
      <div className={styles.hero}>
        <div>
          <h1>
            Simple pricing.
            <br /> Just $9/month.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, modi. Quos, quasi? Blanditiis voluptatibus id fugiat
            eum, expedita explicabo dicta quis provident quas commodi autem
            optio, eaque reprehenderit architecto quos.
          </p>
        </div>
        <img src="public/pricingimage.jpg" alt="image1"></img>
      </div>
    </div>
  );
}

export default Pricing;
