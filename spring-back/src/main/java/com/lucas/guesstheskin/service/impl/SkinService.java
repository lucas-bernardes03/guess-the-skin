package com.lucas.guesstheskin.service.impl;

import com.lucas.guesstheskin.entity.Skin;
import com.lucas.guesstheskin.repository.ISkinRepository;
import com.lucas.guesstheskin.service.ISkinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SkinService implements ISkinService {

    @Autowired
    private ISkinRepository repository;

    public List<Skin> findAll() {
        return repository.findAll();
    }

    public Skin getRandomSkin() {
        return repository.findRandomSkin();
    }
}
