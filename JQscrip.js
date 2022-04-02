$(function () {
  $("#btn-1").click(handleBtn1);
  $("#btn-2").click(handleBtn2);
  $("#btn-3").click(handleBtn3);
  $("#btn-4").click(handleBtn4);
  $("#btn-5").click(handleBtn5);
});

function handleBtn1() {
  $("#details-1").removeClass("hide");

  $("#details-2").addClass("hide");
  $("#details-3").addClass("hide");
  $("#details-4").addClass("hide");
  $("#details-5").addClass("hide");
}

function handleBtn2() {
  $("#details-2").removeClass("hide");

  $("#details-1").addClass("hide");
  $("#details-3").addClass("hide");
  $("#details-4").addClass("hide");
  $("#details-5").addClass("hide");
}

function handleBtn3() {
  $("#details-3").removeClass("hide");

  $("#details-1").addClass("hide");
  $("#details-2").addClass("hide");
  $("#details-4").addClass("hide");
  $("#details-5").addClass("hide");
}

function handleBtn4() {
  $("#details-4").removeClass("hide");

  $("#details-1").addClass("hide");
  $("#details-2").addClass("hide");
  $("#details-3").addClass("hide");
  $("#details-5").addClass("hide");
}

function handleBtn5() {
  $("#details-5").removeClass("hide");

  $("#details-1").addClass("hide");
  $("#details-2").addClass("hide");
  $("#details-3").addClass("hide");
  $("#details-4").addClass("hide");
}
