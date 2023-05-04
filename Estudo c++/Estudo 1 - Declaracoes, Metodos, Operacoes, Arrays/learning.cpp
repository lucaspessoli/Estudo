#include <iostream>
#include <vector>

int main(){

    std::string nome = "Lucas"; // Para criar uma string se usa std::string 
    int idade = 15;
    double altura = 1.86;
    char genero = 'M';
    //pode-se usar vários métodos pra criar listas, um deles é utilizando a classe vector, ele é util pois, caso você tente acessar um +
    //indice que nao existe na lista ele retornará um erro.
    std::vector<int> lista = {1,4,3};
    //Lista estatica do c++
    int listaEstatica[] = {1,2,3,4};
    //a lista acima é a padrão, porém ela é estática, não é possivel alterar o valor dela durante a execução do código, também não apresentando +
    //erros ao tentar acessar um indice que não está alocado na lista


    //Uso das variaveis:
    std::cout << "Bem-vindo: " << nome << ", suas informações: " << "\nIdade: " << idade << "\nAltura: " << altura << "\nGênero: "<< genero << "\n";
    //uso da lista estática
    std::cout << "Exibindo valor do indice 1 em listaEstatica: " << listaEstatica[1] << "\n";
    //Tentando acessar um indice nao existente na lista estática:
    std::cout << "Acessando indice inexistente da listaEstatica: " << listaEstatica[22] << "\n";
    //Uso da lista derivada da classe vector
    std::cout << "Exibindo valor do indice 1 em lista: " << lista[1] << "\n";


    //Operações matemáticas com a lista

    //Percorrendo lista
    for (int i = 0; i< lista.size();i++){
        if(lista[i] %2==0){
            std::cout << "o item do indice: " << i << ": com o valor de: " << lista[i] <<" é par!" << "\n";
        }else{
            std::cout << "o item do indice: " << i << ": com o valor de: " << lista[i]  << " não é par!" << "\n";
        }
    }

    //Métodos manipulação de lista
    lista.push_back(2); //Adicionado um novo valor a lista.
    lista.pop_back(); //Remove o ultimo elemento da lista 
    lista.insert(lista.begin() + 1, 10) //Insere valores em uma lista, inserindo 10 na posição 1
    lista.erase(lista.begin() + 1); //Remove o segundo elemento da lista, pois o valor "1" será o indice
    lista.clear(); //Remove todos os itens da lista

    //Métodos retornar valor
    lista.begin(); //Retorna o primeiro elemento da lista
    lista.back(); //Retorna o ultimo elemento da lista
    lista.size(); //Retorna o tamanho da lista

    //Métodos retornar bool
    lista.empty(); //Checa se lista está vazia

    return 0;
}
