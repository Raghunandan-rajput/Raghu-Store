// import React, { useContext } from 'react'
import HeroSection from './components/HeroSection';
import { useProductContext } from './context/ProductContext';
// import AppContext from './context/ProductContext';

const About = () => {

  // const {myName} =useContext(AppContext);
  const { myName } = useProductContext();

  const data = {
    name: "Raghu Ecommerce"
  }
  return (
    <>
    {/* {myName} */}
      <HeroSection myData={data} />
    </>
  );
}


export default About;