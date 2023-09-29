import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

const Footer = () => {
  const {
    palette: { neutral },
  } = useTheme();

  return (
    <>
      <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
        <Box
          width="80%"
          margin="auto"
          display="flex"
          justifyContent="space-between"
          flexWrap="wrap"
          rowGap="30px"
          columnGap="clamp(20px, 30px, 40px)"
        >
          <Box width="clamp(20%, 30%, 40%)">
            <Typography
              variant="h4"
              fontWeight="bold"
              mb="30px"
              color={shades.secondary[500]}
            >
              ECOMMERCE
            </Typography>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, nam soluta dolor tempore, neque voluptas laudantium
              fugit inventore fuga ipsum similique, delectus nulla?
            </div>
          </Box>
          <Box>
            <Typography variant="h4" fontWeight="bold" mb="30px">
              About Us
            </Typography>
            <Typography mb="30px">Careers</Typography>
            <Typography mb="30px">Our Store</Typography>
            <Typography mb="30px">Terms & Conditions</Typography>
            <Typography mb="30px">Privacy Policy</Typography>
          </Box>
          <Box>
            <Typography variant="h4" fontWeight="bold" mb="30px">
              Customer Service
            </Typography>
            <Typography mb="30px">Help Center</Typography>
            <Typography mb="30px">Track your order</Typography>
            <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
            <Typography mb="30px">Return and Refunds</Typography>
          </Box>
          <Box width="clamp(20%, 25%, 30%)">
            <Typography variant="h4" fontWeight="bold" mb="30px">
              Contact us
            </Typography>
            <Typography mb="30px">50 north lat: 34343, Antarcatica</Typography>
            <Typography mb="30px">Email: superman@service.com</Typography>
            <Typography mb="30px">Phone: +923334312323</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
