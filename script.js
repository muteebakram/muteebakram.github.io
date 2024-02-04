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
        <link rel="icon" type="image/x-icon" href="./assest/favicon.ico">
        <link rel="stylesheet" href="./style.css">
        <title>Muteeb Akram: ${this.title}</title>
    </head>

    <header>
        <h1 class="name">Muteeb Akram</h1>
        <hr />
        <div class="row">
            <p><a href="./index.html">Home</a></p>
            <p><a href="./experience.html">Experience</a></p>
            <p><a href="./education.html">Education</a></p>
            <p><a href="./projects.html">Projects</a></p>
            <p><a href="./publications.html">Publications</a></p>
            <p><a href="./contact.html">Contact</a></p>
        </div>
        <h2>${this.title}</h2>
    </header>`;
  }
}

customElements.define("my-header", MyHeader);
