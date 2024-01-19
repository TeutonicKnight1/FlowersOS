import { useEffect } from "react";

function useStickyFooter(isSticky, setIsSticky) {
  useEffect(() => {
    function handleResize() {
      const windowHeight = window.innerHeight;
      const contentHeight = document.querySelector('#root').clientHeight;

      console.log('windowHeight', windowHeight);
      console.log('contentHeight', contentHeight);

      if (contentHeight < windowHeight) {
        setIsSticky(() => true);
      } else {
        setIsSticky(() => false);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isSticky]);
}

export default useStickyFooter;
