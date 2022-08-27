import { getClient } from "../../static/contentful";
import Link from "next/link";

export async function getStaticProps() {
  const client = getClient();
  let data = await client.getEntries({
    content_type: "article",
  });
  return { props: { articles: data.items } };
}

export default function Index({ articles }) {
  return (
    <div className="flex flex-col">
      {articles.map((article, index) => (
        <Link href={`/blog/${article.fields.slug}`} key={index}>
          {article.fields.title}
        </Link>
      ))}
    </div>
  );
}
