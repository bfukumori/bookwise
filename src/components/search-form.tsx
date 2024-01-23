"use client";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

import { MagnifyingGlass } from "@/libs/phosphor-icons";
import { TextInputControl } from "./text-input/text-input-control";
import { TextInputRoot } from "./text-input/text-input-root";
import { createQueryString } from "@/utils/createQueryString";

export function SearchForm() {
  const router = useRouter();
  const pathname = usePathname();
  const [searchBy, setSearchBy] = useState("");

  function handleChange(ev: ChangeEvent<HTMLInputElement>) {
    setSearchBy(ev.target.value);
  }

  function handleSearch(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    if (!searchBy) {
      router.push(pathname + "?" + createQueryString("category", "Tudo"));
      return;
    }
    router.push(pathname + "?" + createQueryString("search", searchBy));
  }

  return (
    <form onSubmit={handleSearch}>
      <TextInputRoot>
        <TextInputControl
          value={searchBy}
          onChange={handleChange}
          placeholder="Buscar livro ou autor"
          aria-label="Search for books or authors"
        />
        <button type="submit">
          <MagnifyingGlass size={20} />
        </button>
      </TextInputRoot>
    </form>
  );
}
