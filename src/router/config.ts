const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
    chunkName: "home",
  },
  {
    path: ["/contact"],
    component: "Contact",
    chunkName: "contact",
  },
  {
    path: ["/about"],
    component: "About",
    chunkName: "about",
  },
  {
    path: ["/holiday-offer"],
    component: "HolidayOffer",
    chunkName: "holidayOffer",
  },
  {
    path: ["/offer-detail/:destination"],
    component: "OfferDetail",
    chunkName: "offerDetail",

  },
  {
    path: ["/country/:location"],
    component: "CountryPage",
    chunkName: "countryPage",
  },
];

export default routes;
