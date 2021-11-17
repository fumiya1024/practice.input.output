const textShow = () => {
  const getText = document.getElementById("text");
  const textValue = getText.value;
  const message = "入力されたあたいは「" + textValue + "」です。";
  document.getElementById("outPutArea").textContent = message;
};