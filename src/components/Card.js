import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export function EcommerceCard({ product }) {
  const { cart, addToCart } = useContext(CartContext);


  const handleClick = () => {
    window.location.href = `/product/${product.id}`;
  };
  
  return (
    <Card className="w-96" onClick={handleClick}>
      <CardHeader shadow={false} floated={false} className="h-96 hover:cursor-pointer">
        <img
          src={product.images[0]}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium hover:cursor-pointer">
            {product.title}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            $ {product.price}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          onClick={() => {
            addToCart(product);
          }}
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
