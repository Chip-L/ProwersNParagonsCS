import motivations from "@data/motivations.json" with { type: "MotivationType" };
import { Autocomplete, TextField } from "@mui/material";

const motivationsList = [...motivations];

interface MotivationSelectProps {
  selectedMotivation?: string;
  onChange: (motivation: string) => void;
}

export const MotivationSelect = ({
  selectedMotivation,
  onChange,
}: MotivationSelectProps) => {
  const optionList = motivationsList.map((motivation) => motivation.motivation);

  const motivationDescription = motivationsList.find(
    (motivation) => motivation.motivation === selectedMotivation,
  )?.description;

  const handleChange = (_event: unknown, newValue: string | null) => {
    onChange(newValue ?? "");
    console.log("Selected motivation: ", newValue);
  };

  return (
    <Autocomplete
      id="motivation-select"
      options={optionList}
      title={motivationDescription}
      value={selectedMotivation}
      onChange={handleChange}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Motivation"
        />
      )}
    />
  );
};
