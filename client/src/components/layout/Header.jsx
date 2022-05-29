import BigHeader from "../parts/header/BigHeader";
import MiniHeader from "../parts/header/MiniHeader";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Header = () => {
  const { width } = useWindowDimensions();

  return (
    width > 950 ? <BigHeader /> : <MiniHeader />
  );
};

export default Header;