import { Box, TextField } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Home = () => {
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
    </Box>
  );
};

export default Home;
