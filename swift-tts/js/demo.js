(function () {
  "use strict";

  const demo = window.SWIFT_TTS_DEMO || {};
  const text = (value) => typeof value === "string" ? value.trim() : "";
  const title = text(demo.title);

  document.title = title;
  document.getElementById("page-title").textContent = title;
  document.getElementById("abstract-text").textContent = text(demo.abstract);
  document.querySelector('meta[name="description"]').content = text(demo.abstract);

  const links = document.getElementById("project-links");
  [["Code", demo.codeUrl], ["Paper", demo.paperUrl]].forEach(([label, value]) => {
    if (!text(value)) return;
    const link = document.createElement("a");
    link.href = text(value);
    link.textContent = label;
    links.append(link);
  });
  links.hidden = links.childElementCount === 0;

  const figure = demo.figure || {};
  if (text(figure.src)) {
    const image = document.getElementById("overview-image");
    image.src = text(figure.src);
    image.alt = text(figure.alt);
    image.hidden = false;
    document.getElementById("overview-figure").classList.remove("empty-slot");
    const caption = document.getElementById("overview-caption");
    caption.textContent = text(figure.caption);
    caption.hidden = !text(figure.caption);
  }

  const sampleList = document.getElementById("demo-sample-list");
  const samples = Array.isArray(demo.samples) ? demo.samples : [];
  samples.forEach((sample) => {
    if (!sample || !text(sample.audio)) return;
    const item = document.createElement("article");
    item.className = "sample-item";
    if (text(sample.title)) {
      const heading = document.createElement("h3");
      heading.textContent = text(sample.title);
      item.append(heading);
    }
    [["Instruction", sample.instruction], ["Text", sample.text]].forEach(([label, value]) => {
      if (!text(value)) return;
      const paragraph = document.createElement("p");
      const term = document.createElement("strong");
      term.textContent = label + ": ";
      paragraph.append(term, text(value));
      item.append(paragraph);
    });
    const audio = document.createElement("audio");
    audio.controls = true;
    audio.preload = "metadata";
    audio.src = text(sample.audio);
    audio.setAttribute("aria-label", text(sample.title) || "Audio sample");
    item.append(audio);
    sampleList.append(item);
  });
  sampleList.classList.toggle("empty-slot", sampleList.childElementCount === 0);
})();
