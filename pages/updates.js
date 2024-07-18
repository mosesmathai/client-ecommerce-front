
import Header from "@/components/Header";
import NewUpdates from "@/components/NewUpdates";
import { mongooseConnect } from "@/lib/mongoose";
import styled from "styled-components";
import { Update } from "@/models/Update";


const ProductWrapper = styled.div`
  background-color: black;
`;

export default function Updates({newUpdates}) {
  
  return (
    <div> 
      <Header />  
      <ProductWrapper>
        <NewUpdates updates={newUpdates} />
      </ProductWrapper>
    </div>
  )
}


export async function getServerSideProps() {
  await mongooseConnect();
  const newUpdates = await Update.find({}, null, {sort: {'_id':-1}});
  return {
    props: {
      newUpdates: JSON.parse(JSON.stringify(newUpdates)),
    },
  };
}

