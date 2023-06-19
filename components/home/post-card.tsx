import { Blog } from "@/models";
import { Card, CardContent } from "@mui/material";
import { BlogItem } from "../blog";

export interface IPostCardProps {
  blog: Blog;
}

export function PostCard({ blog }: IPostCardProps) {
  if (!blog) return null;
  return (
    <Card>
      <CardContent>
        <BlogItem blog={blog} />
      </CardContent>
    </Card>
  );
}
