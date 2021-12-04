console.log("FRONT END EXECUTED");
import moment from "moment";
// import $ from "jquery";

$(function () {
  //--------------- STORE EJS PAGE COMMANDS -----------------//
  // contact button click
  $("#button_cont").on("click", () => {
    console.log("you clicked the Contact Us");
    OpenPopupCenter("/contact", "contact us", 1240, 760);
  });

  $("#button_cont").on("mouseover", () => {
    console.log("you are focusing the Contact Us button");
  });

  // if clicked on item_title
  $(".items_title").click(() => {
    console.log("you clicked the items_title class");
  });

  //--------------- CONTACT EJS PAGE COMMANDS -----------------//
  $("#close_btn").on("click", () => {
    console.log("you clicked the close");
    window.opener.location.reload();
    window.close();
  });

  $(".submit_btn").on("click", () => {
    console.log("you clicked the submit");
    const name_t = $("#name_input").val();
    const email_t = $("#email_input").val();
    const msg_t = $("textarea").val();
    const params = {
      name: name_t,
      email: email_t,
      msg: msg_t,
      time: moment().format(),
    };
    console.log(params);

    $.post(
      "/call-me",
      params,
      (data) => {
        console.log("data :", data);
        window.opener.location.reload();
        window.close();
      },
      "JSON"
    ).fail((err) => {
      console.log("ERROR ::: ", err);
    });
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
