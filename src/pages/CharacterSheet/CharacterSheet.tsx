import { useEffect, useState } from "react";
import { MotivationSelect } from "@components/MotivationSelect";
import { Stack, TextField } from "@mui/material";

interface CharacterInfo {
  playerName?: string;
  characterName?: string;
  characterAlias: string;
  motivation?: string;
}

const defaultCharacterInfo: CharacterInfo = {
  playerName: "",
  characterName: "",
  characterAlias: "",
};

export const CharacterSheet = () => {
  const [characterInfo, setCharacterInfo] =
    useState<Partial<CharacterInfo>>(defaultCharacterInfo);

  useEffect(() => {
    console.log({ characterInfo });
  }, [characterInfo]);

  return (
    <div>
      <h1>Prowlers and Paragons Character Sheet</h1>
      <Stack
        spacing={2}
        direction="column"
      >
        <TextField
          id="player-name"
          label="Player Name"
          value={characterInfo.playerName}
          onChange={(e) =>
            setCharacterInfo({ ...characterInfo, playerName: e.target.value })
          }
        />
        <TextField
          id="character-name"
          label="character Name"
          value={characterInfo.characterName}
          onChange={(e) =>
            setCharacterInfo({
              ...characterInfo,
              characterName: e.target.value,
            })
          }
        />
        <TextField
          id="character-alias"
          label="Character Alias"
          required
          value={characterInfo.characterAlias}
          onChange={(e) =>
            setCharacterInfo({
              ...characterInfo,
              characterAlias: e.target.value,
            })
          }
        />

        <MotivationSelect />
      </Stack>
    </div>
  );
};
