package com.example.exercicio3;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import java.io.IOException;

import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public class MainActivity extends AppCompatActivity {

    private EditText edIdPesquisa;
    private TextView tvResultado;
    private Button btExibir;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        edIdPesquisa = findViewById(R.id.edIdPesquisa);
        btExibir = findViewById(R.id.btExibir);
        tvResultado = findViewById(R.id.tvResultado);

        String url = "https://jsonplaceholder.typicode.com/posts";

        btExibir.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                int id = Integer.parseInt(edIdPesquisa.getText().toString());
                requerirHTTP(url + "/" + String.valueOf(id));
            }
        });
    }

    public void requerirHTTP(String url){
        OkHttpClient client = new OkHttpClient();
        Request request = new Request.Builder()
                .url(url)
                .build();
        client.newCall(request).enqueue(new Callback() {
            @Override
            public void onFailure(Call call, IOException e){
                e.printStackTrace();
            }

            @Override
            public void onResponse(Call call, Response response) throws IOException {
                if(response.isSuccessful()) {
                    String myResponse = response.body().string();

                    MainActivity.this.runOnUiThread(new Runnable(){
                        @Override
                        public void run() {
                            tvResultado.setText("Sucesso: " + myResponse);
                        }
                    });
                }
            }
        });
    }
}