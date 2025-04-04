function jogar() {
  rodada = 1;
  while (rodada <= 3) {
    escolhaJogador = prompt(
      "Nível " + rodada + ", escolha um vidro (1, 2 ou 3)?"
    );
    pisoQuebrado = Math.floor(Math.random() * 3) + 1;

    if (escolhaJogador == "null" || escolhaJogador > 3) {
      alert("Voce digitou um valor invalido");
      break;
    }

    if (escolhaJogador == pisoQuebrado) {
      alert("O Piso quebrou, você perdeu");
      break;
    } else {
      alert(
        "Ufa! Você passou! O Piso quebrado estava na ponte: " + pisoQuebrado
      );
    }
    rodada += 1;
  }

  if (rodada == 4) {
    alert("Voce venceu! Parabens!");
  }
}

jogar();
