import { MagnifyingGlass } from "@/libs/phosphor-icons";
import { TextInputControl } from "./text-input/text-input-control";
import { TextInputRoot } from "./text-input/text-input-root";

export function SearchRatedBookForm() {
  return (
    <form>
      <TextInputRoot>
        <TextInputControl
          placeholder="Buscar livro avaliado"
          aria-label="Search for rated books"
        />
        <button type="submit">
          <MagnifyingGlass size={20} />
        </button>
      </TextInputRoot>
    </form>
  );
}
