// Swift demo behavior begin
(function () {
  "use strict";

  const demo = window.SWIFT_TTS_DEMO;
  if (!demo) return;

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function audioPlayer(path, label) {
    const audio = element("audio");
    audio.controls = true;
    audio.preload = "metadata";
    audio.src = path;
    audio.setAttribute("aria-label", label);
    return audio;
  }

  document.title = demo.title;
  document.querySelector('meta[name="description"]').content = demo.abstract;
  const separator = demo.title.indexOf(":");
  document.getElementById("page-name").textContent = separator < 0 ? demo.title : demo.title.slice(0, separator);
  document.getElementById("page-subtitle").textContent = separator < 0 ? "" : demo.title.slice(separator + 1).trim();
  const abstract = document.getElementById("abstract-text");
  const abstractParts = demo.abstract.split(/(https:\/\/[^\s]+\/)/g);
  abstractParts.forEach((part) => {
    if (part.startsWith("https://")) {
      const link = element("a", "", part);
      link.href = part;
      abstract.append(link);
    } else {
      abstract.append(document.createTextNode(part));
    }
  });
  document.getElementById("code-link").href = demo.codeUrl;
  const paper = document.getElementById("paper-link");
  if (demo.paperUrl) {
    const link = element("a", "", "Paper");
    link.href = demo.paperUrl;
    paper.replaceChildren(link);
  } else {
    paper.textContent = demo.paperLabel;
  }
  document.getElementById("overview-image").src = demo.figure.src;
  document.getElementById("overview-image").alt = demo.figure.alt;
  document.getElementById("overview-original").href = demo.figure.original;
  document.getElementById("overview-caption").textContent = demo.figure.caption;
  document.getElementById("results-image").src = demo.results.src;
  document.getElementById("results-image").alt = demo.results.alt;

  function sampleRows(section, sample, index) {
    const group = element("tbody");
    group.dataset.utterance = sample.id;
    const contextRow = element("tr");
    const contextCell = element("td", "context-cell");
    contextCell.colSpan = section.systems.length + 1;
    const context = element("div", "sample-context");
    const copy = element("div", "target-copy");
    copy.append(element("span", "context-label", `Sample ${String(index + 1).padStart(2, "0")} · Target text`));
    copy.append(element("p", "target-text", sample.text));
    const scoreText = `${section.label}: UTMOS ${sample.scores.utmos.toFixed(3)} · SIM-O ${sample.scores.sim_o.toFixed(3)}`;
    copy.append(element("span", "sample-scores", scoreText));
    const reference = element("div", "reference-block");
    reference.append(element("span", "context-label", "Reference audio · Speaker prompt"));
    reference.append(audioPlayer(sample.reference, `${section.label}, sample ${index + 1}: speaker reference`));
    const transcript = element("details", "reference-transcript");
    transcript.append(element("summary", "", "Reference transcript"));
    transcript.append(element("p", "", sample.promptText));
    reference.append(transcript);
    context.append(copy, reference);
    contextCell.append(context);
    contextRow.append(contextCell);

    const audioRow = element("tr", "audio-row");
    const rowHeading = element("th", "", String(index + 1).padStart(2, "0"));
    rowHeading.scope = "row";
    audioRow.append(rowHeading);
    section.systems.forEach((system) => {
      const cell = element("td", system.ours ? "ours-cell" : "");
      cell.append(audioPlayer(sample.audio[system.key], `${section.label}, sample ${index + 1}: ${system.label}`));
      audioRow.append(cell);
    });
    group.append(contextRow, audioRow);
    return group;
  }

  function renderSection(section) {
    const wrapper = element("div", "table-wrap");
    wrapper.tabIndex = 0;
    wrapper.setAttribute("role", "region");
    wrapper.setAttribute("aria-label", `${section.label} audio comparison; scroll horizontally for all systems`);
    const table = element("table", "comparison-table");
    const caption = element("caption", "visually-hidden", `${section.label}: five selected utterances compared with ground truth, reconstruction, ZipVoice, and F5-TTS.`);
    const columns = element("colgroup");
    columns.append(element("col", "sample-column"));
    section.systems.forEach(() => columns.append(element("col")));
    const head = element("thead");
    const headRow = element("tr");
    const sampleHeading = element("th", "", "Sample");
    sampleHeading.scope = "col";
    headRow.append(sampleHeading);
    section.systems.forEach((system) => {
      const heading = element("th", system.ours ? "ours-cell" : "", system.label);
      heading.scope = "col";
      heading.append(element("span", "column-note", system.note));
      headRow.append(heading);
    });
    head.append(headRow);
    table.append(caption, columns, head);
    section.samples.forEach((sample, index) => table.append(sampleRows(section, sample, index)));
    wrapper.append(table);
    document.getElementById(`${section.id}-sample-list`).replaceChildren(wrapper);
  }

  demo.sections.forEach(renderSection);
  document.addEventListener("play", (event) => {
    if (!(event.target instanceof HTMLAudioElement)) return;
    document.querySelectorAll("audio").forEach((audio) => {
      if (audio !== event.target && !audio.paused) audio.pause();
    });
  }, true);
})();
// Swift demo behavior end
