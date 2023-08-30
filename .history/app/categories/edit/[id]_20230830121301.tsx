import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";

export default () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Box>
      <Typography variant="h3" component="h1">
        Category: {id}
      </Typography>
    </Box>
  );
};
