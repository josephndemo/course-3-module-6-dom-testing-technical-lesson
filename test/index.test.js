/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const path = require("path");

const html = fs.readFileSync(
  path.resolve(__dirname, "../index.html"),
  "utf-8"
);

describe("Add Item Button", () => {
  beforeEach(() => {
    document.body.innerHTML = html;

    // Reset module cache to attach listeners fresh
    jest.resetModules();
    require("../index.js");
  });

  test("adds a new item to the list when the button is clicked", () => {
    const button = document.getElementById("add-item");
    const list = document.getElementById("item-list");

    expect(list.children.length).toBe(0);

    button.click();

    expect(list.children.length).toBe(1);
    expect(list.children[0].textContent).toBe("New Item");
  });
});