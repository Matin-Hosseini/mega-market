import { AppBar, Box, Typography } from "@mui/material";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    document.title = "مگا مارکت";
  }, []);

  return (
    <AppBar>
      <Box>لوگو</Box>
      <Typography variant="h2">متن تستی</Typography>
    </AppBar>
  );
};

export default Header;
