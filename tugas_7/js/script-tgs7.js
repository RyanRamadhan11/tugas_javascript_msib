// Ryan Ramadhan || Kelompok 5 || Universitas Singaperbangsa Karawang || Fullstack Web Developer

$("document").ready(function () {
  //hewan unggas
  $("#btn-penguin").click(function () {
    $(this).find("img").removeClass("d-none");
    $("<audio></audio>")
      .attr({
        src: "assets/audio/suara_penguin.mp3",
        volume: 0.5,
        autoplay: "autoplay",
      })
      .appendTo("img");
  });

  $("#btn-angsa").click(function () {
    $(this).find("img").removeClass("d-none");
    $("<audio></audio>")
      .attr({
        src: "assets/audio/suara_angsa.mp3",
        volume: 0.5,
        autoplay: "autoplay",
      })
      .appendTo("img");
  });

  $("#btn-ayam").click(function () {
    $(this).find("img").removeClass("d-none");
    $("<audio></audio>")
      .attr({
        src: "assets/audio/suara_ayam.mp3",
        volume: 0.5,
        autoplay: "autoplay",
      })
      .appendTo("img");
  });

  $("#btn-burung").click(function () {
    $(this).find("img").removeClass("d-none");
    $("<audio></audio>")
      .attr({
        src: "assets/audio/suara_burung.mp3",
        volume: 0.5,
        autoplay: "autoplay",
      })
      .appendTo("img");
  });

  //hewan ternak
  $("#btn-kelinci").click(function () {
    $(this).find("img").removeClass("d-none");
    $("<audio></audio>")
      .attr({
        src: "assets/audio/suara_kelinci.mp3",
        volume: 0.5,
        autoplay: "autoplay",
      })
      .appendTo("img");
  });

  $("#btn-sapi").click(function () {
    $(this).find("img").removeClass("d-none");
    $("<audio></audio>")
      .attr({
        src: "assets/audio/suara_sapi.mp3",
        volume: 0.5,
        autoplay: "autoplay",
      })
      .appendTo("img");
  });

  $("#btn-kambing").click(function () {
    $(this).find("img").removeClass("d-none");
    $("<audio></audio>")
      .attr({
        src: "assets/audio/suara_kambing.mp3",
        volume: 0.5,
        autoplay: "autoplay",
      })
      .appendTo("img");
  });

  $("#btn-bebek").click(function () {
    $(this).find("img").removeClass("d-none");
    $("<audio></audio>")
      .attr({
        src: "assets/audio/suara_bebek.mp3",
        volume: 0.5,
        autoplay: "autoplay",
      })
      .appendTo("img");
  });

  // hewan buas
  $("#btn-beruang").click(function () {
    $(this).find("img").removeClass("d-none");
    $("<audio></audio>")
      .attr({
        src: "assets/audio/suara_beruang.mp3",
        volume: 0.5,
        autoplay: "autoplay",
      })
      .appendTo("img");
  });

  $("#btn-serigala").click(function () {
    $(this).find("img").removeClass("d-none");
    $("<audio></audio>")
      .attr({
        src: "assets/audio/suara_serigala.mp3",
        volume: 0.5,
        autoplay: "autoplay",
      })
      .appendTo("img");
  });

  $("#btn-singa").click(function () {
    $(this).find("img").removeClass("d-none");
    $("<audio></audio>")
      .attr({
        src: "assets/audio/suara_singa.mp3",
        volume: 0.5,
        autoplay: "autoplay",
      })
      .appendTo("img");
  });

  $("#btn-harimau").click(function () {
    $(this).find("img").removeClass("d-none");
    $("<audio></audio>")
      .attr({
        src: "assets/audio/suara_harimau.mp3",
        volume: 0.5,
        autoplay: "autoplay",
      })
      .appendTo("img");
  });
});
