import { useState } from "react";
import motivations from "@data/motivations.json" with { type: "MotivationType" };
import {
  Autocomplete,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";

interface MotivationType {
  motivation: string;
  description: string;
}

const otherMotivation: MotivationType = {
  motivation: "Other",
  description: "Create your own motivation.",
};
const motivationsList = [...motivations, otherMotivation];

// autocomplete code based on https://github.com/mui/material-ui/issues/43908
export const MotivationSelect = () => {
  const [selectedMotivation, setSelectedMotivation] =
    useState<MotivationType>(otherMotivation);

  const handleChange = (_event: unknown, newValue: MotivationType | null) => {
    if (newValue === null) return;

    setSelectedMotivation(newValue);
    console.log("Selected motivation: ", newValue);
  };

  return (
    <Autocomplete
      id="motivation-select"
      options={motivationsList}
      defaultValue={otherMotivation}
      autoHighlight
      getOptionLabel={(option) => option.motivation}
      value={selectedMotivation}
      onChange={handleChange}
      renderOption={(props, option) => {
        const { key } = props;
        return (
          <TableRow
            hover
            key={key}
          >
            <TableCell>{option.motivation}</TableCell>
            <TableCell>{option.description}</TableCell>
          </TableRow>
        );
      }}
      slotProps={{
        listbox: {
          component: (props) => (
            <Paper style={{ maxHeight: 300, overflow: "auto" }}>
              <Table
                size="small"
                stickyHeader
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Motivation</TableCell>
                    <TableCell>Description</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody {...props}>{props?.children}</TableBody>
              </Table>
            </Paper>
          ),
        },
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Motivation"
        />
      )}
    />
  );
};
