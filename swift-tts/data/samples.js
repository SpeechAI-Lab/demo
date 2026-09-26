// Swift demo data begin
window.SWIFT_TTS_DEMO = {
  "title": "Swift-TTS: Efficient Text-to-Speech via Self-supervised Flow Matching",
  "abstract": "Recently, latent diffusion models (LDMs) and representation alignment (REPA) have each been shown to improve the efficiency of text-to-speech (TTS) training. However, incorporating REPA into LDM-based TTS diminishes these efficiency gains by requiring either online self-supervised learning feature extraction from waveforms or substantial storage for precomputed features. To address this limitation, we propose Swift-TTS, an efficient latent diffusion TTS model that uses self-supervised flow matching (Self-Flow) to integrate representation learning into flow-matching training. Also, we apply latent recalibration to improve the robustness of speech prompting for inference optimization. Furthermore, we improve inference speed through flow distillation. Experimental results demonstrate the training efficiency of Swift-TTS, which achieves promising speech intelligibility after only one hour of training. The distilled model maintains strong performance with a RTF of 0.013. Audio samples are available at https://speechai-lab.github.io/demo/swift-tts/.",
  "codeUrl": "https://github.com/SpeechAI-Lab/CLID-TTS",
  "paperUrl": "",
  "paperLabel": "Paper (coming soon)",
  "figure": {
    "src": "pics/overall-architecture.png",
    "original": "pics/OverAll_Architecture.pdf",
    "alt": "Swift-TTS architecture: VAE acoustic latents and text conditioning, dual-timestep noising, an EMA teacher and student DiT, and representation-alignment and flow-matching losses.",
    "caption": "Overview of Swift-TTS. Self-Flow integrates representation learning into latent flow-matching training using an EMA teacher and a student DiT."
  },
  "results": {
    "src": "pics/table.png",
    "alt": "Two experimental results tables: model quality, size, and inference efficiency on Seed-TTS test-en and LibriSpeech-PC test-clean; and the effects of Self-Flow and flow distillation at two model sizes."
  },
  "sections": [
    {
      "id": "swift",
      "label": "Swift-TTS",
      "steps": 16,
      "systems": [
        {
          "key": "gt",
          "label": "GT",
          "note": "Original recording"
        },
        {
          "key": "reconstruction",
          "label": "Reconstruction",
          "note": "Pocket continuous VAE"
        },
        {
          "key": "zipvoice",
          "label": "ZipVoice",
          "note": "16 steps"
        },
        {
          "key": "f5-tts",
          "label": "F5-TTS",
          "note": "v1 Base · 16 steps"
        },
        {
          "key": "swift",
          "label": "Swift-TTS",
          "note": "16 steps",
          "ours": true
        }
      ],
      "samples": [
        {
          "id": "common_voice_en_2586258-common_voice_en_2586259",
          "text": "You can create bookmarks in you web browser to make browsing more convenient.",
          "promptText": "Romeo and Juliet might be the most famous act of William Shakespeare.",
          "reference": "audio/reference/common_voice_en_2586258-common_voice_en_2586259.wav",
          "audio": {
            "gt": "audio/gt/common_voice_en_2586258-common_voice_en_2586259.wav",
            "reconstruction": "audio/reconstruction/common_voice_en_2586258-common_voice_en_2586259.wav",
            "zipvoice": "audio/zipvoice/common_voice_en_2586258-common_voice_en_2586259.wav",
            "f5-tts": "audio/f5-tts/common_voice_en_2586258-common_voice_en_2586259.wav",
            "swift": "audio/swift/common_voice_en_2586258-common_voice_en_2586259.wav"
          },
          "scores": {
            "utmos": 4.416156768798828,
            "sim_o": 0.7302289009094238,
            "utmos_rank": 2,
            "sim_o_rank": 1,
            "rank_sum": 3
          }
        },
        {
          "id": "common_voice_en_21877403-common_voice_en_21877406",
          "text": "She leaves abruptly during the meeting, and is never seen again.",
          "promptText": "The radio show \"About a Dog\" was based on her last comedy proposal.",
          "reference": "audio/reference/common_voice_en_21877403-common_voice_en_21877406.wav",
          "audio": {
            "gt": "audio/gt/common_voice_en_21877403-common_voice_en_21877406.wav",
            "reconstruction": "audio/reconstruction/common_voice_en_21877403-common_voice_en_21877406.wav",
            "zipvoice": "audio/zipvoice/common_voice_en_21877403-common_voice_en_21877406.wav",
            "f5-tts": "audio/f5-tts/common_voice_en_21877403-common_voice_en_21877406.wav",
            "swift": "audio/swift/common_voice_en_21877403-common_voice_en_21877406.wav"
          },
          "scores": {
            "utmos": 4.415255069732666,
            "sim_o": 0.6695992946624756,
            "utmos_rank": 3,
            "sim_o_rank": 6,
            "rank_sum": 9
          }
        },
        {
          "id": "common_voice_en_18200641-common_voice_en_18200765",
          "text": "Mrs. Travis, when I leave my kids in kindergarten, I expect you to supervise them.",
          "promptText": "We can describe the object's movement with a differential equation of second order.",
          "reference": "audio/reference/common_voice_en_18200641-common_voice_en_18200765.wav",
          "audio": {
            "gt": "audio/gt/common_voice_en_18200641-common_voice_en_18200765.wav",
            "reconstruction": "audio/reconstruction/common_voice_en_18200641-common_voice_en_18200765.wav",
            "zipvoice": "audio/zipvoice/common_voice_en_18200641-common_voice_en_18200765.wav",
            "f5-tts": "audio/f5-tts/common_voice_en_18200641-common_voice_en_18200765.wav",
            "swift": "audio/swift/common_voice_en_18200641-common_voice_en_18200765.wav"
          },
          "scores": {
            "utmos": 4.404754638671875,
            "sim_o": 0.6715198755264282,
            "utmos_rank": 4,
            "sim_o_rank": 5,
            "rank_sum": 9
          }
        },
        {
          "id": "common_voice_en_19967495-common_voice_en_19967497",
          "text": "The remaining singles failed to hit the dance chart.",
          "promptText": "These two engines were nearly identical, except for the induction systems.",
          "reference": "audio/reference/common_voice_en_19967495-common_voice_en_19967497.wav",
          "audio": {
            "gt": "audio/gt/common_voice_en_19967495-common_voice_en_19967497.wav",
            "reconstruction": "audio/reconstruction/common_voice_en_19967495-common_voice_en_19967497.wav",
            "zipvoice": "audio/zipvoice/common_voice_en_19967495-common_voice_en_19967497.wav",
            "f5-tts": "audio/f5-tts/common_voice_en_19967495-common_voice_en_19967497.wav",
            "swift": "audio/swift/common_voice_en_19967495-common_voice_en_19967497.wav"
          },
          "scores": {
            "utmos": 4.474839210510254,
            "sim_o": 0.5875024795532227,
            "utmos_rank": 1,
            "sim_o_rank": 13,
            "rank_sum": 14
          }
        },
        {
          "id": "common_voice_en_28064064-common_voice_en_28064058",
          "text": "And the phrase has retained its political power for six decades.",
          "promptText": "The blueprints for the new airport and container port had already been drawn.",
          "reference": "audio/reference/common_voice_en_28064064-common_voice_en_28064058.wav",
          "audio": {
            "gt": "audio/gt/common_voice_en_28064064-common_voice_en_28064058.wav",
            "reconstruction": "audio/reconstruction/common_voice_en_28064064-common_voice_en_28064058.wav",
            "zipvoice": "audio/zipvoice/common_voice_en_28064064-common_voice_en_28064058.wav",
            "f5-tts": "audio/f5-tts/common_voice_en_28064064-common_voice_en_28064058.wav",
            "swift": "audio/swift/common_voice_en_28064064-common_voice_en_28064058.wav"
          },
          "scores": {
            "utmos": 4.324674606323242,
            "sim_o": 0.7271379232406616,
            "utmos_rank": 12,
            "sim_o_rank": 2,
            "rank_sum": 14
          }
        }
      ]
    },
    {
      "id": "swift-distill",
      "label": "Swift-TTS-Distill",
      "steps": 4,
      "systems": [
        {
          "key": "gt",
          "label": "GT",
          "note": "Original recording"
        },
        {
          "key": "reconstruction",
          "label": "Reconstruction",
          "note": "Pocket continuous VAE"
        },
        {
          "key": "zipvoice",
          "label": "ZipVoice",
          "note": "16 steps"
        },
        {
          "key": "f5-tts",
          "label": "F5-TTS",
          "note": "v1 Base · 16 steps"
        },
        {
          "key": "swift-distill",
          "label": "Swift-TTS-Distill",
          "note": "4 steps",
          "ours": true
        }
      ],
      "samples": [
        {
          "id": "common_voice_en_18200641-common_voice_en_18200765",
          "text": "Mrs. Travis, when I leave my kids in kindergarten, I expect you to supervise them.",
          "promptText": "We can describe the object's movement with a differential equation of second order.",
          "reference": "audio/reference/common_voice_en_18200641-common_voice_en_18200765.wav",
          "audio": {
            "gt": "audio/gt/common_voice_en_18200641-common_voice_en_18200765.wav",
            "reconstruction": "audio/reconstruction/common_voice_en_18200641-common_voice_en_18200765.wav",
            "zipvoice": "audio/zipvoice/common_voice_en_18200641-common_voice_en_18200765.wav",
            "f5-tts": "audio/f5-tts/common_voice_en_18200641-common_voice_en_18200765.wav",
            "swift-distill": "audio/swift-distill/common_voice_en_18200641-common_voice_en_18200765.wav"
          },
          "scores": {
            "utmos": 4.399116039276123,
            "sim_o": 0.6788941621780396,
            "utmos_rank": 1,
            "sim_o_rank": 5,
            "rank_sum": 6
          }
        },
        {
          "id": "common_voice_en_21877403-common_voice_en_21877406",
          "text": "She leaves abruptly during the meeting, and is never seen again.",
          "promptText": "The radio show \"About a Dog\" was based on her last comedy proposal.",
          "reference": "audio/reference/common_voice_en_21877403-common_voice_en_21877406.wav",
          "audio": {
            "gt": "audio/gt/common_voice_en_21877403-common_voice_en_21877406.wav",
            "reconstruction": "audio/reconstruction/common_voice_en_21877403-common_voice_en_21877406.wav",
            "zipvoice": "audio/zipvoice/common_voice_en_21877403-common_voice_en_21877406.wav",
            "f5-tts": "audio/f5-tts/common_voice_en_21877403-common_voice_en_21877406.wav",
            "swift-distill": "audio/swift-distill/common_voice_en_21877403-common_voice_en_21877406.wav"
          },
          "scores": {
            "utmos": 4.305018424987793,
            "sim_o": 0.671019434928894,
            "utmos_rank": 5,
            "sim_o_rank": 6,
            "rank_sum": 11
          }
        },
        {
          "id": "common_voice_en_19397397-common_voice_en_19397407",
          "text": "After the war, May returned to work in the textiles industry.",
          "promptText": "The Knights conquered the Prussians and converted them to Christianity.",
          "reference": "audio/reference/common_voice_en_19397397-common_voice_en_19397407.wav",
          "audio": {
            "gt": "audio/gt/common_voice_en_19397397-common_voice_en_19397407.wav",
            "reconstruction": "audio/reconstruction/common_voice_en_19397397-common_voice_en_19397407.wav",
            "zipvoice": "audio/zipvoice/common_voice_en_19397397-common_voice_en_19397407.wav",
            "f5-tts": "audio/f5-tts/common_voice_en_19397397-common_voice_en_19397407.wav",
            "swift-distill": "audio/swift-distill/common_voice_en_19397397-common_voice_en_19397407.wav"
          },
          "scores": {
            "utmos": 4.312839508056641,
            "sim_o": 0.6315823793411255,
            "utmos_rank": 4,
            "sim_o_rank": 9,
            "rank_sum": 13
          }
        },
        {
          "id": "common_voice_en_17851231-common_voice_en_17851256",
          "text": "A rich farm is rare in this sandy waste.",
          "promptText": "The stems of the tall glasses cracked and broke.",
          "reference": "audio/reference/common_voice_en_17851231-common_voice_en_17851256.wav",
          "audio": {
            "gt": "audio/gt/common_voice_en_17851231-common_voice_en_17851256.wav",
            "reconstruction": "audio/reconstruction/common_voice_en_17851231-common_voice_en_17851256.wav",
            "zipvoice": "audio/zipvoice/common_voice_en_17851231-common_voice_en_17851256.wav",
            "f5-tts": "audio/f5-tts/common_voice_en_17851231-common_voice_en_17851256.wav",
            "swift-distill": "audio/swift-distill/common_voice_en_17851231-common_voice_en_17851256.wav"
          },
          "scores": {
            "utmos": 4.217850685119629,
            "sim_o": 0.7056100964546204,
            "utmos_rank": 10,
            "sim_o_rank": 4,
            "rank_sum": 14
          }
        },
        {
          "id": "common_voice_en_28064064-common_voice_en_28064058",
          "text": "And the phrase has retained its political power for six decades.",
          "promptText": "The blueprints for the new airport and container port had already been drawn.",
          "reference": "audio/reference/common_voice_en_28064064-common_voice_en_28064058.wav",
          "audio": {
            "gt": "audio/gt/common_voice_en_28064064-common_voice_en_28064058.wav",
            "reconstruction": "audio/reconstruction/common_voice_en_28064064-common_voice_en_28064058.wav",
            "zipvoice": "audio/zipvoice/common_voice_en_28064064-common_voice_en_28064058.wav",
            "f5-tts": "audio/f5-tts/common_voice_en_28064064-common_voice_en_28064058.wav",
            "swift-distill": "audio/swift-distill/common_voice_en_28064064-common_voice_en_28064058.wav"
          },
          "scores": {
            "utmos": 4.190171718597412,
            "sim_o": 0.7167133092880249,
            "utmos_rank": 12,
            "sim_o_rank": 3,
            "rank_sum": 15
          }
        }
      ]
    }
  ]
};
// Swift demo data end
