export const UsDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export function formatCurrency(value: string | number): string {
  if (typeof value === "string") {
    const numericValue = parseFloat(value);
    return formatCurrency(numericValue);
  }

  if (Number.isInteger(value)) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  } else {
    const formattedValue = new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(value);
    return formattedValue
      .replace(/(\.[0-9]*[1-9])0+$/, "$1")
      .replace(/\.$/, "");
  }
}
