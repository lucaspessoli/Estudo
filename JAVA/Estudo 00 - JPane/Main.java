import javax.swing.*;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> usuarios = new ArrayList<>();

        JOptionPane.showMessageDialog(new JFrame(), "Hello World!"); //Exibe uma caixa com alguma mensagem.

        if (JOptionPane.showConfirmDialog(new JFrame(), "Você deseja") == JOptionPane.YES_OPTION){ //Exibe uma caixa de confirmação com três opções,
                                                                                                            //YES_OPTION, NO_OPTION, CANCEL_OPTION
            System.out.println("Você escolheu a opção: sim!");
        }


        int usersQuantity = Integer.parseInt(JOptionPane.showInputDialog("Insira a quantidade de usuarios para cadastrar")); //Solicita quantidade de usuarios
                                                                                                                             // e converte para inteiro
        for(int i=0;i<usersQuantity;i++){
            usuarios.add(JOptionPane.showInputDialog("Insira o nome do usuario atual! [" + i + "]")); //Adiciona ao indice atual o novo cadastro
        }
        for(String usuario : usuarios){
            System.out.println(usuario);
        }

    }
}