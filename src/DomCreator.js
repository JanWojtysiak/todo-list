export class DomCreator {
  createInput() {
    const input = document.createElement("input");
    input.type = "text";
    input.className = "styled-input";
    input.name = "projectName";
    return input;
  }

  createSubmitButton() {
    const button = document.createElement("button");
    button.type = "submit";
    button.textContent = "Create Project";
    button.className = "submit-btn";
    return button;
  }

  createForm() {
    const container = document.querySelector("#container");
    const wrapper = document.createElement("div");
    const form = document.createElement("form");
    const input = this.createInput();
    const submitBtn = this.createSubmitButton();
    wrapper.className = "form-container";
    form.className = "styled-form";
    form.appendChild(input);
    form.appendChild(submitBtn);
    wrapper.appendChild(form);
    container.appendChild(wrapper);
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const value = input.value.trim();
      if (value) {
        console.log("Sent:", value);
        input.value = "";
      } else {
        alert("Enter something!");
      }
    });
  }
}
