package com.lucas.guesstheskin.controller;

import com.lucas.guesstheskin.entity.Skin;
import com.lucas.guesstheskin.entity.SkinGuess;
import com.lucas.guesstheskin.service.ISkinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping(value = "/skin")
@CrossOrigin(origins = "http://localhost:4200/")
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

    @GetMapping(value = "/daily")
    public ResponseEntity<HashMap<String, String>> getDaily(){
        HashMap<String, String> image = new HashMap<>();
        image.put("image", ((Skin) service.getStartupData("skin")).getImage());
        return ResponseEntity.ok(image);
    }

    @GetMapping(value = "/nameList")
    public ResponseEntity<List<String>> getNameList(){
        List<String> list = (List<String>) service.getStartupData("nameList");
        return ResponseEntity.ok(list);
    }

    @PostMapping(value = "/guess")
    public ResponseEntity<SkinGuess> guess(@RequestBody Skin skin){
        SkinGuess guess = service.getGuess(skin.getId());
        return ResponseEntity.ok(guess);
    }
}
