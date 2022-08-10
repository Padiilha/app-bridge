package com.example.appbridge;

import com.example.appbridge.DTO.ResponseDTO;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
@RestController
public class AppBridgeApplication {

	public static void main(String[] args) {
		SpringApplication.run(AppBridgeApplication.class, args);
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/bridge")
	public ResponseDTO qtdNumeros(@RequestParam Long k) {
        Long inicio = System.nanoTime();
        Long resultado = this.calcular(k);
        Long tempo_exec = (System.nanoTime() - inicio) / 1000000;
        ResponseDTO resposta = new ResponseDTO();
        resposta.setResultado(resultado);
        resposta.setTempoExec(tempo_exec);
        
		return resposta;
	}

    private Long calcular(Long k) {
        Long n, contador, qtd_divisores_n, qtd_divisores_n1, divisor;

        contador = 0L;

        for (n=2L; n<k; n++) {
            qtd_divisores_n = 0L;
            qtd_divisores_n1 = 0L;

            for (divisor=1L; divisor<=n+2; divisor++) {
                if (n % divisor == 0) qtd_divisores_n += 1;
                if ((n+1) % divisor == 0) qtd_divisores_n1 += 1;
            }

            if (qtd_divisores_n == qtd_divisores_n1) contador += 1;
        }

        return contador;
    }
}
