const $imgs = $("#imgs");
const $leftBtn = $("#left");
const $rightBtn = $("#right");
const $img = $("#imgs img");
const $indicators = $(".indicator");

let idx = 0;

let interval = setInterval(run, 2000);

function run() {
  idx++;
  changeImage();
}

function changeImage() {
  if (idx > $img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = $img.length - 1;
  }

  $imgs.css("transform", `translateX(${-idx * 500}px)`);
  updateIndicators();
}

function updateIndicators() {
  $indicators.removeClass("active");
  $indicators.eq(idx).addClass("active");
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

$rightBtn.on("click", () => {
  idx++;
  changeImage();
  resetInterval();
});

$leftBtn.on("click", () => {
  idx--;
  changeImage();
  resetInterval();
});

$indicators.on("click", function () {
  idx = $(this).index();
  changeImage();
  resetInterval();
});
