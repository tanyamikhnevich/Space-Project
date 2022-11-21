export interface SearchSpacesResponse {
  spaces: Array<{
    space_id: number;
    name: string;
    username: string;
    tags: string[];
  }>;
}
