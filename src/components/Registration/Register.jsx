import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { pawdRegExp } from "../../utils";
import { RegFormWrapper } from "../styles/auth.styles";
import TextFields from "../SmallComponents/TextFields";
import SelectFields from "../SmallComponents/SelectFields";
import { Copyright } from "../SmallComponents/Copyright";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUserThunk } from "../../redux/provider/userSlice";
import { notification } from "antd";
// create schema validation
const schema = yup.object({
  name: yup.string().required("Full Name is required"),
  surname: yup.string().required("Full Name is required"),
  email: yup.string().required("Email is required").email(),
  country: yup.string().required("Country is required"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      pawdRegExp,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match"),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [api, contextHolder] = notification.useNotification();
  const cb = (type, text) => {
    api[type]({
      message: "Notification Title",
      description: text,
    });
  };
  const {
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      country: "",
      surname: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    delete data.confirmPassword;
    dispatch(registerUserThunk({ data, cb }));
    //reset();
  };

  return (
    <RegFormWrapper>
      {contextHolder}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          my: 8,
          mx: 4,

          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <HowToRegIcon />
        </Avatar>
        <Typography component="h1">Sign up</Typography>

        {/* Form */}
        <Box
          noValidate
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ width: "100%", mt: "2rem" }}
        >
          <TextFields
            errors={errors}
            control={control}
            name="name"
            label="First Name"
          />
          <TextFields
            errors={errors}
            control={control}
            name="surname"
            label="Last Name"
          />
          <TextFields
            errors={errors}
            control={control}
            name="email"
            label="Email"
          />

          <SelectFields
            errors={errors}
            control={control}
            name="country"
            label="Country"
          />
          <TextFields
            errors={errors}
            control={control}
            name="password"
            label="Password"
            type="password"
          />
          <TextFields
            errors={errors}
            control={control}
            name="confirmPassword"
            label="Confirm Password"
            type="password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign up
          </Button>
        </Box>
        <Grid container>
          <Grid item>
            <Link to={"/auth/login"}>{"Already have an account? Sign in"}</Link>
          </Grid>
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Box>
    </RegFormWrapper>
  );
};
