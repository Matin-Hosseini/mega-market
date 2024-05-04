import { Box, Button, SwipeableDrawer, TextField } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import {Link} from 'react-router-dom'

const Home = () => {
  const [drawer, setDrawer] = useState(false);

  return (
    <Box>
      <h1>this is home</h1>
      <Stack spacing={1}>
        {/* For variant="text", adjust the height via font-size */}
        {/* For other variants, adjust the size with `width` and `height` */}
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={30} />
        <Skeleton variant="rectangular" width={210} height={30} />
        <Skeleton variant="rounded" width={210} height={60} />
      </Stack>

      <Typography variant="h1" gutterBottom>
        این یک متن تستی است
      </Typography>
      <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue="Hello World"
      />

      <Button onClick={() => setDrawer(true)}>open drawer</Button>
     

      <SwipeableDrawer
        anchor={"bottom"}
        open={drawer}
        onClose={() => setDrawer(false)}
        onOpen={() => setDrawer(true)}
        
        sx={{height: "100vh"}}
      >
        this is the drawer
      </SwipeableDrawer>
    </Box>
  );
};

export default Home;
