export interface RecentSpacesResponse {
    spaces: Array<{
        id: string;
        name: string;
        isPublic: boolean;
        username: string;
    }>;
}