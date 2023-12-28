package com.lucas.guesstheskin.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Objects;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "skin")
public class Skin implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String weapon;
    private Integer yearOfRelease;
    private String container;
    private String rarity;
    private String modifier;
    private boolean skinCollection;

    private String image;

    public SkinGuess compareGuess(Skin guess){
        SkinGuess comparison = new SkinGuess();
        comparison.setSkinName(guess.getName());
        comparison.setSkinImage(guess.getImage());

        comparison.setSameWeapon(Objects.equals(this.weapon, guess.getWeapon()));
        comparison.setYearsDiff(this.yearOfRelease - guess.getYearOfRelease());

        //TODO MANDAR UM HASHMAP COM A COMPARACAO E O NOME DO GUESSED
        comparison.setSameContainer(Objects.equals(this.container, guess.getContainer()));
        comparison.setSameRarity(Objects.equals(this.rarity, guess.getRarity()));
        comparison.setSameModifier(Objects.equals(this.modifier, guess.getModifier()));

        comparison.setSkinCollection(Objects.equals(this.skinCollection, guess.isSkinCollection()));

        return comparison;
    }
}
