import * as React from "react";
import DarkModeIcon from "@mui/icons-material/DarkModeRounded";
import LightModeIcon from "@mui/icons-material/LightModeRounded";
import Box from "@mui/material/Box";
import IconButton, { IconButtonOwnProps } from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useColorScheme } from "@mui/material/styles";

export default function ColorModeIconDropdown(props: IconButtonOwnProps) {
  const { mode, systemMode, setMode } = useColorScheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  
  const isOpen = Boolean(anchorEl);
  const resolvedMode = (systemMode || mode) as "light" | "dark";
  
  const icon = resolvedMode === "light" ? <LightModeIcon /> : <DarkModeIcon />;

  // Event Handlers
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleModeChange = (newMode: "system" | "light" | "dark") => () => {
    setMode(newMode);
    handleClose();
  };

  if (!mode) {
    return (
      <Box
        data-screenshot="toggle-mode"
        sx={(theme) => ({
          display: "inline-flex",
          width: "2.25rem",
          height: "2.25rem",
          borderRadius: theme.shape.borderRadius,
          border: "1px solid",
          borderColor: theme.palette.divider,
          alignItems: "center",
          justifyContent: "center",
        })}
      />
    );
  }

  return (
    <React.Fragment>
      <IconButton
        data-screenshot="toggle-mode"
        onClick={handleClick}
        size="small"
        aria-controls={isOpen ? "color-scheme-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={isOpen ? "true" : undefined}
        {...props}
      >
        {icon}
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        id="color-scheme-menu"
        open={isOpen}
        onClose={handleClose}
        slotProps={{
          paper: {
            variant: "outlined",
            sx: { my: "4px" },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem selected={mode === "system"} onClick={handleModeChange("system")}>
          System
        </MenuItem>
        <MenuItem selected={mode === "light"} onClick={handleModeChange("light")}>
          Light
        </MenuItem>
        <MenuItem selected={mode === "dark"} onClick={handleModeChange("dark")}>
          Dark
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}