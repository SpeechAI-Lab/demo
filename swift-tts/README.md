<!-- Swift demo guide begin -->
# Swift-TTS demo

This directory maps directly to `swift-tts/` in
[SpeechAI-Lab/demo](https://github.com/SpeechAI-Lab/demo/tree/main/swift-tts).
The page is static HTML, CSS, and JavaScript and requires no build step.

```text
swift-tts/
├── index.html
├── css/custom.css
├── js/demo.js
├── data/
│   ├── samples.js
│   ├── selection.tsv
│   └── selection.json
├── pics/
│   ├── overall-architecture.png
│   ├── OverAll_Architecture.pdf
│   ├── overview.png
│   └── table.png
└── audio/
    ├── reference/
    ├── gt/
    ├── reconstruction/
    ├── zipvoice/
    ├── f5-tts/
    ├── swift/
    └── swift-distill/
```

## Preview and publication

From this directory:

```bash
python3 -m http.server 8765 --bind 127.0.0.1
```

Open `http://127.0.0.1:8765/`. In a remote IDE, forward port 8765 first.
All page assets use relative paths, so the same page works under
`https://speechai-lab.github.io/demo/swift-tts/`.

Copy `index.html`, `css/`, `js/`, `data/`, and `pics/` into the repository's
`swift-tts/` directory, and merge the supplied `audio/` directory into it.
Publish these files on the repository's configured GitHub Pages branch to update
the public demo at `https://speechai-lab.github.io/demo/swift-tts/`.

The Code link intentionally points to `https://github.com/SpeechAI-Lab/CLID-TTS`
as requested. The paper is displayed as `Paper (coming soon)` until a URL is set
in `data/samples.js`.

## Content and sample selection

The title and abstract come from the local `abstract.txt`. Only the LaTeX
`\url{...}` wrapper is converted to a regular web link. The supplied architecture
PDF is rendered as a 3200-pixel-wide PNG and also linked in its original format.
The supplied result-table PNG is copied without modification.
The supplied `overview.png` follows the architecture in the Model Overview
section and includes a full-size link for the model-design and training-efficiency comparison.

The two audio sections contain five samples each, selected independently from
the 20 utterances in the existing Gradio listening study. That candidate pool
was originally selected by Swift-TTS UTMOS. Each model's UTMOS and SIM-O values
are ranked in descending order within those 20 candidates; equal metric scores
are ordered by utterance ID. The five smallest rank sums are selected. Equal
rank sums are ordered by higher UTMOS, then utterance ID. The metric inputs each
contain 1,088 evaluation utterances, but selection is restricted to the 20
Gradio utterances with existing comparison audio.

- Swift-TTS: Self-Flow Base 600K, 16 sampling steps, temperature 0.5, seed 0.
- Swift-TTS-Distill: Base flow-only 60K, 4 sampling steps, temperature 0.5, seed 0.
- Comparisons: GT, Pocket continuous VAE reconstruction, ZipVoice (16 steps),
  and F5-TTS v1 Base (16 steps).

The selections share three utterances: ten displayed samples correspond to
seven unique target utterances. The 45 WAV files include speaker prompts and
are byte-for-byte copies of the Gradio playback files. Their original 24 kHz,
mono PCM16 format is retained. No inference or audio post-processing is run.
The page pauses the previous player when another audio starts.

`data/selection.tsv` records the ten selected rows and their scores and ranks.
`data/selection.json` records metric-source paths relative to the experiment
root, source hashes, selection settings, and the SHA-256 of every included WAV.

The local inputs and `_local/` directory are ignored by `.gitignore`. On the
original workstation, `_local/prepare_demo.py` rebuilds the assets from the
listening study at:

```text
/mnt/shared/JHG/experiments/SWIFT-TTS/listening/seed_gt_utmos_top20_cmos_zipvoice_20260924
```

```bash
python3 _local/prepare_demo.py
```
<!-- Swift demo guide end -->
