package com.example.appbridge.DTO;

public class ResponseDTO {
    private Long resposta;
    private Long tempo_exec;

    public Long getResultado() {
        return this.resposta;
    }

    public Long getTempoExec() {
        return this.tempo_exec;
    }

    public void setResultado(Long resposta) {
        this.resposta = resposta;
    }

    public void setTempoExec(Long tempo_exec) {
        this.tempo_exec = tempo_exec;
    }
}
