const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/contact"],
    component: "Contact",
  },
  {
    path: ["/about"],
    component: "About",
  },
  {
    path: ["/holiday-offer"],
    component: "HolidayOffer",
  },
  {
    path: "/country/:location",
    component: "CountryPage",
  },
];

export default routes;
