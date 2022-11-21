export interface AdditionalSpacesResponse {
    spaces: Array<{
        id: string;
        name: string;
        isPublic: boolean;
        username: string;
    }>;
}