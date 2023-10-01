// import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
// import AddressForm from "./AddressForm";
// const Shipping = ({
//   values,
//   error,
//   touched,
//   handleBlur,
//   handleChange,
//   setFieldValue,
// }) => {
//   return (
//     <Box m="30px auto">
//       {/* Billing Form */}
//       <Box>
//         <Typography sx={{ mb: "15px" }} fontSize="18px">
//           Billing Information
//         </Typography>
//         <AddressForm
//           type="billingAddress"
//           values={values.billingAddress}
//           error={error}
//           touched={touched}
//           handleBlur={handleBlur}
//           handleChange={handleChange}
//         />
//       </Box>
//       <Box mb="20px">
//         <FormControlLabel
//           label="Same for Shipping Address"
//           control={
//             <Checkbox
//               defaultChecked
//               values={values.shippingAddress.isSameAddress}
//               onChange={() =>
//                 setFieldValue(
//                   "shippingAddress.isSameAddress",
//                   !values.shippingAddress.isSameAddress
//                 )
//               }
//             />
//           }
//         />
//       </Box>
//       {/* SHIPPING FORM  */}
//       {!values.shippingAddress.isSameAddress && (
//         <Box>
//           <Typography sx={{ mb: "15px" }} fontSize="18px">
//             Shipping Information
//           </Typography>
//           <AddressForm
//             type="shippingAddress"
//             values={values.billingAddress}
//             error={error}
//             touched={touched}
//             handleBlur={handleBlur}
//             handleChange={handleChange}
//           />
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default Shipping;

import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import AddressForm from "./AddressForm";

const Shipping = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  setFieldValue,
}) => {
  return (
    <Box m="30px auto">
      {/* BILLING FORM */}
      <Box>
        <Typography sx={{ mb: "15px" }} fontSize="18px">
          Billing Information
        </Typography>
        <AddressForm
          type="billingAddress"
          values={values.billingAddress}
          touched={touched}
          errors={errors}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
      </Box>

      <Box mb="20px">
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked
              value={values.shippingAddress.isSameAddress}
              onChange={() =>
                setFieldValue(
                  "shippingAddress.isSameAddress",
                  !values.shippingAddress.isSameAddress
                )
              }
            />
          }
          label="Same for Shipping Address"
        />
      </Box>

      {/* SHIPPING FORM */}
      {!values.shippingAddress.isSameAddress && (
        <Box>
          <Typography sx={{ mb: "15px" }} fontSize="18px">
            Shipping Information
          </Typography>
          <AddressForm
            type="shippingAddress"
            values={values.shippingAddress}
            touched={touched}
            errors={errors}
            handleBlur={handleBlur}
            handleChange={handleChange}
          />
        </Box>
      )}
    </Box>
  );
};

export default Shipping;
