import { getClient } from "../../static/contentful";
import Link from "next/link";
import { motion } from "framer-motion";
import { child } from "../../components/modal";
import { container } from "../../components/footer";
import { AiOutlineSearch } from "react-icons/ai";

export async function getStaticProps() {
  const client = getClient();
  let data = await client.getEntries({
    content_type: "article",
  });
  return { props: { articles: data.items } };
}

export default function Index({ articles }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate={"visible"}
      className="max-w-[550px] px-5 w-full mx-auto my-[4rem] flex flex-col gap-10 font-normal"
    >
      <motion.div
        variants={child}
        className="flex items-end gap-5 mb-5"
      >
        <div className="flex flex-col gap-0.5">
          <h1 className="flex-1 text-[42px] text-new-grey1 tracking-tighter leading-[0.9] align-text-top font-[500]">
            Blog
          </h1>
          <p className="tracking-tight text-[14px] align-text-top text-start list-none text-new-grey2 leading-normal mt-2">
            Interested in a collection of my thoughts? From
            gaming to coding to who knows... oh well use this
            search filter and find what you're looking for!
          </p>
          <div className="flex mt-2 rounded-md bg-new-offset max-h-max">
            <input className="w-full px-3 py-1.5 bg-transparent rounded-md focus:border-0 focus:outline-none tracking-tight text-[14px] align-text-top text-start list-none text-new-grey2 leading-normal" />
            <button className="min-w-[40px] flex justify-center items-center">
              <AiOutlineSearch />{" "}
            </button>
          </div>
        </div>
      </motion.div>
      <motion.div variants={child}>
        {articles.map((article, index) => (
          <Link
            href={`/blog/${article.fields.slug}`}
            key={index}
          >
            {article.fields.title}
          </Link>
        ))}
      </motion.div>
    </motion.div>
  );
}
