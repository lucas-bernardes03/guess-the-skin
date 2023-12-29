package com.lucas.guesstheskin.service;

import com.lucas.guesstheskin.entity.Skin;
import com.lucas.guesstheskin.entity.SkinGuess;

import java.util.HashMap;
import java.util.List;

public interface ISkinService {
    List<Skin> findAll();
    Skin getRandomSkin();
    Object getStartupData(String param);
    SkinGuess getGuess(Long id);
}
