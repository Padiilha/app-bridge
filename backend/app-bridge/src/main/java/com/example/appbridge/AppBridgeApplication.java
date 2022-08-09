package com.example.appbridge;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
@RestController
public class AppBridgeApplication {

	public static void main(String[] args) {
		SpringApplication.run(AppBridgeApplication.class, args);
	}

	@GetMapping("/bridge")
	public int qtdNumeros() {
		int k, n, contador, qtd_divisores_n, qtd_divisores_n1, divisor;

        k = 5;
        contador = 0;

        for (n=2; n<k; n++) {
            qtd_divisores_n = 0;
            qtd_divisores_n1 = 0;

            for (divisor=1; divisor<=n+2; divisor++) {
                if (n % divisor == 0) qtd_divisores_n += 1;
                if ((n+1) % divisor == 0) qtd_divisores_n1 += 1;
            }

            if (qtd_divisores_n == qtd_divisores_n1) contador += 1;
        }

        return contador;
	}

}