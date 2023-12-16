package com.lucas.guesstheskin.service;

import com.lucas.guesstheskin.entity.Skin;

import java.util.List;

public interface ISkinService {
    List<Skin> findAll();
    Skin getRandomSkin();
}
