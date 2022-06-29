import Info from "./info";
import Billing from "./billing";
import More from "./more";
import Detail from "./detail";
import Deduction from "./deduction";

export default [
  {
    path: "/usage/info",
    component: Info,
    meta: {
      title: "Usage",
      isTab: 1,
    },
  },
  {
    path: "/usage/more",
    component: More,
    meta: {
      group: "Usage",
      links: [
        {
          text: "Info",
          to: "/usage/info",
        },
        {
          text: `Buy more`,
        },
      ],
    },
  },
  {
    path: "/usage/billing",
    component: Billing,
    meta: {
      title: "Billing",
      group: "Usage",
      links: [
        {
          text: "Billing",
        },
      ],
    },
  },
  {
    path: "/usage/billing/detail",
    component: Detail,
    meta: {
      title: "Billing Details",
      group: "Usage",
      links: [
        {
          text: "Billing",
          to: "/usage/billing",
        },
        {
          text: `Details`,
        },
      ],
    },
  },
  {
    path: "/usage/billing/deduction",
    component: Deduction,
    meta: {
      title: "Deduction details",
      group: "Usage",
      links: [
        {
          text: "Billing",
          to: "/usage/billing",
        },
        {
          text: `Deduction details`,
        },
      ],
    },
  },
];
