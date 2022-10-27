(function () {
  function postUserInfo(data) {
    if (document.getElementById("iframe-circle")) {
      setTimeout(
        () =>
          document
            .getElementById("iframe-circle")
            .contentWindow.postMessage(data, "*"),
        100
      );
    }
  }
  window.circle = postUserInfo;

  function async_load() {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.defer = true;
    script.src =
      "https://cdn.jsdelivr.net/gh/Team-TTT/Circle-script@test/circleService/circleLocal.js";
    const firstScript = document.getElementsByTagName("script")[0];
    firstScript.parentNode.insertBefore(script, firstScript);
  }

  window.addEventListener("DOMContentLoaded", async_load, false);
  window.addEventListener("load", () => {
    circle({
      projectId: "user-project-id",
      secretKey: "user-secret-key",
    });
  });
})();
