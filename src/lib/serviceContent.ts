import { getCoreServiceBySlug, getHubBySlug } from "@/data/services";
import { buildServicePageContent } from "@/data/servicePageContent";

export async function getServicePage(category: string, slug: string) {
  const hub = getHubBySlug(category);
  if (!hub) return null;

  const service = getCoreServiceBySlug(category, slug);
  if (!service) return null;

  return buildServicePageContent(hub, service);
}
