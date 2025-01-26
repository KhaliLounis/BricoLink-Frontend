interface PriceListProps {
  prices: Price[];
}

export function PriceList({ prices }: PriceListProps) {
  return (
    <div className="space-y-2">
      {prices.map((price, index) => (
        <div
          key={index}
          className="flex justify-between items-center py-2 border-b last:border-0"
        >
          <span className="text-gray-700">{price.service}</span>
          <div className="flex items-center gap-1">
            <span className="font-semibold text-[#5544B7]">{price.amount}</span>
            <span className="text-gray-500">
              DA{price.unit ? ` / ${price.unit}` : ""}{" "}
              {price.note && `(${price.note})`}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
