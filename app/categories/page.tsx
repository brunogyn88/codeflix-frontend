"use client";
/* Components */
import { selectCategories, useSelector } from "@/lib/redux";
import { Box, Button, IconButton, Link, Typography } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridRowsProp,
  GridToolbar,
} from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { deleteCategory } from "@/lib/redux/slices/categorySlice/categorySlice";
import { useSnackbar } from "notistack";

export default function CategoryList() {
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const componentProps = {
    toolbar: {
      showQuickFilter: true,
    },
  };

  const rows: GridRowsProp = categories.map((category) => ({
    id: category.id,
    name: category.name,
    is_active: category.is_active,
    created_at: new Date(category.created_at).toLocaleDateString("pt-BR"),
    description: category.description,
  }));

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1, renderCell: renderNameCell },
    { field: "description", headerName: "Description", flex: 1 },
    {
      field: "is_active",
      headerName: "Active",
      flex: 1,
      type: "boolean",
      renderCell: renderIsActiveCell,
    },
    { field: "created_at", headerName: "Created At", flex: 1 },
    {
      field: "id",
      headerName: "Actions",
      type: "string",
      flex: 1,
      renderCell: renderActionsCell,
    },
  ];

  function renderNameCell(rowData: GridRenderCellParams) {
    return (
      <Link href={`/categories/edit/${rowData.id}`}>
        <Typography color="primary">{rowData.value}</Typography>
      </Link>
    );
  }

  function handleDeleteCategory(id: string) {
    dispatch(deleteCategory(id));
    enqueueSnackbar("Category deleting successfully!", { variant: "success" });
  }

  function renderActionsCell(params: GridRenderCellParams) {
    return (
      <IconButton
        color="secondary"
        aria-label="delete"
        onClick={() => handleDeleteCategory(params.value)}
      >
        <DeleteIcon />
      </IconButton>
    );
  }

  function renderIsActiveCell(rowData: GridRenderCellParams) {
    return (
      <Typography color={rowData.value ? "primary" : "secondary"}>
        {rowData.value ? "Active" : "Inactive"}
      </Typography>
    );
  }

  return (
    <Box maxWidth="lg" sx={{ pt: 4, mb: 4 }}>
      <Box display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          color="secondary"
          href="/categories/create"
          style={{ marginBottom: "1rem" }}
          component={Link}
        >
          New Category
        </Button>
      </Box>

      <div style={{ height: 300, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
          slotProps={componentProps}
          disableRowSelectionOnClick={true}
          disableColumnSelector={true}
          disableColumnFilter={true}
          disableDensitySelector={true}
        />
      </div>
    </Box>
  );
}
