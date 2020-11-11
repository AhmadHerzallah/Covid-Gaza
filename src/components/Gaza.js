import { React, useEffect, useState } from 'react';
export default function Gaza() {
  const url =
    'https://api.apify.com/v2/key-value-stores/SbribCOVf2wgR868y/records/LATEST?disableRedirect=true';
  // const [product, setProduct] = useState(null);
  // axios.get(url).then((response) => {
  //   setProduct(response.data);
  // });
  // console.log(product.active);
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState(null);
  const fetchItems = async () => {
    const data = await fetch(url);
    const items = await data.json();
    setItems(items);
    console.log(`Region: ${items.infecterByRegion[12].region}`);
    console.log(`Infected: ${items.infecterByRegion[12].infected}`);
    console.log(`Active: ${items.infecterByRegion[12].active}`);
  };

  return (
    <div className="container">
      <p className="text-center">
        Here you can find all the data about Gaza Covid-19 Data
      </p>
    </div>
  );
}
