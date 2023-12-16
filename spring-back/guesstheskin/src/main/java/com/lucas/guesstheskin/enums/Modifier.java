package com.lucas.guesstheskin.enums;

import lombok.Getter;

@Getter
public enum Modifier {
    NONE("None"),
    STATTRAK("StatTrak"),
    SOUVENIR("Souvenir");

    private final String description;

    Modifier(String description){
        this.description = description;
    }

}
