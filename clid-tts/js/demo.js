(function () {
  "use strict";

  const samples = Array.isArray(window.CLID_TTS_SAMPLES) ? window.CLID_TTS_SAMPLES : [];
  const koreanBenchmarkSamples = Array.isArray(window.CLID_TTS_KOREAN_BENCHMARK_SAMPLES)
    ? window.CLID_TTS_KOREAN_BENCHMARK_SAMPLES
    : [];
  const sameTextDemo = window.CLID_TTS_SAME_TEXT_DEMO || {};
  const sameTextItems = Array.isArray(sameTextDemo.texts) ? sameTextDemo.texts : [];
  const sameTextInstructions = Array.isArray(sameTextDemo.instructions)
    ? sameTextDemo.instructions
    : [];
  const modelColumns = [
    { key: "gt", label: "GT" },
    { key: "gemini", label: "Gemini" },
    { key: "voxcpm2", label: "VoxCPM2" },
    { key: "qwen3VoiceDesign", label: "Qwen3-TTS-VoiceDesign" },
    { key: "clidNoCfg", label: "CLID w/o CFG" },
    { key: "clidTts", label: "CLID-TTS" }
  ];

  function makeAudioCell(path, label, isOurs) {
    const cell = document.createElement("td");
    cell.className = "audio-cell";
    if (isOurs) {
      cell.classList.add("ours-cell");
    }

    if (!path) {
      const missing = document.createElement("span");
      missing.className = "audio-missing";
      missing.textContent = "Not available";
      cell.append(missing);
      return cell;
    }

    const audio = document.createElement("audio");
    const source = document.createElement("source");

    audio.controls = true;
    audio.preload = "metadata";
    audio.setAttribute("aria-label", label);
    source.src = path;
    source.type = path.toLowerCase().endsWith(".mp3") ? "audio/mpeg" : "audio/wav";
    audio.append(source);
    cell.append(audio);
    return cell;
  }

  function makeDetailItem(label, value, className, note) {
    const item = document.createElement("div");
    const term = document.createElement("dt");
    const description = document.createElement("dd");

    item.className = "detail-item";
    if (className) {
      item.classList.add(className);
    }

    term.textContent = label;
    description.textContent = value || "";

    if (note) {
      const noteElement = document.createElement("span");
      noteElement.className = "unused-note";
      noteElement.textContent = note;
      term.append(noteElement);
    }

    item.append(term, description);
    return item;
  }

  function makeEmotionButton(sample, detailsId) {
    const button = document.createElement("button");
    const label = document.createElement("span");
    const chevron = document.createElement("span");
    const accessibleAction = document.createElement("span");

    button.type = "button";
    button.className = "emotion-toggle";
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-controls", detailsId);

    label.textContent = sample.emotion;
    chevron.className = "emotion-chevron";
    chevron.setAttribute("aria-hidden", "true");
    chevron.textContent = "⌄";
    accessibleAction.className = "visually-hidden emotion-action";
    accessibleAction.textContent = ". Show instructions and transcription";

    button.append(label, chevron, accessibleAction);
    return button;
  }

  function makeSampleRows(sample, index) {
    const sampleLabel = sample.id || `sample ${index + 1}`;
    const detailsId = `${sampleLabel.replace(/[^a-zA-Z0-9_-]/g, "-")}-details`;
    const audioRow = document.createElement("tr");
    const emotionCell = document.createElement("th");
    const detailsRow = document.createElement("tr");
    const detailsCell = document.createElement("td");
    const details = document.createElement("dl");
    const emotionButton = makeEmotionButton(sample, detailsId);

    audioRow.className = "sample-audio-row";
    emotionCell.scope = "row";
    emotionCell.className = "emotion-cell";
    emotionCell.append(emotionButton);
    audioRow.append(emotionCell);

    modelColumns.forEach((model) => {
      const audioPath = sample.audio && sample.audio[model.key];
      audioRow.append(makeAudioCell(
        audioPath,
        `Play ${model.label} audio for ${sample.emotion}`,
        model.key === "clidTts"
      ));
    });

    detailsRow.id = detailsId;
    detailsRow.className = "sample-detail-row";
    detailsRow.hidden = true;
    detailsCell.colSpan = modelColumns.length + 1;
    details.className = "sample-details";
    details.append(makeDetailItem("Instruction-ko", sample.instructionKo));
    details.append(makeDetailItem(
      "English Instruction",
      sample.instructionEn,
      "unused-instruction",
      "Not used for inference"
    ));
    details.append(makeDetailItem("Transcription", sample.text));
    detailsCell.append(details);
    detailsRow.append(detailsCell);

    emotionButton.addEventListener("click", () => {
      const willOpen = detailsRow.hidden;
      detailsRow.hidden = !willOpen;
      emotionButton.setAttribute("aria-expanded", String(willOpen));
      emotionButton.classList.toggle("is-open", willOpen);
      emotionButton.querySelector(".emotion-action").textContent = willOpen
        ? ". Hide instructions and transcription"
        : ". Show instructions and transcription";
    });

    return [audioRow, detailsRow];
  }

  function makeComparisonTable() {
    const wrap = document.createElement("div");
    const table = document.createElement("table");
    const colgroup = document.createElement("colgroup");
    const emotionColumn = document.createElement("col");
    const head = document.createElement("thead");
    const headRow = document.createElement("tr");
    const emotionHeading = document.createElement("th");
    const body = document.createElement("tbody");

    wrap.className = "comparison-wrap";
    table.className = "comparison-table";
    table.setAttribute("aria-label", "Audio comparison by emotion and model");

    emotionColumn.className = "emotion-column";
    colgroup.append(emotionColumn);
    modelColumns.forEach(() => colgroup.append(document.createElement("col")));

    emotionHeading.scope = "col";
    emotionHeading.textContent = "Emotion";
    headRow.append(emotionHeading);

    modelColumns.forEach((model) => {
      const heading = document.createElement("th");
      heading.scope = "col";
      heading.className = "model-heading";
      heading.textContent = model.label;
      if (model.key === "clidTts") {
        heading.classList.add("ours-heading");
      }
      headRow.append(heading);
    });

    samples.forEach((sample, index) => body.append(...makeSampleRows(sample, index)));
    head.append(headRow);
    table.append(colgroup, head, body);
    wrap.append(table);
    return wrap;
  }

  function renderSamples() {
    const sampleList = document.getElementById("demo-sample-list");

    if (!sampleList || samples.length === 0) {
      return;
    }

    sampleList.replaceChildren(makeComparisonTable());
  }

  function makeBenchmarkHeading(label, note) {
    const heading = document.createElement("th");
    heading.scope = "col";
    heading.textContent = label;

    if (note) {
      const noteElement = document.createElement("span");
      noteElement.className = "column-note";
      noteElement.textContent = note;
      heading.append(noteElement);
    }

    return heading;
  }

  function makeKoreanBenchmarkTable() {
    const wrap = document.createElement("div");
    const table = document.createElement("table");
    const colgroup = document.createElement("colgroup");
    const head = document.createElement("thead");
    const headRow = document.createElement("tr");
    const body = document.createElement("tbody");
    const columns = [
      "emotion",
      "ko",
      "en",
      "text",
      "audio"
    ];
    const groups = [];

    columns.forEach((className) => {
      const column = document.createElement("col");
      column.className = `benchmark-${className}-column`;
      colgroup.append(column);
    });

    headRow.append(
      makeBenchmarkHeading("Emotion"),
      makeBenchmarkHeading("Korean Instruction"),
      makeBenchmarkHeading("English Instruction", "Not used for inference"),
      makeBenchmarkHeading("Text"),
      makeBenchmarkHeading("Audio")
    );

    koreanBenchmarkSamples.forEach((sample) => {
      const previous = groups[groups.length - 1];
      if (previous && previous.emotion === sample.emotion) {
        previous.samples.push(sample);
      } else {
        groups.push({ emotion: sample.emotion, samples: [sample] });
      }
    });

    groups.forEach((group) => {
      group.samples.forEach((sample, index) => {
        const row = document.createElement("tr");
        const koCell = document.createElement("td");
        const enCell = document.createElement("td");
        const textCell = document.createElement("td");
        const audio = sample.audio || {};
        const clidAudioCell = makeAudioCell(
          audio.clidTts,
          `Play CLID-TTS audio for ${group.emotion}, sample ${index + 1}`,
          true
        );

        if (index === 0) {
          const emotionCell = document.createElement("th");
          emotionCell.scope = "rowgroup";
          emotionCell.rowSpan = group.samples.length;
          emotionCell.className = "benchmark-emotion-cell";
          emotionCell.textContent = group.emotion;
          row.append(emotionCell);
        }

        koCell.className = "benchmark-copy-cell";
        koCell.lang = "ko";
        koCell.textContent = sample.instructionKo;
        enCell.className = "benchmark-copy-cell benchmark-en-cell";
        enCell.lang = "en";
        enCell.textContent = sample.instructionEn;
        textCell.className = "benchmark-copy-cell benchmark-text-cell";
        textCell.lang = "ko";
        textCell.textContent = sample.text;
        clidAudioCell.classList.add("benchmark-audio-cell", "benchmark-clid-cell");
        row.append(
          koCell,
          enCell,
          textCell,
          clidAudioCell
        );
        body.append(row);
      });
    });

    head.append(headRow);
    table.className = "benchmark-sample-table";
    table.setAttribute("aria-label", "Korean benchmark speech samples generated from Korean instructions");
    table.append(colgroup, head, body);
    wrap.className = "benchmark-sample-wrap";
    wrap.append(table);
    return wrap;
  }

  function renderKoreanBenchmarkSamples() {
    const sampleList = document.getElementById("korean-benchmark-sample-list");
    if (!sampleList || koreanBenchmarkSamples.length === 0) {
      return;
    }
    sampleList.replaceChildren(makeKoreanBenchmarkTable());
  }

  function makeSameTextTable() {
    const wrap = document.createElement("div");
    const table = document.createElement("table");
    const colgroup = document.createElement("colgroup");
    const head = document.createElement("thead");
    const headRow = document.createElement("tr");
    const body = document.createElement("tbody");
    const emotionGroups = [];

    ["text", "emotion", "instruction", "audio"].forEach((className) => {
      const column = document.createElement("col");
      column.className = `same-text-${className}-column`;
      colgroup.append(column);
    });

    headRow.append(
      makeBenchmarkHeading("Text"),
      makeBenchmarkHeading("Emotion"),
      makeBenchmarkHeading("Korean Instruction"),
      makeBenchmarkHeading("Audio")
    );

    sameTextInstructions.forEach((instruction) => {
      const previous = emotionGroups[emotionGroups.length - 1];
      if (previous && previous.emotion === instruction.emotion) {
        previous.instructions.push(instruction);
      } else {
        emotionGroups.push({
          emotion: instruction.emotion,
          instructions: [instruction]
        });
      }
    });

    sameTextItems.forEach((textItem, textIndex) => {
      let rowIndex = 0;
      emotionGroups.forEach((group) => {
        group.instructions.forEach((instruction, instructionIndex) => {
          const row = document.createElement("tr");
          const instructionCell = document.createElement("td");
          const sampleOrdinal = 6 + textIndex * 2 + Number(instruction.variant);
          const audioPath = `audio/sec3_${instruction.key}_${sampleOrdinal}.wav`;
          const audioCell = makeAudioCell(
            audioPath,
            `Play CLID-TTS ${group.emotion} variant ${instruction.variant} for ${textItem.sourceId}`,
            true
          );

          if (textIndex > 0 && rowIndex === 0) {
            row.classList.add("same-text-group-start");
          }

          if (rowIndex === 0) {
            const textCell = document.createElement("th");
            const source = document.createElement("span");
            textCell.scope = "rowgroup";
            textCell.rowSpan = sameTextInstructions.length;
            textCell.className = "same-text-copy-cell";
            textCell.lang = "ko";
            textCell.append(document.createTextNode(textItem.text));
            source.className = "same-text-source";
            source.textContent = textItem.sourceId;
            textCell.append(source);
            row.append(textCell);
          }

          if (instructionIndex === 0) {
            const emotionCell = document.createElement("th");
            emotionCell.scope = "rowgroup";
            emotionCell.rowSpan = group.instructions.length;
            emotionCell.className = "same-text-emotion-cell";
            emotionCell.textContent = group.emotion;
            row.append(emotionCell);
          }

          instructionCell.className = "same-text-instruction-cell";
          instructionCell.lang = "ko";
          instructionCell.textContent = instruction.instructionKo;
          audioCell.classList.add("same-text-audio-cell");
          row.append(instructionCell, audioCell);
          body.append(row);
          rowIndex += 1;
        });
      });
    });

    head.append(headRow);
    table.className = "same-text-table";
    table.setAttribute(
      "aria-label",
      "CLID-TTS samples generated from two fixed Korean texts and two Korean instructions per emotion"
    );
    table.append(colgroup, head, body);
    wrap.className = "same-text-wrap";
    wrap.append(table);
    return wrap;
  }

  function renderSameTextSamples() {
    const sampleList = document.getElementById("same-text-sample-list");
    if (!sampleList || sameTextItems.length === 0 || sameTextInstructions.length === 0) {
      return;
    }
    sampleList.replaceChildren(makeSameTextTable());
  }

  renderSamples();
  renderKoreanBenchmarkSamples();
  renderSameTextSamples();
}());
