import BigHeader from "./BigHeader";
import MiniHeader from "./MiniHeader";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

const Header = () => {
  const { width } = useWindowDimensions();

  return (
    width > 950 ? <BigHeader /> : <MiniHeader />
  );
};

export default Header;