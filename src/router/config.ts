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
    path: ["/faqs"],
    component: "Faqs",
    chunkName: "faqs",
  },
  {
    path: ["/holiday-offer"],
    component: "HolidayOffer",
    chunkName: "holidayOffer",
  },
  {
    path: ["/offer-detail/:destination"],
    component: "OfferDetail/index",
    chunkName: "offerDetail",
  },
  {
    path: ["/country/:location"],
    component: "CountryPage/index",
    chunkName: "countryPage",
  },
  {
    path: ["/test/:country"],
    component: "Test",
    chunkName: "test",
  },
  {
    path: ["/airlines"],
    component: "Airlines",
    chunkName: "airlines ",
  },
];

export default routes;
