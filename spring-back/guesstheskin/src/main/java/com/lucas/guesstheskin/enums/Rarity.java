package com.lucas.guesstheskin.enums;

import lombok.Getter;

@Getter
public enum Rarity {
    BLUE("Mil-Spec"),
    PURPLE("Restricted"),
    PINK("Classified"),
    RED("Covert"),
    ORANGE("Contraband");

    private final String fullName;

    Rarity(String fullName){
        this.fullName = fullName;
    }

}
