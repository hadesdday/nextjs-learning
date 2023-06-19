export interface Author {
    name: string;
    title: string;
    profileUrl: string;
    avatarUrl: string;
}

export interface Blog {
    id: number | string;
    title: string;
    publishedDate: number;
    tagList: string[];
    description: string;
    slug: string;
    author?: Author;
    mdContent?: string;
    htmlContent?: string;
}