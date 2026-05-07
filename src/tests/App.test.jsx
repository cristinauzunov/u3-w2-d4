import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import App from "../App";
import Welcome from "../components/Welcome";
import CommentArea from "../components/CommentArea";
import scifi from "../data/scifi.json";

beforeEach(() => {
  vi.stubGlobal("fetch", vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve([
        { _id: "1", comment: "Bel libro!", rate: "5", elementId: scifi[0].asin },
        { _id: "2", comment: "Mi è piaciuto", rate: "4", elementId: scifi[0].asin },
      ]),
    })
  ));
});

describe("1. Welcome component", () => {
  it("viene montato correttamente", () => {
    render(<Welcome />);
    expect(screen.getByText(/la tua libreria personale/i)).toBeInTheDocument();
  });
});

describe("2. BookList", () => {
  it("renderizza tante card quanti sono i libri nel JSON", () => {
    render(<App />);
    const cards = screen.getAllByRole("img");
    expect(cards.length).toBe(scifi.length);
  });
});

describe("3. CommentArea component", () => {
  it("viene renderizzato correttamente senza asin", () => {
    render(<CommentArea asin={null} />);
    expect(
      screen.getByText(/seleziona un libro per vedere le recensioni/i)
    ).toBeInTheDocument();
  });
});

describe("4. Filtraggio libri", () => {
  it("filtra i libri quando scrivo nella ricerca", () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText(/cerca un libro/i);
    fireEvent.change(searchInput, { target: { value: "Pandemic" } });
    const cards = screen.getAllByRole("img");
    expect(cards.length).toBeLessThan(scifi.length);
  });

  it("mostra messaggio se non trova libri", () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText(/cerca un libro/i);
    fireEvent.change(searchInput, { target: { value: "xyzxyzxyz" } });
    expect(screen.getByText(/nessun libro trovato/i)).toBeInTheDocument();
  });

  it("mostra tutti i libri quando la ricerca è vuota", () => {
    render(<App />);
    const cards = screen.getAllByRole("img");
    expect(cards.length).toBe(scifi.length);
  });
});

describe("5. Selezione libro", () => {
  it("il bordo diventa rosso al click", () => {
    render(<App />);
    const cards = screen.getAllByRole("img");
    fireEvent.click(cards[0]);
    const cardElement = cards[0].closest(".book-card");
    expect(cardElement.style.border).toContain("red");
  });
});

describe("6. Cambio selezione libro", () => {
  it("il bordo del primo libro torna normale al click sul secondo", () => {
    render(<App />);
    const cards = screen.getAllByRole("img");
    fireEvent.click(cards[0]);
    fireEvent.click(cards[1]);
    const firstCard = cards[0].closest(".book-card");
    expect(firstCard.style.border).toContain("transparent");
  });
});

