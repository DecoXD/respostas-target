// 1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.


// criei um limitador só por segurança mesmo.
function belongsToFibonacciSequence(num,limitReps = 15) {
    if(num <= 2 && num >=0) return `o número ${num} pertence a sequencia fibonacci`
    
    let a = 0
    let b = 1
    let c = a + b
    let i = 1
    while(i< limitReps){
        
        //caso eu tenha encontrado o numero ele pertence
        if(c === num) return `o número ${num} pertence a sequencia fibonacci`
        //senão, se c for maior que o número, significa que ja passei e nao o encontrei na sequência
        else if( c > num)  return `o número ${num} não pertence a sequencia fibonacci`
        c = a + b
        a = b
        b = c

        i++
    }
}


// 2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

function findLetterReps(text,letter = "á"){
    if(text.length ==0) return 0
    //retirar todos as letras
    let txt = text.toLowerCase().split(letter).join('')
    // retornar a diferença
    return text.length - txt.length
    
}

// 3) Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);
//Ao final do processamento, qual será o valor da variável SOMA?

    // function test(){
    //     let idx =12
    //     let soma = 0
    //     let k = 1
    //     while(k < idx) {
    //         k++
    //         soma+=k
    //     }
    //     console.log(soma)
    // }
    //test() // 77
//Resposta = 77

// 4) Descubra a lógica e complete o próximo elemento:
    // a) 1, 3, 5, 7, ___
    // b) 2, 4, 8, 16, 32, 64, ____
    // c) 0, 1, 4, 9, 16, 25, 36, ____
    // d) 4, 16, 36, 64, ____
    // e) 1, 1, 2, 3, 5, 8, ____
    // f) 2,10, 12, 16, 17, 18, 19, ____
    //RESPOSTAS
        // a) 1, 3, 5, 7, 9 SEGUENCIA DE 2 SOMA
        // b) 2, 4, 8, 16, 32, 64, 128 SEQUENCIA DE 2 MULTIPLICAÇÃO
        // c) 0, 1, 4, 9, 16, 25, 36, 49 ESTÁ EM IMPAR E IMPAR
        // d) 4, 16, 36, 64, 10 DOIS AO QUADRADO, QUATRO AO QUADRADO... NUMEROS PARES AO QUADRADO
        // e) 1, 1, 2, 3, 5, 8, 13 FIBONACCI NÃO?!
        // f) 2,10, 12, 16, 17, 18, 19, 200 TUDO DO DE DI DE...

// 5) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?  
    
    // PARA COMEÇAR EU COLOCARIA LETRAS DOS LADOS DOS 3 INTERRUPTORES A,B E C
    // EM SEGUIDA DESLIGARIA A 'A' E A 'B'
    // APÓS ISSO IRIA NA SALA 1 , CASO ELA ESTIVESSE LIGADA ELA EQUIVALE AO INTERRUPTOR C, CASO CONTRÁRIO ELA OU É 'A' OU 'B'
       
        //SE ELA ESTIVESSE LIGADA
            // SE ELA ESTIVESSE LIGADA ELA EQUIVALE AO INTERRUPTOR 'C', ENTÃO EU DESLIGARIA O 'B' E O 'C' E IRIA NA SALA 2
                //CASO A SALA 2 ESTIVESSE LIGADA, SABERIA QUE ELA É EQUIVALENTE AO INTERRUPTOR 'A' LOGO A SALA 3 SERIA IGUAL AO 'B'
                //CASO CONTÁRIO, A SALA 2 ESTIVESSE DESLIGADA EU SABERIA QUE ELA EQUIVALE AO 'B' LOCO A SALA 3 EQUIVALE AO 'A' ENTÃO EU TERIA MINHA RESPOSTA SENDO SALA 1 = C SALA 2 = B E SALA 3  = A
        
        //CASO A SALA 1 NAO ESTIVESSE LIGADA
            
            // SE ELA NAO ESTÁ LIGADA ENTAO ELA É OU É 'A' OU 'B'
            // EU RETORNARIA E DESLIGARIA O 'B' DEIXANDO APENAS O 'A' E O 'C' LIGADOS
            // ENTÃO IRIA A SALA 2 
                // CASO A SALA 2 ESTEJA LIGADA EU JA SABERIA QUE ELA NAO É B
                    //ENTÃO SE ELA NÃO É B 


