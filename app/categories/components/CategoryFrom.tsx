import { Category } from "@/lib/redux/slices/categorySlice/categorySlice";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Switch,
  TextField,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

type Props = {
  category: Category;
  isdisabled: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.FormEvent<HTMLFormElement>) => void;
  handleToggle: (e: React.FormEvent<HTMLFormElement>) => void;
};

export function CategoryFrom() {
  const [isdisabled, setIsdisabled] = useState(false);
  const [category, setCategory] = useState<Category>({
    id: "",
    name: "",
    description: "",
    is_active: false,
    created_at: "",
    updated_at: "",
    deleted_at: "",
  });

  const handleChange = (e: any) => {};
  const handleToggle = (e: any) => {};
  return (
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
              <Button variant="contained" component={Link} href="/categories">
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
  );
}
