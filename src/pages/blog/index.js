import { getClient } from "../../static/contentful";
import Link from "next/link";
import { motion } from "framer-motion";
import { child } from "../../components/modal";
import { container } from "../../components/footer";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";

function convertDate(param) {
  const date = new Date(param);
  return `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;
}

export async function getStaticProps() {
  const client = getClient();
  let data = await client.getEntries({
    content_type: "article",
  });
  // console.log(
  //   data.items.map((item) => ({
  //     ...item,
  //     fields: {
  //       ...item.fields,
  //       date: convertDate(item.fields.date),
  //     },
  //   }))
  // );

  data = data.items.map((item) => ({
    ...item,
    fields: {
      ...item.fields,
      date: convertDate(item.fields.date),
    },
  }));

  return { props: { articles: data } };
}

export default function Index({ articles }) {
  const [searchValue, setSearchValue] = useState("");
  const filteredBlogPosts = articles.filter((article) =>
    article.fields.title
      .toLowerCase()
      .includes(searchValue.toLowerCase())
  );
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate={"visible"}
      className="max-w-[550px] px-5 w-full mx-auto my-[4rem] flex flex-col gap-8 font-normal"
    >
      <motion.div
        variants={child}
        className="flex items-end gap-5 mb-5"
      >
        <div className="flex flex-col gap-0.5">
          <h1 className="flex items-end gap-2 flex-1 text-[42px] text-new-grey1 tracking-tighter leading-[0.9] align-text-top font-[500] relative">
            My Blog
            <span className="block tracking-wide text-[9px] align-text-top text-start list-none text-new-grey2 leading-normal rounded-md bg-new-offset border border-new-border max-h-max px-1 py-0.5 uppercase">
              currently in development
            </span>
          </h1>
          <p className="tracking-tight text-[14px] align-text-top text-start list-none text-new-grey2 leading-normal mt-2">
            Interested in a collection of my thoughts? From
            gaming to coding to who knows... oh well use this
            search filter and find what you're looking for!
          </p>
          <div className="flex mt-2 rounded-md bg-new-offset max-h-max">
            <input
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search articles..."
              className="placeholder-new-grey2 placeholder:tracking-tight placeholder:text-[14px] w-full px-3 py-1.5 bg-transparent rounded-md focus:border-0 focus:outline-none tracking-tight text-[14px] align-text-top text-start list-none text-new-grey2 leading-normal"
            />
            <button className="min-w-[40px] flex justify-center items-center">
              <AiOutlineSearch />{" "}
            </button>
          </div>
        </div>
      </motion.div>
      <motion.div variants={child}>
        <h2 className="underline mb-5 flex-1 text-[22px] text-new-grey1 text-start tracking-tighter leading-[0.9] align-text-top font-[400]">
          {!searchValue && `Most Recent`}
          {searchValue && `All Posts`}
        </h2>
        <div className="flex flex-col gap-7">
          {filteredBlogPosts
            .sort((a, b) => {
              return (
                b.fields.date.split("/")[0] -
                a.fields.date.split("/")[0]
              );
            })
            .map((article, index) => {
              return (
                <div key={index}>
                  <div className="flex">
                    <h1
                      className="text-[14px] font-[400] tracking-tight text-new-grey3 leading-normal align-text-top text-start mb-1 underline hover:cursor-pointer
                  hover:text-new-grey1 duration-150 w-full"
                    >
                      <Link
                        href={`/blog/${article.fields.slug}`}
                      >
                        {article.fields.title}
                      </Link>
                    </h1>
                    <span className="whitespace-nowrap text-[14px] font-[400] tracking-tight text-new-grey3 leading-normal align-text-top text-start mb-1">
                      {article.fields.date}
                    </span>
                  </div>
                  <p className="tracking-tight text-[14px] align-text-top text-start  list-none text-new-grey2 leading-normal">
                    {article.fields.info}
                  </p>
                </div>
              );
            })}
        </div>
      </motion.div>
    </motion.div>
  );
}
