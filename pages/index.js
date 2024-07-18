
import FeaturedComp from "@/components/FeaturedComp";
import Header from "@/components/Header";
import NewProduct from "@/components/NewProducts";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { Featured } from "@/models/Featured";
import { ThemeContext } from "@/components/ThemeContext";
import { useContext } from "react";
import Themes from "@/components/Themes";


export default function HomePage({featuredProduct,newProducts}) {
  const {colorTheme} = useContext(ThemeContext);

  return (
    <div className="new-theme-options"> 
      <div id={colorTheme}>
        <Header />
        <Themes />
        <FeaturedComp product={featuredProduct} />  
        <div className="height-sizing">
          <NewProduct products={newProducts} />
        </div>
      </div>
    </div>
  )
}


export async function getServerSideProps() {
  await mongooseConnect();
  const featuredProductSetting = await Featured.findOne({name:'featuredProductId'});
  const featuredProductId = featuredProductSetting.value;
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {sort: {'_id':-1}});
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}
