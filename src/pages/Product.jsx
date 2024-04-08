import PageNav from "../components/PageNav";
import styles from "./Pricing.module.css";
function Product() {
  return (
    <div className={styles.main}>
      <PageNav />
      <div className={styles.hero}>
        <img src="public/productimage.jpg" alt="image1"></img>
        <div>
          <h1>About VoyageVault.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            soluta velit illo sequi magnam provident dolor molestiae nemo eaque,
            veritatis laborum perferendis nostrum sint earum mollitia nesciunt
            enim corporis officiis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, modi. Quos, quasi? Blanditiis voluptatibus id fugiat
            eum, expedita explicabo dicta quis provident quas commodi autem
            optio, eaque reprehenderit architecto quos.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
