"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import EdgesensorHighRoundedIcon from "@mui/icons-material/EdgesensorHighRounded";
import ViewQuiltRoundedIcon from "@mui/icons-material/ViewQuiltRounded";
import image1 from "../assets/8.png";
import image2 from "../assets/9.png";
import image3 from "../assets/10.png";

// Feature items
const items = [
  {
    icon: <ViewQuiltRoundedIcon />,
    title: "Chain abstraction",
    description:
      "Chain abstraction on our DEX enables seamless multi-chain trading, handling network switching, gas fees, and confirmations—offering users a unified, frictionless cross-chain experience.",
    imageLight: `url(${image1})`,
    imageDark: `url(${image1})`,
  },
  {
    icon: <EdgesensorHighRoundedIcon />,
    title: "Advanced Trading Tools",
    description:
      "Access pro-level charting, up to 5x margin trading, and automated recurring buys for seamless crypto investing and precise market analysis.",
    imageLight: `url(${image2})`,
    imageDark: `url(${image2})`,
  },
  {
    icon: <DevicesRoundedIcon />,
    title: "Transparency",
    description:
      "Experience 100% transparency on our DEX, where every transaction is fully visible on-chain, ensuring trust, security, and complete accountability for all users",
    imageLight: `url(${image3})`,
    imageDark: `url(${image3})`,
  },
];

export default function Features() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        backgroundColor: "#000",
        borderTop: "4px solid #1e1e1e",
        color: "#fff",
      }}
    >
      <Container
        id="features"
        sx={{
          py: { xs: 8, sm: 16 },
        }}
      >
        {/* Section Heading */}
        <Box
          sx={{
            width: { xs: "90%", md: "60%" },
            mx: "auto",
            textAlign: "center",
            mb: 4,
          }}
        >
          <Typography component="h2" variant="h4" gutterBottom>
            Product features
          </Typography>
        </Box>

        {/* Main Content Row */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row-reverse" },
            gap: 2,
          }}
        >
          {/* Left Column (Desktop) - Feature List */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              gap: 2,
              height: "100%",
            }}
          >
            {items.map(({ icon, title, description }, index) => (
              <ButtonBase
                key={index}
                onClick={() => handleItemClick(index)}
                disableRipple
                sx={{
                  p: 2,
                  width: "100%",
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 1,
                  borderRadius: 1,
                  textTransform: "none",
                  color: index === selectedItemIndex ? "#fff" : "grey.400",
                  transition: "background-color 0.2s",
                  // Optional hover style:
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                  },
                  ...(index === selectedItemIndex && {
                    backgroundColor: "rgba(255,255,255,0.1)",
                  }),
                }}
              >
                {icon}
                <Typography variant="h6">{title}</Typography>
                <Typography variant="body2">{description}</Typography>
              </ButtonBase>
            ))}
          </Box>

          {/* Right Column (Desktop) - Feature Image */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              width: { xs: "100%", md: "70%" },
            }}
          >
            <Card
              variant="outlined"
              sx={{
                width: "100%",
                display: "flex",
                pointerEvents: "none",
                backgroundColor: "transparent",
                borderColor: "rgba(255,255,255,0.2)",
              }}
            >
              <Box
                sx={(theme) => ({
                  m: "auto",
                  width: 420,
                  height: 500,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundImage: "var(--items-imageLight)",
                  ...theme.applyStyles("dark", {
                    backgroundImage: "var(--items-imageDark)",
                  }),
                })}
                style={
                  selectedFeature
                    ? ({
                        "--items-imageLight": selectedFeature.imageLight,
                        "--items-imageDark": selectedFeature.imageDark,
                      } as any)
                    : {}
                }
              />
            </Card>
          </Box>

          {/* Mobile Layout */}
          <MobileLayout
            selectedItemIndex={selectedItemIndex}
            handleItemClick={handleItemClick}
            selectedFeature={selectedFeature}
          />
        </Box>
      </Container>
    </Box>
  );
}

/** 
 * Mobile Layout 
 */
function MobileLayout({
  selectedItemIndex,
  handleItemClick,
  selectedFeature,
}: {
  selectedItemIndex: number;
  handleItemClick: (index: number) => void;
  selectedFeature: (typeof items)[0];
}) {
  if (!items[selectedItemIndex]) return null;

  return (
    <Box
      sx={{
        display: { xs: "flex", sm: "none" },
        flexDirection: "column",
        gap: 2,
      }}
    >
      {/* Horizontal scrollable chips (or ButtonBase) */}
      <Box sx={{ display: "flex", gap: 2, overflow: "auto" }}>
        {items.map(({ title }, index) => (
          <ButtonBase
            key={index}
            onClick={() => handleItemClick(index)}
            sx={{
              px: 2,
              py: 1,
              borderRadius: 1,
              color: index === selectedItemIndex ? "#fff" : "grey.400",
              backgroundColor:
                index === selectedItemIndex ? "rgba(255,255,255,0.1)" : "transparent",
              textTransform: "none",
              transition: "background-color 0.2s",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.08)",
              },
            }}
          >
            {title}
          </ButtonBase>
        ))}
      </Box>

      {/* Feature Image & Description */}
      <Card variant="outlined" sx={{ borderColor: "rgba(255,255,255,0.2)" }}>
        <Box
          sx={(theme) => ({
            mb: 2,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: 280,
            backgroundImage: "var(--items-imageLight) no-repeat",
            ...theme.applyStyles("dark", {
              backgroundImage: "var(--items-imageDark) no-repeat",
            }),
          })}
          style={
            items[selectedItemIndex]
              ? ({
                  "--items-imageLight": items[selectedItemIndex].imageLight,
                  "--items-imageDark": items[selectedItemIndex].imageDark,
                } as any)
              : {}
          }
        />
        <Box sx={{ px: 2, pb: 2 }}>
          <Typography gutterBottom sx={{ fontWeight: "medium" }}>
            {selectedFeature.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "grey.400", mb: 1.5 }}>
            {selectedFeature.description}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
}