import { ReactNode, Suspense } from "react";
import SearchBar from "../../component/searchbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchBar />
      </Suspense>
      {children}
    </div>
  );
}
