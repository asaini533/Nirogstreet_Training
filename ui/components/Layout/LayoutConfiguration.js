import EmptyLayout from "./EmptyLayout";
import Layout from "./Layout";
import InvestorLayout from "./InvestorLayout";
const LayoutConfig = [
  {
    path: "/adminLogin",
    layout: EmptyLayout,
  },
  {
    path: "/admin",
    layout: Layout,
  },
  {
    path: "/opportunity",
    layout: InvestorLayout,
  },
  {
    path: "/kyc",
    layout: InvestorLayout,
  },
  {
    path: "/dashboard",
    layout: InvestorLayout,
  },
  {
    path: "/thankyou",
    layout: InvestorLayout,
  },
  {
    path: "",
    layout: EmptyLayout,
  },
];

const getLayout = (path) => {
  let config = LayoutConfig.find((config) => path.includes(config.path));
  if (config) return config.layout;
  else return EmptyLayout;
};

export { getLayout };
