const { animate, inView, stagger } = Motion;

const sections = document.querySelectorAll(".species-card");

  animate(
    "h1",
    { y: [300, 0], opacity: [0, 1] },
    {
      duration: 0.25,
    }
  );

inView(sections, (element) => {
  animate(
    element,
    { y: [300, 0], opacity: [0, 1] },
    {
      delay: stagger(0.15),
      duration: 0.5,
    }
  );
});
