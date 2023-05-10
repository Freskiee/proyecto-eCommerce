import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import {
  BrandCard,
  CategoryCard,
  FeaturedProducts,
  BannerCarousel,
} from "../components";
import { getAllItems } from "../services/itemServices";

function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [category, setCategory] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const filterProducts = () => {
    const tempProducts = products.filter((product) =>
      product.product_name?.toLowerCase().includes(searchTerm?.toLowerCase())
    );
    setFilteredProducts(tempProducts);
  };

  function extractElements(arr, key) {
    return arr.map((item) => item[key]);
  }

  useEffect(() => {
    const fetchItemsData = async () => {
      try {
        const { status, data } = await getAllItems();
        if (status === 200) {
          setProducts(data);
          setBrands(extractElements(data, "brand").slice(0, 5));
          setCategory(extractElements(data, "category").slice(0, 5));
        }
      } catch (error) {
        console.log("Ocurrio un error: " + error.message);
      }
    };
    fetchItemsData();
  }, []);
  useEffect(() => {
    filterProducts();
  }, [searchTerm]);

  return (
    <div>
      <main>
        <section>
          <input
            type="text"
            placeholder="Buscar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {filteredProducts.slice(0, 10).map((product, i) => {
            return <FeaturedProducts product={product} key={i} />;
          })}
        </section>
        <BannerCarousel
          images={[
            {
              src: "https://images.pexels.com/photos/15598315/pexels-photo-15598315.jpeg",
              altText: "Banner 1",
            },
            {
              src: "https://images.pexels.com/photos/7116676/pexels-photo-7116676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              altText: "Banner 2",
            },
            {
              src: "https://images.pexels.com/photos/12116466/pexels-photo-12116466.jpeg",
              altText: "Banner 3",
            },
          ]}
        />
        <section className="bg-light py-5">
          <Container>
            <h2 className="mb-4">Destacados</h2>
            <Row xs={2} md={4} className="g-4">
              {/* Aquí van los productos destacados */}

              {products.slice(0, 10).map((product, i) => {
                return <FeaturedProducts product={product} key={i} />;
              })}
            </Row>
          </Container>
        </section>
        <section className="py-5">
          <Container>
            <h2 className="mb-4">Categorías</h2>
            <Row xs={1} md={5} className="g-4 text-center">
              {/* Aquí van las categorías */}
              {category.map((category, i) => {
                return <CategoryCard title={category} key={i} />;
              })}
            </Row>
          </Container>
        </section>
        <section className="py-5">
          <Container>
            <h2 className="mb-4">Marcas</h2>
            <Row xs={1} md={5} className="g-4 text-center">
              {/* Aquí van las marcas */}
              {brands.map((brand, i) => {
                return <BrandCard title={brand} key={i} />;
              })}
            </Row>
          </Container>
        </section>
      </main>
    </div>
  );
}
export default Home;
