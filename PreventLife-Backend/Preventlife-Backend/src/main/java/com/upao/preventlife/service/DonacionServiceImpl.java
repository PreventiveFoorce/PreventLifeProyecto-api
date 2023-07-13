package com.upao.preventlife.service;
import com.upao.preventlife.domain.Donacion;
import com.upao.preventlife.domain.Organizacion;
import com.upao.preventlife.domain.Usuario;
import com.upao.preventlife.repository.DonacionRepository;
import com.upao.preventlife.repository.UsuarioRepository;
import com.upao.preventlife.validators.DonacionValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class DonacionServiceImpl implements DonacionService {

    private final DonacionRepository donacionRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    public DonacionServiceImpl(DonacionRepository donacionRepository){
        this.donacionRepository=donacionRepository;
    }

    @Transactional
    @Override
    public Donacion registrarDonacion(Donacion donacion) {
        DonacionValidator.validate(donacion);
        return donacionRepository.save(donacion);
    }

    @Override
    public Donacion modificarDonacion(Donacion donacion) {
        DonacionValidator.validate(donacion);
        return donacionRepository.save(donacion);
    }

    @Override
    public void eliminarDonacion(Integer idDonacion) {
        donacionRepository.deleteById(idDonacion);
    }

    @Override
    public Donacion obtenerDonacionPorIdDonacion(Integer idDonacion) {
        return donacionRepository.findById(idDonacion).orElse(new Donacion());
    }

    @Override
    public void donaraOrganizacion (Usuario e, Organizacion r, Float montoD) {
        float saldo_r=r.getSaldoRecaudado();
        float saldo_rf=saldo_r+montoD;
        r.setSaldoRecaudado(saldo_rf);
    }

    @Override
    public List<Donacion> listarDonaciones() {
        return donacionRepository.findAll();
    }

    @Override
    public List<Donacion> listarDonacionesPorIdUsuario(Usuario usuario) {
        List<Donacion> usuarioId = donacionRepository.listarDonacionesPorIdUsuario(usuario);
        return usuarioId;
    }

    @Override
    public List<Donacion> listarDonacionesPorIdOrganizacion(Organizacion organizacion) {
        List<Donacion> organizacionid = donacionRepository.listarDonacionesPorIdOrganizacion(organizacion);
        return organizacionid;
    }

}

