// Ryan Ramadhan || Kelompok 5 || Universitas Singaperbangsa Karawang || Fullstack Web Developer

$("document").ready(function () {
  //hewan unggas
  $("#penguin").click(function () {
    $(this).find("img").removeClass("d-none");
    $("<audio></audio>")
      .attr({
        src: "assets/audio/suara_penguin.mp3",
        volume: 0.5,
        autoplay: "autoplay",
      })
      .appendTo("img");
  });

  $("#angsa").click(function () {
    $(this).find("img").removeClass("d-none");
    $("<audio></audio>")
      .attr({
        src: "assets/audio/suara_angsa.mp3",
        volume: 0.5,
        autoplay: "autoplay",
      })
      .appendTo("img");
  });

  $("#ayam").click(function () {
    $(this).find("img").removeClass("d-none");
    $("<audio></audio>")
      .attr({
        src: "assets/audio/suara_ayam.mp3",
        volume: 0.5,
        autoplay: "autoplay",
      })
      .appendTo("img");
  });

  $("#burung").click(function () {
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
  $("#kelinci").click(function () {
    $(this).find("img").removeClass("d-none");
    $("<audio></audio>")
      .attr({
        src: "assets/audio/suara_kelinci.mp3",
        volume: 0.5,
        autoplay: "autoplay",
      })
      .appendTo("img");
  });

  $("#sapi").click(function () {
    $(this).find("img").removeClass("d-none");
    $("<audio></audio>")
      .attr({
        src: "assets/audio/suara_sapi.mp3",
        volume: 0.5,
        autoplay: "autoplay",
      })
      .appendTo("img");
  });

  $("#kambing").click(function () {
    $(this).find("img").removeClass("d-none");
    $("<audio></audio>")
      .attr({
        src: "assets/audio/suara_kambing.mp3",
        volume: 0.5,
        autoplay: "autoplay",
      })
      .appendTo("img");
  });

  $("#bebek").click(function () {
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
  $("#beruang").click(function () {
    $(this).find("img").removeClass("d-none");
    $("<audio></audio>")
      .attr({
        src: "assets/audio/suara_beruang.mp3",
        volume: 0.5,
        autoplay: "autoplay",
      })
      .appendTo("img");
  });

  $("#serigala").click(function () {
    $(this).find("img").removeClass("d-none");
    $("<audio></audio>")
      .attr({
        src: "assets/audio/suara_serigala.mp3",
        volume: 0.5,
        autoplay: "autoplay",
      })
      .appendTo("img");
  });

  $("#singa").click(function () {
    $(this).find("img").removeClass("d-none");
    $("<audio></audio>")
      .attr({
        src: "assets/audio/suara_singa.mp3",
        volume: 0.5,
        autoplay: "autoplay",
      })
      .appendTo("img");
  });

  $("#harimau").click(function () {
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
