interface ProductIngredientsProps {
  ingredients: string[];
}

export default function ProductIngredients({ ingredients }: ProductIngredientsProps) {
  return (
    <div>
      <h2 className="font-playfair text-xl font-semibold text-brand-text mb-4">
        Key Ingredients
      </h2>
      <ul className="grid grid-cols-2 gap-2">
        {ingredients.map((ingredient, index) => (
          <li key={index} className="font-avenir text-brand-text">
            • {ingredient}
          </li>
        ))}
      </ul>
    </div>
  );
}