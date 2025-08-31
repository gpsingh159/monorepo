import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CrudExample from "./CrudExample";
import "@testing-library/jest-dom";

describe("CrudExample", () => {
  it("renders initial items", () => {
    render(<CrudExample />);
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });

  it("adds a new item", () => {
    render(<CrudExample />);
    fireEvent.change(screen.getByPlaceholderText("New item name"), {
      target: { value: "Item 3" },
    });
    fireEvent.click(screen.getByText("Add"));
    expect(screen.getByText("Item 3")).toBeInTheDocument();
  });

  it("edits an item", () => {
    render(<CrudExample />);
    fireEvent.click(screen.getAllByText("Edit")[0]);
    fireEvent.change(screen.getByDisplayValue("Item 1"), {
      target: { value: "Updated Item 1" },
    });
    fireEvent.click(screen.getByText("Update"));
    expect(screen.getByText("Updated Item 1")).toBeInTheDocument();
  });

  it("deletes an item", () => {
    render(<CrudExample />);
    fireEvent.click(screen.getAllByText("Delete")[0]);
    expect(screen.queryByText("Item 1")).not.toBeInTheDocument();
  });
});
