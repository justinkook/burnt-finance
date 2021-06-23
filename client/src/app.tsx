import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import ConnectWalletPage from "./pages/ConnectWalletPage";
import CreateNftModal from "./components/CreateNftModal";
import CreateNFTPage from "./pages/CreateNFTPage";
import CreateProjectPage from "./pages/CreateProjectPage";
import PlaceBidModal from "./components/PlaceBidModal";
import ProductPage from "./pages/ProductPage";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/connect-wallet">
          <ConnectWalletPage {...connectWalletPageData} />
        </Route>
        <Route path="/next-steps-modal">
          <CreateNftModal
            overlayMask="/assets/img/rectangle-86@2x.svg"
            title="Next steps"
            closeIcon="/assets/img/fill-1-2@2x.svg"
            subtitle="UPLOAD FILES & MINT TOKEM"
            body="/assets/img/call-contract-method@1x.png"
            buttonText="Follow wallet instructions..."
          />
        </Route>
        <Route path="/create-nft">
          <CreateNFTPage {...createNFTPageData} />
        </Route>
        <Route path="/create-project">
          <CreateProjectPage {...createProjectPageData} />
        </Route>
        <Route path="/place-bid-modal">
          <PlaceBidModal {...placeBidModalData} />
        </Route>
        <Route path="/product-detail">
          <ProductPage {...productPageData} />
        </Route>
        <Route path="/:path(|home)">
          <LandingPage {...landingPageData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const backButtonData = {
  vector3: "/assets/img/vector-3-1@2x.svg",
  line35: "/assets/img/line-35@2x.svg",
  text: "Go back",
};

const connectWalletPageData = {
  sideImage: "/assets/img/mask-group-1@1x.svg",
  connectYourWallet: "Connect your wallet",
  spanText:
    "Connect with one of available wallet providers or create a new wallet. ",
  spanText2: "What is wallet?",
  toolTip: "/assets/img/oval@2x.svg",
  DPpPMU: "i",
  metamaskLogo: "/assets/img/ellipse-92@2x.png",
  torusLogo: "/assets/img/ellipse-93@2x.png",
  portisLogo: "/assets/img/ellipse-94@2x.png",
  walletconnectLogo: "/assets/img/ellipse-95@2x.png",
  metamask: "METAMASK",
  torus: "TORUS",
  portis: "PORTIS",
  walletConnect: "WALLETCONNECT",
  divider1: "/assets/img/line-16@1x.svg",
  divider2: "/assets/img/line-16@1x.svg",
  divider3: "/assets/img/line-16@1x.svg",
  divider4: "/assets/img/line-16@1x.svg",
  divider5: "/assets/img/line-16@1x.svg",
  accordionBlack: "/assets/img/fill-1@2x.svg",
  showMore: "Show more",
  text2:
    "Disclaimer Lorem Ipsum We do not own your private keys and cannot access your funds without your confirmation.",
  bluetintmask: "/assets/img/rectangle-753@1x.svg",
  backButtonProps: backButtonData,
};

const headerData = {
  x: "X",
  dropdownicon: "/assets/img/rectangle-722@2x.svg",
};

const backButton2Data = {
  vector3: "/assets/img/vector-3-1@2x.svg",
  line35: "/assets/img/line-35@2x.svg",
  text: "Go back",
};

const previewCardData = {
  preview: "Preview",
  cryptoWheel: "CRYPTO WHEEL",
  auction: "AUCTION",
  line118: "/assets/img/line-118@2x.svg",
  address: "1 of 1",
  noBidYet: "No bid yet",
};

const createNFTPageData = {
  createMyNft: "Create my NFT",
  uploadFile: "Upload file",
  text1: "PNG, GIF, WEBP, MP4 or MP3. Max 30mb.",
  chooseFile: "Choose file",
  vector3: "/assets/img/vector-3@2x.svg",
  line35: "/assets/img/line-35@2x.svg",
  place: "Name",
  eGCryptoWheel: "e.g. Crypto Wheel",
  line125: "/assets/img/line-125@2x.svg",
  description: "Description",
  optional: "(optional)",
  eGLoremIpsum: "e.g. Lorem ipsum",
  line1252: "/assets/img/line-125@2x.svg",
  royalties: "Royalties",
  number: "10",
  text2: "%",
  line1253: "/assets/img/line-125-3@2x.svg",
  numberOfCopies: "Number of copies",
  number2: "1",
  line1254: "/assets/img/line-125-3@2x.svg",
  accordionBlack: "/assets/img/fill-1@2x.svg",
  addProperty: "Add Property",
  chooseCollection: "Choose collection",
  overlapGroup4: "/assets/img/rectangle-738@2x.svg",
  accordionBlack2: "/assets/img/fill-1@2x.svg",
  newCollection: "New collection",
  putOnSale: "Put on sale",
  text3: "You’ll receive bids on this item",
  createItem: "Create item",
  middivider: "/assets/img/line-126@1x.svg",
  headerProps: headerData,
  goBackProps: backButton2Data,
  goBackProps2: previewCardData,
};

const header2Data = {
  x: "X",
  dropdownicon: "/assets/img/rectangle-722@2x.svg",
  className: "header-1",
};

const backButton3Data = {
  vector3: "/assets/img/vector-3-1@2x.svg",
  line35: "/assets/img/line-35@2x.svg",
  text: "Go back",
};

const createProjectPageData = {
  motorcycles: "Create the next big thing",
  motorcycles2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  motorcycles3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  motorcycles4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  text1: "Choose type of the project you want to create.",
  overlapGroup2: "/assets/img/rectangle-744@2x.png",
  dropdownicon: "/assets/img/rectangle-745@2x.svg",
  nft: "NFT",
  overlapGroup3: "/assets/img/rectangle-746@2x.png",
  vector3: "/assets/img/rectangle-745@2x.svg",
  x: "Fundraising",
  fundraising: "Coming soon!",
  overlapGroup4: "/assets/img/rectangle-703@2x.png",
  line35: "/assets/img/rectangle-745@2x.svg",
  goBack: "Synthetics",
  feelTheFreedom: "Coming soon!",
  rectangle745: "/assets/img/rectangle-753@1x.svg",
  headerProps: header2Data,
  goBackProps: backButton3Data,
};

const header3Data = {
  searchIcon: "/assets/img/line-67@2x.svg",
  searchPlaceholder: "Search by creator, collectible or collection",
  explore: "EXPLORE",
  community: "COMMUNITY",
  learn: "LEARN",
  searchLine: "/assets/img/line-1@2x.svg",
  create: "Create",
  connectWallet: "Connect Wallet",
  navBarDivider: "/assets/img/line-117@2x.svg",
};

const productSideNavData = {
  info: "Info",
  owners: "Owners",
  history: "History",
  bids: "Bids",
};

const avatarGroupData = {
  name: "/assets/img/melvin-1@1x.png",
  position: "/assets/img/owner@1x.png",
};

const avatar3Data = {
  className: "ellipse-89-2",
};

const group427Data = {
  number: "56",
  vector2: "/assets/img/vector-10@2x.svg",
  artWorkTitle: "ART WORK TITLE",
  x02Eth: "0.2 ETH",
  line118: "/assets/img/line-118@2x.svg",
  address: "1 of 10",
};

const group4272Data = {
  number: "56",
  vector2: "/assets/img/vector-10@2x.svg",
  artWorkTitle: "ART WORK TITLE",
  x02Eth: "0.2 ETH",
  line118: "/assets/img/line-118@2x.svg",
  address: "1 of 10",
  className: "group-43",
};

const group4273Data = {
  number: "56",
  vector2: "/assets/img/vector-10@2x.svg",
  artWorkTitle: "ART WORK TITLE",
  x02Eth: "0.2 ETH",
  line118: "/assets/img/line-118@2x.svg",
  address: "1 of 10",
  className: "group-43",
};

const group4274Data = {
  number: "56",
  vector2: "/assets/img/vector-10@2x.svg",
  artWorkTitle: "ART WORK TITLE",
  x02Eth: "0.2 ETH",
  line118: "/assets/img/line-118@2x.svg",
  address: "1 of 10",
};

const productPageData = {
  text1: "Auction type | 8 Apr 10AM - 22 Apr 10 AM (EDT)",
  overlapGroup1: "/assets/img/vector-11@2x.svg",
  line67: "/assets/img/vector-18@2x.png",
  vector2: "/assets/img/vector-13@2x.svg",
  learn: "CLOSING: 22h 10m",
  closing22H10M: "56",
  line1202: "/assets/img/vector@2x.png",
  vector4: "/assets/img/vector-10@2x.svg",
  number: "Details",
  line1: "/assets/img/fill-1@2x.svg",
  line121: "/assets/img/line-121@1x.svg",
  spanText:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  ",
  spanText2: "Show more",
  line123: "/assets/img/line-123@2x.svg",
  line124: "/assets/img/line-123@2x.svg",
  vector3: "/assets/img/melvin-1@1x.png",
  line117: "/assets/img/creator@1x.png",
  info: "Collection",
  fill1: "/assets/img/fill-1@2x.svg",
  line122: "/assets/img/line-121@1x.svg",
  overlapGroup2: "/assets/img/rectangle-737@2x.png",
  rectangle738: "/assets/img/rectangle-738@2x.svg",
  ellipse5: "/assets/img/ellipse-5@2x.png",
  community: "COLLECTION NAME",
  fill12: "/assets/img/collection@1x.png",
  motorcycles:
    "Abuot collection lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa.",
  details: "NFT",
  text2: "Crypto Wheel #30 - Smoked",
  spanText3: "0.2 ETH",
  spanText4: "   ",
  spanText5: "$214.77",
  collection: "1 of 10",
  line119: "/assets/img/line-119@2x.svg",
  melvin: "/assets/img/melvin@1x.png",
  creator2: "/assets/img/creator@1x.png",
  collection2: "/assets/img/10--of-sales-will-go-to-creator@1x.png",
  melvin2: "/assets/img/line-119@2x.svg",
  owners: "Item is not on sale, but you can place a bid",
  create: "Place a bid",
  x10OfSalesWillGoToCreator: "/assets/img/bodhi5000@1x.png",
  creator: "/assets/img/highest-bid@1x.png",
  spanText6: "0.005 ETH",
  spanText7: "  ",
  spanText8: "$214.77",
  motorcycles4: "You may also like",
  motorcycles5: "View all",
  group427Props: header3Data,
  group427Props2: productSideNavData,
  group4272Props2: avatarGroupData,
  group427Props22: avatar3Data,
  group427Props23: group427Data,
  group4272Props22: group4272Data,
  group4272Props: group4273Data,
  group427Props232: group4274Data,
};

const chipData = {
  children: "All",
};

const chip2Data = {
  children: "ART",
};

const collectionDivider2Data = {
  className: "carousel-indicator-1",
};

const collectionDivider3Data = {
  className: "carousel-indicator-2",
};

const collectionDivider4Data = {
  className: "carousel-indicator-3",
};

const collectionDivider5Data = {
  className: "carousel-indicator-4",
};

const collectionCardData = {
  bidStatus: "CLOSING",
  expirationTime: ": 22h 10m",
  image: "/assets/img/rectangle-704@2x.png",
  likes: "56",
  favoritesIcon: "/assets/img/vector-2@2x.svg",
  title: "ART WORK TITLE",
  amount: "0.2 ETH",
  divider: "/assets/img/line-118@2x.svg",
  numberOfImages: "1 of 10",
};

const collectionCard2Data = {
  bidStatus: "CLOSING",
  expirationTime: ": 22h 10m",
  image: "/assets/img/mask-group-2@2x.svg",
  likes: "56",
  favoritesIcon: "/assets/img/vector-2@2x.svg",
  title: "ART WORK TITLE",
  amount: "0.2 ETH",
  divider: "/assets/img/line-118@2x.svg",
  numberOfImages: "1 of 10",
  className: "group-942",
};

const collectionCard3Data = {
  bidStatus: "CLOSING",
  expirationTime: ": 22h 10m",
  image: "/assets/img/rectangle-704-1@2x.png",
  likes: "56",
  favoritesIcon: "/assets/img/vector-2@2x.svg",
  title: "ART WORK TITLE",
  amount: "0.2 ETH",
  divider: "/assets/img/line-118@2x.svg",
  numberOfImages: "1 of 10",
  className: "group-941",
};

const collectionCard4Data = {
  bidStatus: "CLOSING",
  expirationTime: ": 22h 10m",
  image: "/assets/img/rectangle-704-2@2x.png",
  likes: "56",
  favoritesIcon: "/assets/img/vector-2@2x.svg",
  title: "ART WORK TITLE",
  amount: "0.2 ETH",
  divider: "/assets/img/line-118@2x.svg",
  numberOfImages: "1 of 10",
  className: "group-943",
};

const group435Data = {
  overlapGroup18: "/assets/img/rectangle-704-3@2x.png",
  number: "56",
  vector2: "/assets/img/vector-10@2x.svg",
  artWorkTitle: "ART WORK TITLE",
  x02Eth: "0.2 ETH",
  line118: "/assets/img/line-118@2x.svg",
  address: "1 of 10",
};

const group4352Data = {
  overlapGroup18: "/assets/img/rectangle-705@2x.png",
  number: "56",
  vector2: "/assets/img/vector-2@2x.svg",
  artWorkTitle: "ART WORK TITLE",
  x02Eth: "0.2 ETH",
  line118: "/assets/img/line-118@2x.svg",
  address: "1 of 10",
  className: "group-439",
};

const group4353Data = {
  overlapGroup18: "/assets/img/rectangle-704-4@2x.png",
  number: "56",
  vector2: "/assets/img/vector-2@2x.svg",
  artWorkTitle: "ART WORK TITLE",
  x02Eth: "0.2 ETH",
  line118: "/assets/img/line-118@2x.svg",
  address: "1 of 10",
  className: "group-436",
};

const group4354Data = {
  overlapGroup18: "/assets/img/rectangle-704-5@2x.png",
  number: "56",
  vector2: "/assets/img/vector-10@2x.svg",
  artWorkTitle: "ART WORK TITLE",
  x02Eth: "0.2 ETH",
  line118: "/assets/img/line-118@2x.svg",
  address: "1 of 10",
  className: "group-440",
};

const group4355Data = {
  overlapGroup18: "/assets/img/rectangle-704-6@2x.png",
  number: "56",
  vector2: "/assets/img/vector-2@2x.svg",
  artWorkTitle: "ART WORK TITLE",
  x02Eth: "0.2 ETH",
  line118: "/assets/img/line-118@2x.svg",
  address: "1 of 10",
  className: "group-437",
};

const group4356Data = {
  overlapGroup18: "/assets/img/mask-group-3@2x.svg",
  number: "56",
  vector2: "/assets/img/vector-10@2x.svg",
  artWorkTitle: "ART WORK TITLE",
  x02Eth: "0.2 ETH",
  line118: "/assets/img/line-118@2x.svg",
  address: "1 of 10",
  className: "group-441",
};

const group4357Data = {
  overlapGroup18: "/assets/img/rectangle-704-7@2x.png",
  number: "56",
  vector2: "/assets/img/vector-10@2x.svg",
  artWorkTitle: "ART WORK TITLE",
  x02Eth: "0.2 ETH",
  line118: "/assets/img/line-118@2x.svg",
  address: "1 of 10",
  className: "group-447",
};

const group4358Data = {
  overlapGroup18: "/assets/img/rectangle-704-9@2x.png",
  number: "56",
  vector2: "/assets/img/vector-10@2x.svg",
  artWorkTitle: "ART WORK TITLE",
  x02Eth: "0.2 ETH",
  line118: "/assets/img/line-118@2x.svg",
  address: "1 of 10",
  className: "group-448",
};

const group4359Data = {
  overlapGroup18: "/assets/img/rectangle-704-10@2x.png",
  number: "56",
  vector2: "/assets/img/vector-10@2x.svg",
  artWorkTitle: "ART WORK TITLE",
  x02Eth: "0.2 ETH",
  line118: "/assets/img/line-118@2x.svg",
  address: "1 of 10",
  className: "group-438",
};

const group43510Data = {
  overlapGroup18: "/assets/img/rectangle-704-11@2x.png",
  number: "56",
  vector2: "/assets/img/vector-2@2x.svg",
  artWorkTitle: "ART WORK TITLE",
  x02Eth: "0.2 ETH",
  line118: "/assets/img/line-118@2x.svg",
  address: "1 of 10",
  className: "group-442",
};

const group43511Data = {
  overlapGroup18: "/assets/img/rectangle-704-12@2x.png",
  number: "56",
  vector2: "/assets/img/vector-2@2x.svg",
  artWorkTitle: "ART WORK TITLE",
  x02Eth: "0.2 ETH",
  line118: "/assets/img/line-118@2x.svg",
  address: "1 of 10",
  className: "group-444",
};

const tripleDotsIcon2Data = {
  className: "menu-1",
};

const homePageData = {
  maskGroup: "/assets/img/mask-group@2x.svg",
  overlapGroup6: "/assets/img/rectangle-760@2x.png",
  rectangle763: "/assets/img/rectangle-763-1@2x.png",
  overlapGroup11: "/assets/img/rectangle-762@2x.png",
  overlapGroup4: "/assets/img/rectangle-768@2x.png",
  rectangle769: "/assets/img/rectangle-769-1@2x.png",
  overlapGroup10: "/assets/img/mask-group-1@2x.svg",
  rectangle711: "/assets/img/rectangle-711-1@2x.png",
  rectangle765: "/assets/img/rectangle-765@2x.png",
  rectangle770: "/assets/img/rectangle-770-1@2x.png",
  overlapGroup8: "/assets/img/rectangle-764@2x.png",
  overlapGroup3: "/assets/img/rectangle-767@2x.png",
  rectangle719: "/assets/img/rectangle-719-1@2x.png",
  group987: "/assets/img/mask-group-3@2x.svg",
  homeimage1: "/assets/img/rectangle-766@2x.png",
  image1: "/assets/img/mask-group-6@2x.svg",
  burntLogo: "/assets/img/image-11@2x.png",
  explore: "EXPLORE",
  community: "COMMUNITY",
  learn: "LEARN",
  navbardivider: "/assets/img/line-1@2x.svg",
  create: "Create",
  linkicon: "/assets/img/vector@2x.svg",
  connectWallet: "Connect Wallet",
  hometransparentmask: "/assets/img/rectangle-721@1x.svg",
  homebluetintmask: "/assets/img/rectangle-753@1x.svg",
  text62: "Make the next big thing today",
  nfts: "/assets/img/get-started-button@2x.svg",
  fundraising: "/assets/img/get-started-button-1@2x.svg",
  synthetics: "/assets/img/get-started-button-2@2x.svg",
  homedivider: "/assets/img/line-22@1x.svg",
  text5: "Or scroll to explore",
  rectangle722: "/assets/img/rectangle-722@2x.svg",
};

const landingPageData = {
  ...homePageData,
  line67: "/assets/img/line-67@2x.svg",
  searchPlaceholder: "Search by creator, collectible or collection",
  explore: "EXPLORE",
  community: "COMMUNITY",
  learn: "LEARN",
  navbarDivider: "/assets/img/line-1@2x.svg",
  create: "Create",
  linkicon: "/assets/img/vector@2x.svg",
  connectWallet: "Connect Wallet",
  searchLine: "/assets/img/line-117@2x.svg",
  image12: "/assets/img/image-12@2x.png",
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
  overlapGroup4: "/assets/img/rectangle-703@2x.png",
  rectangle732: "/assets/img/rectangle-732@2x.svg",
  ellipse2: "/assets/img/ellipse-2@2x.png",
  collectionName: "COLLECTION NAME",
  overlapGroup1: "/assets/img/rectangle-703@2x.png",
  rectangle744: "/assets/img/rectangle-744@2x.png",
  rectangle734: "/assets/img/rectangle-732@2x.svg",
  maskGroup: "/assets/img/mask-group@2x.svg",
  collectionName2: "COLLECTION NAME",
  overlapGroup: "/assets/img/rectangle-703@2x.png",
  rectangle746: "/assets/img/rectangle-746@2x.png",
  rectangle736: "/assets/img/rectangle-732@2x.svg",
  ellipse4: "/assets/img/ellipse-4@2x.png",
  collectionName3: "COLLECTION NAME",
  overlapGroup3: "/assets/img/rectangle-703@2x.png",
  rectangle747: "/assets/img/rectangle-747@2x.png",
  rectangle738: "/assets/img/rectangle-732@2x.svg",
  ellipse5: "/assets/img/ellipse-5@2x.png",
  collectionName4: "COLLECTION NAME",
  motorcycles10: "Hot bids",
  connectWallet2: "Domains",
  motorcycles11: "Sports",
  motorcycles12: "Utility",
  motorcycles13: "DeFi",
  motorcycles14: "Photography",
  motorcycles15: "Games",
  motorcycles16: "Music",
  motorcycles17: "Memes",
  overlapGroup24: "/assets/img/mask-group-4@2x.svg",
  number: "56",
  vector33: "/assets/img/vector-7@2x.png",
  vector2: "/assets/img/vector-10@2x.svg",
  artWorkTitle: "ART WORK TITLE",
  x02Eth: "0.2 ETH",
  line118: "/assets/img/line-118@2x.svg",
  address: "1 of 10",
  overlapGroup26: "/assets/img/rectangle-705@2x.png",
  rectangle705: "/assets/img/rectangle-705-1@2x.png",
  number2: "56",
  vector4: "/assets/img/vector-2@2x.svg",
  artWorkTitle2: "ART WORK TITLE",
  x02Eth2: "0.2 ETH",
  line1182: "/assets/img/line-118@2x.svg",
  address2: "1 of 10",
  number3: "56",
  vector5: "/assets/img/vector-16@2x.png",
  vector6: "/assets/img/vector-10@2x.svg",
  artWorkTitle3: "ART WORK TITLE",
  x02Eth3: "0.2 ETH",
  line1183: "/assets/img/line-118@2x.svg",
  address3: "1 of 10",
  maskGroup2: "/assets/img/mask-group-5@2x.svg",
  ellipse42: "/assets/img/ellipse-4-1@2x.png",
  ellipse81: "/assets/img/ellipse-81@2x.png",
  number4: "56",
  vector7: "/assets/img/vector-18@2x.png",
  vector8: "/assets/img/vector-10@2x.svg",
  rectangle703: "/assets/img/rectangle-703-1@2x.png",
  artWorkTitle4: "ART WORK TITLE",
  x02Eth4: "0.2 ETH",
  line1184: "/assets/img/line-118@2x.svg",
  address4: "1 of 10",
  placeABid: "PLACE A BID",
  vector332: "/assets/img/vector-3-1@2x.svg",
  linkicon2: "/assets/img/line-35@2x.svg",
  line35: "/assets/img/image-3@2x.png",
  overlapGroup2: "/assets/img/image-7.svg",
  create2: "Learn more",
  learn2:
    "Banksy Artwork Burned And Turned Into Digital Art By Crypto Fans; Sold As NFT For $380K",
  community2: "Banksy Artwork Burned",
  motorcycles21: "NFT",
  carouselIndicator3Props: chipData,
  carouselIndicator3Props2: chip2Data,
  group4358Props: collectionDivider2Data,
  carouselIndicatorProps: collectionDivider3Data,
  carouselIndicator2Props: collectionDivider4Data,
  carouselIndicator3Props22: collectionDivider5Data,
  group427Props: collectionCardData,
  group4272Props: collectionCard2Data,
  group4273Props: collectionCard3Data,
  group4274Props: collectionCard4Data,
  group435Props: group435Data,
  group4352Props: group4352Data,
  group4353Props: group4353Data,
  group4354Props: group4354Data,
  group4355Props: group4355Data,
  group4356Props: group4356Data,
  group4357Props: group4357Data,
  group4358Props2: group4358Data,
  group4359Props: group4359Data,
  group43510Props: group43510Data,
  group43511Props2: group43511Data,
  group43511Props22: tripleDotsIcon2Data,
};

const placeBidModalData = {
  rectangle703: "/assets/img/rectangle-703@1x.svg",
  number: "1",
  enterBid: "Enter bid",
  place: "ETH",
  iconMaterialNavigateNext: "/assets/img/icon-material-navigate-next@2x.svg",
  iconMaterialNavigateNext2: "/assets/img/icon-material-navigate-next@2x.svg",
  motorcycles: "Place a bid",
  motorcycles2: "YOU ARE ABOUT TO PURCHASE",
  uiCloseLargeBlack: "/assets/img/fill-1-2@2x.svg",
  subtotal: "Subtotal",
  serviceFee: "Service fee",
  totalText: "TOTAL",
  subtotal2: "2.001 ETH",
  serviceFee2: "0.002 ETH",
  totalText2: "0.002 ETH",
  placeABid: "Place a bid",
  line23: "/assets/img/line-23@2x.svg",
  feelTheFreedom: "NFT",
  cryptoWheel30Smoked: "/assets/img/crypto-wheel--30---smoked@1x.png",
  byMelvin: "/assets/img/by-melvin@1x.png",
  line24: "/assets/img/line-23@2x.svg",
  line25: "/assets/img/line-23@2x.svg",
  quantityText: "QUANTITY",
  address: "15 available",
  to2: "YOUR BID",
};
