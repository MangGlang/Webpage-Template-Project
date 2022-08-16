var el = styles.getElementById("#heart__shape"); // or use $0 in chrome;
do {
  var styles = window.getComputedStyle(el);
  console.log(styles.zIndex, el);
} while (el.parentElement && (el = el.parentElement));
