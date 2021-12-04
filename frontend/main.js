console.log("FRONT END EXECUTED");
// import $ from "jquery";

$(function () {
  // contact button click
  $("#button_cont").click(() => {
    console.log("you clicked the Contact Us");
    OpenPopupCenter("/contact", "contact us", 1240, 760);
  });

  // if clicked on item_title
  $(".items_title").click(() => {
    console.log("you clicked the items_title class");
  });
});

function OpenPopupCenter(pageURL, title, w, h) {
  let left = Math.round(screen.width / 2 - w / 2);
  let top = Math.round(screen.height / 2 - h / 2);
  window.open(
    pageURL,
    title,
    "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" +
      w +
      ", height=" +
      h +
      ", top=" +
      top +
      ", left=" +
      left
  );
}
