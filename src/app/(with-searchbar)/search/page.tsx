import MovieItem from "@/component/movie-item";
import style from "./page.module.css";
import { MovieData } from "@/types";
import { delay } from "@/util/delay";
import { Suspense } from "react";
import MovieItemSkeleton from "@/component/skeleton/movie-item-skeleton";

async function SearchResult({ q }: { q: string }) {
  await delay(1300);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/search?q=${q}`
  );

  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>;
  }

  const movies: MovieData[] = await response.json();

  return (
    <div className={style.container}>
      {movies.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  return (
    <Suspense
      key={q || ""}
      fallback={
        <div className={style.container}>
          <MovieItemSkeleton count={3} />
        </div>
      }
    >
      <SearchResult q={q || ""} />
    </Suspense>
  );
}
