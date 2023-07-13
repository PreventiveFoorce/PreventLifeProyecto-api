package com.upao.preventlife.service;
import com.upao.preventlife.domain.Donacion;
import com.upao.preventlife.domain.Organizacion;
import com.upao.preventlife.domain.Usuario;
import java.util.List;

public interface DonacionService {
    Donacion registrarDonacion(Donacion donacion);
    Donacion modificarDonacion(Donacion donacion);
    void donaraOrganizacion (Usuario e, Organizacion r, Float montoD);
    void eliminarDonacion(Integer idDonacion);
    Donacion obtenerDonacionPorIdDonacion(Integer idDonacion);
    List<Donacion> listarDonaciones();
    List<Donacion> listarDonacionesPorIdUsuario(Usuario usuario);

    List<Donacion> listarDonacionesPorIdOrganizacion(Organizacion organizacion);
}
