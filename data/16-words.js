const PAGE_WORDS = [
  // --- PAGE 70: 16.1 ACCESSORIES ---
  // Hàng 1
  { answer: "scarf", left: "6.4", top: "23.1", width: "32" },
  { answer: "hat", left: "14.6", top: "23.1", width: "28" },
  { answer: "cap", left: "22.7", top: "23.1", width: "28" },
  { answer: "gloves", left: "30.2", top: "23.1", width: "38" },
  { answer: "belt", left: "38.7", top: "23.1", width: "28" },

  // Hàng 2
  { answer: "purse (US) / handbag (UK)", left: "3.9", top: "39.4", width: "85" },
  { answer: "briefcase", left: "13.6", top: "39.4", width: "50" },
  { answer: "backpack / rucksack (UK)", left: "19.7", top: "39.4", width: "88" },
  { answer: "jewelry (US) / jewellery (UK)", left: "27.5", top: "39.4", width: "92" },
  { answer: "necklace", left: "37.7", top: "39.4", width: "48" },

  // Hàng 3
  { answer: "bracelet", left: "5.8", top: "55.7", width: "45" },
  { answer: "earrings", left: "13.8", top: "55.7", width: "45" },
  { answer: "ring", left: "22.6", top: "55.7", width: "30" },
  { answer: "brooch", left: "30.0", top: "55.7", width: "42" },
  { answer: "pin (US) / badge (UK)", left: "36.4", top: "55.7", width: "75" },

  // Hàng 4
  { answer: "cufflinks", left: "5.7", top: "71.8", width: "48" },
  { answer: "watch", left: "14.3", top: "71.8", width: "35" },
  { answer: "handkerchief", left: "20.8", top: "71.8", width: "65" },
  { answer: "bow tie", left: "29.8", top: "71.8", width: "45" },
  { answer: "umbrella", left: "37.7", top: "71.8", width: "48" },

  // Hàng 5
  { answer: "hair band (US) / Alice band (UK)", left: "3.4", top: "88.1", width: "95" },
  { answer: "glasses", left: "14.0", top: "88.1", width: "42" },
  { answer: "sunglasses", left: "21.2", top: "88.1", width: "58" },
  { answer: "wallet", left: "30.2", top: "88.1", width: "38" },
  { answer: "wallet (US) / purse (UK)", left: "36.2", top: "88.1", width: "78" },

  // --- PAGE 71: 16.2 SHOES ---
  { answer: "high heels", left: "54.4", top: "16.1", width: "55" },
  { answer: "sandals", left: "63.9", top: "16.1", width: "42" },
  { answer: "zipper (US) / zip (UK)", left: "71.3", top: "5.3", width: "75" },
  { answer: "shoes", left: "84.6", top: "16.1", width: "38" },
  { answer: "buckle", left: "89.0", top: "8.8", width: "38" },
  { answer: "laces", left: "64.8", top: "24.5", width: "32" },
  { answer: "sneakers (US) / trainers (UK)", left: "62.3", top: "31.9", width: "85" },
  { answer: "boots", left: "73.1", top: "31.9", width: "38" },
  { answer: "slippers", left: "80.8", top: "31.9", width: "45" },
  { answer: "flip-flops", left: "89.8", top: "31.9", width: "50" },

  // --- PAGE 71: 16.3 MAKE-UP AND BEAUTY PRODUCTS ---
  // Hàng 1
  { answer: "lipstick", left: "55.4", top: "56.0", width: "42" },
  { answer: "foundation", left: "63.1", top: "56.0", width: "58" },
  { answer: "mascara", left: "72.2", top: "56.0", width: "45" },
  { answer: "blush (US) / blusher (UK)", left: "79.2", top: "56.0", width: "78" },
  { answer: "eyeliner", left: "89.4", top: "56.0", width: "45" },

  // Hàng 2
  { answer: "eyeshadow", left: "54.6", top: "71.8", width: "58" },
  { answer: "hair dye", left: "63.7", top: "71.8", width: "45" },
  { answer: "hair gel", left: "72.2", top: "71.8", width: "45" },
  { answer: "hair spray", left: "80.5", top: "71.8", width: "52" },
  { answer: "nail polish", left: "88.9", top: "71.8", width: "55" },

  // Hàng 3
  { answer: "perfume", left: "55.2", top: "88.1", width: "45" },
  { answer: "aftershave", left: "63.2", top: "88.1", width: "55" },
  { answer: "moisturizer", left: "71.4", top: "88.1", width: "62" },
  { answer: "hairbrush", left: "80.5", top: "88.1", width: "52" },
  { answer: "comb", left: "89.9", top: "88.1", width: "35" }
];