package com.lucas.guesstheskin.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SkinGuess implements Serializable {
    private String skinName;
    private String skinImage;

    private boolean sameWeapon;
    private Integer yearsDiff;
    private boolean sameContainer;
    private boolean sameRarity;
    private boolean sameModifier;
    private boolean skinCollection;
}
