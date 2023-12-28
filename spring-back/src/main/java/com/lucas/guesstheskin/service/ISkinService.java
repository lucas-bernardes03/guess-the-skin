package com.lucas.guesstheskin.service;

import com.lucas.guesstheskin.entity.Skin;
import com.lucas.guesstheskin.entity.SkinGuess;

import java.util.List;

public interface ISkinService {
    List<Skin> findAll();
    Skin getRandomSkin();
    Skin getDailySkin();
    SkinGuess getGuess(Long id);
}
