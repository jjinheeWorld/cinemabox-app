"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import style from "./searchbar.module.css";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const q = useSearchParams().get("q");
  const router = useRouter();

  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  const onSubmit = () => {
    if (!search || q === search) return;
    router.push(`/search?q=${search}`);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className={style.container}>
      <input
        value={search}
        onKeyDown={onKeyDown}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요!"
      />
      <button onClick={onSubmit}>검색</button>
    </div>
  );
}
