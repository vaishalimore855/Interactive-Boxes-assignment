// // script.js
// document.addEventListener("DOMContentLoaded", () => {
//   const radios = document.querySelectorAll(".radio-button");
//   const bundleOptions = document.querySelectorAll(".bundle-option");

//   radios.forEach((radio, index) => {
//     radio.addEventListener("change", () => {
//       bundleOptions.forEach((option, optIndex) => {
//         const details = option.querySelector(".bundle-details");
//         if (optIndex === index) {
//           details.classList.remove("hidden");
//         } else {
//           details.classList.add("hidden");
//         }
//       });
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const radios = document.querySelectorAll(".radio-button");
  const bundleOptions = document.querySelectorAll(".bundle-option");

  radios.forEach((radio, index) => {
    radio.addEventListener("change", () => {
      bundleOptions.forEach((option, optIndex) => {
        const details = option.querySelector(".bundle-details");
        if (optIndex === index) {
          details.classList.remove("hidden");
          option.classList.add("selected");
        } else {
          details.classList.add("hidden");
          option.classList.remove("selected");
        }
      });
    });
  });
});
