interface SpacesI {
  space_id: number;
  name: string | null;
  is_public: boolean | null;
  username: string;
}

export const spaces: Array<SpacesI> = [
  { space_id: 1, name: "First space", is_public: true, username: "Tanya" },
  { space_id: 2, name: "First space", is_public: null, username: "Sveta" },
  { space_id: 3, name: "First space", is_public: true, username: "Kissa" },
  { space_id: 4, name: "First space", is_public: null, username: "Youla" },
  { space_id: 5, name: "First space", is_public: null, username: "Tanya" },
  { space_id: 6, name: "First space", is_public: true, username: "Kissa" },
  { space_id: 7, name: "First space", is_public: null, username: "Tanya" },
  { space_id: 8, name: "First space", is_public: true, username: "John" },
  { space_id: 9, name: "First space", is_public: true, username: "Tanya" },
  { space_id: 10, name: "First space", is_public: true, username: "Sveta" },
  { space_id: 11, name: "First space", is_public: null, username: "Tanya" },
];
