import { siteConfig } from "../data/siteConfig";

export function getWhatsAppUrl(message = "Hi, I would like to know more about Arknetic Infra products.") {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
