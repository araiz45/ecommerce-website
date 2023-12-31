import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { shades } from "../../theme";

const importAll = (r) =>
  r.keys().reduce((acc, item) => {
    acc[item.replace("./", "")] = r(item);
    return acc;
  }, {});

export const heroTextureImports = importAll(
  require.context("../../assets", false, /\.(png|jpe?g|svg)$/)
);

const MainCarousel = () => {
  const isNoneMobile = useMediaQuery("min-width: 600px");
  return (
    <Carousel
      infiniteLoop={true}
      showThumbs={false}
      autoPlay={true}
      showIndicators={false}
      showStatus={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            left: "0",
            color: "white",
            padding: "5px",
            zIndex: "10",
          }}
        >
          <NavigateBeforeIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}
      renderArrowNext={(onClickHandler, hasNext, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            right: "0",
            color: "white",
            padding: "5px",
            zIndex: "10",
          }}
        >
          <NavigateNextIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}
    >
      {Object.values(heroTextureImports).map((texture, index) => (
        <Box key={`carousel-image-${index}`}>
          <img
            src={texture}
            alt={`carousel-${index}`}
            style={{
              width: "100%",
              height: "85vh",
              objectFit: "cover",
              backgroundAttachment: "fixed",
            }}
          />
          <Box
            color="white"
            padding="50px 20px"
            borderRadius={"1px"}
            textAlign="left"
            backgroundColor="rgb(0, 0, 0, 0.7)"
            position="absolute"
            top="30%"
            left={isNoneMobile ? "10%" : "0%"}
            right={isNoneMobile ? undefined : "0"}
            margin={isNoneMobile ? undefined : "0 auto"}
            maxWidth={isNoneMobile ? undefined : "240px"}
          >
            <Typography color={shades.secondary[200]} fontSize={"24px"}>
              NEW ITEMS
            </Typography>
            <Typography varient="h1" fontSize={"36px"} fontWeight={"bold"}>
              SUMMER SALE
            </Typography>
            <Typography
              fontSize={"24px"}
              color={shades.secondary[300]}
              sx={{ textDecoration: "underline" }}
            >
              DISCOVER MORE
            </Typography>
          </Box>
        </Box>
      ))}
    </Carousel>
  );
};

export default MainCarousel;
