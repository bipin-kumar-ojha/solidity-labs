import { getAllServicePageParams } from "@/data/servicePageContent";
import ServiceCTA from "@/components/sections/ServiceCTA";
import ServiceFAQ from "@/components/sections/ServiceFAQ";
import ServiceFeatures from "@/components/sections/ServiceFeatures";
import ServiceHero from "@/components/sections/ServiceHero";
import ServiceOverview from "@/components/sections/ServiceOverview";
import ServicePricing from "@/components/sections/ServicePricing";
import ServiceProcess from "@/components/sections/ServiceProcess";
import ServiceRelated from "@/components/sections/ServiceRelated";
import ServiceTechStack from "@/components/sections/ServiceTechStack";
import { getServicePage } from "@/lib/serviceContent";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    category: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllServicePageParams();
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;

  const { category, slug } = resolvedParams;

  const data = await getServicePage(category, slug);
  if (!data) notFound();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ServiceHero
        slug={slug}
        category={{
          name: data?.categoryName || "Category",
          slug: category,
        }}
        eyebrow={data.eyebrow}
        h1Line1={data?.title || "Service Title"}
        h1AccentWord={data.h1AccentWord}
        subHeadline={data?.description || ""}
        primaryCtaLabel={"Get a free quote"}
        image={data.image}
        techTags={(data?.techTags || []).map((t: string) => ({ name: t }))}
        startingPrice={data?.startingPrice || "$1000"}
        deliveryTimeline={data?.deliveryTimeline || "2-4 weeks"}
        supportDays={data.supportDays}
      />
      <ServiceOverview
        whatIsH2={data.overview.heading}
        whatIsBody={data.overview.body}
        problems={data.overview.problems}
        solutions={data.overview.solutions}
      />

      <ServiceFeatures
        features={data.features}
        title={`Everything included in every ${data.title} build`}
      />
      <ServicePricing packages={data.pricing} />
      <ServiceProcess
        steps={data.process}
        title={`Your ${data.title.toLowerCase()} delivered in 5 steps`}
      />
      <ServiceTechStack
        categories={data.techStackSections}
        title={`We use the right tools for your ${data.title.toLowerCase()}`}
      />
      <ServiceFAQ faqs={data.faqs} />
      <ServiceRelated services={data.relatedServices} />
      <ServiceCTA
        title={data.finalCta.title}
        subtitle={data.finalCta.subtitle}
        primaryCta={data.finalCta.primaryCta}
        secondaryCta={data.finalCta.secondaryCta}
      />
    </>
  );
}
