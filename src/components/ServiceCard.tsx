import Link from "next/link";

type Props = {
  title: string;
  slug: string;
  description: string;
};

export default function ServiceCard({
  title,
  slug,
  description,
}: Props) {
  return (
    <Link
      href={`/services/${slug}`}
      className="border rounded-lg p-6 block hover:shadow-lg transition"
    >
      <h3 className="text-xl font-semibold mb-2">
        {title}
      </h3>

      <p className="text-gray-600">
        {description}
      </p>
    </Link>
  );
}