const textArea = document.querySelector(".text-area");
const message = document.querySelector(".text-area-right");
const image = document.getElementById("img");
const warn = document.getElementById("warn");
const copyButton = document.getElementById("btn");

const code = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];

function clean() {
  warn.style.display = "none";
  image.style.display = "none";
  copyButton.style.display = "block";
  message.style.display = "block";
}

const btnEncrypt = () => {
  const text = textArea.value.trim();

  if (text === "") {
    alert("Por favor, digite algo para criptografar.");
    return;
  }

  clean();
  const textEncrypted = encrypt(text);
  message.value = textEncrypted;
  textArea.value = "";
};

const encrypt = (text) => {
  for (let i = 0; i < code.length; i++) {
    if (text.includes(code[i][0])) {
      text = text.replaceAll(code[i][0], code[i][1]);
    }
  }

  return text;
};

const btnDecrypt = () => {
  const text = textArea.value.trim();

  if (text === "") {
    alert("Por favor, digite algo para descriptografar.");
    return;
  }

  clean();
  const textDecrypted = decrypt(text);
  message.value = textDecrypted;
  textArea.value = "";
};

const decrypt = (text) => {
  for (let i = 0; i < code.length; i++) {
    if (text.includes(code[i][1])) {
      text = text.replaceAll(code[i][1], code[i][0]);
    }
  }

  return text;
};

const btnCopy = async () => {
  const textToCopy = message.value;
  if (textToCopy) {
    try {
      await navigator.clipboard.writeText(textToCopy);
      copyButton.style.display = "none";

      image.style.display = "block";

      warn.style.display = "block";

      message.value = "";
    } catch (error) {
      console.error("Erro ao copiar o texto: ", error);
    }
  } else {
    alert("Nenhum texto para copiar!");
  }
};
