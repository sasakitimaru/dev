import ArticleCard from "@/components/articlecard";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center mb-10 px-8 sm:px-20 lg:px-40 mx-auto">
      <h1 className="text-2xl sm:text-4xl text-left mb-4 font-bold w-full">Tech Articles</h1>
      <div className="grid gap-y-8 sm:gap-16 grid-cols-1 sm:grid-cols-2">
        <ArticleCard icon={"😎"} />
        <ArticleCard icon={"😘"} />
        <ArticleCard icon={"😘"} />
        <ArticleCard icon={"😘"} />
        <ArticleCard icon={"😘"} />
        <ArticleCard icon={"😘"} />
        <ArticleCard icon={"😘"} />
        <ArticleCard icon={"😘"} />
      </div>
    </main>
  );
}
