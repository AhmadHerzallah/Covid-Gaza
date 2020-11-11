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
    console.log(items.infecterByRegion[12].region);
    setItems(items);
    console.log(items.infecterByRegion[12].region);
  };
  return (
    <div className="container">
      <h1>Here you can find all the data about Gaza Covid-19 Data</h1>
      <div>{/* <h1>{items.infecterByRegion[12].region}</h1> */}</div>
    </div>
  );
}
