import "../styles/index.scss";
import { useDispatch, useSelector } from "react-redux";

import Header from "../components/Header";
import Footer from "../components/Footer";
import FlowersList from "../components/FlowersList";

import { useFlowers } from "../hooks/useFlowers";
import { useEffect, useState } from "react";

import useStickyFooter from "../hooks/useStickyFooter";

function MainPage() {
  const [isFooterSticky, setIsFooterSticky] = useState(false);

  const dispatch = useDispatch();
  const list = useSelector((state) => state.mainListFlowers.flowersList);
  const flowers = useFlowers();

  useStickyFooter(isFooterSticky, setIsFooterSticky);

  useEffect(() => {
    if (list.length !== 0 || flowers.loading) return;

    dispatch({ type: "SET_FLOWERS", payload: flowers.flowers });
  }, [flowers]);

  return (
    <>
      <Header />
      <FlowersList />
      <Footer isFooterSticky={isFooterSticky} />
    </>
  );
}

export default MainPage;
