window.CARDS = [
 {
  "section": "names",
  "set": "kosp2e",
  "id": "kosp2e_stylekqc_935_3",
  "title": "Hoya (a house plant)",
  "note": "Only MEARI keeps the plant's name; the others replace it or drop it.",
  "ko": "호야 식물이 말라있는데 물을 좀 주시겠어요",
  "ref": "The Hoya plant is dry. Can you give it some water?",
  "source": "audio/k_stylekqc_935_3/source.mp3",
  "rows": [
   {
    "sys": "meari",
    "asr": "The Hoya plant is dried up. Could you please give it some water?",
    "comet": 0.902,
    "good": [
     "Hoya"
    ],
    "bad": [],
    "audio": "audio/k_stylekqc_935_3/meari.mp3"
   },
   {
    "sys": "sft",
    "asr": "The Koya plants are dried. Could you please give them some water?",
    "comet": 0.874,
    "good": [],
    "bad": [
     "Koya"
    ],
    "audio": "audio/k_stylekqc_935_3/sft.mp3"
   },
   {
    "sys": "gpt",
    "asr": "This pothos is dry. Could you get it some water?",
    "comet": 0.713,
    "good": [],
    "bad": [
     "pothos"
    ],
    "audio": "audio/k_stylekqc_935_3/gpt.mp3"
   },
   {
    "sys": "gemini",
    "asr": "The plant is dry, could you please water it?",
    "comet": 0.846,
    "good": [],
    "bad": [
     "The plant"
    ],
    "audio": "audio/k_stylekqc_935_3/gemini.mp3"
   }
  ]
 },
 {
  "section": "names",
  "set": "fleurs",
  "id": "fleurs_01876",
  "title": "Northern Marianas",
  "note": "ST SFT turns the place into “Korean Marijuana”; Gemini into “North Berrien”.",
  "ko": "북 마리아나 재난관리청은 국가적으로 어떤 피해도 보고되지 않았다고 밝혔다",
  "ref": "the northern marianas emergency management office said that there were no damages reported in the nation",
  "source": "audio/f_01876/source.mp3",
  "rows": [
   {
    "sys": "meari",
    "asr": "The Mariana Region Disaster Management Agency stated that no national damage had been reported.",
    "comet": 0.843,
    "good": [
     "Mariana"
    ],
    "bad": [],
    "audio": "audio/f_01876/meari.mp3"
   },
   {
    "sys": "sft",
    "asr": "The Korean Marijuana Disaster Management Agency stated that no national damage had been reported.",
    "comet": 0.75,
    "good": [],
    "bad": [
     "Korean Marijuana"
    ],
    "audio": "audio/f_01876/sft.mp3"
   },
   {
    "sys": "gpt",
    "asr": "They say the Mariana Disaster Management Agency has confirmed that no damage was reported Thank you. Thank you.",
    "comet": 0.74,
    "good": [
     "Mariana"
    ],
    "bad": [
     "Thank you. Thank you."
    ],
    "audio": "audio/f_01876/gpt.mp3"
   },
   {
    "sys": "gemini",
    "asr": "The North Berrien Disaster Management Agency has not reported any national damage.",
    "comet": 0.795,
    "good": [],
    "bad": [
     "North Berrien"
    ],
    "audio": "audio/f_01876/gemini.mp3"
   }
  ]
 },
 {
  "section": "names",
  "set": "fleurs",
  "id": "fleurs_01739",
  "title": "Mecca",
  "note": "Gemini and ST SFT mis-spell the city.",
  "ko": "메카 북쪽의 산 중 한 곳의 꼭대기에 자리 잡고 있는 이 동굴은 세계의 나머지 지역으로부터 완전히 고립되어 있다",
  "ref": "resting on the top of one of the mountains north of mecca the cave is completely isolated from the rest of the world",
  "source": "audio/f_01739/source.mp3",
  "rows": [
   {
    "sys": "meari",
    "asr": "At the summit of a mountain north of Mecca, this cave stands completely isolated from the rest of the world.",
    "comet": 0.907,
    "good": [
     "Mecca"
    ],
    "bad": [],
    "audio": "audio/f_01739/meari.mp3"
   },
   {
    "sys": "sft",
    "asr": "At the summit of a wooded area in the middle of the Mokkas, this cave is completely isolated from the rest of the world.",
    "comet": 0.847,
    "good": [],
    "bad": [
     "Mokkas"
    ],
    "audio": "audio/f_01739/sft.mp3"
   },
   {
    "sys": "gpt",
    "asr": "It was in a mountain valley in the north of Mecca nestled at the very top that a cave stood completely isolated from the rest of the world.",
    "comet": 0.842,
    "good": [
     "Mecca"
    ],
    "bad": [],
    "audio": "audio/f_01739/gpt.mp3"
   },
   {
    "sys": "gemini",
    "asr": "In the mountains north of Begge, there is a place located at the top of the mountain, and this cave is completely isolated from the rest of the world.",
    "comet": 0.832,
    "good": [],
    "bad": [
     "Begge"
    ],
    "audio": "audio/f_01739/gemini.mp3"
   }
  ]
 },
 {
  "section": "rl",
  "set": "fleurs",
  "id": "fleurs_01848",
  "title": "Gaziantep, Turkey",
  "note": "Before RL the model invents a name; after RL it says the city.",
  "ko": "어제 아침 터키 가지안테프에 있는 경찰서에서 폭발한 차량 폭탄으로 인해 경찰관 2명이 죽고 20명 이상의 다른 사람들이 다쳤습니다",
  "ref": "a car bomb detonated at police headquarters in gaziantep turkey yesterday morning killed two police officers and injured more than twenty other people",
  "source": "audio/f_01848/source.mp3",
  "rows": [
   {
    "sys": "meari",
    "asr": "Yesterday morning, two police officers were killed and more than 20 others were injured in an explosive vehicle bomb at a police station in Gaziantep, Turkey.",
    "comet": 0.864,
    "good": [
     "Gaziantep, Turkey"
    ],
    "bad": [],
    "audio": "audio/f_01848/meari.mp3"
   },
   {
    "sys": "sft",
    "asr": "Two policemen were killed and other people were injured, as many as many others, after a vehicle bomb exploded at the police station in Kizhiyentet Taro in Turkey yesterday morning.",
    "comet": 0.766,
    "good": [],
    "bad": [
     "Kizhiyentet Taro"
    ],
    "audio": "audio/f_01848/sft.mp3"
   },
   {
    "sys": "gpt",
    "asr": "Hi! Yesterday morning, a Gaziantep in Turkey, a vehicle bomb exploded at a police station, killing two police officers and injuring more than 20 others.",
    "comet": 0.825,
    "good": [
     "Gaziantep"
    ],
    "bad": [
     "Hi!"
    ],
    "audio": "audio/f_01848/gpt.mp3"
   },
   {
    "sys": "gemini",
    "asr": "Yesterday morning in Gaziantep, Turkey, a car bomb exploded at a police station, killing two police officers and injuring more than 20 other people.",
    "comet": 0.876,
    "good": [
     "Gaziantep, Turkey"
    ],
    "bad": [],
    "audio": "audio/f_01848/gemini.mp3"
   }
  ]
 },
 {
  "section": "rl",
  "set": "kosp2e",
  "id": "kosp2e_covid_author173_26_female_5_2",
  "title": "KakaoTalk, Instagram",
  "note": "ST SFT drops both app names and half of the sentence.",
  "ko": "그만큼 친구를 만나기도 어려워져서 카카오톡이나 인스타그램으로 서로의 소식을 확인하고 연락을 주고받고 있는데 이렇게 자주 만나지 못하는데도 연락을 이어나가 주는 친구들이 참 고맙다",
  "ref": "It was hard to even hang out with friends, so we contacted each other via KakaoTalk or Instagram to check on each other. I was thankful for my buddies who kept in touch, even though we didn’t meet in person for so long.",
  "source": "audio/k_covid_author173_26_female_5_2/source.mp3",
  "rows": [
   {
    "sys": "meari",
    "asr": "As it became that difficult to meet friends, we check each other's news on KakaoTalk or Instagram and keep in touch. But even though we can't see each other that often, I'm really grateful that my friends still stay in touch with me.",
    "comet": 0.857,
    "good": [
     "KakaoTalk",
     "Instagram"
    ],
    "bad": [],
    "audio": "audio/k_covid_author173_26_female_5_2/meari.mp3"
   },
   {
    "sys": "sft",
    "asr": "I'm really grateful to the friends I keep in touch with. Even though we don't get to see each other that often, since meeting friends has become so difficult that we can no longer even.",
    "comet": 0.769,
    "good": [],
    "bad": [],
    "audio": "audio/k_covid_author173_26_female_5_2/sft.mp3"
   },
   {
    "sys": "gpt",
    "asr": "Since meeting friends got that hard, you started checking up on each other through Kakao Talk or Instagram and keeping in touch, but not being able to meet this often and having friends to still keep in touch. I'm really grateful.",
    "comet": 0.794,
    "good": [
     "Kakao Talk",
     "Instagram"
    ],
    "bad": [],
    "audio": "audio/k_covid_author173_26_female_5_2/gpt.mp3"
   },
   {
    "sys": "gemini",
    "asr": "It's that hard to meet friends now, so I use KakaoTalk or Instagram to check on each other's news and keep in touch. But it's not like we meet up often, but we keep in touch, and I'm really thankful for that.",
    "comet": 0.844,
    "good": [
     "KakaoTalk",
     "Instagram"
    ],
    "bad": [],
    "audio": "audio/k_covid_author173_26_female_5_2/gemini.mp3"
   }
  ]
 },
 {
  "section": "rl",
  "set": "kosp2e",
  "id": "kosp2e_stylekqc_1126_6",
  "title": "Instagram DM",
  "note": "ST SFT drops “Instagram”.",
  "ko": "인스타에서 디엠 어떻게 보냄?",
  "ref": "On Instagram, how can I send a DM?",
  "source": "audio/k_stylekqc_1126_6/source.mp3",
  "rows": [
   {
    "sys": "meari",
    "asr": "How did you send the DM from Instagram?",
    "comet": 0.861,
    "good": [
     "DM from Instagram"
    ],
    "bad": [],
    "audio": "audio/k_stylekqc_1126_6/meari.mp3"
   },
   {
    "sys": "sft",
    "asr": "How did you send that DM?",
    "comet": 0.779,
    "good": [
     "DM"
    ],
    "bad": [],
    "audio": "audio/k_stylekqc_1126_6/sft.mp3"
   },
   {
    "sys": "gpt",
    "asr": "How do you send a DM on Instagram?",
    "comet": 0.925,
    "good": [
     "DM on Instagram"
    ],
    "bad": [],
    "audio": "audio/k_stylekqc_1126_6/gpt.mp3"
   },
   {
    "sys": "gemini",
    "asr": "How do I send a DM on Instagram?",
    "comet": 0.948,
    "good": [
     "DM on Instagram"
    ],
    "bad": [],
    "audio": "audio/k_stylekqc_1126_6/gemini.mp3"
   }
  ]
 },
 {
  "section": "quality",
  "set": "fleurs",
  "id": "fleurs_01750",
  "title": "Feathers, not guitars",
  "note": "Both APIs translate 깃털 (feathers) as “guitars”.",
  "ko": "그러한 발견은 또한 조류에 있어서 깃털의 진화에 대한 통찰을 제공한다",
  "ref": "the find also grants insight into the evolution of feathers in birds",
  "source": "audio/f_01750/source.mp3",
  "rows": [
   {
    "sys": "meari",
    "asr": "Such discoveries also provide insight into the evolution of feathers in birds.",
    "comet": 0.923,
    "good": [
     "feathers in birds"
    ],
    "bad": [],
    "audio": "audio/f_01750/meari.mp3"
   },
   {
    "sys": "sft",
    "asr": "Such realizations also provide insight into the evolution of feathers and birds.",
    "comet": 0.872,
    "good": [
     "feathers"
    ],
    "bad": [],
    "audio": "audio/f_01750/sft.mp3"
   },
   {
    "sys": "gpt",
    "asr": "That discovery also exists in birds and gives clues about how guitars evolved.",
    "comet": 0.69,
    "good": [],
    "bad": [
     "guitars"
    ],
    "audio": "audio/f_01750/gpt.mp3"
   },
   {
    "sys": "gemini",
    "asr": "Such a discovery is also important for understanding the evolution of guitars.",
    "comet": 0.714,
    "good": [],
    "bad": [
     "guitars"
    ],
    "audio": "audio/f_01750/gemini.mp3"
   }
  ]
 },
 {
  "section": "quality",
  "set": "fleurs",
  "id": "fleurs_01791",
  "title": "Graffiti warning",
  "note": "The GPT API invents an underpass.",
  "ko": "구조물을 긁거나 낙서해서 현장을 더럽히지 마시오",
  "ref": "do not deface the site by marking or scratching graffiti into structures",
  "source": "audio/f_01791/source.mp3",
  "rows": [
   {
    "sys": "meari",
    "asr": "Do not defile the site by scratching or scribbling on the structures.",
    "comet": 0.864,
    "good": [
     "scratching or scribbling"
    ],
    "bad": [],
    "audio": "audio/f_01791/meari.mp3"
   },
   {
    "sys": "sft",
    "asr": "not make a mess of the event by scraping or graffitiing the structures.",
    "comet": 0.823,
    "good": [],
    "bad": [],
    "audio": "audio/f_01791/sft.mp3"
   },
   {
    "sys": "gpt",
    "asr": "underpass or even in work sites don't litter or deface them",
    "comet": 0.617,
    "good": [],
    "bad": [
     "underpass or even in work sites"
    ],
    "audio": "audio/f_01791/gpt.mp3"
   },
   {
    "sys": "gemini",
    "asr": "The scratching or vandalizing structures and dirtying the site.",
    "comet": 0.718,
    "good": [],
    "bad": [],
    "audio": "audio/f_01791/gemini.mp3"
   }
  ]
 },
 {
  "section": "quality",
  "set": "fleurs",
  "id": "fleurs_01827",
  "title": "Crust thickness",
  "note": "Thickness becomes time (GPT) or distance (Gemini).",
  "ko": "지각은 가까운 쪽이 약 70km 먼 쪽이 약 100km 두께입니다",
  "ref": "the crust is about 70 km thick on the near side and 100 km thick on the far side",
  "source": "audio/f_01827/source.mp3",
  "rows": [
   {
    "sys": "meari",
    "asr": "The crust is approximately 70 kilometers deep, and the distant side is approximately 100 kilometers thick.",
    "comet": 0.841,
    "good": [
     "70 kilometers",
     "100 kilometers thick"
    ],
    "bad": [],
    "audio": "audio/f_01827/meari.mp3"
   },
   {
    "sys": "sft",
    "asr": "It is about 70 kilometers to the nearby side and 100 kilometers to the distant side in visual range.",
    "comet": 0.571,
    "good": [],
    "bad": [],
    "audio": "audio/f_01827/sft.mp3"
   },
   {
    "sys": "gpt",
    "asr": "The time is on the near side. The far side is about 100 kilometers thick.",
    "comet": 0.616,
    "good": [],
    "bad": [
     "The time is on the near side."
    ],
    "audio": "audio/f_01827/gpt.mp3"
   },
   {
    "sys": "gemini",
    "asr": "The closest one is about 70 kilometers away and the farther one is about 100 kilometers.",
    "comet": 0.611,
    "good": [],
    "bad": [
     "70 kilometers away"
    ],
    "audio": "audio/f_01827/gemini.mp3"
   }
  ]
 },
 {
  "section": "quality",
  "set": "fleurs",
  "id": "fleurs_01764",
  "title": "St. Peter's Square",
  "note": "MEARI keeps the meaning: most people could not get in.",
  "ko": "참석한 인원수가 너무 많은 나머지 대부분이 성 베드로 광장에서 치러진 장례식에 입장할 수 없었습니다",
  "ref": "the number of people present was so large that it was not possible for everybody to gain access to the funeral in st peter's square",
  "source": "audio/f_01764/source.mp3",
  "rows": [
   {
    "sys": "meari",
    "asr": "Due to the large number of attendees, most were unable to enter the funeral, which was held in St. Peter's Square.",
    "comet": 0.832,
    "good": [
     "St. Peter's Square"
    ],
    "bad": [],
    "audio": "audio/f_01764/meari.mp3"
   },
   {
    "sys": "sft",
    "asr": "Unable to enter the funeral ceremony held in St. Peter's Square because too many attendees made up most of them.",
    "comet": 0.681,
    "good": [],
    "bad": [],
    "audio": "audio/f_01764/sft.mp3"
   },
   {
    "sys": "gpt",
    "asr": "So, to attend, we post it so widely that too many people want to come. So most couldn't enter the funeral held at St. Peter's Square.",
    "comet": 0.671,
    "good": [],
    "bad": [
     "we post it so widely"
    ],
    "audio": "audio/f_01764/gpt.mp3"
   },
   {
    "sys": "gemini",
    "asr": "The number of attendees was so large that most of them were held in St. Peter's Square for the funeral.",
    "comet": 0.772,
    "good": [],
    "bad": [
     "most of them were held"
    ],
    "audio": "audio/f_01764/gemini.mp3"
   }
  ]
 }
];
