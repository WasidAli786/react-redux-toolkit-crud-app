import {
  extendTheme,
  defineStyleConfig,
  withDefaultColorScheme,
} from "@chakra-ui/react";

//* customized form label component
const FormLabel = defineStyleConfig({
  baseStyle: {
    color: "#475569",
    fontSize: "14px",
    textTransform: "capitalize",
    mb: 1,
  },
});

//* customized input component
const Input = defineStyleConfig({
  sizes: {
    md: {
      field: {
        h: "44px",
      },
    },
    lg: {
      field: {
        h: "50px",
      },
    },
  },
});

//* customized select component
const Select = defineStyleConfig({
  sizes: {
    md: {
      field: {
        h: "44px",
      },
    },
    lg: {
      field: {
        h: "50px",
      },
    },
  },
});

//* customized button component
const Button = defineStyleConfig({
  sizes: {
    md: {
      h: "44px",
    },
    lg: {
      h: "50px",
    },
  },
});

const theme = extendTheme(
  {
    //* customize font family
    fonts: {
      body: "'Poppins', sans-serif",
    },

    //* custom component color
    colors: {
      primary: {
        50: "#e1f1ff",
        100: "#b3d2ff",
        200: "#84b4fa",
        300: "#5496f7",
        400: "#2878f4",
        500: "#3E88F6",
        600: "#0849ab",
        700: "#02347b",
        800: "#001f4c",
        900: "#000a1e",
      },
    },

    //* custom breakpoints for responsiveness
    breakpoints: {
      sm: "32em", // 512px
      md: "48em", // 768px
      lg: "62em", //992px
      xl: "80em", //1280px
      "2xl": "96em", //1536px
      // {["lg", "xl", "4xl", "3xl"]}
      // {[0-512px,512px-768px,768px-992px,992px,1280px]}
    },

    //* Customized components
    components: {
      FormLabel,
      Input,
      Select,
      Button,
    },
  },

  //* apply primary color scheme to all components
  withDefaultColorScheme({ colorScheme: "primary" })
);
export default theme;
