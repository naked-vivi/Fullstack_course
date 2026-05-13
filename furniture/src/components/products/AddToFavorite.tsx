import { Button } from "../ui/button"
import { cn } from "@/lib/utils"
import { Icons } from "../icons"

interface FavoriteProp extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  productId: string;
  rating: number;
  // isFavorite: boolean;
}

function AddToFavorite({
  productId,
  rating,
  className,
  ...props
}: FavoriteProp) {
  return (
    <Button variant="secondary" size="icon" className={cn("size-8 shrink-0", className)}{...props}>
      <Icons.heart className="size-4" />
    </Button>
  );
}

export default AddToFavorite