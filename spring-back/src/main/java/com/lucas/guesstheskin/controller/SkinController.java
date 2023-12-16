package com.lucas.guesstheskin.controller;

import com.lucas.guesstheskin.entity.Skin;
import com.lucas.guesstheskin.service.ISkinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/skin")
public class SkinController {

    @Autowired
    private ISkinService service;

    @GetMapping(value = "/all")
    public ResponseEntity<List<Skin>> findAll(){
        List<Skin> skins = service.findAll();
        return ResponseEntity.ok(skins);
    }

    @GetMapping()
    public ResponseEntity<Skin> getRandom(){
        Skin s = service.getRandomSkin();
        return ResponseEntity.ok(s);
    }
}
