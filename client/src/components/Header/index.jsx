import { AppBar, Box } from "@mui/material";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    document.title = "مگا مارکت";
  }, []);

  return (
    <AppBar>
      <Box>لوگو</Box>
    </AppBar>
  );
};

export default Header;
