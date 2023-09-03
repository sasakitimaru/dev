import ArticleCard from "@/components/articlecard";

export default function Home() {
  return (
    <main className="flex justify-center items-center w-full h-screen">
      <div className="grid gap-16 grid-cols-2">
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
