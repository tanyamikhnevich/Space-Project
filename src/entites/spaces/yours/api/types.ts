export interface YourSpacesResponse {
    spaces: Array<{
        id: string;
        name: string;
        isPublic: boolean;
        username: string;
    }>;
}