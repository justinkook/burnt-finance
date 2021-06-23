import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import CreatePage from "./pages/CreatePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|create-my-nft)">
          <CreatePage {...createPageData} />
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

