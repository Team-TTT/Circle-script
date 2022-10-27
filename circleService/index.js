!(function () {
  if (!document.getElementById("core-circle")) {
    const coreCircle = document.createElement("div");
    const coreCircleIcon = document.createElement("span");
    const coreCircleHeadset = document.createElement("link");
    const iframeCircle = document.createElement("iframe");
    const circleStyle = document.createElement("style");

    coreCircle.classList.add("visible");
    coreCircle.id = "core-circle";
    coreCircle.innerHTML = `<span class="material-symbols-outlined">headset_mic</span>`;

    coreCircleIcon.classList.add("material-symbols-outlined");
    coreCircleIcon.innerHTML = "headset_mic";

    coreCircleHeadset.rel = "stylesheet";
    coreCircleHeadset.href =
      "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0";

    iframeCircle.classList.add("hidden");
    iframeCircle.id = "iframe-circle";
    iframeCircle.allow = "camera *; microphone *;";
    iframeCircle.src = "https://vaco-team-ttt-circle.netlify.app";

    circleStyle.innerHTML = `
      #core-circle {
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        bottom: 25px;
        left: 20px;
        width: 60px;
        height: 60px;
        border: 3px solid black;
        border-radius: 40%;
        background-color: #cbd9ff;
        z-index: 100001;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
      }

      .material-symbols-outlined {
        display: flex;
        justify-content: center;
        font-size: 45px;
      }

      #iframe-circle {
        position: fixed;
        bottom: 25px;
        left: 40px;
        width: 370px;
        height: 250px;
        min-height: 520px;
        max-height: 680px;
        margin: 15px;
        -webkit-box-shadow: 0px 10px 13px -7px #000000, -1px -3px 12px 1px rgba(148, 148, 148, 0.39);
        box-shadow: 0px 10px 13px -7px #000000, -1px -3px 12px 1px rgba(148, 148, 148, 0.39);
        border: none;
        border-radius: 30px;
        overflow: hidden;
        z-index: 999;
        transition: all 0.3s ease-out;
      }

      .btn-hidden {
        opacity: 0;
        transform: scale(0.7)
      }

      .btn-visible {
        opacity: 1;
        transform: scale(1);
      }

      .hidden {
        opacity: 0;
        transform: scale(0.7) translate(-60px, 100px);
      }

      .visible {
        opacity: 1;
        transform: scale(1);
      }
`;

    document.body.appendChild(coreCircle);
    document.body.appendChild(iframeCircle);
    document.head.appendChild(coreCircleHeadset);
    document.head.appendChild(circleStyle);

    coreCircle.addEventListener("click", () => {
      coreCircle.classList.replace("visible", "btn-hidden");
      iframeCircle.classList.replace("hidden", "visible");
    });

    window.addEventListener("message", (event) => {
      if (event.data === "closeButton") {
        coreCircle.classList.replace("btn-hidden", "visible");
        iframeCircle.classList.replace("visible", "hidden");
      }
    });
  }
})();
