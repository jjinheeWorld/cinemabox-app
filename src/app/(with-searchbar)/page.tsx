import MovieItem from "@/component/movie-item";
import style from "./page.module.css";
import { MovieData } from "@/types";
import { Suspense } from "react";
import { delay } from "@/util/delay";
import MovieItemSkeleton from "@/component/skeleton/movie-item-skeleton";

async function AllMovies() {
  await delay(1300);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie`,
    { cache: "force-cache" }
  );

  if (!response.ok) {
    return <div>오류가 발생했습니다!</div>;
  }

  const movies: MovieData[] = await response.json();
  return (
    <div className={style.all}>
      {movies.map((movie) => (
        <MovieItem key={`all-${movie.id}`} {...movie} />
      ))}
    </div>
  );
}

async function RecoMovies() {
  await delay(1300);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/random`,
    { next: { revalidate: 3 } }
  );

  if (!response.ok) {
    return <div>오류가 발생했습니다!</div>;
  }

  const movies: MovieData[] = await response.json();
  return (
    <div className={style.recommend}>
      {movies.map((movie) => (
        <MovieItem key={`reco-${movie.id}`} {...movie} />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 가장 추천하는 영화</h3>
        <Suspense
          fallback={
            <div className={style.recommend}>
              <MovieItemSkeleton count={3} />
            </div>
          }
        >
          <RecoMovies />
        </Suspense>
      </section>
      <section>
        <h3>등록된 모든 영화</h3>
        <Suspense
          fallback={
            <div className={style.all}>
              <MovieItemSkeleton count={10} />
            </div>
          }
        >
          <AllMovies />
        </Suspense>
      </section>
    </div>
  );
}
