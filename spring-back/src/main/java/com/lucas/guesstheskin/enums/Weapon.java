package com.lucas.guesstheskin.enums;

import lombok.Getter;

@Getter
public enum Weapon {
    USP("USP-S"),
    AK47("AK-47"),
    M4A1("M4A1-S"),
    DEAGLE("Desert Eagle"),
    AWP("AWP");

    private final String fullName;

    Weapon(String fullName){
        this.fullName = fullName;
    }

}
