import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import {
  AppBar,
  Button,
  CssBaseline,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from "@mui/material";
import Box from "@mui/material/Box";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

import { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

const rtlCache = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const ltrCache = createCache({
  key: "mui",
});

export default function RtlOptOut() {
  const [rtl, setRtl] = useState(true);

  const darkTheme = createTheme({
    direction: "ltr",
    palette: {
      mode: "dark",
    },
  });

  const handleChange = () => {
    setRtl(!rtl);
  };

  useEffect(() => {
    if (rtl) {
      document.dir = "rtl";
    } else {
      document.dir = "ltr";
    }
  }, [rtl]);

  const router = useRoutes(routes);

  return (
    <Box p={2}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <CacheProvider value={rtl ? rtlCache : ltrCache}>
          {router}
        </CacheProvider>
      </ThemeProvider>
    </Box>
  );
}
