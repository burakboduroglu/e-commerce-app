import { CartContext } from "../contexts/CartContext";
import React, { useContext, useMemo, useState } from "react";

import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Chip,
  Input,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  HomeModernIcon,
  Square3Stack3DIcon,
  HomeIcon,
  ShoppingBagIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  WrenchScrewdriverIcon,
  LightBulbIcon,
  BeakerIcon,
  TagIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const colors = {
  blue: "bg-blue-50 text-blue-500",
  orange: "bg-orange-50 text-orange-500",
  green: "bg-green-50 text-green-500",
  red:"bg-red-50 text-red-500",
  yellow:"bg-yellow-50 text-yellow-500",
  brown: "bg-brown-50 text-brown-500",
  "blue-gray": "bg-blue-gray-50 text-blue-gray-500",
  purple: "bg-purple-50 text-purple-500",
  teal: "bg-teal-50 text-teal-500",
  cyan: "bg-cyan-50 text-cyan-500",
  pink: "bg-pink-50 text-pink-500",
};

const navListMenuItems = [
  {
    color: "green",
    icon: DevicePhoneMobileIcon,
    title: (
      <div className="flex items-center gap-1">
        Smartphones{" "}
        <Chip
          size="sm"
          color="green"
          variant="ghost"
          value="Sale!"
          className="capitalize"
        />
      </div>
      
    ),
    description: "Explore the latest in mobile technology with our wide range of smartphones.",
    categoryName:"smartphones",
  },
  {
    color: "blue",
    icon: ComputerDesktopIcon,
    title: "Laptops",
    description: "Discover powerful laptops for work and play in our selection.",
    categoryName:"laptops"
  },
  {
    color: "orange",
    icon: HomeModernIcon,
    title: "Home Decoration",
    description: "Transform your living spaces with our stylish home decoration products.",
    categoryName:"home-decoration"
  },
  {
    color: "red",
    icon: WrenchScrewdriverIcon,
    title: "Motorcycle",
    description: "Ride in style and adventure with our motorcycle collection.",
    categoryName:"motorcycle"
  },
  {
    color: "yellow",
    icon: LightBulbIcon,
    title: "Lighting",
    description: "Illuminate your home with our diverse range of lighting solutions.",
    categoryName:"lighting"
  },
  {
    color: "purple",
    icon: BeakerIcon,
    title: "Fragrances",
    description: "Experience luxury scents and fragrances that captivate the senses.",
    categoryName:"fragrances"
  },
  {
    color: "pink",
    icon: SunIcon,
    title: "Sunglasses",
    description: "Elevate your look and protect your eyes with our trendy sunglasses.",
    categoryName:"sunglasses"
  },
  {
    color: "brown",
    icon: TagIcon,
    title: "Groceries",
    description: "Stock up on essential groceries for your daily needs.",
    categoryName:"groceries"
  },
  
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  const renderItems = navListMenuItems.map(
    ({ icon, title, description, color, categoryName}, key) => (
      <a href="" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg" onClick={() => {
            navigate('/category/'+categoryName);
          }}>
          <div className={`rounded-lg p-5 ${colors[color]}`}>
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm"
            >
              {title}
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-normal">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              <Square3Stack3DIcon className="h-[18px] w-[18px]" />
              Categories
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-4 gap-y-2">{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  const navigate = useNavigate();
  

  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <ListItem
          onClick={() => {
            navigate("/");
          }}
          className="flex items-center gap-2 py-2 pr-4"
        >
          <HomeIcon className="h-[18px] w-[18px]" />
          Home
        </ListItem>
      </Typography>

      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
      </Typography>
    </List>
  );
}

export function NavbarWithMegaMenu({ query, setQuery }) {
  const [openNav, setOpenNav] = React.useState(false);
  const navigate = useNavigate();
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const { cart } = useContext(CartContext);

  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          onClick={() => {
            navigate("/");
          }}
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2"
        >
          SHIRE
        </Typography>
        
        <div className="hidden lg:block">
          <NavList />
        </div>
        <NavListMenu />
        <form>
          <Input
            type="search"
            label="Type here..."
            className="pr-20"
            containerProps={{
              className: "min-w-[288px]",
            }}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </form>
        <div className="hidden gap-2 lg:flex ml-10">
          <Button variant="text" size="sm" color="blue-gray" onClick={()=>{navigate("/signin")}}>
            Sign In
          </Button>
          <Button variant="gradient" size="sm" onClick={() => {navigate("/signup")}}>
            Sign Up
          </Button>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
        <div>
          <ListItem
            onClick={() => {
              navigate("/checkout");
            }}
            className="flex gap-2 ml-10"
          >
            <ShoppingBagIcon className="h-[18px] w-[18px]" />
            Cart
            <p>{cart.length}</p>
          </ListItem>
        </div>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button variant="outlined" size="sm" color="blue-gray" onClick={()=>{navigate("/signin")}} fullWidth>
            Sign In
          </Button>
          <Button variant="gradient" size="sm" fullWidth onClick={() => {navigate("/signup")}}>
            Sign Up
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}
