package com.lucas.guesstheskin.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.HashMap;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SkinGuess implements Serializable {
    private String skinName;
    private String skinImage;
    private HashMap<String, Object> sameWeapon;
    private HashMap<String, Object> yearsDiff;
    private HashMap<String, Object> sameContainer;
    private HashMap<String, Object> sameRarity;
    private HashMap<String, Object> sameModifier;
    private HashMap<String, Object> skinCollection;
}
