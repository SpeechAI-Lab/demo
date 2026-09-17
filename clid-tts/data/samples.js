// Add every demo sample to this single list.
// Audio paths are relative to the repository root.
// Fields: emotion, instructionKo, instructionEn, text, and six model entries in audio.
// Gemini samples use gemini-3.1-flash-tts-preview with the same Korean instructions and texts.
// Source: Hugging Face dataset SailAjou/korean-mos-audio
// Revision: 745dcf069552ee3bf397bd273751becd4dded4a0
// Generated-audio pack: 09dbb99a098348af86a691e13b863391
// GT pack: eee437ae91b6483d8f933b336ab38c63
// Selection: highest current CLID-TTS emotion-recognition accuracy per emotion.
// MOS production revision: 253484 (1,232 submitted CLID-TTS emotion responses).
// Tie-break: higher response count, then sample ID in ascending order.
// Angry uses the next tied-best sample at the user's request.
window.CLID_TTS_SAMPLES = [
  {
    id: "neutral_i0_0005",
    emotion: "Neutral",
    instructionKo: "성인 남성 화자가 중간 톤의 음색으로 말하며, 중립적인 감정을 약하게 유지하고 감정을 섞지 말고 담담하고 차분하게 말한다.",
    instructionEn: "An adult male speaker speaks in a medium-toned voice, maintaining a weak neutral emotion and speaking in a calm, composed manner without mixing in any emotions.",
    text: "줄기가 둘로 갈라진 채 땅에 주저앉고 말았습니다.",
    audio: {
      gt: "audio/sec1_neutral_1_gt.wav",
      gemini: "audio/sec1_neutral_1_gemini.wav",
      voxcpm2: "audio/sec1_neutral_1_voxcpm2.wav",
      qwen3VoiceDesign: "audio/sec1_neutral_1_qwen3_tts_voicedesign.wav",
      clidNoCfg: "audio/sec1_neutral_1_clid_wo_cfg.wav",
      clidTts: "audio/sec1_neutral_1_clid_tts.wav"
    }
  },
  {
    id: "angry_0146",
    emotion: "Angry",
    instructionKo: "성인 여성 화자가 단호한 음색으로 말하며, 화난 감정을 강하게 담아 상대방을 꾸짖는 듯한 강하고 단호한 어조로 말한다.",
    instructionEn: "An adult female speaker speaks in a firm tone, expressing strong anger and speaking in a powerful, resolute manner as if scolding the listener.",
    text: "그런 건 일일이 얘기 안 해 줘도 돼, 넌 왜 날 따라와서 귀찮게 구는 건데?",
    audio: {
      gt: "audio/sec1_angry_1_gt.wav",
      gemini: "audio/sec1_angry_1_gemini.wav",
      voxcpm2: "audio/sec1_angry_1_voxcpm2.wav",
      qwen3VoiceDesign: "audio/sec1_angry_1_qwen3_tts_voicedesign.wav",
      clidNoCfg: "audio/sec1_angry_1_clid_wo_cfg.wav",
      clidTts: "audio/sec1_angry_1_clid_tts.wav"
    }
  },
  {
    id: "happy_0176",
    emotion: "Happy",
    instructionKo: "성인 여성 화자가 귀여운 음색으로 말하며, 기쁜 감정을 강하게 담아 밝고 명랑한 어조로 입가에 미소를 머금고 생기 있게 말한다.",
    instructionEn: "An adult female speaker speaks in a cute tone, expressing strong joy in a bright and cheerful manner with a smile on her face and a lively voice.",
    text: "행복한 꿈을 꾸는지 입가에 미소가 가시지 않았습니다.",
    audio: {
      gt: "audio/sec1_happy_1_gt.wav",
      gemini: "audio/sec1_happy_1_gemini.wav",
      voxcpm2: "audio/sec1_happy_1_voxcpm2.wav",
      qwen3VoiceDesign: "audio/sec1_happy_1_qwen3_tts_voicedesign.wav",
      clidNoCfg: "audio/sec1_happy_1_clid_wo_cfg.wav",
      clidTts: "audio/sec1_happy_1_clid_tts.wav"
    }
  },
  {
    id: "sad_0155",
    emotion: "Sad",
    instructionKo: "고령 여성 화자가 낮은 톤의 음색으로 말하며, 슬픈 감정을 강하게 담아 차분하고 낮은 톤으로 슬픔을 담아 천천히 말한다.",
    instructionEn: "An elderly female speaker speaks in a low-pitched voice, conveying strong sadness in a calm, low tone while speaking slowly.",
    text: "엄마가 우울증이 있어서 얘기도 충분히 하지 못하고, 다온이가 정말 슬프고 외롭겠다.",
    audio: {
      gt: "audio/sec1_sad_1_gt.wav",
      gemini: "audio/sec1_sad_1_gemini.wav",
      voxcpm2: "audio/sec1_sad_1_voxcpm2.wav",
      qwen3VoiceDesign: "audio/sec1_sad_1_qwen3_tts_voicedesign.wav",
      clidNoCfg: "audio/sec1_sad_1_clid_wo_cfg.wav",
      clidTts: "audio/sec1_sad_1_clid_tts.wav"
    }
  },
  {
    id: "fearful_0144",
    emotion: "Fearful",
    instructionKo: "성인 남성 화자가 낮은 톤의 음색으로 말하며, 불안한 감정을 강하게 담아 숨을 섞어 낮고 떨리는 목소리로 두려움을 표현한다.",
    instructionEn: "An adult male speaker speaks in a low-toned voice, expressing fear with a low and trembling voice mixed with breath, carrying a strong sense of anxiety.",
    text: "아기 오리는 무서워서 숨도 쉴 수 없었어요.",
    audio: {
      gt: "audio/sec1_fearful_1_gt.wav",
      gemini: "audio/sec1_fearful_1_gemini.wav",
      voxcpm2: "audio/sec1_fearful_1_voxcpm2.wav",
      qwen3VoiceDesign: "audio/sec1_fearful_1_qwen3_tts_voicedesign.wav",
      clidNoCfg: "audio/sec1_fearful_1_clid_wo_cfg.wav",
      clidTts: "audio/sec1_fearful_1_clid_tts.wav"
    }
  },
  {
    id: "surprised_0153",
    emotion: "Surprised",
    instructionKo: "성인 남성 화자가 높은 톤의 음색으로 말하며, 놀란 감정을 분명하게 담아 놀란 감정을 담아 높은 톤으로 강조하며 말한다.",
    instructionEn: "An adult male speaker speaks in a high-pitched tone, clearly conveying a sense of surprise by emphasizing the emotion with a high pitch.",
    text: "임금님께서 연회 음식을 다 드셔버렸다고?",
    audio: {
      gt: "audio/sec1_surprised_1_gt.wav",
      gemini: "audio/sec1_surprised_1_gemini.wav",
      voxcpm2: "audio/sec1_surprised_1_voxcpm2.wav",
      qwen3VoiceDesign: "audio/sec1_surprised_1_qwen3_tts_voicedesign.wav",
      clidNoCfg: "audio/sec1_surprised_1_clid_wo_cfg.wav",
      clidTts: "audio/sec1_surprised_1_clid_tts.wav"
    }
  }
];

