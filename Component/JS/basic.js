import { styleInLine } from "./style.js";

class basic extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });

    this.props = {
      avatar: "",
      href: "",
      name: "",
      age: "",
      time: "",
      like: "",
    };
  }

  connectedCallback() {
    //mounting
    const inner = `    <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
    crossorigin="anonymous"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
  />
  <script
    src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
    integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
    crossorigin="anonymous"
  ></script>
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
    integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
    crossorigin="anonymous"
  ></script>
  <script
    src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
    integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
    crossorigin="anonymous"
  ></script>
        ${styleInLine}
        <div class="componen col-sm-3">
          <div class="img">
            <img src="${this.props.avatar}" alt="" style="max-width: 100%" />
          </div>
          <div class="block-description">
            <h6 class="title">
              <a href="${this.props.href}">${this.props.name}</a>
            </h6>
            <div class="desc_movie d-flex align-items-center my-2">
              <div class="badge badge-secondary mr-2">${this.props.age}+</div>
              <span class="text-white" style="font-weight: bold"
                >${this.props.time}</span
              >
            </div>
            <div class="btnPlay px-2 py-2">
              <span> <i class="fas fa-play mr-1"></i>PLAY NOW</span>
            </div>
          </div>
          <div class="actions">
            <ul class="list-inline p-0 m-0 music-play-lists">
              <li class="share">
                <span><i class="fas fa-share-alt"></i></span>
                <div class="share-box">
                  <div class="d-flex align-items-center">
                    <a
                      href="https://www.facebook.com/sharer?u=${this.props.href}"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="share-ico"
                      tabindex="0"
                      ><i class="fab fa-facebook-f"></i
                    ></a>
                    <a
                      href="https://twitter.com/intent/tweet?text=Currentlyreading"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="share-ico"
                      tabindex="0"
                      ><i class="fab fa-twitter"></i
                    ></a>
                  </div>
                </div>
              </li>
              <li>
                <span><i class="fas fa-heart"></i></span>
                <span class="count-box">${this.props.like}</span>
              </li>
              <li>
                <span><i class="fas fa-plus"></i></span>
              </li>
            </ul>
          </div>
        </div>
    `;
    this.shadow.innerHTML += inner;
  }

  static get observedAttributes() {
    return ["avatar", "href", "name", "age", "time", "like"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (newValue) {
      this.props[name] = newValue;
    }
    // console.log(this.props);
  }

  disconnectedCallback() {
    // console.log("Unmouting");
  }
}

customElements.define("basic-para", basic);
