import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Icon, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
export interface FooterProps {}

export function Footer(props: FooterProps) {
  const socialLinks = [
    {
      icon: Facebook,
      url: "https://facebook.com",
    },
    {
      icon: Instagram,
      url: "https://instagram.com",
    },
    {
      icon: LinkedIn,
      url: "https://linkedin.com",
    },
    {
      icon: Twitter,
      url: "https://twitter.com",
    },
  ];
  return (
    <Box component={"footer"} py={2} textAlign={"center"}>
      <Stack direction={"row"} justifyContent={"center"}>
        {socialLinks.map((social) => (
          <Box
            component={"a"}
            key={social.url}
            href={social.url}
            p={2}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon component={social.icon} sx={{ fontSize: 48 }} />
          </Box>
        ))}
      </Stack>
      <Typography>
        Copyright ©{new Date().getFullYear()} All rights reserved
      </Typography>
    </Box>
  );
}