// Korean benchmark samples are kept in the same metadata file and audio directory.
// Selection: five samples per emotion with correct CLID-TTS SER, zero CER,
// then ranked by CLID-TTS target-emotion probability (Korean instruction rows).
// Korean benchmark samples are kept in the same metadata file and audio directory.
// Selection: five distinct samples per emotion with correct CLID-TTS SER, zero CER,
// and CLID-TTS audio duration of at least three seconds, ranked by target-emotion probability.
// Korean benchmark samples are kept in the same metadata file and audio directory.
// Selection: five samples per emotion, 30 distinct speaker IDs, both genders per emotion,
// correct CLID-TTS SER, zero CER, duration >= 3 s, and WavLM x-vector diversity.
window.CLID_TTS_KOREAN_BENCHMARK_SAMPLES = [
  {
    "id": "neutral_i3_0015",
    "speaker": "015_0042_CHS",
    "emotion": "Neutral",
    "instructionKo": "성인 남성 화자가 격식 있고 단정한 음색으로 말하며, 차분한 감정을 분명하게 담아 차분하고 진지한 어조로 명확하게 말한다.",
    "instructionEn": "An adult male speaker speaks in a formal and neat tone, clearly conveying calm emotions in a composed and serious manner with clear articulation.",
    "text": "치료보다 예방에 투자를 해야 한다.",
    "audio": {
      "clidTts": "audio/sec2_neutral_2.wav",
      "gemini": "audio/sec2_neutral_2_gemini.wav"
    }
  },
  {
    "id": "neutral_i1_0031",
    "speaker": "133_159",
    "emotion": "Neutral",
    "instructionKo": "고령 남성 화자가 격식 있고 단정한 음색으로 말하며, 차분한 감정을 약하게 유지하고 차분하고 담담한 어조로 천천히 말한다.",
    "instructionEn": "An elderly male speaker speaks in a formal and neat tone, maintaining a weak sense of calm emotion and speaking slowly in a calm and composed manner.",
    "text": "왼쪽 나라와 오른쪽 나라는 서로 마주 보고 있는 작은 나라로 걸핏하면 전쟁을 하였습니다.",
    "audio": {
      "clidTts": "audio/sec2_neutral_3.wav",
      "gemini": "audio/sec2_neutral_3_gemini.wav"
    }
  },
  {
    "id": "neutral_i1_0049",
    "speaker": "133_53",
    "emotion": "Neutral",
    "instructionKo": "성인 남성 화자가 격식 있고 단정한 음색으로 말하며, 중립적인 감정을 약하게 유지하고 차분하고 평이한 어조로 정보를 전달하듯이 말한다.",
    "instructionEn": "An adult male speaker speaks in a formal and neat tone, maintaining a weak neutral emotion and delivering information in a calm and plain manner.",
    "text": "코로나로 거리를 띄우고, 이른바 건전한 유희의 장을 마련하자.",
    "audio": {
      "clidTts": "audio/sec2_neutral_4.wav",
      "gemini": "audio/sec2_neutral_4_gemini.wav"
    }
  },
  {
    "id": "neutral_i2_0037",
    "speaker": "133_42",
    "emotion": "Neutral",
    "instructionKo": "고령 남성 화자가 격식 있고 단정한 음색으로 말하며, 차분한 감정을 분명하게 담아 차분하고 진지한 어조로 정보를 전달하듯이 말한다.",
    "instructionEn": "An elderly male speaker speaks in a formal and neat tone, delivering information in a calm and serious manner with clearly conveyed calm emotions.",
    "text": "부자 영감 같은 악당도 어떤 경우에는 보리 한 가마니를 빌려주는 법입니다.",
    "audio": {
      "clidTts": "audio/sec2_neutral_5.wav",
      "gemini": "audio/sec2_neutral_5_gemini.wav"
    }
  },
  {
    "id": "neutral_i0_0006",
    "speaker": "015_0028_KJS",
    "emotion": "Neutral",
    "instructionKo": "성인 여성 화자가 중간 톤의 음색으로 말하며, 중립적인 감정을 약하게 유지하고 보통의 속도와 중간 정도의 에너지로 평이하게 말한다.",
    "instructionEn": "An adult female speaker speaks in a medium-toned voice, maintaining a weak neutral emotion and speaking plainly at a normal speed with moderate energy.",
    "text": "갑자기 정신이 번쩍 들었다.",
    "audio": {
      "clidTts": "audio/sec2_neutral_6.wav",
      "gemini": "audio/sec2_neutral_6_gemini.wav"
    }
  },
  {
    "id": "angry_0164",
    "speaker": "133_20",
    "emotion": "Angry",
    "instructionKo": "성인 여성 화자가 중간 톤의 음색으로 말하며, 화난 감정을 강하게 담아 긴장감이 느껴지는 강한 어조로 단호하게 말한다.",
    "instructionEn": "An adult female speaker speaks in a medium-toned voice, speaking firmly with a strong tone that conveys intense anger and a sense of tension.",
    "text": "만약 내가 내일까지 그의 집에 노동자를 이사시키지 않으면 나는 죽을 것이다.",
    "audio": {
      "clidTts": "audio/sec2_angry_2.wav",
      "gemini": "audio/sec2_angry_2_gemini.wav"
    }
  },
  {
    "id": "angry_0078",
    "speaker": "015_0027_KYK",
    "emotion": "Angry",
    "instructionKo": "성인 여성 화자가 단호한 음색으로 말하며, 화난 감정을 강하게 담아 상대방을 다그치듯 격앙된 목소리로 강하게 몰아붙이세요.",
    "instructionEn": "An adult female speaker speaks in a firm tone, pushing the listener strongly with an agitated voice that carries intense anger as if rebuking them.",
    "text": "어서 저 옷들을 가지고 줄어들라 하지 않았느냐.",
    "audio": {
      "clidTts": "audio/sec2_angry_3.wav",
      "gemini": "audio/sec2_angry_3_gemini.wav"
    }
  },
  {
    "id": "angry_0068",
    "speaker": "015_0015_OES",
    "emotion": "Angry",
    "instructionKo": "성인 여성 화자가 단호한 음색으로 말하며, 화난 감정을 강하게 담아 매우 화가 난 상태로 소리를 지르며 강하게 몰아붙이듯이 말한다.",
    "instructionEn": "An adult female speaker speaks in a firm tone, shouting with intense anger and speaking in a forceful, pressing manner.",
    "text": "남의 집 귀한 딸 망쳐놓고 이제 와서 무슨 큰소리야?",
    "audio": {
      "clidTts": "audio/sec2_angry_4.wav",
      "gemini": "audio/sec2_angry_4_gemini.wav"
    }
  },
  {
    "id": "angry_0016",
    "speaker": "skt_M0002",
    "emotion": "Angry",
    "instructionKo": "20대 남성 화자가 단호한 음색으로 말하며, 화난 감정을 강하게 담아 단호하고 강한 어조로 상대방의 행동을 제지하며 불쾌감을 드러내며 말한다.",
    "instructionEn": "A man in his 20s speaks with a firm tone, expressing strong anger and speaking in a resolute, powerful manner to stop the other person's actions while revealing his displeasure.",
    "text": "이건 더러운 짓이에요. 이쯤에서 그만두세요 제발.",
    "audio": {
      "clidTts": "audio/sec2_angry_5.wav",
      "gemini": "audio/sec2_angry_5_gemini.wav"
    }
  },
  {
    "id": "angry_0169",
    "speaker": "133_1",
    "emotion": "Angry",
    "instructionKo": "성인 남성 화자가 단호한 음색으로 말하며, 화난 감정을 분명하게 담아 상대방을 다그치듯 강하고 긴장된 어조로 말한다.",
    "instructionEn": "An adult male speaker speaks in a firm tone, clearly conveying anger and speaking in a strong, tense manner as if rebuking the listener.",
    "text": "고객님, 만기일 얼마 안 남았는데 왜 해지하세요?",
    "audio": {
      "clidTts": "audio/sec2_angry_6.wav",
      "gemini": "audio/sec2_angry_6_gemini.wav"
    }
  },
  {
    "id": "happy_0127",
    "speaker": "015_0041_JBG",
    "emotion": "Happy",
    "instructionKo": "성인 남성 화자가 높은 톤의 음색으로 말하며, 기쁜 감정을 분명하게 담아 밝고 활기찬 목소리로 말끝을 올리며 강조해서 말한다.",
    "instructionEn": "An adult male speaker speaks in a high-pitched tone, clearly conveying joy with a bright and energetic voice, emphasizing the words by raising the pitch at the end of the sentences.",
    "text": "개그콘서트, 그쪽에서 완전히 뜨셨잖아요.",
    "audio": {
      "clidTts": "audio/sec2_happy_2.wav",
      "gemini": "audio/sec2_happy_2_gemini.wav"
    }
  },
  {
    "id": "happy_0095",
    "speaker": "015_0032_KDD",
    "emotion": "Happy",
    "instructionKo": "성인 남성 화자가 높은 톤의 음색으로 말하며, 기쁜 감정을 분명하게 담아 밝고 경쾌한 목소리로 기쁨을 표현한다.",
    "instructionEn": "An adult male speaker speaks in a high-pitched tone, clearly expressing joy with a bright and cheerful voice.",
    "text": "그녀는 어찌나 기쁘고 기특한지 뛰며 춤출 것 같았습니다.",
    "audio": {
      "clidTts": "audio/sec2_happy_3.wav",
      "gemini": "audio/sec2_happy_3_gemini.wav"
    }
  },
  {
    "id": "happy_0076",
    "speaker": "015_0034_LJH",
    "emotion": "Happy",
    "instructionKo": "성인 여성 화자가 귀여운 음색으로 말하며, 기쁜 감정을 강하게 담아 밝고 명랑한 목소리로 애정 어린 감정을 담아 말한다.",
    "instructionEn": "An adult female speaker speaks in a cute tone, expressing strong joy with a bright and cheerful voice filled with affection.",
    "text": "너는 귀여운 나의 보물이야.",
    "audio": {
      "clidTts": "audio/sec2_happy_4.wav",
      "gemini": "audio/sec2_happy_4_gemini.wav"
    }
  },
  {
    "id": "happy_0044",
    "speaker": "skt_F0003",
    "emotion": "Happy",
    "instructionKo": "30대 여성 화자가 중간 톤의 음색으로 말하며, 기쁜 감정을 분명하게 담아 부드럽고 온화한 어조로 만족스러운 감정을 담아 말한다.",
    "instructionEn": "A woman in her 30s speaks in a medium-toned voice, clearly conveying joy with a soft and gentle tone that expresses a sense of satisfaction.",
    "text": "그래, 내 아들이 좋아하는 여자라니 나도 좋구나. 돈 있고 힘 있어 좋은 게 뭐겠니.",
    "audio": {
      "clidTts": "audio/sec2_happy_5.wav",
      "gemini": "audio/sec2_happy_5_gemini.wav"
    }
  },
  {
    "id": "happy_0067",
    "speaker": "skt_M0004",
    "emotion": "Happy",
    "instructionKo": "30대 남성 화자가 중간 톤의 음색으로 말하며, 기쁜 감정을 분명하게 담아 밝고 경쾌한 어조로 말한다.",
    "instructionEn": "A man in his 30s speaks in a medium-toned voice, clearly conveying joy with a bright and cheerful tone.",
    "text": "요즘 제가 제일 좋아하는 재료가 바로 시래기예요.",
    "audio": {
      "clidTts": "audio/sec2_happy_6.wav",
      "gemini": "audio/sec2_happy_6_gemini.wav"
    }
  },
  {
    "id": "sad_0148",
    "speaker": "133_13",
    "emotion": "Sad",
    "instructionKo": "성인 남성 화자가 낮은 톤의 음색으로 말하며, 슬픈 감정을 분명하게 담아 낮은 음조로 힘없이 천천히 말한다.",
    "instructionEn": "An adult male speaker speaks in a low-toned voice, clearly conveying a sad emotion and speaking weakly and slowly in a low pitch.",
    "text": "아, 만나던 분이 있으셨네요, 오래 만나고 많이 좋아하신 것 같은데 헤어졌으니 살맛이 안 날 만하죠.",
    "audio": {
      "clidTts": "audio/sec2_sad_2.wav",
      "gemini": "audio/sec2_sad_2_gemini.wav"
    }
  },
  {
    "id": "sad_0139",
    "speaker": "133_23",
    "emotion": "Sad",
    "instructionKo": "성인 남성 화자가 낮은 톤의 음색으로 말하며, 슬픈 감정을 분명하게 담아 낮은 음조로 천천히 슬픈 감정을 담아 말한다.",
    "instructionEn": "An adult male speaker speaks in a low-toned voice, clearly conveying a sad emotion with a low pitch and a slow, sorrowful delivery.",
    "text": "왕이 아무리 애를 써도 슬픈 표정만 지었습니다.",
    "audio": {
      "clidTts": "audio/sec2_sad_3.wav",
      "gemini": "audio/sec2_sad_3_gemini.wav"
    }
  },
  {
    "id": "sad_0068",
    "speaker": "015_0024_PGJ",
    "emotion": "Sad",
    "instructionKo": "성인 남성 화자가 낮은 톤의 음색으로 말하며, 슬픈 감정을 강하게 담아 울먹이며 슬픈 감정을 담아 천천히 말한다.",
    "instructionEn": "An adult male speaker speaks in a low-toned voice, sobbing with strong sadness and speaking slowly while conveying a sorrowful emotion.",
    "text": "아버지가 보고 싶어서 또 울어요?",
    "audio": {
      "clidTts": "audio/sec2_sad_4.wav",
      "gemini": "audio/sec2_sad_4_gemini.wav"
    }
  },
  {
    "id": "sad_0142",
    "speaker": "133_27",
    "emotion": "Sad",
    "instructionKo": "성인 여성 화자가 중간 톤의 음색으로 말하며, 슬픈 감정을 분명하게 담아 낮은 에너지로 숨을 섞어 차분하고 슬프게 말한다.",
    "instructionEn": "An adult female speaker speaks in a medium-toned voice, clearly conveying a sad emotion with low energy and a breathy quality, speaking in a calm and sad manner.",
    "text": "엄마가 고생하는 게 안쓰럽지만, 착한 딸이 되기 싫은 맘이 있구나.",
    "audio": {
      "clidTts": "audio/sec2_sad_5.wav",
      "gemini": "audio/sec2_sad_5_gemini.wav"
    }
  },
  {
    "id": "sad_0172",
    "speaker": "133_63",
    "emotion": "Sad",
    "instructionKo": "성인 남성 화자가 낮은 톤의 음색으로 말하며, 슬픈 감정을 분명하게 담아 낮은 음조로 차분하고 진지하게 말한다.",
    "instructionEn": "An adult male speaker speaks in a low-toned voice, conveying clear sadness while speaking calmly and seriously in a low pitch.",
    "text": "어머니, 그 사람 제게 뭘 많이 숨기고 있어요.",
    "audio": {
      "clidTts": "audio/sec2_sad_6.wav",
      "gemini": "audio/sec2_sad_6_gemini.wav"
    }
  },
  {
    "id": "fearful_0051",
    "speaker": "015_0012_CHY",
    "emotion": "Fearful",
    "instructionKo": "성인 남성 화자가 중간 톤의 음색으로 말하며, 불안한 감정을 강하게 담아 긴장하고 떨리는 목소리로 공포에 질린 듯이 말한다.",
    "instructionEn": "An adult male speaker speaks in a medium-toned voice, expressing strong feelings of anxiety with a tense and trembling voice as if terrified.",
    "text": "무서움에 정신이 아찔하여 고꾸라지고 말았다.",
    "audio": {
      "clidTts": "audio/sec2_fearful_2.wav",
      "gemini": "audio/sec2_fearful_2_gemini.wav"
    }
  },
  {
    "id": "fearful_0057",
    "speaker": "015_0011_CYJ",
    "emotion": "Fearful",
    "instructionKo": "성인 남성 화자가 중간 톤의 음색으로 말하며, 불안한 감정을 강하게 담아 공포와 긴장감이 섞인 목소리로 다급하게 말한다.",
    "instructionEn": "An adult male speaker speaks in a medium-toned voice, speaking urgently with a strong sense of anxiety in a voice mixed with horror and tension.",
    "text": "마시기만 하면 죽을 것이니 얼마나 무섭습니까?",
    "audio": {
      "clidTts": "audio/sec2_fearful_3.wav",
      "gemini": "audio/sec2_fearful_3_gemini.wav"
    }
  },
  {
    "id": "fearful_0168",
    "speaker": "015_0030_PSM",
    "emotion": "Fearful",
    "instructionKo": "성인 여성 화자가 중간 톤의 음색으로 말하며, 불안한 감정을 분명하게 담아 불안하고 긴장된 감정을 담아 조심스럽게 말한다.",
    "instructionEn": "An adult female speaker speaks in a medium-toned voice, clearly conveying feelings of anxiety and tension as she speaks cautiously.",
    "text": "이상한 느낌에 가슴이 두근거리기 시작하였습니다.",
    "audio": {
      "clidTts": "audio/sec2_fearful_4.wav",
      "gemini": "audio/sec2_fearful_4_gemini.wav"
    }
  },
  {
    "id": "fearful_0012",
    "speaker": "015_0049_HSJ",
    "emotion": "Fearful",
    "instructionKo": "성인 여성 화자가 중간 톤의 음색으로 말하며, 불안한 감정을 강하게 담아 두려움에 떨리는 목소리로 긴장감 있게 말한다.",
    "instructionEn": "An adult female speaker speaks in a medium-toned voice, expressing strong feelings of anxiety and speaking with a tense, trembling voice filled with fear.",
    "text": "아기 오리는 무서워서 숨도 쉴 수 없었어요.",
    "audio": {
      "clidTts": "audio/sec2_fearful_5.wav",
      "gemini": "audio/sec2_fearful_5_gemini.wav"
    }
  },
  {
    "id": "fearful_0183",
    "speaker": "015_0004_SDH",
    "emotion": "Fearful",
    "instructionKo": "성인 남성 화자가 중간 톤의 음색으로 말하며, 불안한 감정을 분명하게 담아 긴장된 목소리로 차분하게 말한다.",
    "instructionEn": "An adult male speaker speaks in a medium-toned voice, speaking calmly with a tense voice that clearly conveys a sense of anxiety.",
    "text": "발자취 소리가 크게 나기 시작하였습니다.",
    "audio": {
      "clidTts": "audio/sec2_fearful_6.wav",
      "gemini": "audio/sec2_fearful_6_gemini.wav"
    }
  },
  {
    "id": "surprised_0063",
    "speaker": "skt_F0002",
    "emotion": "Surprised",
    "instructionKo": "20대 여성 화자가 중간 톤의 음색으로 말하며, 놀란 감정을 분명하게 담아 놀란 듯한 목소리로 말끝을 살짝 올리며 질문하듯이 말한다.",
    "instructionEn": "A female speaker in her 20s speaks in a medium-toned voice, clearly conveying a sense of surprise and asking a question by slightly raising the pitch at the end of the sentence.",
    "text": "의상하는 윤정선이하고 연애한다며?",
    "audio": {
      "clidTts": "audio/sec2_surprised_2.wav",
      "gemini": "audio/sec2_surprised_2_gemini.wav"
    }
  },
  {
    "id": "surprised_0034",
    "speaker": "skt_F0001",
    "emotion": "Surprised",
    "instructionKo": "10대 여성 화자가 높은 톤의 음색으로 말하며, 놀란 감정을 분명하게 담아 놀란 감정을 담아 상대방의 안부를 묻는 듯한 말투로 말한다.",
    "instructionEn": "A female speaker in her teens speaks in a high-pitched tone, clearly conveying a sense of surprise as she asks the other person how they are doing.",
    "text": "어머, 아저씨 비랑 친구예요? 지금 비 왔어요? 어디요?",
    "audio": {
      "clidTts": "audio/sec2_surprised_3.wav",
      "gemini": "audio/sec2_surprised_3_gemini.wav"
    }
  },
  {
    "id": "surprised_0095",
    "speaker": "skt_F0004",
    "emotion": "Surprised",
    "instructionKo": "20대 여성 화자가 중간 톤의 음색으로 말하며, 놀란 감정을 분명하게 담아 놀란 감정을 담아 자연스럽게 말한다.",
    "instructionEn": "A female speaker in her 20s speaks in a medium-toned voice, naturally expressing a clear sense of surprise.",
    "text": "어머나, 멋쟁이 할아버지가 오시는 줄 알았는데~",
    "audio": {
      "clidTts": "audio/sec2_surprised_4.wav",
      "gemini": "audio/sec2_surprised_4_gemini.wav"
    }
  },
  {
    "id": "surprised_0081",
    "speaker": "skt_M0001",
    "emotion": "Surprised",
    "instructionKo": "20대 남성 화자가 중간 톤의 음색으로 말하며, 놀란 감정을 분명하게 담아 놀란 감정을 담아 차분하고 진지하게 질문하듯이 말한다.",
    "instructionEn": "A man in his 20s speaks in a medium-toned voice, clearly conveying a sense of surprise while asking a question in a calm and serious manner.",
    "text": "진짜야? 우리나라 동성애 역사가 그렇게 깊단 말이야?",
    "audio": {
      "clidTts": "audio/sec2_surprised_5.wav",
      "gemini": "audio/sec2_surprised_5_gemini.wav"
    }
  },
  {
    "id": "surprised_0102",
    "speaker": "015_0020_HGW",
    "emotion": "Surprised",
    "instructionKo": "성인 여성 화자가 높은 톤의 음색으로 말하며, 놀란 감정을 분명하게 담아 상대방의 행동에 놀란 듯이 다급하고 높은 톤으로 질문한다.",
    "instructionEn": "An adult female speaker speaks in a high-pitched tone, clearly conveying a sense of surprise as she asks a question in an urgent and high-pitched voice, appearing shocked by the other person's actions.",
    "text": "모두 어디를 이렇게 급하게 가십니까?",
    "audio": {
      "clidTts": "audio/sec2_surprised_6.wav",
      "gemini": "audio/sec2_surprised_6_gemini.wav"
    }
  }
];

