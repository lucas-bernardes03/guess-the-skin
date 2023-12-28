package com.lucas.guesstheskin.service.impl;

import com.lucas.guesstheskin.entity.Skin;
import com.lucas.guesstheskin.entity.SkinGuess;
import com.lucas.guesstheskin.repository.ISkinRepository;
import com.lucas.guesstheskin.service.ISkinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SkinService implements ISkinService {

    @Autowired
    private ISkinRepository repository;

    private Skin dailySkin;

    public List<Skin> findAll() {
        return repository.findAll();
    }

    public Skin getRandomSkin() {
        return repository.findRandomSkin();
    }

    public Skin getDailySkin(){
        if(dailySkin == null) this.dailySkin = getRandomSkin();
        return this.dailySkin;
    }

    public SkinGuess getGuess(Long id){
        Skin skinGuessed = repository.findById(id).get();
        return this.dailySkin.compareGuess(skinGuessed);
    }
}
