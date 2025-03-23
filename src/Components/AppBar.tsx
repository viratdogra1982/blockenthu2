import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Container,
  Box,
  Drawer,
  MenuItem,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Sitemark from "./SitemarkIcon";
import ColorModeIconDropdown from "./Theme/App/ColorModeIconDropdown";
import { useNavigate } from "react-router-dom";

const StyledToolbar = styled(Toolbar)(({ theme }: any) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  // Original styles removed below for a solid background
  // backdropFilter: "blur(24px)",
  // border: "1px solid",
  // borderColor: (theme.vars || theme).palette.divider,
  // backgroundColor: theme.vars
  //   ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
  //   : alpha(theme.palette.background.default, 0.4),
  // boxShadow: (theme.vars || theme).shadows[1],
  padding: "8px 12px",
}));

export default function AppAppBar() {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const navigate = useNavigate();

  const handleScroll = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpenDrawer(newOpen);
  };

  // Route to the auth page when a user clicks Sign In or Sign Up.
  const handleRouteAuth = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          backgroundColor: "#000", // Solid black background
          borderTop: "4px solid #1e1e1e", // Thin top border
          backgroundImage: "none",
          mt: "calc(var(--template-frame-height, 0px) + 28px)",
        }}
      >
        <Container maxWidth="lg">
          <StyledToolbar
            variant="dense"
            disableGutters
            sx={{
              backgroundColor: "transparent",
              // Remove transparency and blur effects
              backdropFilter: "none",
              border: "none",
            }}
          >
            <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center", px: 0 }}>
              <Sitemark />
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                {["Features", "Testimonials", "Highlights", "Pricing", "FAQ", "Blog"].map(
                  (section) => (
                    <Button
                      key={section}
                      variant="text"
                      color="info"
                      size="small"
                      onClick={() => handleScroll(section.toLowerCase())}
                    >
                      {section}
                    </Button>
                  )
                )}
              </Box>
            </Box>
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1, alignItems: "center" }}>
              <Button
                color="primary"
                variant="text"
                size="small"
                onClick={() => handleRouteAuth("/signin")}
              >
                Sign in
              </Button>
              <Button
                color="primary"
                variant="contained"
                size="small"
                onClick={() => handleRouteAuth("/signup")}
              >
                Sign up
              </Button>
              <ColorModeIconDropdown />
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" }, gap: 1 }}>
              <ColorModeIconDropdown size="medium" />
              <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="top"
                open={openDrawer}
                onClose={toggleDrawer(false)}
                PaperProps={{
                  sx: {
                    top: "var(--template-frame-height, 0px)",
                  },
                }}
              >
                <Box sx={{ p: 2, backgroundColor: "background.default" }}>
                  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <IconButton onClick={toggleDrawer(false)}>
                      <CloseRoundedIcon />
                    </IconButton>
                  </Box>
                  {["Features", "Testimonials", "Highlights", "Pricing", "FAQ", "Blog"].map(
                    (section) => (
                      <MenuItem
                        key={section}
                        onClick={() => {
                          handleScroll(section.toLowerCase());
                          setOpenDrawer(false);
                        }}
                      >
                        {section}
                      </MenuItem>
                    )
                  )}
                  <Divider sx={{ my: 3 }} />
                  <MenuItem>
                    <Button
                      color="primary"
                      variant="contained"
                      fullWidth
                      onClick={() => {
                        handleRouteAuth("/signup");
                        setOpenDrawer(false);
                      }}
                    >
                      Sign up
                    </Button>
                  </MenuItem>
                  <MenuItem>
                    <Button
                      color="primary"
                      variant="outlined"
                      fullWidth
                      onClick={() => {
                        handleRouteAuth("/signin");
                        setOpenDrawer(false);
                      }}
                    >
                      Sign in
                    </Button>
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </StyledToolbar>
        </Container>
      </AppBar>
    </>
  );
}