/**
 * @jest-environment jsdom
 */
describe("test hompageCounter function", () => {
  const content = document.createElement("main");
  content.innerHTML = `<h1 class="header">0</h1>
  <div class="meals-container">
          <div class="meal"></div>
          <div class="meal"></div>
          <div class="meal"></div>
          <div class="meal"></div>
        </div>
      `;
  const mealsContainer = content.querySelector(".meals-container");
  const header = content.querySelector(".header");
  const children = mealsContainer.children;
  test("should get chilren of meals Container", () => {
    expect(typeof children).toBe("object");
  });
  test("should get no of chilren in meals Container", () => {
    expect(children.length).toBe(4);
  });
  test("should get default text content of header", () => {
    expect(header.textContent).toBe("0");
  });
  test("expect text content to be updated", () => {
    header.textContent = children.length;
    expect(header.textContent).toBe("4");
  });
});
