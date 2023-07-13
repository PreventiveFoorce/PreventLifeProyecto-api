package com.upao.preventlife.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

import java.util.Date;

@Entity
@Table(name = "donaciones")
public class Donacion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idDonacion;

    @ManyToOne
    @JoinColumn(name = "id_usuario", nullable = false, foreignKey = @ForeignKey(name = "FK_id_usuario"))
    private Usuario usuario;

    @NotNull
    @Column(name = "monto_donar",nullable = false)
    private float montoDonar;

    @JsonFormat(pattern = "dd/MM/yyyy")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fechaDonacion;

    @PrePersist
    public void onCreate() {
        fechaDonacion = new Date();
    }

    @NotNull
    @Column(name = "metodo_pago", nullable = false)
    private String metodoPago;

    // Nuevo atributo organizacion
    @ManyToOne
    @JoinColumn(name = "id_organizacion", nullable = false, foreignKey = @ForeignKey(name = "FK_id_organizacion"))
    private Organizacion organizacion;

    public Integer getIdDonacion() {
        return idDonacion;
    }

    public void setIdDonacion(Integer idDonacion) {
        this.idDonacion = idDonacion;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario donante) {
        this.usuario = donante;
    }

    public float getMontoDonar() {
        return montoDonar;
    }

    public void setMontoDonar(float montoDonar) {
        this.montoDonar = montoDonar;
    }

    public Date getFechaDonacion() {
        return fechaDonacion;
    }

    public void setFechaDonacion(Date fechaDonacion) {
        this.fechaDonacion = fechaDonacion;
    }

    public String getMetodoPago() {
        return metodoPago;
    }

    public void setMetodoPago(String metodoPago) {
        this.metodoPago = metodoPago;
    }

    // Nuevo método getter para el atributo organizacion
    public Organizacion getOrganizacion() {
        return organizacion;
    }

    // Nuevo método setter para el atributo organizacion
    public void setOrganizacion(Organizacion organizacion) {
        this.organizacion = organizacion;
    }
}
