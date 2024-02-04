class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="icon" type="image/x-icon" href="./assest/favicon.ico">
        <link rel="stylesheet" href="./style.css">
        <title>Muteeb Akram</title>
    </head>

    <header>
        <h1 class="name">Muteeb Akram</h1>
        <hr />
        <div class="row">
            <p class="row-block"><a href="./index.html">Home</a></p>
            <p class="row-block"><a href="./experience.html">Experience</a></p>
            <p class="row-block"><a href="./education.html">Education</a></p>
            <p class="row-block"><a href="./projects.html">Projects</a></p>
            <p class="row-block"><a href="./publications.html">Publications</a></p>
            <p class="row-block"><a href="./contact.html">Contact</a></p>
        </div>
    </header>`;
  }
}

customElements.define("my-header", MyHeader);
