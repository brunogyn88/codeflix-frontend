"use client";
/* Components */
import { selectCategories, useSelector } from "@/lib/redux";
import { Box, Button, Link, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";

export default function CategoryList() {
  const categories = useSelector(selectCategories);

  const rows: GridRowsProp = [
    { id: 1, col1: "Hello", col2: "World" },
    { id: 2, col1: "DataGridPro", col2: "is Awesome" },
    { id: 3, col1: "MUI", col2: "is Amazing" },
  ];

  const columns: GridColDef[] = [
    { field: "col1", headerName: "Column 1", width: 150 },
    { field: "col2", headerName: "Column 2", width: 150 },
  ];

  return (
    <Box maxWidth="lg" sx={{ pt: 4, mb: 4 }}>
      <Box display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          color="secondary"
          to="/category/create"
          style={{ marginBottom: "1rem" }}
          component={Link}
        >
          New Category
        </Button>
      </Box>

      {/* {categories.map((category) => (
        <Typography key={category.id}>{category.name}</Typography>
      ))} */}

      <DataGrid rows={rows} columns={columns} />
    </Box>
  );
}
