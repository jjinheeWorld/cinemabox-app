import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function MovieItemSkeleton({ count }: { count: number }) {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      {Array.from({ length: count }, (_, i) => (
        <Skeleton key={i} style={{ aspectRatio: "2 / 3" }} />
      ))}
    </SkeletonTheme>
  );
}
