import type { Stylist } from "../types";
import { getStylistById, getServiceVariant } from "../data/mockData";

/**
 * Calculate the price for a service based on the selected stylist
 */
/**
 * Calculate the total price for multiple services based on the selected stylist
 */
export const calculatePrice = (
  serviceIds: string[],
  stylistId: string,
  variantIds?: { [serviceId: string]: string },
): number => {
  const stylist = getStylistById(stylistId);

  if (!stylist) {
    return 0;
  }

  let total = 0;

  for (const serviceId of serviceIds) {
    const basePrice = stylist.prices[serviceId];
    if (basePrice !== undefined) {
      let servicePrice = basePrice;

      // If variant is provided for this service, apply price modifier
      const variantId = variantIds?.[serviceId];
      if (variantId) {
        const variant = getServiceVariant(serviceId, variantId);
        servicePrice += variant?.priceModifier || 0;
      }

      total += servicePrice;
    }
  }

  return total;
};

/**
 * Format price for display in Indian Rupees
 */
export const formatPrice = (price: number): string => {
  return `₹${price.toLocaleString("en-IN")}`;
};

/**
 * Check if a stylist offers a specific service
 */
export const doesStylistOfferService = (
  stylist: Stylist,
  serviceId: string,
): boolean => {
  return stylist.services.includes(serviceId);
};
