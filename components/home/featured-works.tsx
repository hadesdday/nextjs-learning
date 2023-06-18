import { Work } from "@/models";
import { Box, Container, Typography } from "@mui/material";
import { WorkList } from "../common/work";

export interface IFeaturedWorksProps {}

export function FeaturedWorks(props: IFeaturedWorksProps) {
  const postList: Work[] = [
    {
      id: "1",
      title: "Designing Dashboards",
      shortDescription:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      fullDescription: "",
      createdAt: 1687073318705,
      updatedAt: 1687073318705,
      tagList: ["Dashboard"],
      thumbnailUrl:
        "https://res.cloudinary.com/dhvh2ocqq/image/upload/f_auto,q_auto/v1/learn-nextjs/iybeydeadzxjakyn9ffo",
    },
    {
      id: "2",
      title: "Vibrant Portraits of 2020",
      shortDescription:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      fullDescription: "",
      createdAt: 1687073318705,
      updatedAt: 1687073318705,
      tagList: ["Illustration"],
      thumbnailUrl:
        "https://res.cloudinary.com/dhvh2ocqq/image/upload/f_auto,q_auto/v1/learn-nextjs/fog6g7ebb6mxreebz6xs",
    },
    {
      id: "3",
      title: "36 Days of Malayalam type",
      shortDescription:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      fullDescription: "",
      createdAt: 1687073318705,
      updatedAt: 1687073318705,
      tagList: ["Typography"],
      thumbnailUrl:
        "https://res.cloudinary.com/dhvh2ocqq/image/upload/f_auto,q_auto/v1/learn-nextjs/mjuzfxpxr879pgppneyg",
    },
  ];

  return (
    <Box component={"section"} py={4} pt={2}>
      <Container>
        <Typography variant="h5" mb={4}>
          Featured works
        </Typography>
        <WorkList workList={postList} />
      </Container>
    </Box>
  );
}
