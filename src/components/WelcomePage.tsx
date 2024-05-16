import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <>
      <div>WelcomePage</div>

      {/* This link will navigate to the expense list without requiring authentication */}
      <Link to="/continue">continue without login</Link>
    </>
  );
};
export default WelcomePage;
