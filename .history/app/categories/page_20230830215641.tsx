"use client";
/* Components */
import { selectCategories, useDispatch, useSelector } from "@/lib/redux";
import { Box, Button, Typography } from "@mui/material";

export default function CategoryList() {
  const categories = useSelector(selectCategories);

  return (
    <Box maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          color="secondary"
          to="/category/create"
          style={{ marginBottom: "1rem" }}
          component={}
        >
          New Category
        </Button>
      </Box>
      <Typography variant="h3" component="h1">
        {categories.map((category) => (
          <Typography key={category.id}>{category.name}</Typography>
        ))}
      </Typography>
    </Box>
  );
}
