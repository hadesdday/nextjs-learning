export interface Work {
    id: string;
    title: string;
    tagList: string[];
    shortDescription: string;
    fullDescription: string;
    createdAt: number;
    updatedAt: number;
    thumbnailUrl: string;
}

export interface WorkFiltersPayload {
    search: string;

}