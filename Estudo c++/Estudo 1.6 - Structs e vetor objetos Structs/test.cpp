#include <iostream>

struct Conta{
    int id;
    std::string nome;
};

int main(){

    Conta c[100];

    for(int i=0; i< 10; i++){
        c[i].id = i;
        c[i].nome = "joao";
    }

    std::cout << "id: " << c[5].id << ",nome: " << c[1].nome;
    return 0;
}