import { useEffect } from "react";

const Helmet = ({ title }) => {
  useEffect(() => {
    document.title = title;
    return () => {
      document.title = "Quiz App"; // Reset the title when the component is unmounted
    };
  }, [title]);

  return null; // Helmet doesn't render anything
};

export default Helmet;
