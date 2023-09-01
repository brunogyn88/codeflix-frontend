"use client";
import { ReduxState, selectCategoryById } from "@/lib/redux";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";

interface CategoryProps {
  params: {
    id: string;
  };
}

export default function CategoryEdit(params: CategoryProps) {
  const id = params.params.id;
  const category = useSelector((state: ReduxState) =>
    selectCategoryById(state, id)
  );

  const [isdisabled, setIsdisabled] = useState(false);

  const handleChange = (e: any) => {};
  const handleToggle = (e: any) => {};

  return (
    <Box>
      <Paper>
        <Box p={2}>
          <Box mb={2}>
            <Typography variant="h4">Edit Category</Typography>
          </Box>
        </Box>

        <Box p={2}>
          <form>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    required
                    disabled={isdisabled}
                    value={category.name}
                    onChange={handleChange}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <TextField
                    fullWidth
                    label="Description"
                    name="description"
                    required
                    disabled={isdisabled}
                    value={category.description}
                    onChange={handleChange}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch
                        name="is_active"
                        color="secondary"
                        onChange={handleToggle}
                        checked={category.is_active}
                        inputProps={{ "aria-label": "controlled" }}
                      />
                    }
                    label={"Active"}
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" gap={2}>
                  <Button
                    variant="contained"
                    component={Link}
                    href="/categories"
                  >
                    Back
                  </Button>

                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    disabled={isdisabled}
                  >
                    Save
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Paper>
      {/* <Typography variant="h3" component="h1">
        CategoryEdit Page
      </Typography>
      <Typography variant="h3" component="h1">
        categoryID: {params.params.id}
      </Typography> */}
    </Box>
  );
}
