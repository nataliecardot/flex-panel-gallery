const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.toggle('open');
}

function toggleActive(e) {
  // When panel is clicked and open class is added, there are two transition properties: font size and flex (flex-grow is applied using one-value flex shorthand property), but only care about flex-grow
  // Checking if it includes flex rather than if property is flex-grow because some browsers might interpret it as flex (Safari) while others consider it flex-grow
  console.log(e.propertyName);
  // includes() is used as a String prototype method here
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach((panel) => panel.addEventListener('click', toggleOpen));
panels.forEach((panel) =>
  panel.addEventListener('transitionend', toggleActive)
);
