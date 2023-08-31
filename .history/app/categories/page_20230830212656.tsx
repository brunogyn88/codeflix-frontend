/* Components */
import { selectCategories, useDispatch, useSelector } from "@/lib/redux";
import { Box, Typography } from "@mui/material";

export default function CategoryList() {
  const categories = useSelector(selectCategories);

  return (
    <Box>
      <Typography variant="h3" component="h1">
        {categories.map(
          (category = (
            <Typography key={categorySlice.id}>{categorySlice.name}</Typography>
          ))
        )}
      </Typography>
    </Box>
  );
}
