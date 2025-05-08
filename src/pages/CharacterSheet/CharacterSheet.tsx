import { useEffect, useState } from "react";
import { MotivationSelect } from "@components/MotivationSelect";
import { Grid, Stack, TextField } from "@mui/material";

interface CharacterAttribute {
  taken?: number;
  temporary?: number;
}

interface CharacterInfo {
  playerName?: string;
  characterName?: string;
  characterAlias: string;
  characterTeam?: string;
  motivation?: string;
  attributes: {
    agility: CharacterAttribute;
    intellect: CharacterAttribute;
    strength: CharacterAttribute;
    might: CharacterAttribute;
    perception: CharacterAttribute;
    toughness: CharacterAttribute;
    willpower: CharacterAttribute;
  };
}

const defaultCharacterInfo: CharacterInfo = {
  playerName: "",
  characterName: "",
  characterAlias: "",
  characterTeam: "",
  motivation: "",
  attributes: {
    agility: { taken: 0, temporary: 0 },
    intellect: { taken: 0, temporary: 0 },
    strength: { taken: 0, temporary: 0 },
    might: { taken: 0, temporary: 0 },
    perception: { taken: 0, temporary: 0 },
    toughness: { taken: 0, temporary: 0 },
    willpower: { taken: 0, temporary: 0 },
  },
};

export const CharacterSheet = () => {
  const [characterInfo, setCharacterInfo] =
    useState<CharacterInfo>(defaultCharacterInfo);

  const onMotivationChange = (motivation: string) => {
    setCharacterInfo({
      ...characterInfo,
      motivation,
    });
  };

  useEffect(() => {
    console.log({ characterInfo });
  }, [characterInfo]);

  console.log(
    "attributes:",
    Object.entries(characterInfo.attributes ?? {}).map(([key, value]) => ({
      key,
      value,
    })),
  );

  return (
    <>
      <header>
        <h1>Prowlers and Paragons Character Sheet</h1>
      </header>
      <main>
        <Grid
          container
          spacing={2}
        >
          <Grid
            size={4}
            sx={{
              border: "1px solid gray",
              borderRadius: 2,
              padding: 1,
            }}
          >
            <Stack
              spacing={2}
              direction="column"
            >
              <TextField
                id="player-name"
                label="Player Name"
                value={characterInfo.playerName}
                onChange={(e) =>
                  setCharacterInfo({
                    ...characterInfo,
                    playerName: e.target.value,
                  })
                }
              />
              {/* <TextField
                id="character-name"
                label="character Name"
                value={characterInfo.characterName}
                onChange={(e) =>
                  setCharacterInfo({
                    ...characterInfo,
                    characterName: e.target.value,
                  })
                }
              /> */}
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

              <TextField
                id="character-team"
                label="Team"
                value={characterInfo.characterTeam}
                onChange={(e) =>
                  setCharacterInfo({
                    ...characterInfo,
                    characterTeam: e.target.value,
                  })
                }
              />

              <MotivationSelect
                selectedMotivation={characterInfo.motivation}
                onChange={onMotivationChange}
              />
            </Stack>
          </Grid>
        </Grid>
      </main>
    </>
  );
};
