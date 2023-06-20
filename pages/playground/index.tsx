import {
  Avatar,
  Box,
  Container,
  Input,
  Stack,
  Typography,
} from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import * as React from "react";

export interface IPlaygroundPageProps {}

export default function PlaygroundPage(props: IPlaygroundPageProps) {
  const [name, setName] = React.useState("H");

  function onChange(e: any) {
    setName(e.target.value);
  }

  return (
    <Box>
      <Container>
        <Typography textAlign={"center"} variant="h5">
          Create avatar profile by character tools
        </Typography>
        <Typography
          textAlign={"center"}
          component="p"
          color={"GrayText"}
          fontSize={"smaller"}
        >
          *Please screenshot by yourself
        </Typography>

        <Stack direction={"row"} justifyContent={"center"} p={2}>
          <Input
            placeholder="Your Character Here"
            onChange={onChange}
            inputProps={{ maxLength: 6 }}
          />
        </Stack>
        <Box sx={{ position: "absolute", top: "30%", left: "40%" }}>
          <Avatar
            sx={{
              bgcolor: deepOrange[500],
              padding: "130px",
              fontSize: "400%",
            }}
            variant="square"
            sizes="large"
          >
            {name}
          </Avatar>
        </Box>
      </Container>
    </Box>
  );
}
