/*
4) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.

Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?
*/

/* R = O metodo que eu utilizaria seria o seguinte, em detalhes que eu conseguiria 
relar na lâmpada, eu ligaria o 1° interruptor e esperaria um tempo pois dessa forma a lâmpada
iria aquecer e desligaria, depois ligaria a 2° e entraria na sala, qual estivesse quente e apagada 
seria correspondente a 1, qual estivesse ligada corresponderia a 2 e por fim qual estivesse apagada
e fria seria a 3.

R= Metodo que eu utilizaria seria o seguinte, em detalhes que eu não conseguiria relar na lâmpada,

*/

/*R= Metodo que eu utilizaria seria o seguinte, em detalhes que eu não conseguiria relar na lâmpada

A B C = interruptores
1 2 3 = lampadas

 Eu ligaria o A e B e entraria na sala, se somente a primeira lampada estivesse apagada eu teria certeza
 que a lâmpada 1 corresponde ao C, em seguida eu voltaria para a sala e apagaria os interruptores A e a B
 e ligaria apenas o B, se a lâmpada 2 estivesse a ligada eu teria certeza que o B corresponde ao 2 e o A ao 3.
 
 Em outro caso, se a lâmpada 1 estivesse acesa ao ligar o A e B eu teria certeza que não é o C, em seguida
 voltaria para a sala e ligaria o B e C apenas, voltando estariam ligadas as lâmpadas 1 e 2 por exemplo, 
 no caso a lâmpada 1 estaria ligada eu teria certeza que o B 
 corresponde a ela e a C corresponderia a 2 e a A corresponderia a 3. 

*/