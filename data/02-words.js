const PAGE_WORDS = [
  // --- 2.1 NUMBERS ---
  { answer: "one", left: "8.1", top: "21.1", width: "55" },
{ answer: "two", left: "15.4", top: "21.1", width: "55" },
{ answer: "three", left: "22.7", top: "21.1", width: "60" },
{ answer: "four", left: "30.0", top: "21.1", width: "55" },
{ answer: "five", left: "37.3", top: "21.1", width: "55" },
{ answer: "six", left: "44.7", top: "21.1", width: "55" },

{ answer: "seven", left: "7.7", top: "32.1", width: "62" },
{ answer: "eight", left: "15.1", top: "32.1", width: "60" },
{ answer: "nine", left: "22.7", top: "32.1", width: "55" },
{ answer: "ten", left: "30.3", top: "32.1", width: "55" },
{ answer: "eleven", left: "37.0", top: "32.1", width: "62" },
{ answer: "twelve", left: "44.3", top: "32.1", width: "65" },

{ answer: "thirteen", left: "7.0", top: "42.1", width: "72" },
{ answer: "fourteen", left: "14.3", top: "42.1", width: "75" },
{ answer: "fifteen", left: "21.9", top: "42.1", width: "68" },
{ answer: "sixteen", left: "29.2", top: "42.1", width: "70" },
{ answer: "seventeen", left: "36.4", top: "42.1", width: "78" },
{ answer: "eighteen", left: "43.8", top: "42.1", width: "75" },

{ answer: "nineteen", left: "6.9", top: "52.1", width: "75" },
{ answer: "twenty", left: "14.7", top: "52.1", width: "68" },
{ answer: "twenty-one", left: "21.2", top: "52.1", width: "85" },
{ answer: "twenty-two", left: "28.6", top: "52.1", width: "88" },
{ answer: "thirty", left: "37.1", top: "52.1", width: "62" },
{ answer: "forty", left: "44.6", top: "52.1", width: "60" },

{ answer: "fifty", left: "7.9", top: "62.1", width: "58" },
{ answer: "sixty", left: "15.2", top: "62.1", width: "60" },
{ answer: "seventy", left: "21.9", top: "62.1", width: "68" },
{ answer: "eighty", left: "29.5", top: "62.1", width: "65" },
{ answer: "ninety", left: "36.9", top: "62.1", width: "65" },
{ answer: "a / one hundred", left: "43.4", top: "60.4", width: "85" },

  // --- 2.2 ORDINAL NUMBERS ---
  { answer: "first", left: "7.9", top: "80.8", width: "38" },
{ answer: "second", left: "13.6", top: "80.8", width: "48" },
{ answer: "third", left: "19.3", top: "80.8", width: "40" },
{ answer: "fourth", left: "25.7", top: "80.8", width: "42" },
{ answer: "fifth", left: "31.5", top: "80.8", width: "38" },
{ answer: "sixth", left: "37.8", top: "80.8", width: "38" },
{ answer: "seventh", left: "44.1", top: "80.8", width: "48" },

{ answer: "eighth", left: "7.5", top: "92.4", width: "42" },
{ answer: "ninth", left: "13.2", top: "92.4", width: "38" },
{ answer: "tenth", left: "19.4", top: "92.4", width: "38" },
{ answer: "eleventh", left: "25.4", top: "92.4", width: "50" },
{ answer: "twelfth", left: "31.8", top: "92.4", width: "48" },
{ answer: "twentieth", left: "37.5", top: "92.4", width: "55" },
{ answer: "twenty-first", left: "44.1", top: "92.4", width: "68" },

  // --- 2.3 LARGE NUMBERS ---
  { answer: "a / one hundred", left: "63.8", top: "11.1", width: "80" },
  { answer: "two hundred and fifty", left: "76.8", top: "10.2", width: "110" },
  { answer: "one thousand two hundred", left: "91.8", top: "10.2", width: "115" },
  { answer: "two hundred", left: "64.0", top: "21.3", width: "85" },
  { answer: "a / one thousand", left: "77.2", top: "21.3", width: "85" },
  { answer: "a / one million", left: "92.0", top: "21.3", width: "85" },
  { answer: "three thousand, eight hundred and forty-six", left: "74.5", top: "36.0", width: "200" },
  { answer: "eighty-two thousand and forty-three", left: "73.5", top: "44.5", width: "175" },
{ answer: "two hundred and thirty-four thousand, four hundred and seven", left: "78.5", top: "52.0", width: "285" },
{ answer: "three million, eighty-nine thousand, three hundred and forty-two", left: "78.5", top: "60.5", width: "295" },

  // --- 2.4 FRACTIONS, DECIMALS, AND PERCENTAGES ---
  { answer: "an eighth", left: "59.0", top: "82.3", width: "55" },
{ answer: "a quarter", left: "67.5", top: "82.3", width: "58" },
{ answer: "a third", left: "76.2", top: "82.3", width: "48" },
{ answer: "a half", left: "84.8", top: "82.3", width: "45" },
{ answer: "three fifths", left: "91.5", top: "82.3", width: "68" },
  { answer: "nought point five", left: "58.9", top: "92.4", width: "85" },
  { answer: "one point seven", left: "67.3", top: "92.4", width: "80" },
  { answer: "three point nine seven", left: "76.0", top: "90.6", width: "75" },
  { answer: "one percent", left: "84.0", top: "92.4", width: "68" },
  { answer: "ninety-nine percent", left: "92.5", top: "92.4", width: "100" }
];