// Same-text control demo. Each text is synthesized with the same 12 Korean
// instructions: two instruction variants for each of the six emotions.
// No reference speaker embedding is used; speaker traits come from each instruction.
window.CLID_TTS_SAME_TEXT_DEMO = {
  texts: [
    {
      id: "02",
      sourceId: "neutral_i1_0043",
      text: "이 상품은 내구성에 집중을 하다 보니까 디자인이 조금 단조롭습니다."
    },
    {
      id: "03",
      sourceId: "neutral_i1_0042",
      text: "재건축 시장의 기대감과는 달리 부동산 시장 침체는 깊어지고 있습니다."
    }
  ],
  instructions: [
    {
      emotion: "Neutral",
      key: "neutral",
      variant: "01",
      instructionKo: "성인 여성 화자가 중간 톤의 음색으로 말하며, 중립적인 감정을 약하게 유지하고 보통의 속도와 중간 정도의 에너지로 평이하게 말한다."
    },
    {
      emotion: "Neutral",
      key: "neutral",
      variant: "02",
      instructionKo: "고령 남성 화자가 격식 있고 단정한 음색으로 말하며, 차분한 감정을 분명하게 담아 감정적인 강조 없이 느리고 또렷하게 말한다."
    },
    {
      emotion: "Angry",
      key: "angry",
      variant: "01",
      instructionKo: "성인 여성 화자가 높은 톤의 단호한 음색으로 말하며, 화난 감정을 강하게 담아 날카로운 어조로 각 단어를 힘주어 말한다."
    },
    {
      emotion: "Angry",
      key: "angry",
      variant: "02",
      instructionKo: "20대 남성 화자가 낮은 톤의 음색으로 말하며, 억눌린 분노를 드러내듯 통제된 목소리로 짜증과 긴장감을 담아 말한다."
    },
    {
      emotion: "Happy",
      key: "happy",
      variant: "01",
      instructionKo: "20대 여성 화자가 밝고 귀여운 음색으로 말하며, 기쁜 감정을 강하게 담아 환하게 웃는 듯 경쾌하고 생기 있게 말한다."
    },
    {
      emotion: "Happy",
      key: "happy",
      variant: "02",
      instructionKo: "성인 남성 화자가 따뜻한 중간 톤의 음색으로 말하며, 벅찬 기쁨과 설렘을 담아 부드럽고 활기찬 리듬으로 말한다."
    },
    {
      emotion: "Sad",
      key: "sad",
      variant: "01",
      instructionKo: "고령 여성 화자가 낮은 톤의 음색으로 말하며, 슬픈 감정을 강하게 담아 울먹이듯 힘없는 목소리로 아주 천천히 말한다."
    },
    {
      emotion: "Sad",
      key: "sad",
      variant: "02",
      instructionKo: "성인 남성 화자가 낮고 차분한 음색으로 말하며, 깊은 슬픔과 체념을 담아 낮은 에너지로 말끝을 길게 늘이며 말한다."
    },
    {
      emotion: "Fearful",
      key: "fearful",
      variant: "01",
      instructionKo: "성인 여성 화자가 높은 톤의 음색으로 말하며, 두려운 감정을 강하게 담아 숨을 섞은 떨리는 목소리로 조심스럽게 말한다."
    },
    {
      emotion: "Fearful",
      key: "fearful",
      variant: "02",
      instructionKo: "20대 남성 화자가 낮은 톤의 음색으로 말하며, 불안감이 점점 커지는 듯 짧게 숨을 쉬고 다급하면서도 주저하는 어조로 말한다."
    },
    {
      emotion: "Surprised",
      key: "surprised",
      variant: "01",
      instructionKo: "20대 여성 화자가 높은 톤의 음색으로 말하며, 갑작스러운 놀라움을 강하게 담아 말끝을 빠르게 올리고 질문하듯 힘주어 말한다."
    },
    {
      emotion: "Surprised",
      key: "surprised",
      variant: "02",
      instructionKo: "성인 남성 화자가 중간 톤의 음색으로 말하며, 믿기 어렵다는 듯 짧게 멈추어 가며 놀란 감정을 의문 섞인 억양으로 말한다."
    }
  ]
};
