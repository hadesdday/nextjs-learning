import { useLoginFormSchema } from "@/hooks";
import { LoginPayload } from "@/models";
import { yupResolver } from "@hookform/resolvers/yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import * as React from "react";
import { useForm } from "react-hook-form";
import { InputField } from "../form";
import { Seo } from "../common";

export interface LoginFormProps {
  onSubmit?: (payload: LoginPayload) => void;
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const schema = useLoginFormSchema();

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginPayload>({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const [showPassword, setShowPassword] = React.useState(false);

  async function handleSubmitForm(payload: LoginPayload) {
    try {
      await onSubmit?.(payload);
    } catch (error) {
      console.log("login failed", error);
    }
  }
  return (
    <Stack
      direction={"row"}
      justifyContent={"center"}
      textAlign={"center"}
      pt={5}
    >
      <Seo
        data={{
          title: `Login | Next.js Blog`,
          description: "Login to Next.js Blog System",
          url: `${process.env.HOST_URL}/login`,
          thumbnailUrl:
            "https://raw.githubusercontent.com/vercel/serve/main/media/banner.png",
        }}
      />
      <Container>
        <Card sx={{ boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h4" fontWeight={500}>
              Login
            </Typography>
            <Box component={"form"} onSubmit={handleSubmit(handleSubmitForm)}>
              <Box p={1}>
                <InputField
                  name={"username"}
                  control={control}
                  label="Username"
                  // inputProps={{ minLength: 6 }}
                  // required={true}
                />
              </Box>
              <Box p={1}>
                <InputField
                  name={"password"}
                  control={control}
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  // inputProps={{ minLength: 6 }}
                  // required={true}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Button
                variant="contained"
                type="submit"
                fullWidth
                disabled={isSubmitting}
                startIcon={
                  isSubmitting && (
                    <CircularProgress color="inherit" size={"1em"} />
                  )
                }
              >
                Login
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Stack>
  );
}
