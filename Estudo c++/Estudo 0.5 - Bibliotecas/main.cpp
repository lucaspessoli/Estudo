#include <iostream>
#include <windows.h> //Biblioteca que permite acessar a API do windows, pra encontrar janelas, processos, criar janelas e botoes +
// enumerar arquivos, conseguir informações de teclas pressionadas, se usuario apertou Y vai executar tal coisa +
// sleep pra fazer o programa dar uma pausa e entre coisas do gênero.

int main(){
    
    HWND janela = FindWindowA(NULL,"Steamd"); //HWND é um handler que serve pra localizar uma janela usado pra manipular redimensionamento da janela+
    //enviar mensagens para a janela, alterar posição na tela, enfim... permite alterar todas as propriedades de uma janela +
    //no exemplo acima ele esta atribuindo a janela a variavel "janela" que possui o tipo HWND utilizando a função FindWindow +
    //como primeiro parâmetro é passado NULL, o primeiro parâmetro pede pra que seja informado qual subjanela será acessada +
    //no caso será considerado todas as subjanelas pois não foi especificado uma janela própria +
    // e por fim estará procurando pelo nome da janela, no caso: "steam" +
    //no caso de não ser encontrado a janela listada, irá retornar um valor NULL para a variável "janela".

    if(janela){ //Irá validar se janela tem algum valor atribuido | verificando se encontrou a janela
        MessageBox(janela, "Sua janela foi encontrada", "Janela encontrada!", MB_OK); //Irá disparar uma MessageBox que deriva da API do Windows +
        //irá criar uma MessageBox no programa(janela) mencionado, no caso irá criar uma messageBox na steam.
        //O ultimo parâmetro será o tipo da MessageBox sendo ok,warn,error. Fica ao seu critério.

    }else{
        MessageBox(NULL,"Sua janela nao foi encontrada", "Janela nao encontrada!", MB_ICONERROR); //Irá disparar uma MessageBox que deriva da API do Windows +
        //Como o handle não encontrou a janela especificada, o valor deve ser NULO, pois então a messageBox irá ser disparada sem estar integrada a um app +
        //O ultimo parâmetro é o que passará o icone de erro na messageBox
    }

    return 0;
}