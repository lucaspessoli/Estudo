#include <iostream>

class MinhaClasse {
    public:
        int id;
        std::string nome;
};

class MinhaClasseConstrutora{
    public:
        std::string nome;
        int id;
        MinhaClasseConstrutora(std::string nome, int id){
            this->nome = nome;
            this->id = id;
            
        }
};

int main(){

    MinhaClasse mc;
    mc.id = 1;
    mc.nome = "Lucas";

    std::cout << mc.id  << " " << mc.nome << std::endl;

    MinhaClasseConstrutora mcc("Marcos", 2);
    std::cout << mcc.id << " " << mcc.nome;


    return 0;
}