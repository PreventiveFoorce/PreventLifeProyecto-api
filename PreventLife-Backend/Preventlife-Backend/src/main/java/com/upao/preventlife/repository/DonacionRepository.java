package com.upao.preventlife.repository;

import com.upao.preventlife.domain.Donacion;
import com.upao.preventlife.domain.Organizacion;
import com.upao.preventlife.domain.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DonacionRepository extends JpaRepository<Donacion, Integer> {
    @Query("SELECT p FROM Donacion p WHERE p.usuario=:usuario")
    List<Donacion> listarDonacionesPorIdUsuario(@Param("usuario") Usuario usuario);

    @Query("SELECT p FROM Donacion p WHERE p.organizacion=:organizacion")
    List<Donacion> listarDonacionesPorIdOrganizacion(@Param("organizacion") Organizacion organizacion);
}
