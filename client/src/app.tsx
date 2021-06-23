import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Desktop42 from "./components/Desktop42";
import Desktop43 from "./components/Desktop43";
import Desktop31 from "./components/Desktop31";
import Desktop15 from "./components/Desktop15";
import Desktop18 from "./components/Desktop18";
import Desktop21 from "./components/Desktop21";
import BurntFinanceHomePage from "./components/BurntFinanceHomePage";
import BurntFinanceLandingPage from "./components/BurntFinanceLandingPage";
import Desktop58 from "./components/Desktop58";
import Desktop44 from "./components/Desktop44";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/desktop-42">
          <Desktop42
            overlapGroup6="/img/rectangle-86@2x.svg"
            motorcycles="Next steps"
            uiCloseLargeBlack="/img/fill-1-2@2x.svg"
            text7="UPLOAD FILES & MINT TOKEM"
            callContractMethod="/img/call-contract-method@1x.png"
            text8="Follow wallet instructions..."
            group935Props={desktop42Data.group935Props}
          />
        </Route>
        <Route path="/desktop-43">
          <Desktop43 {...desktop43Data} />
        </Route>
        <Route path="/desktop-31">
          <Desktop31 {...desktop31Data} />
        </Route>
        <Route path="/desktop-15">
          <Desktop15 {...desktop15Data} />
        </Route>
        <Route path="/desktop-18">
          <Desktop18 {...desktop18Data} />
        </Route>
        <Route path="/desktop-21">
          <Desktop21 {...desktop21Data} />
        </Route>
        <Route path="/:path(|burntfinance-homepage)">
          <BurntFinanceHomePage {...burntFinanceHomePageData} />
        </Route>
        <Route path="/burntfinance-landingpage">
          <BurntFinanceLandingPage {...burntFinanceLandingPageData} />
        </Route>
        <Route path="/desktop-58">
          <Desktop58
            overlapGroup6="/img/rectangle-86@2x.svg"
            uiCloseLargeBlack="/img/fill-1-2@2x.svg"
            uploadFile="Your NFT is created successfully!"
            vector3="/img/you-have-created-a-nft-successfully--you-will-find-your-nfts-in-@1x.png"
            motorcycles2="Check it out"
            group925Props={desktop58Data.group925Props}
          />
        </Route>
        <Route path="/desktop-44">
          <Desktop44 {...desktop44Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

/*
 * TODO
 * Stubbing fake data until server / mongodb is setup
 */
const group4543Data = {
  children: "X",
};

const headerData = {
  rectangle722: "/img/rectangle-722@2x.svg",
  group4543Props: group4543Data,
};

const group932Data = {
  vector3: "/img/vector-3-1@2x.svg",
  line35: "/img/line-35@2x.svg",
  goBack: "Go back",
};

const group3Data = {
  children: "Choose file",
};

const group923Data = {
  place: "Name",
  eGCryptoWheel: "e.g. Crypto Wheel",
  line125: "/img/line-125@2x.svg",
};

const group924Data = {
  description: "Description",
  optional: "(optional)",
  eGLoremIpsum: "e.g. Lorem ipsum",
  line125: "/img/line-125@2x.svg",
};

const group925Data = {
  royalties: "Royalties",
  number: "10",
  text2: "%",
  line125: "/img/line-125-3@2x.svg",
};

const group926Data = {
  numberOfCopies: "Number of copies",
  number: "1",
  line125: "/img/line-125-3@2x.svg",
};

const group927Data = {
  accordionBlack: "/img/fill-1@2x.svg",
  addProperty: "Add Property",
  className: "",
};

const group641Data = {
  overlapGroup4: "/img/rectangle-738@2x.svg",
  accordionBlack: "/img/fill-1@2x.svg",
  newCollection: "New collection",
};

const group7492Data = {
  className: "group-928",
};

const group930Data = {
  children: "Create item",
};

const group935Data = {
  motorcycles: "Create my NFT",
  uploadFile: "Upload file",
  text1: "PNG, GIF, WEBP, MP4 or MP3. Max 30mb.",
  chooseCollection: "Choose collection",
  putOnSale: "Put on sale",
  text4: "You’ll receive bids on this item",
  instantSalePrice: "Instant sale price",
  text52: "Enter the price for which the item will be instantly sold",
  text3: "Unlock once purchased",
  text6: "Content will be unlocked after successful transaction",
  line126: "/img/line-126-1@1x.svg",
  preview: "Preview",
  cryptoWheel: "CRYPTO WHEEL",
  auction: "AUCTION",
  line118: "/img/line-118@2x.svg",
  address: "1 of 1",
  noBidYet: "No bid yet",
  headerProps: headerData,
  group932Props: group932Data,
  group3Props: group3Data,
  group923Props: group923Data,
  group924Props: group924Data,
  group925Props: group925Data,
  group926Props: group926Data,
  group927Props: group927Data,
  group641Props: group641Data,
  group749Props2: group7492Data,
  group930Props: group930Data,
};

const desktop42Data = {
  overlapGroup6: "/img/rectangle-86@2x.svg",
  motorcycles: "Next steps",
  uiCloseLargeBlack: "/img/fill-1-2@2x.svg",
  text7: "UPLOAD FILES & MINT TOKEM",
  callContractMethod: "/img/call-contract-method@1x.png",
  text8: "Follow wallet instructions...",
  group935Props: group935Data,
};

const group45432Data = {
  children: "X",
};

const header2Data = {
  rectangle722: "/img/rectangle-722@2x.svg",
  group4543Props: group45432Data,
};

const group9322Data = {
  vector3: "/img/vector-3-1@2x.svg",
  line35: "/img/line-35@2x.svg",
  goBack: "Go back",
};

const group9232Data = {
  place: "Name",
  eGCryptoWheel: "e.g. Crypto Wheel",
  line125: "/img/line-125@2x.svg",
  className: "group-923-1",
};

const group9242Data = {
  description: "Description",
  optional: "(optional)",
  eGLoremIpsum: "e.g. Lorem ipsum",
  line125: "/img/line-125@2x.svg",
  className: "group-924-1",
};

const group9252Data = {
  royalties: "Royalties",
  number: "10",
  text2: "%",
  line125: "/img/line-125-3@2x.svg",
};

const group9262Data = {
  numberOfCopies: "Number of copies",
  number: "1",
  line125: "/img/line-125-3@2x.svg",
};

const group9272Data = {
  accordionBlack: "/img/fill-1@2x.svg",
  addProperty: "Add Property",
  className: "group-927-1",
};

const group6412Data = {
  overlapGroup4: "/img/rectangle-738@2x.svg",
  accordionBlack: "/img/fill-1@2x.svg",
  newCollection: "New collection",
  className: "group-641-1",
};

const group7493Data = {
  className: "group-945-1",
};

const group9302Data = {
  children: "Create item",
  className: "group-930-1",
};

const desktop43Data = {
  motorcycles: "Create my NFT",
  uploadFile: "Upload file",
  text1: "PNG, GIF, WEBP, MP4 or MP3. Max 30mb.",
  chooseFile: "Choose file",
  vector3: "/img/vector-3@2x.svg",
  line35: "/img/line-35@2x.svg",
  chooseCollection: "Choose collection",
  putOnSale: "Put on sale",
  text3: "You’ll receive bids on this item",
  line126: "/img/line-126@1x.svg",
  preview: "Preview",
  cryptoWheel: "CRYPTO WHEEL",
  auction: "AUCTION",
  line118: "/img/line-118@2x.svg",
  address: "1 of 1",
  noBidYet: "No bid yet",
  headerProps: header2Data,
  group932Props: group9322Data,
  group923Props: group9232Data,
  group924Props: group9242Data,
  group925Props: group9252Data,
  group926Props: group9262Data,
  group927Props: group9272Data,
  group641Props: group6412Data,
  group926Props2: group7493Data,
  group930Props: group9302Data,
};

const group9323Data = {
  vector3: "/img/vector-3-1@2x.svg",
  line35: "/img/line-35@2x.svg",
  goBack: "Go back",
};

const desktop31Data = {
  maskGroup: "/img/mask-group-1@1x.svg",
  motorcycles: "Connect your wallet",
  spanText:
    "Connect with one of available wallet providers or create a new wallet. ",
  spanText2: "What is wallet?",
  toolTip: "/img/oval@2x.svg",
  ixv9eH: "i",
  ellipse92: "/img/ellipse-92@2x.png",
  ellipse93: "/img/ellipse-93@2x.png",
  ellipse94: "/img/ellipse-94@2x.png",
  ellipse95: "/img/ellipse-95@2x.png",
  motorcycles2: "METAMASK",
  motorcycles3: "TORUS",
  motorcycles4: "PORTIS",
  motorcycles5: "WALLETCONNECT",
  line16: "/img/line-16@1x.svg",
  line17: "/img/line-16@1x.svg",
  line18: "/img/line-16@1x.svg",
  line19: "/img/line-16@1x.svg",
  line20: "/img/line-16@1x.svg",
  accordionBlack: "/img/fill-1@2x.svg",
  showMore: "Show more",
  text2:
    "Disclaimer Lorem Ipsum We do not own your private keys and cannot access your funds without your confirmation.",
  rectangle753: "/img/rectangle-753@1x.svg",
  group932Props: group9323Data,
};

const group45433Data = {
  children: "X",
};

const header3Data = {
  rectangle722: "/img/rectangle-722@2x.svg",
  className: "header-2",
  group4543Props: group45433Data,
};

const group9324Data = {
  vector3: "/img/vector-3-1@2x.svg",
  line35: "/img/line-35@2x.svg",
  goBack: "Go back",
};

const desktop15Data = {
  motorcycles: "Create the next big thing",
  motorcycles2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  motorcycles3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  motorcycles4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  text1: "Choose type of the project you want to create.",
  overlapGroup2: "/img/rectangle-744@2x.png",
  rectangle745: "/img/rectangle-745@2x.svg",
  nft: "NFT",
  overlapGroup3: "/img/rectangle-746@2x.png",
  rectangle747: "/img/rectangle-745@2x.svg",
  fundraising: "Fundraising",
  feelTheFreedom: "Coming soon!",
  overlapGroup4: "/img/rectangle-703@2x.png",
  rectangle732: "/img/rectangle-745@2x.svg",
  synthetics: "Synthetics",
  feelTheFreedom2: "Coming soon!",
  rectangle753: "/img/rectangle-753@1x.svg",
  headerProps: header3Data,
  group932Props: group9324Data,
};

const group35Data = {
  children: "Create",
};

const group454Data = {
  connectWallet: "Connect Wallet",
};

const favoriteBorderData = {
  vector2: "/img/vector-10@2x.svg",
};

const group322Data = {
  children: "Buy now",
};

const group638Data = {
  src: "/img/bodhi5000@1x.png",
};

const group3222Data = {
  children: "Buy now",
  className: "group-3-7",
};

const group427Data = {
  number: "56",
  overlapGroup5: "/img/vector@2x.png",
  artWorkTitle: "ART WORK TITLE",
  x02Eth: "0.2 ETH",
  line118: "/img/vector@2x.png",
  address: "1 of 10",
};

const group4272Data = {
  number: "56",
  overlapGroup5: "/img/vector@2x.png",
  artWorkTitle: "ART WORK TITLE",
  x02Eth: "0.2 ETH",
  line118: "/img/vector@2x.png",
  address: "1 of 10",
  className: "group-43",
};

const group4273Data = {
  number: "56",
  overlapGroup5: "/img/vector@2x.png",
  artWorkTitle: "ART WORK TITLE",
  x02Eth: "0.2 ETH",
  line118: "/img/vector@2x.png",
  address: "1 of 10",
  className: "group-43",
};

const group4274Data = {
  number: "56",
  overlapGroup5: "/img/vector@2x.png",
  artWorkTitle: "ART WORK TITLE",
  x02Eth: "0.2 ETH",
  line118: "/img/vector@2x.png",
  address: "1 of 10",
};

const group32Data = {
  children: "Place a bid",
};

const desktop18Data = {
  line67: "/img/line-67@2x.svg",
  text1: "Search by creator, collectible or collection",
  explore: "EXPLORE",
  community: "COMMUNITY",
  learn: "LEARN",
  line1: "/img/line-1@2x.svg",
  line117: "/img/line-117@2x.svg",
  info: "Info",
  owners: "Owners",
  history: "History",
  bids: "Bids",
  number: "56",
  details: "Details",
  fill1: "/img/fill-1@2x.svg",
  line121: "/img/line-121@1x.svg",
  spanText:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  ",
  spanText2: "Show more",
  line123: "/img/vector@2x.png",
  line124: "/img/vector@2x.png",
  melvin: "/img/line-122@1x.png",
  creator: "/img/line-122@1x.png",
  owner: "/img/line-122@1x.png",
  melvin2: "/img/line-122@1x.png",
  collection: "Collection",
  fill12: "/img/vector@2x.png",
  line122: "/img/line-122@1x.png",
  ellipse5: "/img/vector@2x.png",
  collection2: "/img/line-122@1x.png",
  rectangle737: "/img/vector@2x.png",
  rectangle738: "/img/vector@2x.png",
  collectionName: "COLLECTION NAME",
  motorcycles:
    "Abuot collection lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa.",
  feelTheFreedom: "NFT",
  motorcycles2: "Crypto Wheel #30 - Smoked",
  spanText3: "0.2 ETH",
  spanText4: "   ",
  spanText5: "$214.77",
  address: "1 of 10",
  line119: "/img/line-119@2x.svg",
  melvin3: "/img/melvin@1x.png",
  creator2: "/img/creator@1x.png",
  x10OfSalesWillGoToCreator: "/img/10--of-sales-will-go-to-creator@1x.png",
  line120: "/img/line-119@2x.svg",
  motorcycles3: "Service fee 2.5%. 0.584 ETH $1,254.77",
  bid: "Bid",
  highestBid: "/img/highest-bid@1x.png",
  spanText6: "0.005 ETH",
  spanText7: "  ",
  spanText8: "$214.77",
  motorcycles4: "You may also like",
  motorcycles5: "View all",
  rectangle703: "/img/rectangle-703@1x.svg",
  number2: "1",
  enterBid: "Enter bid",
  place: "ETH",
  iconMaterialNavigateNext: "/img/icon-material-navigate-next@2x.svg",
  iconMaterialNavigateNext2: "/img/icon-material-navigate-next@2x.svg",
  motorcycles6: "Place a bid",
  motorcycles7: "YOU ARE ABOUT TO PURCHASE",
  uiCloseLargeBlack: "/img/fill-1-2@2x.svg",
  subtotal: "Subtotal",
  serviceFee: "Service fee",
  total: "TOTAL",
  title: "2.001 ETH",
  title2: "0.002 ETH",
  title3: "0.002 ETH",
  line23: "/img/line-23@2x.svg",
  placeABid: "NFT",
  cryptoWheel30Smoked: "/img/crypto-wheel--30---smoked@1x.png",
  byMelvin: "/img/by-melvin@1x.png",
  line24: "/img/line-23@2x.svg",
  line25: "/img/line-23@2x.svg",
  to: "QUANTITY",
  address2: "15 available",
  feelTheFreedom2: "YOUR BID",
  group3Props: group35Data,
  group454Props: group454Data,
  favoriteBorderProps: favoriteBorderData,
  group32Props: group322Data,
  group638Props: group638Data,
  group322Props: group3222Data,
  group427Props: group427Data,
  group4272Props: group4272Data,
  group4273Props: group4273Data,
  group427Props2: group4274Data,
  group322Props2: group32Data,
};

const group352Data = {
  children: "Create",
};

const favoriteBorder2Data = {
  vector2: "/img/vector-10@2x.svg",
};

const group6382Data = {
  src: "/img/bodhi5000@1x.png",
};

const favoriteBorder3Data = {
  vector2: "/img/vector-10@2x.svg",
};

const group42742Data = {
  number: "56",
  artWorkTitle: "ART WORK TITLE",
  x02Eth: "0.2 ETH",
  line118: "/img/line-118@2x.svg",
  address: "1 of 10",
  favoriteBorderProps: favoriteBorder3Data,
};

const favoriteBorder4Data = {
  vector2: "/img/vector-10@2x.svg",
};

const group42743Data = {
  number: "56",
  artWorkTitle: "ART WORK TITLE",
  x02Eth: "0.2 ETH",
  line118: "/img/line-118@2x.svg",
  address: "1 of 10",
  className: "group-43-1",
  favoriteBorderProps: favoriteBorder4Data,
};

const favoriteBorder5Data = {
  vector2: "/img/vector-10@2x.svg",
};

const group42744Data = {
  number: "56",
  artWorkTitle: "ART WORK TITLE",
  x02Eth: "0.2 ETH",
  line118: "/img/line-118@2x.svg",
  address: "1 of 10",
  className: "group-43-1",
  favoriteBorderProps: favoriteBorder5Data,
};

const favoriteBorder6Data = {
  vector2: "/img/vector-10@2x.svg",
};

const group42745Data = {
  number: "56",
  artWorkTitle: "ART WORK TITLE",
  x02Eth: "0.2 ETH",
  line118: "/img/line-118@2x.svg",
  address: "1 of 10",
  favoriteBorderProps: favoriteBorder6Data,
};

const desktop21Data = {
  line67: "/img/line-67@2x.svg",
  text1: "Search by creator, collectible or collection",
  explore: "EXPLORE",
  community: "COMMUNITY",
  learn: "LEARN",
  line1: "/img/line-1@2x.svg",
  bodhi5000: "/img/vector@2x.svg",
  connectWallet: "Connect Wallet",
  line117: "/img/line-117@2x.svg",
  text2: "Auction type | 8 Apr 10AM - 22 Apr 10 AM (EDT)",
  overlapGroup1: "/img/vector-11@2x.svg",
  vector2: "/img/vector-18@2x.png",
  vector3: "/img/vector-13@2x.svg",
  closing22H10M: "CLOSING: 22h 10m",
  info: "Info",
  owners: "Owners",
  history: "History",
  bids: "Bids",
  number: "56",
  details: "Details",
  fill1: "/img/fill-1@2x.svg",
  line121: "/img/line-121@1x.svg",
  spanText:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  ",
  spanText2: "Show more",
  line123: "/img/line-123@2x.svg",
  line124: "/img/line-123@2x.svg",
  melvin: "/img/melvin-1@1x.png",
  creator: "/img/creator@1x.png",
  melvin2: "/img/melvin-1@1x.png",
  owner: "/img/owner@1x.png",
  collection: "Collection",
  fill12: "/img/fill-1@2x.svg",
  line122: "/img/line-121@1x.svg",
  overlapGroup2: "/img/rectangle-737@2x.png",
  rectangle738: "/img/rectangle-738@2x.svg",
  ellipse5: "/img/ellipse-5@2x.png",
  collectionName: "COLLECTION NAME",
  collection2: "/img/collection@1x.png",
  motorcycles:
    "Abuot collection lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa.",
  feelTheFreedom: "NFT",
  motorcycles2: "Crypto Wheel #30 - Smoked",
  spanText3: "0.2 ETH",
  spanText4: "   ",
  spanText5: "$214.77",
  address: "1 of 10",
  line119: "/img/line-119@2x.svg",
  melvin3: "/img/melvin@1x.png",
  creator2: "/img/creator@1x.png",
  x10OfSalesWillGoToCreator: "/img/10--of-sales-will-go-to-creator@1x.png",
  line120: "/img/line-119@2x.svg",
  motorcycles3: "Item is not on sale, but you can place a bid",
  placeABid: "Place a bid",
  highestBid: "/img/highest-bid@1x.png",
  spanText6: "0.005 ETH",
  spanText7: "  ",
  spanText8: "$214.77",
  motorcycles4: "You may also like",
  motorcycles5: "View all",
  group3Props: group352Data,
  favoriteBorderProps: favoriteBorder2Data,
  group4272Props: group6382Data,
  group427Props: group42742Data,
  group4272Props2: group42743Data,
  group4273Props: group42744Data,
  group427Props2: group42745Data,
};

const group353Data = {
  children: "Create",
};

const carouselIndicator3Data = {
  className: "carousel-indicator-2",
};

const carouselIndicator4Data = {
  className: "carousel-indicator-3",
};

const carouselIndicator5Data = {
  className: "carousel-indicator-4",
};

const carouselIndicator6Data = {
  className: "carousel-indicator-5",
};

const favoriteBorder7Data = {
  vector2: "/img/vector-2@2x.svg",
};

const group42732Data = {
  spanText: "CLOSING",
  spanText2: ": 22h 10m",
  overlapGroup10: "/img/rectangle-704@2x.png",
  number: "56",
  artWorkTitle: "ART WORK TITLE",
  x02Eth: "0.2 ETH",
  line118: "/img/line-118@2x.svg",
  address: "1 of 10",
  favoriteBorderProps: favoriteBorder7Data,
};

const favoriteBorder8Data = {
  vector2: "/img/vector-2@2x.svg",
};

const group42733Data = {
  spanText: "CLOSING",
  spanText2: ": 22h 10m",
  overlapGroup10: "/img/mask-group-2@2x.svg",
  number: "56",
  artWorkTitle: "ART WORK TITLE",
  x02Eth: "0.2 ETH",
  line118: "/img/line-118@2x.svg",
  address: "1 of 10",
  className: "group-942",
  favoriteBorderProps: favoriteBorder8Data,
};

const favoriteBorder9Data = {
  vector2: "/img/vector-2@2x.svg",
};

const group42734Data = {
  spanText: "CLOSING",
  spanText2: ": 22h 10m",
  overlapGroup10: "/img/rectangle-704-1@2x.png",
  number: "56",
  artWorkTitle: "ART WORK TITLE",
  x02Eth: "0.2 ETH",
  line118: "/img/line-118@2x.svg",
  address: "1 of 10",
  className: "group-941",
  favoriteBorderProps: favoriteBorder9Data,
};

const favoriteBorder10Data = {
  vector2: "/img/vector-2@2x.svg",
};

const group42735Data = {
  spanText: "CLOSING",
  spanText2: ": 22h 10m",
  overlapGroup10: "/img/rectangle-704-2@2x.png",
  number: "56",
  artWorkTitle: "ART WORK TITLE",
  x02Eth: "0.2 ETH",
  line118: "/img/line-118@2x.svg",
  address: "1 of 10",
  className: "group-943",
  favoriteBorderProps: favoriteBorder10Data,
};

const favoriteBorder11Data = {
  vector2: "/img/vector-10@2x.svg",
};

const group4353Data = {
  overlapGroup18: "/img/rectangle-704-3@2x.png",
  number: "56",
  artWorkTitle: "ART WORK TITLE",
  x02Eth: "0.2 ETH",
  line118: "/img/line-118@2x.svg",
  address: "1 of 10",
  favoriteBorderProps: favoriteBorder11Data,
};

const favoriteBorder12Data = {
  vector2: "/img/vector-2@2x.svg",
};

const group43532Data = {
  overlapGroup18: "/img/rectangle-705@2x.png",
  number: "56",
  artWorkTitle: "ART WORK TITLE",
  x02Eth: "0.2 ETH",
  line118: "/img/line-118@2x.svg",
  address: "1 of 10",
  className: "group-439",
  favoriteBorderProps: favoriteBorder12Data,
};

const favoriteBorder13Data = {
  vector2: "/img/vector-2@2x.svg",
};

const group43533Data = {
  overlapGroup18: "/img/rectangle-704-4@2x.png",
  number: "56",
  artWorkTitle: "ART WORK TITLE",
  x02Eth: "0.2 ETH",
  line118: "/img/line-118@2x.svg",
  address: "1 of 10",
  className: "group-436",
  favoriteBorderProps: favoriteBorder13Data,
};

const favoriteBorder14Data = {
  vector2: "/img/vector-10@2x.svg",
};

const group43534Data = {
  overlapGroup18: "/img/rectangle-704-5@2x.png",
  number: "56",
  artWorkTitle: "ART WORK TITLE",
  x02Eth: "0.2 ETH",
  line118: "/img/line-118@2x.svg",
  address: "1 of 10",
  className: "group-440",
  favoriteBorderProps: favoriteBorder14Data,
};

const favoriteBorder15Data = {
  vector2: "/img/vector-2@2x.svg",
};

const group43535Data = {
  overlapGroup18: "/img/rectangle-704-6@2x.png",
  number: "56",
  artWorkTitle: "ART WORK TITLE",
  x02Eth: "0.2 ETH",
  line118: "/img/line-118@2x.svg",
  address: "1 of 10",
  className: "group-437",
  favoriteBorderProps: favoriteBorder15Data,
};

const favoriteBorder16Data = {
  vector2: "/img/vector-10@2x.svg",
};

const group43536Data = {
  overlapGroup18: "/img/mask-group-3@2x.svg",
  number: "56",
  artWorkTitle: "ART WORK TITLE",
  x02Eth: "0.2 ETH",
  line118: "/img/line-118@2x.svg",
  address: "1 of 10",
  className: "group-441",
  favoriteBorderProps: favoriteBorder16Data,
};

const favoriteBorder17Data = {
  vector2: "/img/vector-10@2x.svg",
  className: "favoriteborder-2",
};

const favoriteBorder18Data = {
  vector2: "/img/vector-10@2x.svg",
};

const group43537Data = {
  overlapGroup18: "/img/rectangle-704-7@2x.png",
  number: "56",
  artWorkTitle: "ART WORK TITLE",
  x02Eth: "0.2 ETH",
  line118: "/img/line-118@2x.svg",
  address: "1 of 10",
  className: "group-447",
  favoriteBorderProps: favoriteBorder18Data,
};

const favoriteBorder19Data = {
  vector2: "/img/vector-2@2x.svg",
  className: "favoriteborder-2",
};

const favoriteBorder20Data = {
  vector2: "/img/vector-10@2x.svg",
};

const group43538Data = {
  overlapGroup18: "/img/rectangle-704-9@2x.png",
  number: "56",
  artWorkTitle: "ART WORK TITLE",
  x02Eth: "0.2 ETH",
  line118: "/img/line-118@2x.svg",
  address: "1 of 10",
  className: "group-448",
  favoriteBorderProps: favoriteBorder20Data,
};

const favoriteBorder21Data = {
  vector2: "/img/vector-10@2x.svg",
};

const group43539Data = {
  overlapGroup18: "/img/rectangle-704-10@2x.png",
  number: "56",
  artWorkTitle: "ART WORK TITLE",
  x02Eth: "0.2 ETH",
  line118: "/img/line-118@2x.svg",
  address: "1 of 10",
  className: "group-438",
  favoriteBorderProps: favoriteBorder21Data,
};

const favoriteBorder22Data = {
  vector2: "/img/vector-2@2x.svg",
};

const group435310Data = {
  overlapGroup18: "/img/rectangle-704-11@2x.png",
  number: "56",
  artWorkTitle: "ART WORK TITLE",
  x02Eth: "0.2 ETH",
  line118: "/img/line-118@2x.svg",
  address: "1 of 10",
  className: "group-442",
  favoriteBorderProps: favoriteBorder22Data,
};

const favoriteBorder23Data = {
  vector2: "/img/vector-2@2x.svg",
};

const group435311Data = {
  overlapGroup18: "/img/rectangle-704-12@2x.png",
  number: "56",
  artWorkTitle: "ART WORK TITLE",
  x02Eth: "0.2 ETH",
  line118: "/img/line-118@2x.svg",
  address: "1 of 10",
  className: "group-444",
  favoriteBorderProps: favoriteBorder23Data,
};

const favoriteBorder24Data = {
  vector2: "/img/vector-10@2x.svg",
};

const group435Data = {
  number: "56",
  artWorkTitle: "ART WORK TITLE",
  x02Eth: "0.2 ETH",
  line118: "/img/line-118@2x.svg",
  address: "1 of 10",
  favoriteBorderProps: favoriteBorder24Data,
};

const favoriteBorder25Data = {
  vector2: "/img/vector-10@2x.svg",
};

const burntFinanceHomePageData = {
  line67: "/img/line-67@2x.svg",
  text1: "Search by creator, collectible or collection",
  explore: "EXPLORE",
  community: "COMMUNITY",
  learn: "LEARN",
  line1: "/img/line-1@2x.svg",
  line1184: "/img/vector@2x.svg",
  connectWallet: "Connect Wallet",
  line117: "/img/line-117@2x.svg",
  image12: "/img/image-12@2x.png",
  motorcycles: "Promoted collection/topic",
  motorcycles2: "Promoted collection/topic",
  motorcycles3:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  motorcycles4:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  motorcycles5: "Filter & Sort",
  motorcycles6: "View all",
  motorcycles7: "View all",
  feelTheFreedom: "LOREM IPSUM",
  feelTheFreedom2: "LOREM IPSUM",
  motorcycles8: "Explore",
  motorcycles9: "Collections",
  overlapGroup4: "/img/rectangle-703@2x.png",
  rectangle732: "/img/rectangle-732@2x.svg",
  ellipse2: "/img/ellipse-2@2x.png",
  collectionName: "COLLECTION NAME",
  overlapGroup1: "/img/rectangle-703@2x.png",
  rectangle744: "/img/rectangle-744@2x.png",
  rectangle734: "/img/rectangle-732@2x.svg",
  maskGroup: "/img/mask-group@2x.svg",
  collectionName2: "COLLECTION NAME",
  overlapGroup: "/img/rectangle-703@2x.png",
  rectangle746: "/img/rectangle-746@2x.png",
  rectangle736: "/img/rectangle-732@2x.svg",
  ellipse4: "/img/ellipse-4@2x.png",
  collectionName3: "COLLECTION NAME",
  overlapGroup3: "/img/rectangle-703@2x.png",
  rectangle747: "/img/rectangle-747@2x.png",
  rectangle738: "/img/rectangle-732@2x.svg",
  ellipse5: "/img/ellipse-5@2x.png",
  collectionName4: "COLLECTION NAME",
  motorcycles10: "Hot bids",
  motorcycles11: "All",
  motorcycles12: "ART",
  motorcycles13: "Domains",
  motorcycles14: "Sports",
  motorcycles15: "Utility",
  motorcycles16: "DeFi",
  motorcycles17: "Photography",
  motorcycles18: "Games",
  motorcycles19: "Music",
  motorcycles20: "Memes",
  overlapGroup24: "/img/mask-group-4@2x.svg",
  number: "56",
  artWorkTitle: "ART WORK TITLE",
  x02Eth: "0.2 ETH",
  line118: "/img/line-118@2x.svg",
  address: "1 of 10",
  overlapGroup26: "/img/rectangle-705@2x.png",
  rectangle705: "/img/rectangle-705-1@2x.png",
  number2: "56",
  artWorkTitle2: "ART WORK TITLE",
  x02Eth2: "0.2 ETH",
  line1182: "/img/line-118@2x.svg",
  address2: "1 of 10",
  maskGroup2: "/img/mask-group-5@2x.svg",
  ellipse42: "/img/ellipse-4-1@2x.png",
  ellipse81: "/img/ellipse-81@2x.png",
  number3: "56",
  rectangle703: "/img/rectangle-703-1@2x.png",
  artWorkTitle3: "ART WORK TITLE",
  x02Eth3: "0.2 ETH",
  line1183: "/img/line-118@2x.svg",
  address3: "1 of 10",
  artWorkTitle4: "PLACE A BID",
  vector3: "/img/vector-3-1@2x.svg",
  line35: "/img/line-35@2x.svg",
  image3: "/img/image-3@2x.png",
  overlapGroup2: "/img/mask-group-1@1x.svg",
  number4: "Learn more",
  placeABid:
    "Banksy Artwork Burned And Turned Into Digital Art By Crypto Fans; Sold As NFT For $380K",
  address4: "Banksy Artwork Burned",
  x02Eth4: "NFT",
  group3Props: group353Data,
  group4358Props: carouselIndicator3Data,
  carouselIndicatorProps: carouselIndicator4Data,
  carouselIndicator2Props: carouselIndicator5Data,
  carouselIndicator3Props: carouselIndicator6Data,
  group427Props: group42732Data,
  group4272Props: group42733Data,
  group4273Props: group42734Data,
  group4274Props: group42735Data,
  group435Props: group4353Data,
  group4352Props: group43532Data,
  group4353Props: group43533Data,
  group4354Props: group43534Data,
  group4355Props: group43535Data,
  group4356Props: group43536Data,
  favoriteBorderProps: favoriteBorder17Data,
  group4357Props: group43537Data,
  favoriteBorderProps2: favoriteBorder19Data,
  group4358Props2: group43538Data,
  group4359Props: group43539Data,
  group43510Props: group435310Data,
  group43511Props: group435311Data,
  favoriteBorder4Props: group435Data,
  favoriteBorder4Props2: favoriteBorder25Data,
};

const group354Data = {
  children: "Create",
};

const group4542Data = {
  connectWallet: "Connect Wallet",
};

const burntFinanceLandingPageData = {
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
  rectangle721: "/img/rectangle-721@1x.svg",
  rectangle753: "/img/rectangle-753@1x.svg",
  connectWallet: "Make the next big thing today",
  getStartedButton: "/img/get-started-button@2x.svg",
  getStartedButton2: "/img/get-started-button-1@2x.svg",
  getStartedButton3: "/img/get-started-button-2@2x.svg",
  line22: "/img/line-22@1x.svg",
  create: "Or scroll to explore",
  rectangle722: "/img/rectangle-722@2x.svg",
  group3Props: group354Data,
  group3Props2: group4542Data,
};

const group45434Data = {
  children: "X",
};

const header4Data = {
  rectangle722: "/img/rectangle-722@2x.svg",
  group4543Props: group45434Data,
};

const group9325Data = {
  vector3: "/img/vector-3-1@2x.svg",
  line35: "/img/line-35-1@2x.svg",
  goBack: "Go back",
};

const group33Data = {
  children: "Choose file",
};

const group9233Data = {
  place: "Name",
  eGCryptoWheel: "e.g. Crypto Wheel",
  line125: "/img/line-125@2x.svg",
};

const group9243Data = {
  description: "Description",
  optional: "(optional)",
  eGLoremIpsum: "e.g. Lorem ipsum",
  line125: "/img/line-125@2x.svg",
};

const group9253Data = {
  royalties: "Royalties",
  number: "10",
  text2: "%",
  line125: "/img/line-125-3@2x.svg",
};

const group9263Data = {
  numberOfCopies: "Number of copies",
  number: "1",
  line125: "/img/line-125-3@2x.svg",
};

const group9273Data = {
  accordionBlack: "/img/fill-1-1@2x.svg",
  addProperty: "Add Property",
  className: "group-927-2",
};

const group6413Data = {
  overlapGroup4: "/img/rectangle-738@2x.svg",
  accordionBlack: "/img/fill-1@2x.svg",
  newCollection: "New collection",
};

const group7495Data = {
  className: "group-928-1",
};

const group9303Data = {
  children: "Create item",
};

const group9352Data = {
  motorcycles: "Create my NFT",
  uploadFile: "Upload file",
  text1: "PNG, GIF, WEBP, MP4 or MP3. Max 30mb.",
  chooseCollection: "Choose collection",
  putOnSale: "Put on sale",
  text4: "You’ll receive bids on this item",
  instantSalePrice: "Instant sale price",
  text52: "Enter the price for which the item will be instantly sold",
  text3: "Unlock once purchased",
  text6: "Content will be unlocked after successful transaction",
  line126: "/img/line-126-1@1x.svg",
  preview: "Preview",
  cryptoWheel: "CRYPTO WHEEL",
  auction: "AUCTION",
  line118: "/img/line-118@2x.svg",
  address: "1 of 1",
  noBidYet: "No bid yet",
  headerProps: header4Data,
  group932Props: group9325Data,
  group3Props: group33Data,
  group923Props: group9233Data,
  group924Props: group9243Data,
  group925Props: group9253Data,
  group926Props: group9263Data,
  group927Props: group9273Data,
  group641Props: group6413Data,
  group749Props2: group7495Data,
  group930Props: group9303Data,
};

const desktop58Data = {
  group925Props: group9352Data,
};

const group45435Data = {
  children: "X",
};

const header5Data = {
  rectangle722: "/img/rectangle-722@2x.svg",
  group4543Props: group45435Data,
};

const group9326Data = {
  vector3: "/img/vector-3-1@2x.svg",
  line35: "/img/line-35-1@2x.svg",
  goBack: "Go back",
};

const group6414Data = {
  overlapGroup4: "/img/rectangle-738@2x.svg",
  accordionBlack: "/img/fill-1@2x.svg",
  newCollection: "New collection",
  className: "group-641-3",
};

const group7133Data = {
  className: "group-713-2",
};

const group7134Data = {
  className: "group-945",
};

const group7135Data = {
  className: "group-946",
};

const group9234Data = {
  place: "Name",
  eGCryptoWheel: "e.g. Crypto Wheel",
  line125: "/img/line-125@2x.svg",
  className: "group-923-3",
};

const group9244Data = {
  description: "Description",
  optional: "(optional)",
  eGLoremIpsum: "e.g. Lorem ipsum",
  line125: "/img/line-125@2x.svg",
  className: "group-924-3",
};

const group9274Data = {
  accordionBlack: "/img/fill-1@2x.svg",
  addProperty: "Add Property",
  className: "group-927-3",
};

const group9254Data = {
  royalties: "Royalties",
  number: "10",
  text2: "%",
  line125: "/img/line-125-3@2x.svg",
  className: "group-925-3",
};

const group9264Data = {
  numberOfCopies: "Number of copies",
  number: "1",
  line125: "/img/line-125-3@2x.svg",
  className: "group-926-3",
};

const group9304Data = {
  children: "Create item",
  className: "group-930-3",
};

const desktop44Data = {
  motorcycles: "Create my NFT",
  line126: "/img/line-126@1x.svg",
  x: "Preview",
  cryptoWheel: "CRYPTO WHEEL",
  auction: "AUCTION",
  line118: "/img/line-118@2x.svg",
  address: "1 of 1",
  noBidYet: "No bid yet",
  uploadFile: "Upload file",
  chooseCollection: "Choose collection",
  text1: "PNG, GIF, WEBP, MP4 or MP3. Max 30mb.",
  goBack: "Choose file",
  vector3: "/img/vector-3@2x.svg",
  line35: "/img/line-35@2x.svg",
  eGCryptoWheel: "e.g. Crypto Wheel",
  text2: "Digital key, code to redeem or link to a file...",
  title: "ETH",
  rectangle722: "/img/icon-material-navigate-next@2x.svg",
  vector32: "/img/line-125@2x.svg",
  line125: "/img/line-125@2x.svg",
  line352: "/img/service-fee-2-5-@1x.png",
  line127: "/img/tip--markdown-syntax-is-supported@1x.png",
  iconMaterialNavigateNext: "/img/you-will-receive-0-eth--0-00@1x.png",
  preview: "Put on sale",
  instantSalePrice: "Instant sale price",
  text4: "Unlock once purchased",
  newCollection: "You’ll receive bids on this item",
  chooseFile: "Enter the price for which the item will be instantly sold",
  putOnSale: "Content will be unlocked after successful transaction",
  group713Props3: header5Data,
  group713Props32: group9326Data,
  group713Props5: group6414Data,
  group713Props2: group7133Data,
  group713Props: group7134Data,
  group7132Props: group7135Data,
  group713Props33: group9234Data,
  group713Props4: group9244Data,
  group713Props52: group9274Data,
  group713Props6: group9254Data,
  group713Props72: group9264Data,
  group7132Props2: group9304Data,
};
