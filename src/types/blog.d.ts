export interface BlogPost {
    title: string;
    slug: string;
    draft?: boolean;
    timeToRead: string;
    content: string;
    date: string;
    excerpt?: string;
}
