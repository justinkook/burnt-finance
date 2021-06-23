import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/create-page">
          <CreatePage {...createPageData} />
        </Route>
        <Route path="/:path(|landing-page)">
          <LandingPage {...landingPageData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const slider2Data = {
  className: "group-945",
};

const slider3Data = {
  className: "group-946",
};

const createPageData = {
  x: "X",
  rectangle722: "/img/rectangle-722@2x.svg",
  motorcycles: "Create my NFT",
  vector3: "/img/vector-3-1@2x.svg",
  line35: "/img/line-35-1@2x.svg",
  goBack: "Go back",
  line126: "/img/line-126@1x.svg",
  preview: "Preview",
  cryptoWheel: "CRYPTO WHEEL",
  auction: "AUCTION",
  line118: "/img/line-118@2x.svg",
  address: "1 of 1",
  noBidYet: "No bid yet",
  uploadFile: "Upload file",
  chooseCollection: "Choose collection",
  overlapGroup4: "/img/rectangle-738@2x.svg",
  accordionBlack: "/img/fill-1@2x.svg",
  newCollection: "New collection",
  text1: "PNG, GIF, WEBP, MP4 or MP3. Max 30mb.",
  chooseFile: "Choose file",
  vector32: "/img/vector-3@2x.svg",
  line352: "/img/line-35@2x.svg",
  eGCryptoWheel: "e.g. Crypto Wheel",
  text2: "Digital key, code to redeem or link to a file...",
  title: "ETH",
  iconMaterialNavigateNext: "/img/icon-material-navigate-next@2x.svg",
  line125: "/img/line-125@2x.svg",
  line127: "/img/line-125@2x.svg",
  serviceFee25: "/img/service-fee-2-5-@1x.png",
  tipMarkdownSyntaxIsSupported: "/img/tip--markdown-syntax-is-supported@1x.png",
  youWillReceive0Eth000: "/img/you-will-receive-0-eth--0-00@1x.png",
  putOnSale: "Put on sale",
  instantSalePrice: "Instant sale price",
  text4: "Unlock once purchased",
  text5: "You’ll receive bids on this item",
  text6: "Enter the price for which the item will be instantly sold",
  text7: "Content will be unlocked after successful transaction",
  place: "Name",
  eGCryptoWheel2: "e.g. Crypto Wheel",
  line1252: "/img/line-125@2x.svg",
  description: "Description",
  optional: "(optional)",
  eGLoremIpsum: "e.g. Lorem ipsum",
  line1253: "/img/line-125@2x.svg",
  accordionBlack2: "/img/fill-1@2x.svg",
  addProperty: "Add Property",
  royalties: "Royalties",
  number: "10",
  text3: "%",
  line1254: "/img/line-125-3@2x.svg",
  numberOfCopies: "Number of copies",
  number2: "1",
  line1255: "/img/line-125-3@2x.svg",
  createItem: "Create item",
  sliderProps: slider2Data,
  slider2Props: slider3Data,
};

const landingPageData = {
  maskGroup: "/img/mask-group@2x.svg",
  overlapGroup6: "/img/rectangle-760@2x.png",
  rectangle763: "/img/rectangle-763-1@2x.png",
  overlapGroup11: "/img/rectangle-762@2x.png",
  overlapGroup4: "/img/rectangle-768@2x.png",
  rectangle769: "/img/rectangle-769-1@2x.png",
  overlapGroup10: "/img/mask-group-1@2x.svg",
  rectangle711: "/img/rectangle-711-1@2x.png",
  rectangle765: "/img/rectangle-765@2x.png",
  rectangle770: "/img/rectangle-770-1@2x.png",
  overlapGroup8: "/img/rectangle-764@2x.png",
  overlapGroup3: "/img/rectangle-767@2x.png",
  rectangle719: "/img/rectangle-719-1@2x.png",
  group987: "/img/mask-group-3@2x.svg",
  rectangle766: "/img/rectangle-766@2x.png",
  maskGroup2: "/img/mask-group-6@2x.svg",
  image11: "/img/image-11@2x.png",
  explore: "EXPLORE",
  community: "COMMUNITY",
  learn: "LEARN",
  line1: "/img/line-1@2x.svg",
  create: "Create",
  connectWallet: "Connect Wallet",
  rectangle721: "/img/rectangle-721@1x.svg",
  rectangle753: "/img/rectangle-753@1x.svg",
  motorcycles: "Make the next big thing today",
  getStartedButton: "/img/get-started-button@2x.svg",
  getStartedButton2: "/img/get-started-button-1@2x.svg",
  getStartedButton3: "/img/get-started-button-2@2x.svg",
  line22: "/img/line-22@1x.svg",
  text1: "Or scroll to explore",
  rectangle722: "/img/rectangle-722@2x.svg",
};
