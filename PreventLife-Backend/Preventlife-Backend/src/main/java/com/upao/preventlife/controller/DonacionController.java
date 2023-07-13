package com.upao.preventlife.controller;

import com.upao.preventlife.WrapperResponse;
import com.upao.preventlife.domain.Donacion;
import com.upao.preventlife.domain.Organizacion;
import com.upao.preventlife.domain.Usuario;
import com.upao.preventlife.repository.OrganizacionRepository;
import com.upao.preventlife.repository.UsuarioRepository;
import com.upao.preventlife.service.DonacionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.stream.Collectors;
import java.util.List;

@RestController
@RequestMapping("/donaciones")
public class DonacionController {
    private final DonacionService donacionService;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private OrganizacionRepository organizacionRepository;

    public DonacionController(DonacionService donacionService) {
        this.donacionService = donacionService;
    }

    @PostMapping
    public ResponseEntity<WrapperResponse<Donacion>> registrarDonacion(@RequestBody Donacion donacion){
        Donacion donacionN = donacionService.registrarDonacion(donacion);
        Usuario usuarioE = donacionN.getUsuario();
        Integer id_u1 = usuarioE.getIdUsuario();
        Usuario u1 = usuarioRepository.findById(id_u1).get();
        Organizacion usuarioR = donacionN.getOrganizacion();
        Integer id_u2 = usuarioR.getIdOrganizacion();
        Organizacion u2 = organizacionRepository.findById(id_u2).get();
        Float monto=donacionN.getMontoDonar();
        donacionService.donaraOrganizacion(u1, u2, monto);
        usuarioRepository.save(u1);
        organizacionRepository.save(u2);
        return new WrapperResponse<>(true, "success", donacionN).createResponse();
    }

    @PutMapping
    public ResponseEntity<WrapperResponse<Donacion>> modificarDonacion(@RequestBody Donacion donacion) {
        Donacion donacionUpdate = donacionService.modificarDonacion(donacion);
        return new WrapperResponse<>(true, "success", donacion).createResponse();
    }

    @DeleteMapping("/{idDonacion}")
    public ResponseEntity<WrapperResponse<Void>> eliminarDonacion(@PathVariable("idDonacion") Integer idDonacion) {
        donacionService.eliminarDonacion(idDonacion);
        return new WrapperResponse<Void>(true, "success", null).createResponse(HttpStatus.NO_CONTENT);
    }

    @GetMapping
    public ResponseEntity<WrapperResponse<List<Donacion>>> listarDonaciones() {
        List<Donacion> donacions = donacionService.listarDonaciones();
        return new WrapperResponse<>(true, "success",donacions).createResponse();
    }


    @GetMapping("/{idDonacion}")
    public ResponseEntity<WrapperResponse<Donacion>> obtenerDonacionPorIdDonacion(@PathVariable("idDonacion") Integer idDonacion) {
        Donacion donacion = donacionService.obtenerDonacionPorIdDonacion(idDonacion);
        return new WrapperResponse<>(true, "success", donacion).createResponse();
    }

    @GetMapping("/listarDonacionesPorIdUsuario")
    public ResponseEntity<WrapperResponse<List<Donacion>>> listarDonacionesPorIdUsuario(@RequestParam Usuario usuario) {
        List<Donacion> usuarioid = donacionService.listarDonacionesPorIdUsuario(usuario);
        List<Donacion> collect1 = usuarioid.stream()
                .filter(donacion -> donacion.getMontoDonar() > 0)
                .collect(Collectors.toList());
        return new WrapperResponse<>(true, "success", collect1).createResponse();
    }

    @GetMapping("/listarDonacionesPorIdOrganizacion")
    public ResponseEntity<WrapperResponse<List<Donacion>>> listarDonacionesPorIdOrganizacion(@RequestParam Organizacion organizacion) {
        List<Donacion> organizacionid = donacionService.listarDonacionesPorIdOrganizacion(organizacion);
        return new WrapperResponse<>(true, "success", organizacionid).createResponse();
    }
}
