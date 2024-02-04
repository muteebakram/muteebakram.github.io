class MyHeader extends HTMLElement {
  static observedAttributes = ["title"];

  constructor() {
    super();
    this.title = "Muteeb Akram";
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) this.title = newValue;
  }
  connectedCallback() {
    this.innerHTML = `
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="icon" type="image/x-icon" href="favicon.ico">
        <link rel="stylesheet" href="./style.css">
        <title>Muteeb Akram: ${this.title}</title>
    </head>

    <header>
        <h1 class="name">Muteeb Akram</h1>
        <hr />
        <div class="row">
            <p title="Home"><a href="./index.html">Home</a></p>
            <p title="Experience"><a href="./experience.html">Experience</a></p>
            <p title="Education"><a href="./education.html">Education</a></p>
            <p title="Projects"><a href="./projects.html">Projects</a></p>
            <p title="Publications"><a href="./publications.html">Publications</a></p>
            <p title="Contact"><a href="./contact.html">Contact</a></p>
        </div>
        <h2>${this.title}</h2>
    </header>`;
  }
}

customElements.define("my-header", MyHeader);
